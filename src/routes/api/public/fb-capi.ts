import { createFileRoute } from "@tanstack/react-router";
import { createHash } from "crypto";

const GRAPH_VERSION = "v19.0";

function sha256(value: string) {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

export const Route = createFileRoute("/api/public/fb-capi")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const pixelId = process.env.FB_PIXEL_ID || "2163315817570136";
          const accessToken =
            process.env.FB_CAPI_ACCESS_TOKEN ||
            "EAAMRzy5OuOsBR0t2fIwZALODzF8WccXTfHI4oDCXKNWEUBKbIpojONvP2xn3Kuj7VwtRcuP3zFtpkRj4gz6EMryCqRdzZAFfOWEuG1sTsY2b8Rcw9TKUxSIPrzmX1RHvGdEfRG73nVTk2xoQwZBESCKHCD2Herd8ZC0wwNE8bXnHXZAZCuZBxPtwrFKcutvAAZDZD";
          if (!pixelId || !accessToken) {
            return new Response(JSON.stringify({ error: "missing_config" }), {
              status: 500,
              headers: { "content-type": "application/json" },
            });
          }

          const body = (await request.json()) as {
            event_name?: string;
            event_id?: string;
            event_source_url?: string;
            fbp?: string;
            fbc?: string;
            user_agent?: string;
            email?: string;
            phone?: string;
            test_event_code?: string;
          };

          const ip =
            request.headers.get("cf-connecting-ip") ??
            request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
            undefined;
          const ua = body.user_agent ?? request.headers.get("user-agent") ?? undefined;

          const user_data: Record<string, unknown> = {};
          if (ip) user_data.client_ip_address = ip;
          if (ua) user_data.client_user_agent = ua;
          if (body.fbp) user_data.fbp = body.fbp;
          if (body.fbc) user_data.fbc = body.fbc;
          if (body.email) user_data.em = [sha256(body.email)];
          if (body.phone) user_data.ph = [sha256(body.phone.replace(/\D/g, ""))];

          const payload: Record<string, unknown> = {
            data: [
              {
                event_name: body.event_name ?? "PageView",
                event_time: Math.floor(Date.now() / 1000),
                event_id: body.event_id,
                event_source_url: body.event_source_url,
                action_source: "website",
                user_data,
              },
            ],
          };
          if (body.test_event_code) payload.test_event_code = body.test_event_code;

          const res = await fetch(
            `https://graph.facebook.com/${GRAPH_VERSION}/${pixelId}/events?access_token=${encodeURIComponent(accessToken)}`,
            {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(payload),
            },
          );

          const text = await res.text();
          return new Response(text, {
            status: res.status,
            headers: { "content-type": "application/json" },
          });
        } catch (err) {
          return new Response(
            JSON.stringify({ error: "capi_error", message: (err as Error).message }),
            { status: 500, headers: { "content-type": "application/json" } },
          );
        }
      },
    },
  },
});
