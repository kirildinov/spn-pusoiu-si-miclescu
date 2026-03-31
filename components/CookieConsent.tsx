"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CONSENT_KEY = "spn_pusoiu_consent";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(Object.fromEntries(args.map((a, i) => [i, a])));
}

function grantConsent() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "consent_update",
    analytics_storage: "granted",
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  });
}

function denyConsent() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "consent_update",
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "granted") {
      grantConsent();
    } else if (stored === "denied") {
      // Stay hidden, consent already denied
    } else {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "granted");
    grantConsent();
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, "denied");
    denyConsent();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-secondary p-4 md:p-6">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-secondary-foreground text-sm flex-1">
          Folosim cookie-uri pentru a analiza traficul site-ului.{" "}
          <Link
            href="/politica-confidentialitate"
            className="underline underline-offset-2 hover:text-primary transition-colors"
          >
            Politica de confidențialitate
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={handleReject}
            className="btn-hero-secondary"
          >
            Refuz
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="btn-primary"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
