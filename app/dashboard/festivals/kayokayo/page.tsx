import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function KayoKayoFestivalPage() {
  // Gallery images
  const galleryImages = [
    {
      src: "/placeholder-kayo-1.png",
      alt: "Boat regatta during Kayo Kayo festival",
    },
    {
      src: "/placeholder-kayo-2.png",
      alt: "Traditional dancers at Kayo Kayo",
    },
    {
      src: "/placeholder-kayo-3.png",
      alt: "Community celebration during festival",
    },
    {
      src: "/placeholder-kayo-4.png",
      alt: "Water procession during Kayo Kayo",
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
            src="/placeholder-kayo-hero.png"
            alt="Kayo Kayo Festival"
            width={1200}
            height={500}
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex flex-col justify-end p-8">
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-purple-400" />
                <span className="text-sm text-gray-200">August - September</span>
              </div>
              <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-purple-400" />
                <span className="text-sm text-gray-200">Epe Waterfront</span>
              </div>
              <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                <Clock className="h-4 w-4 mr-2 text-purple-400" />
                <span className="text-sm text-gray-200">7-day celebration</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Kayo Kayo Festival</h1>
            <p className="text-white/90 max-w-2xl text-lg">
              A vibrant water festival celebrating Epe's deep connection to its waterways and fishing heritage.
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
              The Kayo Kayo Festival is one of Epe's most significant cultural celebrations, held annually between
              August and September. This water festival celebrates Epe's historical and cultural connection to the Lagos
              Lagoon and the community's fishing heritage that has sustained it for generations.
            </p>
            <p className="text-gray-300 mb-4">
              The name "Kayo Kayo" is derived from a traditional call used by fishermen when returning with their catch,
              signaling a successful fishing expedition. Over time, this call evolved into a communal celebration of
              thanksgiving for the bounty provided by the waters surrounding Epe.
            </p>
            <p className="text-gray-300">
              Today, the festival has grown into a grand cultural spectacle featuring colorful boat regattas, fishing
              competitions, traditional music and dance performances, and various water-based activities that showcase
              the community's maritime skills and cultural heritage.
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
                src="/placeholder-kayo-history.png"
                alt="Historical Kayo Kayo celebration"
                width={500}
                height={300}
                className="w-full rounded-xl mb-4 md:mb-0"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-300 mb-4">
                The origins of the Kayo Kayo Festival date back several centuries, rooted in the fishing traditions of
                the early settlers of Epe. As a community situated by the Lagos Lagoon, fishing has always been central
                to Epe's economy and cultural identity.
              </p>
              <p className="text-gray-300 mb-4">
                Historically, the festival served as both a thanksgiving ceremony for a successful fishing season and a
                communal ritual to ensure continued prosperity. It was believed that the annual celebration would please
                the water deities who would, in turn, bless the community with abundant fish in the coming year.
              </p>
              <p className="text-gray-300">
                Over the generations, while maintaining its core cultural significance, the festival has evolved to
                incorporate elements that reflect Epe's historical developments, including the influence of Islam and
                modern cultural expressions.
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
            <h3 className="text-xl font-bold text-purple-400 mb-4">Boat Regatta</h3>
            <div className="flex gap-4">
              <Image
                src="/placeholder-kayo-regatta.png"
                alt="Boat Regatta"
                width={120}
                height={120}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-gray-300 text-sm">
                  The highlight of the festival is the colorful boat regatta featuring elaborately decorated boats
                  parading along the waterfront. Boat owners compete for honors with creative designs, traditional
                  symbols, and vibrant colors representing different family groups and fishing guilds.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Traditional Dances</h3>
            <div className="flex gap-4">
              <Image
                src="/placeholder-kayo-dance.png"
                alt="Traditional Dancers"
                width={120}
                height={120}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-gray-300 text-sm">
                  Various dance groups perform traditional dances that tell stories of fishing expeditions, historical
                  events, and community life. These performances feature elaborate costumes, rhythmic drumming, and
                  choreography passed down through generations.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Fishing Competition</h3>
            <div className="flex gap-4">
              <Image
                src="/placeholder-kayo-fishing.png"
                alt="Fishing Competition"
                width={120}
                height={120}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-gray-300 text-sm">
                  A friendly competition among local fishermen showcases traditional fishing techniques and skills.
                  Participants compete to catch the most fish using traditional methods, demonstrating the fishing
                  prowess that has sustained the community for centuries.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Cultural Exhibitions</h3>
            <div className="flex gap-4">
              <Image
                src="/placeholder-kayo-exhibition.png"
                alt="Cultural Exhibition"
                width={120}
                height={120}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-gray-300 text-sm">
                  Exhibitions of traditional fishing equipment, historical artifacts, and cultural items provide
                  educational insights into Epe's maritime heritage. Artisans demonstrate traditional crafts such as net
                  weaving, boat carving, and fish preservation techniques.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-gray-800">
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Day 1: Opening Ceremony</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Traditional prayers and blessings by community elders</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Ceremonial lighting of the festival torch</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Welcome speeches by traditional rulers and dignitaries</span>
                </li>
              </ul>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Days 2-3: Cultural Exhibitions</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Display of traditional fishing equipment and techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Cultural performances by local groups</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Traditional food festival featuring local delicacies</span>
                </li>
              </ul>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Days 4-5: Competitions</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Traditional fishing competition</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Swimming contests for different age groups</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Boat decoration competition</span>
                </li>
              </ul>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Day 6: Grand Regatta</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Colorful boat parade along the waterfront</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Water acrobatics and traditional water sports</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Musical performances on floating platforms</span>
                </li>
              </ul>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Day 7: Closing Ceremony</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Award presentation to competition winners</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Thanksgiving ceremonies</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Grand finale with fireworks display over the water</span>
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
                The Kayo Kayo Festival is more than just a celebration; it's a vital cultural institution that helps
                preserve Epe's maritime heritage and strengthens community bonds. Through the festival, traditional
                knowledge about fishing, navigation, and water management is passed down to younger generations.
              </p>
              <p className="text-gray-300 mb-4">
                The festival also serves as a homecoming event, drawing Epe natives from across Nigeria and abroad back
                to their ancestral home. This reunion aspect reinforces family ties and community identity, ensuring
                that even those who have moved away maintain their connection to their cultural roots.
              </p>
              <p className="text-gray-300">
                In recent years, the festival has gained recognition beyond Epe, attracting tourists and cultural
                enthusiasts who come to witness this unique celebration. This has helped raise awareness about Epe's
                cultural heritage while also contributing to local economic development through tourism.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder-kayo-significance.png"
                alt="Cultural significance of Kayo Kayo"
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
              The festival takes place along the Epe waterfront, which is easily accessible from Lagos. Public
              transportation and special festival shuttles are available during the celebration period.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Distance from Lagos:</strong> Approximately 60 km (1-2 hours drive)
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Accommodation</h3>
            <p className="text-gray-300 mb-4">
              Various accommodation options are available in and around Epe, ranging from hotels to guesthouses. It's
              advisable to book in advance as facilities fill up quickly during the festival period.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Best areas to stay:</strong> Epe Town Center, Waterfront area
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
                <span>Bring sun protection for daytime events</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                <span>Consider hiring a local guide for the best experience</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section>
        <div className="bg-purple-900/30 rounded-2xl p-8 text-center border border-purple-800/50">
          <h2 className="text-2xl font-bold mb-4 text-white">Experience the Kayo Kayo Festival</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Join us for this year's celebration and immerse yourself in the vibrant cultural heritage of Epe Kingdom.
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
