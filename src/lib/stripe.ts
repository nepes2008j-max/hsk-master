// Stripe Payment Links — create these in your Stripe Dashboard:
// 1. Go to stripe.com → Dashboard → Payment Links → Create
// 2. Set up one link per plan with the correct price and 5-day free trial
// 3. Paste the URLs below
//
// Each link handles checkout, payment, and trial automatically.
// No backend code needed.

export const STRIPE_LINKS = {
  monthly: "", // e.g. "https://buy.stripe.com/your-monthly-link"
  semi: "",    // e.g. "https://buy.stripe.com/your-6month-link"
  annual: "",  // e.g. "https://buy.stripe.com/your-annual-link"
} as const;

export function getCheckoutUrl(planId: string): string {
  const link = STRIPE_LINKS[planId as keyof typeof STRIPE_LINKS];
  if (link) return link;
  return "/pricing";
}
