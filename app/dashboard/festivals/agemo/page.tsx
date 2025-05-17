import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AgemoFestivalPage() {
  // Gallery images
  const galleryImages = [
    {
      src: "/placeholder-agemo-1.png",
      alt: "Agemo masquerade procession",
    },
    {
      src: "/placeholder-agemo-2.png",
      alt: "Traditional priests at Agemo ritual",
    },
    {
      src: "/placeholder-agemo-3.png",
      alt: "Community celebration during Agemo festival",
    },
    {
      src: "/placeholder-agemo-4.png",
      alt: "Sacred grove during Agemo festival",
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
            src="/placeholder-agemo-hero.png"
            alt="Agemo Festival"
            width={1200}
            height={500}
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex flex-col justify-end p-8">
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-purple-400" />
                <span className="text-sm text-gray-200">June - July</span>
              </div>
              <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-purple-400" />
                <span className="text-sm text-gray-200">Sacred Groves of Epe</span>
              </div>
              <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                <Clock className="h-4 w-4 mr-2 text-purple-400" />
                <span className="text-sm text-gray-200">16-day celebration</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Agemo Festival</h1>
            <p className="text-white/90 max-w-2xl text-lg">
              An ancient festival honoring ancestral deities and spirits through sacred rituals and masquerade
              performances.
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
              The Agemo Festival is one of the most sacred and ancient celebrations in Epe Kingdom, held annually
              between June and July. This 16-day festival honors the powerful Agemo deities, who are believed to be
              intermediaries between humans and the supreme god in traditional Yoruba religion.
            </p>
            <p className="text-gray-300 mb-4">
              The festival centers around the Agemo cult, a group of initiated priests who serve as custodians of sacred
              knowledge and rituals. During the festival, these priests perform elaborate ceremonies in sacred groves,
              invoking the spirits of ancestors and deities to bring blessings, protection, and prosperity to the
              community.
            </p>
            <p className="text-gray-300">
              A distinctive feature of the Agemo Festival is the appearance of masquerades, which are believed to embody
              the spirits of deities and ancestors. These masquerades, with their elaborate costumes and mysterious
              performances, create a powerful spiritual atmosphere that connects the community with the supernatural
              realm.
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
                src="/placeholder-agemo-history.png"
                alt="Historical Agemo celebration"
                width={500}
                height={300}
                className="w-full rounded-xl mb-4 md:mb-0"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-300 mb-4">
                The origins of the Agemo Festival date back to pre-colonial times, deeply rooted in the indigenous
                religious practices of the Yoruba people. The festival evolved as a way to honor powerful nature deities
                associated with fertility, protection, and spiritual guidance.
              </p>
              <p className="text-gray-300 mb-4">
                Historically, the Agemo cult played a significant role in the political and social organization of Epe.
                The cult members served as spiritual advisors to traditional rulers and helped maintain social order
                through their connection to the supernatural realm.
              </p>
              <p className="text-gray-300">
                Throughout the colonial period and into modern times, the Agemo Festival has persisted as one of the
                most important traditional religious observances in Epe, despite the influence of Islam and
                Christianity. The festival represents cultural resilience and the community's commitment to preserving
                their spiritual heritage.
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
            <h3 className="text-xl font-bold text-purple-400 mb-4">Sacred Rituals</h3>
            <div className="flex gap-4">
              <Image
                src="/placeholder-agemo-ritual.png"
                alt="Sacred Rituals"
                width={120}
                height={120}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-gray-300 text-sm">
                  The core of the festival involves secret rituals performed by initiated Agemo priests in sacred
                  groves. These ceremonies include sacrificial offerings, invocations, and spiritual communion with
                  deities. Many of these rituals are closed to the public and only witnessed by initiated members.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Masquerade Performances</h3>
            <div className="flex gap-4">
              <Image
                src="/placeholder-agemo-masquerade.png"
                alt="Masquerade Performances"
                width={120}
                height={120}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-gray-300 text-sm">
                  Elaborate masquerade displays feature dancers wearing sacred masks and costumes that represent various
                  deities and spirits. These masquerades perform complex dances and acrobatic feats, believed to channel
                  supernatural powers. Their appearances are accompanied by traditional drumming and chanting.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Night Vigils</h3>
            <div className="flex gap-4">
              <Image
                src="/placeholder-agemo-vigil.png"
                alt="Night Vigils"
                width={120}
                height={120}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-gray-300 text-sm">
                  Special night vigils (Aisun) are held during the festival, where community members gather for
                  all-night ceremonies featuring spiritual invocations, traditional music, and trance-inducing rituals.
                  These vigils are believed to be times when the veil between the physical and spiritual worlds is
                  thinnest.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Community Processions</h3>
            <div className="flex gap-4">
              <Image
                src="/placeholder-agemo-procession.png"
                alt="Community Processions"
                width={120}
                height={120}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-gray-300 text-sm">
                  Public processions through Epe town feature Agemo priests, traditional chiefs, and community members.
                  These processions include stops at significant spiritual locations, royal palaces, and community
                  shrines, where blessings are pronounced and libations poured to honor ancestors.
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
              <h3 className="text-lg font-bold text-white mb-2">Days 1-3: Preparation</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Ritual cleansing of sacred groves and shrines</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Seclusion of Agemo priests for spiritual preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Announcement of festival commencement by traditional drummers</span>
                </li>
              </ul>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Days 4-7: Invocation</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Sacred rituals to invoke the Agemo deities</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Sacrificial offerings at various shrines</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Night vigils with traditional music and chanting</span>
                </li>
              </ul>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Days 8-12: Manifestation</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>First appearance of the Agemo masquerades</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Processions through different quarters of Epe</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Spiritual consultations and blessings for community members</span>
                </li>
              </ul>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Days 13-15: Communion</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Visit of Agemo priests to the Oluepe's palace</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Community-wide celebrations with music and dance</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Special masquerade performances for public viewing</span>
                </li>
              </ul>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Day 16: Conclusion</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Final rituals to bid farewell to the deities</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Thanksgiving ceremonies for successful festival</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Return of Agemo priests to normal community life</span>
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
                The Agemo Festival represents one of the most profound expressions of traditional Yoruba spirituality in
                Epe. It embodies the community's connection to ancestral powers and their belief in the continued
                influence of deities in human affairs.
              </p>
              <p className="text-gray-300 mb-4">
                Beyond its spiritual dimensions, the festival serves important social functions. It reinforces community
                cohesion, reaffirms traditional authority structures, and provides a platform for the transmission of
                cultural knowledge from one generation to the next.
              </p>
              <p className="text-gray-300">
                In contemporary times, the Agemo Festival faces the challenge of balancing traditional practices with
                modern sensibilities. While some aspects have been adapted to accommodate changing social norms, the
                core spiritual elements remain preserved, demonstrating the resilience of Epe's cultural heritage in the
                face of modernization and religious change.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder-agemo-significance.png"
                alt="Cultural significance of Agemo Festival"
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
              The festival takes place at various locations throughout Epe, with main ceremonies held in sacred groves
              and at the Oluepe's palace. Public events are accessible to visitors, though some rituals remain closed to
              non-initiates.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Distance from Lagos:</strong> Approximately 60 km (1-2 hours drive)
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Accommodation</h3>
            <p className="text-gray-300 mb-4">
              Various accommodation options are available in Epe town and surrounding areas. It's advisable to book well
              in advance as the festival attracts many visitors.
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
                <span>Dress modestly and respectfully, especially when attending ceremonies</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                <span>Always ask permission before photographing rituals or masquerades</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                <span>Follow the guidance of local hosts regarding which events are open to visitors</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section>
        <div className="bg-purple-900/30 rounded-2xl p-8 text-center border border-purple-800/50">
          <h2 className="text-2xl font-bold mb-4 text-white">Experience the Agemo Festival</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Witness one of the most ancient and spiritually significant festivals of Epe Kingdom, a rare glimpse into
            traditional Yoruba religious practices.
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
