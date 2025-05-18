"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Home,
  Info,
  BookOpen,
  Crown,
  Music,
  MapPin,
  Users,
} from "lucide-react";

export function MobileNav() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/dashboard" && pathname === "/dashboard") {
      return true;
    }
    if (path !== "/dashboard" && pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  const navItems = [
    {
      name: "Home",
      href: "/dashboard",
      icon: Home,
    },
    {
      name: "About",
      href: "/dashboard/about",
      icon: Info,
    },
    {
      name: "History",
      href: "/dashboard/history",
      icon: BookOpen,
    },
    {
      name: "Kings",
      href: "/dashboard/kings",
      icon: Crown,
    },
    {
      name: "Festivals",
      href: "/dashboard/festivals",
      icon: Music,
    },
    {
      name: "Tourism",
      href: "/dashboard/tourism",
      icon: MapPin,
    },
    {
      name: "Clubs",
      href: "/dashboard/clubs",
      icon: Users,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-800 md:hidden">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center justify-center w-full h-full ${
              isActive(item.href)
                ? "text-purple-400"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-xs mt-1">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
