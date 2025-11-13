import { NextResponse } from "next/server";
import crypto from "crypto";

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const gaSecret = process.env.GA_MEASUREMENT_API_SECRET;

export async function POST(request) {
  if (!gaId || !gaSecret) {
    return NextResponse.json(
      { ok: false, error: "Analytics environment variables are missing." },
      { status: 400 },
    );
  }

  const data = await request.json().catch(() => null);

  if (!data?.events?.length) {
    return NextResponse.json(
      { ok: false, error: "No analytics events supplied." },
      { status: 400 },
    );
  }

  const payload = {
    client_id: data.clientId || crypto.randomUUID(),
    events: data.events,
  };

  const response = await fetch(
    `https://www.google-analytics.com/mp/collect?measurement_id=${gaId}&api_secret=${gaSecret}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    },
  );

  if (!response.ok) {
    const errorBody = await response.text();
    return NextResponse.json(
      { ok: false, error: "Failed to forward analytics event.", details: errorBody },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
