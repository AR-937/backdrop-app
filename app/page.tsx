import { EmbeddedCheckout } from "@stripe/react-stripe-js";
import CheckoutButton from "./CheckoutButton";
import EmbeddedCheckoutButton from "./EmbeddedCheckoutButton";
//redesign
export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-black flex flex-col items-center justify-center p-6 font-semibold">
      <section className="text-center max-w-2xl space-y-6 mb-12">
        <h1 className="text-4xl font-bold text-[#0070f3]">Welcome to FrameVault</h1>
        <p className="text-lg">
          Discover a curated selection of high-quality wallpapers to refresh your desktop.
        </p>
        <p className="text-lg">
          Choose from stunning visuals, from serene landscapes to sleek minimalist designs.
        </p>
        <p className="text-lg">
          Find your perfect wallpaper and give your screen a fresh new look.
        </p>
      </section>

      <CheckoutButton />
      <EmbeddedCheckoutButton />
    </main>
  );
}
