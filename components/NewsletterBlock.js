const mailchimpAction =
  process.env.NEXT_PUBLIC_MAILCHIMP_ACTION ||
  "https://example.us1.list-manage.com/subscribe/post?u=demo&id=demo";

export default function NewsletterBlock() {
  return (
    <div className="rounded-3xl border border-[var(--border-subtle)] bg-white/90 p-8 shadow-soft">
      <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
        Newsletter
      </p>
      <h3 className="mt-3 font-display text-3xl font-semibold text-[var(--ink)]">
        Receive practices, playlists, and event invitations.
      </h3>
      <p className="mt-3 text-[var(--muted)]">
        We send one lovingly curated note each month. No noise, only nourishment.
      </p>
      <form
        action={mailchimpAction}
        method="post"
        target="_blank"
        rel="noreferrer"
        className="mt-6 flex flex-col gap-4 sm:flex-row"
      >
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="EMAIL"
          type="email"
          placeholder="you@email.com"
          required
          className="w-full rounded-2xl border border-[var(--border-subtle)] bg-white px-4 py-3 text-[var(--ink)] focus:border-[var(--accent)] focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-2xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:scale-[1.02]"
        >
          Join the circle
        </button>
      </form>
    </div>
  );
}
