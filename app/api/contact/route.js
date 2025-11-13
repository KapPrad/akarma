import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mail";

export async function POST(request) {
  const data = await request.json().catch(() => null);

  if (!data) {
    return NextResponse.json(
      { ok: false, errors: { form: "Invalid JSON payload." } },
      { status: 400 },
    );
  }

  const errors = {};

  if (!data.name?.trim()) {
    errors.name = "Please share your name.";
  }
  if (!data.email?.trim()) {
    errors.email = "An email address helps us respond.";
  }
  if (!data.message?.trim()) {
    errors.message = "Tell us a little about what you need.";
  }

  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  try {
    await sendContactEmail(data);
  } catch (error) {
    console.error("Mail error", error);
    return NextResponse.json(
      { ok: false, errors: { form: "We could not send your message. Please try again." } },
      { status: 500 },
    );
  }

  if (process.env.WEBHOOK_URL) {
    try {
      await fetch(process.env.WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.warn("Webhook error", error);
    }
  }

  return NextResponse.json({ ok: true });
}
