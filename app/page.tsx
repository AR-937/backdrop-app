import CheckoutButton from "./CheckoutButton";
import EmbeddedCheckoutButton from "./EmbeddedCheckoutButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-8 font-inter">
      <section className="text-center max-w-2xl space-y-6 mb-12">
        <h1 className="text-6xl font-extrabold text-indigo-400">
          Welcome to <span className="text-purple-500">FrameVault</span>
        </h1>
        <p className="text-2xl leading-relaxed text-gray-300">
          Discover a curated selection of high-quality wallpapers to refresh your desktop.
        </p>
        <p className="text-2xl leading-relaxed text-gray-300">
          Choose from stunning visuals, from serene landscapes to sleek minimalist designs.
        </p>
        <p className="text-2xl leading-relaxed text-gray-300">
          Find your perfect wallpaper and give your screen a fresh new look.
        </p>
      </section>

      <div className="flex flex-col space-y-4">
        <CheckoutButton />
        <EmbeddedCheckoutButton />
      </div>
    </main>
  );
}
//1. front page image slider / wallhaven api? 2. sign up
