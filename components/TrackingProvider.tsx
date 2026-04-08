"use client";

import { useEffect } from "react";
import { track } from "@/lib/tracking";

function getClickLabel(el: HTMLElement): string {
  return (
    el.textContent?.trim().slice(0, 50) ||
    el.getAttribute("aria-label") ||
    "unknown"
  );
}

export default function TrackingProvider() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";

      // Phone clicks
      if (href.startsWith("tel:")) {
        track({
          event: "cta_click",
          event_category: "phone",
          event_label: href.replace("tel:", ""),
        });
        return;
      }

      // Email clicks
      if (href.startsWith("mailto:")) {
        track({
          event: "cta_click",
          event_category: "email",
          event_label: href.replace("mailto:", ""),
        });
        return;
      }

      // WhatsApp clicks
      if (href.includes("wa.me")) {
        track({
          event: "cta_click",
          event_category: "whatsapp",
          event_label: "whatsapp_floating",
        });
        return;
      }

      // Outbound clicks (external links)
      if (
        anchor.target === "_blank" ||
        (href.startsWith("http") && !href.includes(window.location.hostname))
      ) {
        track({
          event: "outbound_click",
          event_category: "external",
          event_label: href,
        });
        return;
      }

      // CTA button clicks (internal navigation)
      const classes = anchor.className || "";
      if (
        classes.includes("btn-primary") ||
        classes.includes("btn-outline") ||
        classes.includes("btn-hero-secondary")
      ) {
        track({
          event: "cta_click",
          event_category: "navigation",
          event_label: getClickLabel(anchor),
        });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
