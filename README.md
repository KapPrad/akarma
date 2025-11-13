## Akarma Website

Production-ready marketing site for Akarma built with Next.js 14 (App Router), Tailwind CSS, and Sanity CMS. It ships with Calendly embeds, Mailchimp newsletter, GA4 helper endpoint, and a contact form that emails via Nodemailer with an optional webhook to Google Sheets/Apps Script.

### Tech stack

- Next.js 14 (app directory, JavaScript)
- Tailwind CSS with custom "Sattva Light" theme
- Sanity v3 Studio mounted at `/admin` via `next-sanity`
- Nodemailer for contact form emails
- Mailchimp form + Calendly embed + GA4 Measurement Protocol helper

---

## Getting started

```bash
npm install
npm run dev
# open http://localhost:3000
```

### Environment variables

Copy `.env.example` to `.env.local` and fill in the values:

- `NEXT_PUBLIC_GA_ID` + `GA_MEASUREMENT_API_SECRET` for analytics
- `NEXT_PUBLIC_SANITY_*` / `SANITY_*` for Sanity client + studio
- `NEXT_PUBLIC_CALENDLY_URL` for the Calendly iFrame
- `NEXT_PUBLIC_MAILCHIMP_ACTION` for newsletter form POST URL
- `SMTP_*`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL` for Nodemailer
- `WEBHOOK_URL` (optional) to forward contact submissions to Google Sheets/Apps Script/Make

### Sanity Studio

1. Install the Sanity CLI if you haven't: `npm install -g sanity`
2. Create `/sanity` dataset if needed:
   ```bash
   sanity init --project <project-id> --dataset production
   ```
3. Run the embedded Studio inside Next.js (recommended):
   ```bash
   npm run dev
   # visit http://localhost:3000/admin
   ```
   or run a dedicated studio server with `npx sanity dev --host 3333`.

### Seeding example content

Use the helper script to push sample docs (requires a Sanity token with write access):

```bash
SANITY_PROJECT_ID=<id> SANITY_DATASET=production SANITY_TOKEN=<token> node sanity/seedData.js
```

This populates site settings, programs, sample events, teachers, and testimonials - mirroring the placeholders used in the UI fallbacks.

---

## Project structure

- `app/` - Next.js App Router pages, API routes, and Sanity Studio mount
- `components/` - UI primitives (Hero, Header, ProgramCard, EventCard, ContactForm, etc.)
- `lib/` - Sanity client/config, GROQ queries, demo content, Nodemailer helper
- `sanity/` - Schema definitions + desk structure + seed helpers
- `styles/theme.css` - CSS variables for the palette
- `public/images` - Placeholder SVG textures

---

## Available scripts

| Script          | Description                            |
| --------------- | -------------------------------------- |
| `npm run dev`   | Start Next.js + embedded Studio        |
| `npm run build` | Create production build for Vercel     |
| `npm run start` | Run the production server locally      |
| `npm run lint`  | ESLint (Next.js config)                |

---

## Deployment (Vercel)

1. Push the repo to GitHub and import it into Vercel.
2. In Vercel project settings -> Environment Variables, add everything from `.env.example` (GA, Calendly, Mailchimp, SMTP, Sanity, webhook).
3. In Sanity project settings, add your Vercel domains to the CORS + allowed origins list.
4. Deploy. The Studio remains accessible at `/admin` on the production domain.
5. Point your custom domain to Vercel and publish updated Sanity content as needed.

### Post-deploy checklist

- Verify GA4 events by hitting the `/api/track` endpoint or watching real-time reports.
- Send a test contact form submission to confirm email + webhook delivery.
- Update Mailchimp action URL, Calendly link, and add real imagery/content via Sanity Studio.
