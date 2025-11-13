"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Button from "./Button";
import Container from "./Container";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs", hasChildren: true },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

const programLinks = [
  { label: "Publishing Mentorship", href: "/programs/publishing" },
  { label: "Meditation & Yoga", href: "/programs/meditation-yoga" },
  { label: "Holistic Counseling", href: "/programs/holistic-counseling" },
  { label: "Seminars & Retreats", href: "/programs/seminars-retreats" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isProgramsOpen, setProgramsOpen] = useState(false);

  const toggleMobile = () => setIsMobileOpen((prev) => !prev);

  const renderNavLink = (item) => {
    if (item.hasChildren) {
      return (
        <div
          className="relative"
          onMouseEnter={() => setProgramsOpen(true)}
          onMouseLeave={() => setProgramsOpen(false)}
        >
          <button
            type="button"
            className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-[var(--ink)] hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            onClick={() => setProgramsOpen((prev) => !prev)}
          >
            Programs
            <span className="text-xs" aria-hidden>
              v
            </span>
          </button>
          {isProgramsOpen ? (
            <div className="absolute left-0 top-10 z-20 w-60 rounded-2xl border border-[var(--border-subtle)] bg-white p-3 shadow-soft">
              {programLinks.map((program) => (
                <Link
                  key={program.href}
                  href={program.href}
                  className="block rounded-xl px-3 py-2 text-sm text-[var(--ink)] hover:bg-[var(--bg)]"
                  onClick={() => {
                    setProgramsOpen(false);
                    setIsMobileOpen(false);
                  }}
                >
                  {program.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      );
    }

    return (
      <Link
        key={item.href}
        href={item.href}
        className={clsx(
          "rounded-full px-3 py-2 text-sm font-medium transition-colors",
          pathname === item.href
            ? "text-[var(--accent)]"
            : "text-[var(--ink)] hover:text-[var(--accent)]",
        )}
        onClick={() => setIsMobileOpen(false)}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border-subtle)] bg-[var(--bg)]/95 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="font-display text-2xl font-semibold text-[var(--ink)]"
        >
          Akarma
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <div key={item.label}>{renderNavLink(item)}</div>
          ))}
          <Button as="link" href="/#book" className="ml-3">
            Book a Session
          </Button>
        </nav>
        <button
          type="button"
          className="md:hidden"
          onClick={toggleMobile}
          aria-label="Toggle navigation"
        >
          <span className="text-sm font-semibold uppercase tracking-wide text-[var(--ink)]">
            {isMobileOpen ? "Close" : "Menu"}
          </span>
        </button>
      </Container>
      {isMobileOpen ? (
        <div className="border-t border-[var(--border-subtle)] bg-[var(--bg)] md:hidden">
          <div className="space-y-2 px-6 py-4">
            {navItems.map((item) => {
              if (item.hasChildren) {
                return (
                  <details key={item.label} className="rounded-xl bg-white p-3">
                    <summary className="cursor-pointer text-sm font-semibold text-[var(--ink)]">
                      Programs
                    </summary>
                    <div className="mt-2 space-y-2">
                      {programLinks.map((program) => (
                        <Link
                          key={program.href}
                          href={program.href}
                          className="block rounded-lg px-3 py-2 text-sm text-[var(--ink)] hover:bg-[var(--bg)]"
                          onClick={() => setIsMobileOpen(false)}
                        >
                          {program.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-[var(--ink)] hover:bg-white"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button as="link" href="/#book" className="w-full justify-center">
              Book a Session
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
