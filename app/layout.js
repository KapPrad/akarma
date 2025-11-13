import "./globals.css";

import { Suspense } from "react";
import { Playfair_Display, Work_Sans } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnalyticsTracker from "@/components/AnalyticsTracker";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata = {
  title: "Akarma | Cultivate clarity, compassion, and balance",
  description:
    "Akarma offers publishing mentorship, meditation and yoga, holistic counseling, and restorative seminars that blend wisdom traditions with modern care.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {gaId ? (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        ) : null}
      </head>
      <body
        className={`${playfair.variable} ${workSans.variable} bg-[var(--bg)] text-[var(--ink)] font-body`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        {gaId ? (
          <Suspense fallback={null}>
            <AnalyticsTracker gaId={gaId} />
          </Suspense>
        ) : null}
      </body>
    </html>
  );
}
