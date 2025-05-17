import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Users, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function FestivalsPage() {
  // Festival data
  const festivals = [
    {
      id: "kayokayo",
      name: "Kayo Kayo Festival",
      period: "August - September",
      image: "/placeholder-kayo.png",
      description:
        "A vibrant water festival celebrating Epe's connection to water bodies and fishing heritage. Features colorful boat regatta, traditional dances, and cultural displays.",
    },
    {
      id: "ojudeoba",
      name: "Ojude Oba Epe",
      period: "Eid celebrations",
      image: "/placeholder-ojude.png",
      description:
        "A grand cultural display held during Islamic Eid celebrations, showcasing Epe's Islamic heritage through processions, horse riding displays, and traditional performances.",
    },
    {
      id: "ebi",
      name: "Ebi (Yam Festival)",
      period: "July - August",
      image: "/placeholder-ebi.png",
      description:
        "Traditional harvest celebration marking the new yam season. Features thanksgiving ceremonies, communal feasting, and cultural performances honoring agricultural heritage.",
    },
    {
      id: "agemo",
      name: "Agemo Festival",
      period: "June - July",
      image: "/placeholder-agemo.png",
      description:
        "Ancient festival honoring ancestral deities and spirits. Involves masquerade performances, traditional rituals, and community ceremonies to ensure prosperity.",
    },
    {
      id: "kilajolu",
      name: "Kilajolu Festival",
      period: "December - January",
      image: "/placeholder-kilajolu.png",
      description:
        "End-of-year celebration featuring cultural competitions, traditional games, music, and dance performances that showcase Epe's artistic heritage.",
    },
    {
      id: "egungun",
      name: "Egungun Festival",
      period: "Varies annually",
      image: "/placeholder-egungun.png",
      description:
        "Masquerade festival honoring ancestors and spirits. Features elaborate costumes, ritual dances, and spiritual ceremonies connecting the living with ancestral realms.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/placeholder-festival-hero.png"
            alt="Epe Festivals"
            width={1200}
            height={500}
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex flex-col justify-center p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-xl">
              Festivals & Celebrations of Epe Kingdom
            </h1>
            <p className="text-white/90 max-w-xl mb-6">
              Experience the vibrant cultural celebrations that showcase Epe's rich heritage and traditions.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-white">Cultural Celebrations</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-4">
              Epe Kingdom is renowned for its vibrant festivals that celebrate its rich cultural heritage, historical
              events, and spiritual traditions. These festivals are not merely entertainment but serve as important
              vehicles for preserving and transmitting cultural knowledge, reinforcing community bonds, and connecting
              present generations with their ancestral roots.
            </p>
            <p className="text-gray-300 mb-4">
              Throughout the year, Epe comes alive with colorful celebrations that feature traditional music, dance,
              elaborate costumes, ritual ceremonies, and communal feasting. Each festival has its unique significance,
              often tied to agricultural cycles, historical events, religious observances, or ancestral veneration.
            </p>
            <p className="text-gray-300">
              Explore the major festivals of Epe Kingdom below and discover the rich tapestry of traditions that make
              this community's cultural heritage so distinctive and vibrant.
            </p>
          </div>
        </div>
      </section>

      {/* Festival Calendar */}
      <section className="mb-12">
        <div className="bg-gray-900/50 rounded-2xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-white">Festival Calendar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <h3 className="text-purple-400 font-medium mb-2">January - March</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  <span>New Year Cultural Celebrations</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  <span>Isese Day Observances</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <h3 className="text-purple-400 font-medium mb-2">April - June</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  <span>Eid-el-Fitr Celebrations</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  <span>Agemo Festival</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <h3 className="text-purple-400 font-medium mb-2">July - September</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  <span>Ebi (Yam Festival)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  <span>Kayo Kayo Festival</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  <span>Eid-el-Kabir & Ojude Oba</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <h3 className="text-purple-400 font-medium mb-2">October - December</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  <span>Egungun Festival</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  <span>Kilajolu Festival</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  <span>End of Year Celebrations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Major Festivals */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-white">Major Festivals of Epe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {festivals.map((festival) => (
            <Card key={festival.id} className="bg-gray-900 border-gray-800 text-gray-100 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={festival.image || "/placeholder.svg"}
                  alt={festival.name}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center text-sm text-purple-300">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{festival.period}</span>
                  </div>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-white">{festival.name}</CardTitle>
                <CardDescription className="text-gray-400">Traditional celebration</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">{festival.description}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/dashboard/festivals/${festival.id}`}>
                  <Button variant="outline" className="bg-purple-90/30 border-purple-600 text-white hover:bg-white hover:text-purple-900/30">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Festival Experience */}
      <section className="mb-16">
        <div className="bg-gray-900/50 rounded-2xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-white">The Festival Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-purple-900/50 flex items-center justify-center mb-4">
                <Music className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Music & Dance</h3>
              <p className="text-gray-300">
                Experience the rhythmic beats of traditional drums, melodious songs, and energetic dance performances
                that have been passed down through generations.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-purple-900/50 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Community Gathering</h3>
              <p className="text-gray-300">
                Witness the coming together of families, community groups, and visitors in a spirit of unity,
                celebration, and shared cultural pride.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-purple-900/50 flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Ritual & Ceremony</h3>
              <p className="text-gray-300">
                Observe sacred rituals, traditional ceremonies, and spiritual practices that connect the community with
                its ancestral heritage and cultural roots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section>
        <div className="bg-purple-900/30 rounded-2xl p-8 text-center border border-purple-800/50">
          <h2 className="text-2xl font-bold mb-4 text-white">Experience Epe's Cultural Celebrations</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Plan your visit to coincide with one of Epe's vibrant festivals and immerse yourself in the rich cultural
            heritage of this historic kingdom.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Plan Your Visit <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}
