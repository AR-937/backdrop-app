import { EmbeddedCheckout } from "@stripe/react-stripe-js";
import CheckoutButton from "./CheckoutButton";
import EmbeddedCheckoutButton from "./EmbeddedCheckoutButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1f1f1f] text-[#c5c8c6] flex flex-col items-center justify-center p-6">
      <section className="text-center max-w-2xl space-y-6 mb-12">
        <h1 className="text-4xl font-bold text-[#61dafb]">Welcome to FrameVault</h1>
        <p className="text-lg">
          Discover our exclusive collection of high-quality wallpapers designed to elevate your desktop. 
          FrameVault offers a range of premium backgrounds that bring style, color, and creativity to your screen.
        </p>
        <p className="text-lg">
          Whether you're seeking abstract art, breathtaking landscapes, or minimalist designs, our curated wallpapers 
          are optimized for high-resolution displays, ensuring your desktop looks its best.
        </p>
        <p className="text-lg">
          Explore our selection and find the perfect wallpaper to transform your screen into a visual masterpiece.
        </p>
      </section>

      <CheckoutButton />
      <EmbeddedCheckoutButton />
    </main>
  );
}
