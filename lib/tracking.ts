type TrackingEvent =
  | { event: "cta_click"; event_category: string; event_label: string }
  | { event: "scroll_to_section"; event_category: string; event_label: string }
  | { event: "outbound_click"; event_category: string; event_label: string };

export function track(params: TrackingEvent) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(params);
  }
}
