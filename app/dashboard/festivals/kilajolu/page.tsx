import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function KilajoluFestivalPage() {
  // Gallery images
  const galleryImages = [
    {
      src: "/placeholder-kilajolu-1.png",
      alt: "Cultural performances during Kilajolu festival",
    },
    {
      src: "/placeholder-kilajolu-2.png",
      alt: "Traditional games at Kilajolu",
    },
    {
      src: "/placeholder-kilajolu-3.png",
      alt: "Community celebration during festival",
    },
    {
      src: "/placeholder-kilajolu-4.png",
      alt: "Music and dance during Kilajolu",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back button */}
      <div className="mb-6">
        <Link href="/dashboard/festivals">
          <Button variant="ghost" className="text-gray-300 hover:text-white pl-0">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Festivals
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="mb-12">
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/placeholder-kilajolu-hero.png"
            alt="Kilajolu Festival"
            width={1200}
            height={500}
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex flex-col justify-end p-8">
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-purple-400" />
                <span className="text-sm text-gray-200">December - January</span>
              </div>
              <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-purple-400" />
                <span className="text-sm text-gray-200">Epe Town Center</span>
              </div>
              <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                <Clock className="h-4 w-4 mr-2 text-purple-400" />
                <span className="text-sm text-gray-200">7-day celebration</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Kilajolu Festival</h1>
            <p className="text-white/90 max-w-2xl text-lg">
              An end-of-year celebration featuring cultural competitions, traditional games, and artistic performances
              that showcase Epe's heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-white">Festival Overview</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-4">
              The Kilajolu Festival is Epe's vibrant end-of-year celebration, held annually between December and
              January. The name "Kilajolu" translates roughly to "that which brings the community together in joy,"
              reflecting the festival's primary purpose as a time of reunion, thanksgiving, and cultural renewal.
            </p>
            <p className="text-gray-300 mb-4">
              Unlike some of Epe's more solemn religious festivals, Kilajolu is characterized by its festive atmosphere,
              competitive events, and emphasis on artistic expression. It serves as both a celebration of the passing
              year's achievements and a hopeful welcome to the new year ahead.
            </p>
            <p className="text-gray-300">
              The festival brings together all segments of Epe society—young and old, traditional and modern, residents
              and diaspora—in a week-long program of cultural competitions, traditional games, music, dance, and
              communal feasting that showcases the community's artistic heritage and social cohesion.
            </p>
          </div>
        </div>
      </section>

      {/* Historical Significance */}
      <section className="mb-12">
        <div className="bg-gray-900/50 rounded-2xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-white">Historical Significance</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <Image
                src="/placeholder-kilajolu-history.png"
                alt="Historical Kilajolu celebration"
                width={500}
                height={300}
                className="w-full rounded-xl mb-4 md:mb-0"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-300 mb-4">
                The origins of the Kilajolu Festival can be traced back to traditional end-of-year gatherings that were
                common in Yoruba communities. These gatherings evolved from simple harvest thanksgiving ceremonies into
                more elaborate cultural celebrations over time.
              </p>
              <p className="text-gray-300 mb-4">
                Historically, the festival served multiple social functions: it provided an opportunity for community
                members who had traveled or migrated to return home and reconnect with their roots; it allowed for the
                public recognition of individual and collective achievements; and it reinforced social bonds through
                shared cultural activities.
              </p>
              <p className="text-gray-300">
                While the festival has evolved over generations, incorporating new elements and adapting to changing
                social circumstances, it has maintained its core purpose as a celebration of community identity and
                cultural continuity, making it an important marker in Epe's annual calendar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Activities */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-white">Festival Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Cultural Competitions</h3>
            <div className="flex gap-4">
              <Image
                src="/placeholder-kilajolu-competition.png"
                alt="Cultural Competitions"
                width={120}
                height={120}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-gray-300 text-sm">
                  Various competitive events showcase traditional skills and talents, including drumming contests, dance
                  competitions, oral poetry recitals, and traditional cooking challenges. These competitions are
                  organized by age groups and gender, allowing broad participation from the community.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Traditional Games</h3>
            <div className="flex gap-4">
              <Image
                src="/placeholder-kilajolu-games.png"
                alt="Traditional Games"
                width={120}
                height={120}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-gray-300 text-sm">
                  The festival features a revival of traditional Yoruba games that test physical prowess, strategic
                  thinking, and teamwork. These include ayo (a board game similar to mancala), ijakadi (traditional
                  wrestling), arin (a race with filled water pots), and various other physical and mental challenges.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Music and Dance</h3>
            <div className="flex gap-4">
              <Image
                src="/placeholder-kilajolu-music.png"
                alt="Music and Dance"
                width={120}
                height={120}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-gray-300 text-sm">
                  Musical performances featuring traditional instruments like talking drums (dundun), bata drums, sekere
                  (gourd rattle), and flutes create the festival's soundtrack. Various dance groups perform traditional
                  choreographies as well as contemporary interpretations of Yoruba dance styles.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Community Feast</h3>
            <div className="flex gap-4">
              <Image
                src="/placeholder-kilajolu-feast.png"
                alt="Community Feast"
                width={120}
                height={120}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-gray-300 text-sm">
                  A grand communal feast featuring traditional Epe delicacies is a highlight of the festival. Families
                  contribute dishes to be shared, creating a massive banquet that symbolizes community abundance and
                  generosity. Special foods associated with prosperity and good fortune are prepared for this occasion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Schedule */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Festival Schedule</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-gray-800">
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Day 1: Opening Ceremony</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Official opening by the Oluepe and traditional chiefs</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Thanksgiving prayers for the past year</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Parade of cultural groups and associations</span>
                </li>
              </ul>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Days 2-3: Competitions</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Traditional drumming and music competitions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Dance contests for different age categories</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Traditional cooking competition</span>
                </li>
              </ul>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Days 4-5: Games & Sports</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Traditional wrestling matches (Ijakadi)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Board game tournaments (Ayo)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Children's traditional games and races</span>
                </li>
              </ul>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Days 6-7: Grand Finale</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Community-wide feast with traditional foods</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Award ceremony for competition winners</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Night of music and celebration to welcome the new year</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Festival Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-xl">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Cultural Significance */}
      <section className="mb-12">
        <div className="bg-gray-900/50 rounded-2xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-white">Cultural Significance</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <p className="text-gray-300 mb-4">
                The Kilajolu Festival serves as a vital mechanism for cultural preservation and transmission in Epe.
                Through its competitive events and performances, traditional skills, knowledge, and artistic expressions
                are showcased, valued, and passed on to younger generations.
              </p>
              <p className="text-gray-300 mb-4">
                As an end-of-year celebration, the festival provides an important psychological and social function,
                allowing the community to collectively reflect on the past year, celebrate achievements, address
                challenges, and set intentions for the future. This cyclical renewal helps maintain community resilience
                and optimism.
              </p>
              <p className="text-gray-300">
                In the modern context, Kilajolu has taken on additional significance as a homecoming event that
                reconnects Epe natives living elsewhere with their cultural roots. This diaspora connection helps
                maintain cultural identity across geographical distances and strengthens the economic and social
                networks that support the community's development.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder-kilajolu-significance.png"
                alt="Cultural significance of Kilajolu Festival"
                width={500}
                height={300}
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visitor Information */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Visitor Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Getting There</h3>
            <p className="text-gray-300 mb-4">
              The festival takes place throughout Epe town, with main events held at the town square, palace grounds,
              and community centers. All venues are easily accessible and open to visitors.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Distance from Lagos:</strong> Approximately 60 km (1-2 hours drive)
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Accommodation</h3>
            <p className="text-gray-300 mb-4">
              Various accommodation options are available in Epe town and surrounding areas. It's advisable to book well
              in advance as the festival coincides with holiday season when facilities fill up quickly.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Best areas to stay:</strong> Epe Town Center, Lagos-Epe Road
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Tips for Visitors</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                <span>Wear comfortable clothing suitable for outdoor activities</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                <span>Try to participate in some of the games and activities</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                <span>Sample the traditional foods at the community feast</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section>
        <div className="bg-purple-900/30 rounded-2xl p-8 text-center border border-purple-800/50">
          <h2 className="text-2xl font-bold mb-4 text-white">Experience the Kilajolu Festival</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Join us for this vibrant end-of-year celebration and immerse yourself in the cultural heritage, games, and
            artistic traditions of Epe Kingdom.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Plan Your Visit <Calendar className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/dashboard/festivals">
              <Button variant="outline" className="border-purple-600 text-white hover:bg-purple-900/30">
                Explore Other Festivals <Users className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
