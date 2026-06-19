"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full border border-graphite-300 bg-white px-4 py-3 text-graphite-900 rounded-sm placeholder:text-graphite-400 focus:border-graphite-900 focus:outline-none focus-visible:outline-2 focus-visible:outline-copper-600";

const labelClass = "mb-1.5 block text-sm font-medium text-graphite-800";

export function ContactForm({ defaultAudience = "privat" }: { defaultAudience?: "privat" | "bedrift" }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? "Noe gikk galt.");
      }
      setStatus("success");
      event.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Vi klarte ikke å sende meldingen. Prøv igjen, eller ring oss.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border border-copper-500/50 bg-copper-50 p-7 rounded-sm"
      >
        <h3 className="text-lg font-semibold text-graphite-900">Takk for henvendelsen</h3>
        <p className="mt-2 text-graphite-700">
          Vi har mottatt meldingen din og tar kontakt så snart vi kan med en ærlig
          vurdering av hvordan vi kan hjelpe.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <fieldset className="flex flex-col gap-2">
        <legend className={labelClass}>Jeg henvender meg som</legend>
        <div className="grid grid-cols-2 gap-3">
          {(["privat", "bedrift"] as const).map((value) => (
            <label
              key={value}
              className="flex cursor-pointer items-center gap-2 border border-graphite-300 px-4 py-3 rounded-sm has-[:checked]:border-graphite-900 has-[:checked]:bg-graphite-50"
            >
              <input
                type="radio"
                name="audience"
                value={value}
                defaultChecked={value === defaultAudience}
                className="accent-copper-600"
              />
              <span className="text-sm font-medium capitalize">
                {value === "privat" ? "Privatperson" : "Bedrift"}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Navn
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Telefon
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          E-post
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Beskriv situasjonen kort
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={cn(fieldClass, "resize-y")}
          placeholder="Hva gjelder saken? Jo mer du forteller, jo bedre kan vi vurdere hvordan vi kan hjelpe."
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-graphite-600">
        <input type="checkbox" name="consent" required className="mt-1 accent-copper-600" />
        <span>
          Jeg samtykker til at Byggeledelse Norge kan lagre opplysningene mine for å
          svare på henvendelsen.
        </span>
      </label>

      {status === "error" && (
        <p role="alert" className="text-sm text-copper-700">
          {errorMsg}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" variant="accent" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? "Sender …" : "Send henvendelse"}
        </Button>
        <p className="text-sm text-graphite-500">Vi svarer så raskt vi kan.</p>
      </div>
    </form>
  );
}
