import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  audience?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  consent?: string;
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Ugyldig forespørsel." }, { status: 400 });
  }

  const name = data.name?.trim() ?? "";
  const email = data.email?.trim() ?? "";
  const phone = data.phone?.trim() ?? "";
  const message = data.message?.trim() ?? "";
  const audience = data.audience === "bedrift" ? "Bedrift" : "Privatperson";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Fyll inn navn, e-post og en kort beskrivelse." },
      { status: 400 },
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Skriv inn en gyldig e-postadresse." },
      { status: 400 },
    );
  }

  const subject = `Ny henvendelse (${audience}) – ${name}`;
  const lines = [
    `Type: ${audience}`,
    `Navn: ${name}`,
    `E-post: ${email}`,
    `Telefon: ${phone || "—"}`,
    "",
    "Melding:",
    message,
  ];
  const html = `
    <h2>Ny henvendelse fra nettsiden</h2>
    <p><strong>Type:</strong> ${escapeHtml(audience)}</p>
    <p><strong>Navn:</strong> ${escapeHtml(name)}</p>
    <p><strong>E-post:</strong> ${escapeHtml(email)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(phone) || "—"}</p>
    <p><strong>Melding:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  // I utvikling / for konfigurasjon er satt opp: ikke feil, men logg pa server.
  if (!apiKey || !to || !from) {
    console.warn(
      "[kontakt] Resend er ikke konfigurert (RESEND_API_KEY/CONTACT_TO_EMAIL/CONTACT_FROM_EMAIL mangler). Henvendelse mottatt:\n" +
        lines.join("\n"),
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      text: lines.join("\n"),
      html,
    });
    if (error) {
      console.error("[kontakt] Resend-feil:", error);
      return NextResponse.json(
        { error: "Vi klarte ikke å sende meldingen akkurat nå. Prøv igjen, eller ring oss." },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[kontakt] Uventet feil:", err);
    return NextResponse.json(
      { error: "Noe gikk galt. Prøv igjen, eller ta kontakt på telefon." },
      { status: 500 },
    );
  }
}
