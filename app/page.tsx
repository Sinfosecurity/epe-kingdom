import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AutoImageSlider } from "@/components/AutoImageSlider";

export default function LandingPage() {
  // Sample images for the slider
  const epeImages = [
    {
      src: "/epe-17.jpg",
      alt: "Olu Epe of Epe",
      title: "The Olu Epe of Epe Kingdom",
    },
    {
      src: "/epe-08.jpg",
      alt: "The League of Imam of Epe",
      title: "The League of Imam of The Epe Kingdom",
    },
    {
      src: "/epe-13.jpg",
      alt: "Members of Epe Council",
      title: "The Members of Epe Council",
    },
    {
      src: "/epe-01.jpg",
      alt: "Oba of Epe",
      title: "The Epe Kingdom",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black z-0"></div>

        <div className="container mx-auto max-w-4xl relative z-10 py-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Discover The Rich Heritage of{" "}
            <span className="text-purple-400">Epe Kingdom</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore the festivals, history, culture, and everything about Epe -
            from royal lineage to tourist attractions, all in one place.
          </p>
          <div className="mb-16">
            <Link href="/dashboard">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Auto-changing Image Slider */}
          <div className="mt-12 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-purple-300">
              Glimpses of Epe Kingdom
            </h2>
            <div className="mx-auto max-w-3xl px-8">
              <AutoImageSlider images={epeImages} interval={5000} />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Epe Kingdom. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Terms
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
