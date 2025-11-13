"use client";

import { useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import Alert from "./Alert";

const interestOptions = [
  "Publishing",
  "Meditation & Yoga",
  "Counseling",
  "Seminars & Retreats",
  "General",
];

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      interest: formData.get("interest"),
      message: formData.get("message"),
    };

    setStatus({ type: "info", message: "Sending your note..." });

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      setStatus({ type: "success", message: "Thank you! We'll be in touch shortly." });
      event.currentTarget.reset();
    } else {
      const error = await response.json().catch(() => ({}));
      setStatus({
        type: "error",
        message:
          error?.errors?.form ||
          "We could not send your message. Please verify the fields and try again.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status ? <Alert variant={status.type}>{status.message}</Alert> : null}
      <Input label="Name" name="name" id="contact-name" required />
      <Input label="Email" name="email" id="contact-email" type="email" required />
      <Input label="Phone" name="phone" id="contact-phone" type="tel" placeholder="Optional" />
      <label className="block text-sm font-medium text-[var(--ink)]">
        <span className="mb-2 block">Interest</span>
        <select
          name="interest"
          className="w-full rounded-2xl border border-[var(--border-subtle)] bg-white px-4 py-3 text-[var(--ink)] focus:border-[var(--accent)] focus:outline-none"
          defaultValue="General"
        >
          {interestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <Textarea label="Message" name="message" id="contact-message" rows={6} required />
      <Button type="submit">Send message</Button>
    </form>
  );
}
