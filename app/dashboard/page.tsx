"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Landmark,
  MapPin,
  Book,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CountdownTimer } from "@/components/CountdownTimer";

export default function Dashboard() {
  // Set the date for the Ojude Oba Epe festival (example date - adjust as needed)
  const festivalDate = new Date("2025-07-15T00:00:00");

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section - Ojude Oba Festival */}
      <Link href="/dashboard/festivals/ojudeoba" className="block mb-12">
        <section className="relative rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.01] hover:shadow-xl">
          <Image
            src="/placeholder-ojude-hero.png" // Replace with actual Ojude Oba festival image
            alt="Ojude Oba Epe Festival"
            width={1200}
            height={500}
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex flex-col justify-center p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 max-w-xl">
                  Ojude Oba Epe Festival
                </h1>
                <p className="text-white/90 max-w-xl mb-6">
                  Experience the grand cultural celebration honoring traditional
                  leadership and showcasing Epe's Islamic heritage.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 mb-5 w-fit">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="md:mt-0">
                <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-purple-500/30">
                  <h3 className="text-center text-white font-medium mb-2">
                    Festival Countdown
                  </h3>
                  <CountdownTimer targetDate={festivalDate} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Link>

      {/* Featured Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">
          Discover Epe Kingdom
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gray-900 border-gray-800 text-gray-100">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-white">
                <Landmark className="h-5 w-5 text-purple-400" />
                Kings of Epe
              </CardTitle>
              <CardDescription className="text-gray-400">
                Learn about the royal lineage and history
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/epe-18.jpg"
                alt="Kings of Epe"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-sm text-gray-300">
                Discover the royal lineage of Oluepe of Epe and the rich
                monarchical history of the kingdom.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/dashboard/kings"
                className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center"
              >
                View Kings <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-gray-900 border-gray-800 text-gray-100">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-white">
                <Calendar className="h-5 w-5 text-purple-400" />
                Festivals & Culture
              </CardTitle>
              <CardDescription className="text-gray-400">
                Experience traditional celebrations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/epe-21.jpg"
                alt="Epe Festivals"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-sm text-gray-300">
                Explore the vibrant festivals, cultural celebrations, and
                traditional ceremonies of Epe Kingdom.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/dashboard/festivals"
                className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center"
              >
                View Festivals <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-gray-900 border-gray-800 text-gray-100">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-white">
                <MapPin className="h-5 w-5 text-purple-400" />
                Tourism
              </CardTitle>
              <CardDescription className="text-gray-400">
                Explore attractions and landmarks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/epe-20.jpg"
                alt="Epe Tourism"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-sm text-gray-300">
                Discover tourist attractions, natural landmarks, and beautiful
                places to visit in Epe Kingdom.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/dashboard/tourism"
                className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center"
              >
                Explore Places <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Additional Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">More About Epe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gray-900 border-gray-800 text-gray-100">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-white">
                <Book className="h-5 w-5 text-purple-400" />
                Islam in Epe
              </CardTitle>
              <CardDescription className="text-gray-400">
                Islamic heritage and influence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Image
                  src="/epe-22.jpg"
                  alt="Islam in Epe"
                  width={120}
                  height={120}
                  className="rounded-md object-cover"
                />
                <div>
                  <p className="text-sm text-gray-300">
                    Explore the rich Islamic heritage, historical mosques, and
                    the influence of Islam on Epe's culture and traditions.
                  </p>
                  <Link
                    href="/dashboard/islam"
                    className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center mt-4"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 text-gray-100">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-white">
                <Users className="h-5 w-5 text-purple-400" />
                Epe Council Members
              </CardTitle>
              <CardDescription className="text-gray-400">
                Leadership and governance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Image
                  src="/epe-13.jpg"
                  alt="Epe Council"
                  width={120}
                  height={120}
                  className="rounded-md object-cover"
                />
                <div>
                  <p className="text-sm text-gray-300">
                    Meet the council members, learn about the traditional
                    governance structure, and understand leadership in Epe
                    Kingdom.
                  </p>
                  <Link
                    href="/dashboard/council"
                    className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center mt-4"
                  >
                    View Council <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* History Highlight */}
      <section>
        <div className="bg-gray-900/50 rounded-2xl p-6 md:p-8 border border-gray-800">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4 text-white">
                The Rich History of Epe
              </h2>
              <p className="text-gray-300 mb-4">
                Epe's history dates back centuries, with a rich tapestry of
                cultural evolution, trade, and resilience. From its origins as a
                settlement to becoming an important kingdom in Lagos State, the
                story of Epe is one of heritage and pride.
              </p>
              <p className="text-gray-300 mb-6">
                Explore the timeline of significant events, the migration
                stories, and the development of Epe Kingdom through the ages.
              </p>
              <Link href="/dashboard/history">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Explore Full History
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/epe-23.jpg"
                alt="Historical Epe"
                width={500}
                height={300}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
