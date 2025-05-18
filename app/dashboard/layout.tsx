import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-30">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder-edpnh.png"
              alt="Epe Kingdom Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="font-bold text-xl">Epe Kingdom</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/dashboard"
              className="text-sm font-medium hover:text-purple-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/dashboard/about"
              className="text-sm font-medium hover:text-purple-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/dashboard/history"
              className="text-sm font-medium hover:text-purple-400 transition-colors"
            >
              History
            </Link>
            <Link
              href="/dashboard/kings"
              className="text-sm font-medium hover:text-purple-400 transition-colors"
            >
              Kings
            </Link>
            <Link
              href="/dashboard/festivals"
              className="text-sm font-medium hover:text-purple-400 transition-colors"
            >
              Festivals
            </Link>
            <Link
              href="/dashboard/tourism"
              className="text-sm font-medium hover:text-purple-400 transition-colors"
            >
              Tourism
            </Link>
            <Link
              href="/dashboard/clubs"
              className="text-sm font-medium hover:text-purple-400 transition-colors"
            >
              Clubs
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex text-gray-300 hover:text-white"
            >
              Contact
            </Button>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
              Contribute
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-300 hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-16 md:pb-0">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Epe Kingdom</h3>
              <p className="text-sm text-gray-400 mb-4">
                Discover the rich heritage and culture of Epe Kingdom, Lagos
                State, Nigeria.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-gray-200">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/dashboard"
                    className="text-sm text-gray-400 hover:text-purple-400"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/about"
                    className="text-sm text-gray-400 hover:text-purple-400"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/history"
                    className="text-sm text-gray-400 hover:text-purple-400"
                  >
                    History
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/kings"
                    className="text-sm text-gray-400 hover:text-purple-400"
                  >
                    Kings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/festivals"
                    className="text-sm text-gray-400 hover:text-purple-400"
                  >
                    Festivals
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-gray-200">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-purple-400"
                  >
                    Tourism
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-purple-400"
                  >
                    Health Centers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-purple-400"
                  >
                    Islam in Epe
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-purple-400"
                  >
                    Epe Clubs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-gray-200">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-purple-400"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-purple-400"
                  >
                    Contribute
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-purple-400"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-purple-400"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Epe Kingdom. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-purple-400"
              >
                Facebook
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-purple-400"
              >
                Twitter
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-purple-400"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <MobileNav />
    </div>
  );
}
