import { loadStripe } from "@stripe/stripe-js";

// Load Stripe with public key
export const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
