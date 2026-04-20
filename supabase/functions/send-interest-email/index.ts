import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};

type InterestPayload = {
  requester_email?: string;
  requester_type?: string;
  target_type?: string;
  target_title?: string;
  target_area?: string;
  target_email?: string | null;
  target_phone?: string | null;
  target_price?: number | null;
};

function buildEmailHtml(payload: InterestPayload) {
  const rentLine =
    typeof payload.target_price === "number" && payload.target_price > 0
      ? `<p><strong>Rent / budget:</strong> ₹${payload.target_price.toLocaleString("en-IN")}</p>`
      : "";

  const phoneLine = payload.target_phone
    ? `<p><strong>Phone:</strong> ${payload.target_phone}</p>`
    : "";

  const emailLine = payload.target_email
    ? `<p><strong>Email:</strong> ${payload.target_email}</p>`
    : "";

  return `
    <div style="font-family: Arial, sans-serif; color: #101828;">
      <h2>Someone you liked on Delhi Rent</h2>
      <p>Here are the contact details you asked for.</p>
      <p><strong>Type:</strong> ${payload.target_type}</p>
      <p><strong>Title:</strong> ${payload.target_title || "Delhi Rent entry"}</p>
      <p><strong>Area:</strong> ${payload.target_area || "Delhi NCR"}</p>
      ${rentLine}
      ${emailLine}
      ${phoneLine}
      <p style="margin-top: 20px;">Connect directly and take it forward personally.</p>
    </div>
  `;
}

serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const resendKey = Deno.env.get("RESEND_API_KEY");
    const fromEmail = Deno.env.get("INTEREST_FROM_EMAIL") || "Delhi Rent <noreply@delhirent.in>";
    const payload = (await request.json()) as InterestPayload;

    if (!payload.requester_email) {
      return new Response(
        JSON.stringify({ error: "Missing requester_email" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        }
      );
    }

    if (!payload.target_email && !payload.target_phone) {
      return new Response(
        JSON.stringify({ error: "No target contact details available" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        }
      );
    }

    if (!resendKey) {
      return new Response(
        JSON.stringify({
          ok: false,
          message: "Set RESEND_API_KEY to enable email sending."
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        }
      );
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [payload.requester_email],
        subject: `${payload.target_title || "Delhi Rent contact"} on Delhi Rent`,
        html: buildEmailHtml(payload)
      })
    });

    const resendJson = await resendResponse.json();

    if (!resendResponse.ok) {
      return new Response(JSON.stringify({ error: resendJson }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({ ok: true, resend: resendJson }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );
  }
});
