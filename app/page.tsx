import { EmbeddedCheckout } from "@stripe/react-stripe-js";
import CheckoutButton from "./CheckoutButton";
import EmbeddedCheckoutButton from "./EmbeddedCheckoutButton";

export default function Home() {
  return (
    <main>
      <CheckoutButton />
      <EmbeddedCheckoutButton />
    </main>
  );
}
