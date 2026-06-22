import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, company, email, phone, sector, scope, message } =
    await request.json();

  const { error } = await resend.emails.send({
    from: "HMQ Website <noreply@hmqgroup.co.za>",
    to: "info@hmqgroup.co.za",
    replyTo: email,
    subject: `New Enquiry — ${company || name}`,
    text: [
      `Name: ${name}`,
      `Company: ${company || "—"}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Sector: ${sector || "—"}`,
      `Scope: ${scope || "—"}`,
      ``,
      message,
    ].join("\n"),
  });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ ok: true });
}
