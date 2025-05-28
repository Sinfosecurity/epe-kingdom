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
      <main className="flex-1 flex flex-col relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black z-0"></div>

        {/* Text Content Section */}
        <div className="container mx-auto max-w-4xl relative z-10 px-4 pt-12 pb-8 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6">
            Discover The Rich Heritage of{" "}
            <span className="text-purple-400">Epe Kingdom</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
            Explore the festivals, history, culture, and everything about Epe -
            from royal lineage to tourist attractions, all in one place.
          </p>
          <div className="mb-8">
            <Link href="/dashboard">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Full-Width Image Slider Section */}
        <div className="relative z-10 w-full">
          <div className="text-center mb-4 px-4">
            <h2 className="text-xl md:text-2xl font-semibold text-purple-300">
              Glimpses of Epe Kingdom
            </h2>
          </div>
          <div className="w-full p-8">
            <AutoImageSlider images={epeImages} interval={5000} />
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Epe Kingdom. All rights reserved.</p>
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
      </footer> */}
    </div>
  );
}
