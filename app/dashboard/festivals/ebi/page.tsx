import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EbiFestivalPage() {
  // Gallery images
  const galleryImages = [
    {
      src: "/placeholder-ebi-1.png",
      alt: "Yam offerings during Ebi festival",
    },
    {
      src: "/placeholder-ebi-2.png",
      alt: "Traditional dancers at Ebi festival",
    },
    {
      src: "/placeholder-ebi-3.png",
      alt: "Community feast during Ebi festival",
    },
    {
      src: "/placeholder-ebi-4.png",
      alt: "Yam display during Ebi festival",
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
            src="/placeholder-ebi-hero.png"
            alt="Ebi (Yam) Festival"
            width={1200}
            height={500}
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex flex-col justify-end p-8">
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-purple-400" />
                <span className="text-sm text-gray-200">July - August</span>
              </div>
              <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-purple-400" />
                <span className="text-sm text-gray-200">Epe Town Center</span>
              </div>
              <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                <Clock className="h-4 w-4 mr-2 text-purple-400" />
                <span className="text-sm text-gray-200">4-day celebration</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Ebi (Yam) Festival</h1>
            <p className="text-white/90 max-w-2xl text-lg">
              A traditional harvest celebration marking the new yam season and honoring the agricultural heritage of Epe
              Kingdom.
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
              The Ebi Festival, also known as the New Yam Festival, is one of Epe's most significant agricultural
              celebrations. Held annually between July and August, it marks the beginning of the yam harvest season and
              serves as a thanksgiving ceremony to honor the earth's fertility and the ancestors who established farming
              traditions.
            </p>
            <p className="text-gray-300 mb-4">
              Yam, a staple crop in Yoruba culture, holds both nutritional and symbolic importance. The festival
              celebrates the first harvest of the season, with rituals ensuring that the community acknowledges the
              spiritual significance of this food source before general consumption begins.
            </p>
            <p className="text-gray-300">
              Today, the Ebi Festival has evolved into a colorful cultural event that brings together Epe's residents
              and visitors to celebrate agricultural heritage, community bonds, and traditional values through rituals,
              feasting, music, dance, and various cultural displays.
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
                src="/placeholder-ebi-history.png"
                alt="Historical Ebi celebration"
                width={500}
                height={300}
                className="w-full rounded-xl mb-4 md:mb-0"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-300 mb-4">
                The origins of the Ebi Festival date back centuries in Yoruba agricultural traditions. For the people of
                Epe, whose economy was traditionally based on farming and fishing, the yam harvest represented a crucial
                period of abundance after months of cultivation.
              </p>
              <p className="text-gray-300 mb-4">
                Historically, the festival served multiple purposes: it was a thanksgiving to the earth deity (Ile) for
                a successful harvest, a ritual to ensure continued fertility of the land, and a community bonding event
                that reinforced social structures and cultural identity.
              </p>
              <p className="text-gray-300">
                The festival also had practical significance, as it marked the official beginning of the yam consumption
                season. Tradition dictated that no one should eat from the new yam harvest until the appropriate rituals
                had been performed by the Oluepe (king) and traditional priests, ensuring both spiritual harmony and
                food safety.
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
            <h3 className="text-xl font-bold text-purple-400 mb-4">Royal Yam Offering</h3>
            <div className="flex gap-4">
              <Image
                src="/placeholder-ebi-offering.png"
                alt="Royal Yam Offering"
                width={120}
                height={120}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-gray-300 text-sm">
                  The central ritual of the festival involves the Oluepe (king) offering the first yams of the harvest
                  to the ancestors and deities. This sacred ceremony, performed with traditional priests, symbolically
                  blesses the harvest and gives permission for general consumption to begin.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Traditional Dances</h3>
            <div className="flex gap-4">
              <Image
                src="/placeholder-ebi-dance.png"
                alt="Traditional Dancers"
                width={120}
                height={120}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-gray-300 text-sm">
                  Various dance groups perform traditional agricultural dances that tell stories of farming, harvest,
                  and the relationship between humans and the earth. These performances feature elaborate costumes,
                  rhythmic drumming, and choreography that mimics farming activities.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Community Feast</h3>
            <div className="flex gap-4">
              <Image
                src="/placeholder-ebi-feast.png"
                alt="Community Feast"
                width={120}
                height={120}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-gray-300 text-sm">
                  A grand communal feast featuring various yam dishes is a highlight of the festival. Families prepare
                  traditional recipes like pounded yam (iyan), yam porridge (asaro), and roasted yam with palm oil (isu
                  sisun), sharing food as a symbol of community unity and prosperity.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Yam Display Competition</h3>
            <div className="flex gap-4">
              <Image
                src="/placeholder-ebi-competition.png"
                alt="Yam Display Competition"
                width={120}
                height={120}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-gray-300 text-sm">
                  Farmers compete to showcase their best yam harvests, with prizes awarded for the largest, most
                  beautiful, and most abundant displays. This friendly competition celebrates agricultural excellence
                  and encourages continued dedication to traditional farming practices.
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
              <h3 className="text-lg font-bold text-white mb-2">Day 1: Purification</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Cleansing rituals to prepare the community for the festival</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Traditional prayers by community elders and priests</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Announcement of the festival by town criers</span>
                </li>
              </ul>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Day 2: Royal Ceremony</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Procession of the Oluepe and chiefs to the ancestral shrine</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Offering of new yams to ancestors and deities</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Ritual blessing of the harvest by traditional priests</span>
                </li>
              </ul>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Day 3: Community Celebration</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Yam display competition among farmers</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Traditional music and dance performances</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Community feast featuring various yam dishes</span>
                </li>
              </ul>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Day 4: Thanksgiving</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Thanksgiving ceremonies at community shrines</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Award presentation to competition winners</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Closing rituals and prayers for continued prosperity</span>
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
                The Ebi Festival represents more than just an agricultural celebration; it embodies core Yoruba values
                and worldviews. The festival reinforces the spiritual connection between the community and the land,
                acknowledging that successful harvests depend on both human effort and divine blessing.
              </p>
              <p className="text-gray-300 mb-4">
                As a communal event, Ebi strengthens social bonds and reinforces the traditional leadership structure,
                with the Oluepe playing a central role in mediating between the community and the spiritual realm. The
                festival also serves as an opportunity for intergenerational knowledge transfer, as elders share farming
                techniques, cultural practices, and oral histories with younger generations.
              </p>
              <p className="text-gray-300">
                In modern times, while agriculture may no longer be the primary occupation for many Epe residents, the
                Ebi Festival continues to be celebrated as a vital link to cultural identity and heritage. It reminds
                the community of their agricultural roots and the values of gratitude, community cooperation, and
                respect for traditional knowledge.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder-ebi-significance.png"
                alt="Cultural significance of Ebi Festival"
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
              The festival takes place in central Epe, with main ceremonies held at the palace grounds and community
              shrines. The venues are accessible by road from Lagos and surrounding areas.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Distance from Lagos:</strong> Approximately 60 km (1-2 hours drive)
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Accommodation</h3>
            <p className="text-gray-300 mb-4">
              Various accommodation options are available in Epe town and surrounding areas. It's advisable to book in
              advance as the festival attracts many visitors.
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
                <span>Dress modestly, especially when attending ritual ceremonies</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                <span>Ask permission before photographing ritual ceremonies</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                <span>Try the traditional yam dishes offered during the festival</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section>
        <div className="bg-purple-900/30 rounded-2xl p-8 text-center border border-purple-800/50">
          <h2 className="text-2xl font-bold mb-4 text-white">Experience the Ebi Festival</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Join us for this ancient celebration of harvest and community, and immerse yourself in the agricultural
            traditions of Epe Kingdom.
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
