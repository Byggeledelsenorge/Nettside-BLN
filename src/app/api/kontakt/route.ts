import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  audience?: string;
  service?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  consent?: string;
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

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
  const service = data.service?.trim() ?? "";
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

  const subject = service
    ? `Ny henvendelse (${audience}) – ${service} – ${name}`
    : `Ny henvendelse (${audience}) – ${name}`;
  const lines = [
    `Type: ${audience}`,
    `Tjeneste: ${service || "—"}`,
    `Navn: ${name}`,
    `E-post: ${email}`,
    `Telefon: ${phone || "—"}`,
    "",
    "Melding:",
    message,
  ];

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  // Uten konfigurert nøkkel: ikke feil, men logg på server (som i utvikling).
  if (!accessKey) {
    console.warn(
      "[kontakt] Web3Forms er ikke konfigurert (WEB3FORMS_ACCESS_KEY mangler). Henvendelse mottatt:\n" +
        lines.join("\n"),
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject,
        from_name: "Byggeledelse Norge – nettside",
        replyto: email,
        Type: audience,
        Tjeneste: service || "—",
        Navn: name,
        "E-post": email,
        Telefon: phone || "—",
        Melding: message,
      }),
    });

    const raw = await res.text();
    let json: { success?: boolean; message?: string } = {};
    try {
      json = JSON.parse(raw) as { success?: boolean; message?: string };
    } catch {
      // Web3Forms svarte ikke med JSON – behold rå tekst for logging.
    }
    if (!res.ok || !json.success) {
      console.error(
        `[kontakt] Web3Forms-feil (status ${res.status}): ${raw.slice(0, 500)}`,
      );
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
