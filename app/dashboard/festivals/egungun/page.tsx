import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EgungunFestivalPage() {
  // Gallery images
  const galleryImages = [
    {
      src: "/placeholder-egungun-1.png",
      alt: "Egungun masquerade in full regalia",
    },
    {
      src: "/placeholder-egungun-2.png",
      alt: "Traditional dancers accompanying Egungun",
    },
    {
      src: "/placeholder-egungun-3.png",
      alt: "Community gathering during Egungun festival",
    },
    {
      src: "/placeholder-egungun-4.png",
      alt: "Ritual offerings during Egungun ceremony",
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
            src="/placeholder-egungun-hero.png"
            alt="Egungun Festival"
            width={1200}
            height={500}
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex flex-col justify-end p-8">
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-purple-400" />
                <span className="text-sm text-gray-200">Varies annually</span>
              </div>
              <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-purple-400" />
                <span className="text-sm text-gray-200">Throughout Epe</span>
              </div>
              <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                <Clock className="h-4 w-4 mr-2 text-purple-400" />
                <span className="text-sm text-gray-200">7-14 day celebration</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Egungun Festival</h1>
            <p className="text-white/90 max-w-2xl text-lg">
              A sacred masquerade festival honoring ancestors and spirits through elaborate costumes, ritual dances, and
              spiritual ceremonies.
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
              The Egungun Festival is one of the most spiritually significant celebrations in Epe Kingdom, dedicated to
              honoring ancestors and maintaining the connection between the living and the dead. The term "Egungun"
              refers to the masquerade that embodies the spirits of ancestors who return to the world of the living
              during the festival.
            </p>
            <p className="text-gray-300 mb-4">
              Unlike festivals tied to specific calendar dates, the Egungun Festival's timing varies, often determined
              by traditional priests based on spiritual divination, community needs, or significant events. The festival
              typically lasts between seven and fourteen days, depending on the specific traditions of different family
              lineages.
            </p>
            <p className="text-gray-300">
              Central to the festival are the elaborate masquerade performances, where initiated members of the Egungun
              cult don intricately designed costumes that completely conceal their identity. These masquerades are
              believed to be physical manifestations of ancestral spirits, possessing supernatural powers and the
              ability to bless, heal, or discipline community members.
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
                src="/placeholder-egungun-history.png"
                alt="Historical Egungun celebration"
                width={500}
                height={300}
                className="w-full rounded-xl mb-4 md:mb-0"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-300 mb-4">
                The Egungun tradition dates back centuries in Yoruba culture, originating as a form of ancestor
                veneration that acknowledged the continued influence of deceased family members on the living world. The
                practice evolved into a complex religious institution with its own priesthood, rituals, and sacred
                knowledge.
              </p>
              <p className="text-gray-300 mb-4">
                In pre-colonial Epe, the Egungun cult served important social and political functions beyond its
                spiritual role. It acted as a mechanism for social control, a judicial body for resolving disputes, and
                a means of preserving historical knowledge through oral traditions and performances.
              </p>
              <p className="text-gray-300">
                Throughout colonial times and into the modern era, the Egungun tradition has demonstrated remarkable
                resilience, adapting to changing social and religious landscapes while maintaining its core spiritual
                significance. Today, it represents one of the most authentic expressions of traditional Yoruba
                spirituality still practiced in Epe.
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
            <h3 className="text-xl font-bold text-purple-400 mb-4">Masquerade Performances</h3>
            <div className="flex gap-4">
              <Image
                src="/placeholder-egungun-masquerade.png"
                alt="Masquerade Performances"
                width={120}
                height={120}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-gray-300 text-sm">
                  The highlight of the festival is the appearance of Egungun masquerades in elaborate costumes made of
                  colorful cloth strips, beads, cowrie shells, and other symbolic materials. Each masquerade represents
                  a specific ancestor or spiritual entity and performs distinctive dances accompanied by drummers and
                  chanters.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Ritual Ceremonies</h3>
            <div className="flex gap-4">
              <Image
                src="/placeholder-egungun-ritual.png"
                alt="Ritual Ceremonies"
                width={120}
                height={120}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-gray-300 text-sm">
                  Before the public appearances, secret rituals are performed in sacred groves and shrines to invoke the
                  ancestral spirits. These ceremonies involve sacrificial offerings, libations, incantations, and other
                  sacred practices known only to initiated members of the Egungun cult.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Community Processions</h3>
            <div className="flex gap-4">
              <Image
                src="/placeholder-egungun-procession.png"
                alt="Community Processions"
                width={120}
                height={120}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-gray-300 text-sm">
                  Egungun masquerades process through the community, visiting important landmarks, family compounds, and
                  the palace of the Oluepe. During these processions, they bestow blessings, deliver messages from the
                  ancestral realm, and sometimes perform cleansing rituals to remove spiritual impurities.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Divination and Healing</h3>
            <div className="flex gap-4">
              <Image
                src="/placeholder-egungun-divination.png"
                alt="Divination and Healing"
                width={120}
                height={120}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-gray-300 text-sm">
                  Special sessions are held where community members can consult with the Egungun for spiritual guidance,
                  healing, and resolution of personal or family issues. The ancestral wisdom channeled through the
                  masquerades is believed to provide insights and solutions not accessible through ordinary means.
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
              <h3 className="text-lg font-bold text-white mb-2">Preparation Phase (Days 1-3)</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Cleansing of Egungun shrines and sacred spaces</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Preparation of ritual materials and costumes</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Initial invocations and offerings to ancestors</span>
                </li>
              </ul>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Invocation Phase (Days 4-5)</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Major ritual ceremonies to call forth ancestral spirits</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Night vigils with sacred drumming and chanting</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Spiritual preparation of Egungun cult members</span>
                </li>
              </ul>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Manifestation Phase (Days 6-10)</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>First public appearance of Egungun masquerades</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Processions through different quarters of Epe</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Visitation to family compounds and important shrines</span>
                </li>
              </ul>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Consultation Phase (Days 11-13)</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Community members seek guidance and blessings</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Healing ceremonies for the sick and troubled</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Divination sessions to address community concerns</span>
                </li>
              </ul>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Farewell Phase (Day 14)</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Final public performances by all Egungun masquerades</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Closing rituals to bid farewell to ancestral spirits</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Community feast and celebration</span>
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
                The Egungun Festival embodies the Yoruba concept of the cyclical nature of existence, where the dead
                continue to influence the living world. By honoring ancestors through the festival, the community
                acknowledges this spiritual continuity and maintains the cosmic balance between the visible and
                invisible realms.
              </p>
              <p className="text-gray-300 mb-4">
                Beyond its spiritual dimensions, the festival serves as a repository of cultural knowledge, preserving
                historical narratives, moral values, and social norms through the performances and oral traditions
                associated with each Egungun character. This makes the festival a living educational institution that
                transmits cultural heritage across generations.
              </p>
              <p className="text-gray-300">
                In contemporary Epe, the Egungun Festival faces the challenge of balancing sacred traditions with modern
                realities. While some aspects have been adapted to accommodate religious pluralism and changing social
                attitudes, the core spiritual elements remain preserved, demonstrating the resilience and adaptability
                of this ancient tradition.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder-egungun-significance.png"
                alt="Cultural significance of Egungun Festival"
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
              The festival takes place at various locations throughout Epe, with main ceremonies held at traditional
              shrines and public performances in community spaces. A local guide is recommended to help visitors
              navigate the festival events.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Distance from Lagos:</strong> Approximately 60 km (1-2 hours drive)
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Accommodation</h3>
            <p className="text-gray-300 mb-4">
              Various accommodation options are available in Epe town and surrounding areas. It's advisable to book well
              in advance if your visit coincides with the festival.
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
                <span>Dress modestly and respectfully, as this is a sacred festival</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                <span>Always ask permission before photographing Egungun masquerades</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                <span>Maintain a respectful distance from masquerades during performances</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section>
        <div className="bg-purple-900/30 rounded-2xl p-8 text-center border border-purple-800/50">
          <h2 className="text-2xl font-bold mb-4 text-white">Experience the Egungun Festival</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Witness one of the most sacred and visually spectacular festivals of Epe Kingdom, connecting the world of
            the living with ancestral spirits.
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
