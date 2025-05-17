import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function OjudeObaFestivalPage() {
  // Gallery images
  const galleryImages = [
    {
      src: "/placeholder-ojude-1.png",
      alt: "Horsemen during Ojude Oba procession",
    },
    {
      src: "/placeholder-ojude-2.png",
      alt: "Traditional dancers at Ojude Oba",
    },
    {
      src: "/placeholder-ojude-3.png",
      alt: "Royal procession during festival",
    },
    {
      src: "/placeholder-ojude-4.png",
      alt: "Community celebration during Ojude Oba",
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
            src="/placeholder-ojude-hero.png"
            alt="Ojude Oba Festival"
            width={1200}
            height={500}
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex flex-col justify-end p-8">
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-purple-400" />
                <span className="text-sm text-gray-200">During Eid celebrations</span>
              </div>
              <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-purple-400" />
                <span className="text-sm text-gray-200">Epe Town Center</span>
              </div>
              <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                <Clock className="h-4 w-4 mr-2 text-purple-400" />
                <span className="text-sm text-gray-200">3-day celebration</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Ojude Oba Epe Festival</h1>
            <p className="text-white/90 max-w-2xl text-lg">
              A grand cultural display celebrating Epe's Islamic heritage and honoring traditional leadership.
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
              Ojude Oba, which translates to "the King's Courtyard" in Yoruba, is a grand cultural festival celebrated
              in Epe during Islamic Eid celebrations. This colorful event brings together the community to pay homage to
              the traditional ruler (the Oluepe of Epe) while showcasing the rich cultural heritage of Epe Kingdom.
            </p>
            <p className="text-gray-300 mb-4">
              The festival represents a beautiful blend of Islamic traditions and Yoruba cultural practices, reflecting
              the harmonious coexistence of these influences in Epe's history. It features elaborate processions,
              horseback displays, traditional music and dance performances, and various cultural exhibitions.
            </p>
            <p className="text-gray-300">
              Ojude Oba is not merely a celebration but also serves as a reaffirmation of loyalty to traditional
              leadership and a means of preserving and transmitting cultural values to younger generations. The festival
              has grown in prominence over the years, attracting visitors from across Nigeria and beyond.
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
                src="/placeholder-ojude-history.png"
                alt="Historical Ojude Oba celebration"
                width={500}
                height={300}
                className="w-full rounded-xl mb-4 md:mb-0"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-300 mb-4">
                The origins of Ojude Oba in Epe are closely tied to the spread of Islam in the region, particularly
                following the influx of Muslims from Lagos in the mid-19th century. The festival evolved as a way for
                the Muslim community to pay homage to the traditional ruler after Eid prayers.
              </p>
              <p className="text-gray-300 mb-4">
                Historically, the festival served as an opportunity for different family groups and age-grade
                associations to demonstrate their loyalty to the Oluepe while also showcasing their prosperity and
                cultural pride through elaborate displays.
              </p>
              <p className="text-gray-300">
                Over the generations, Ojude Oba has evolved from a simple homage-paying ceremony to a grand cultural
                spectacle that celebrates Epe's unique identity as a community where Islamic and Yoruba traditions have
                blended harmoniously.
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
            <h3 className="text-xl font-bold text-purple-400 mb-4">Royal Procession</h3>
            <div className="flex gap-4">
              <Image
                src="/placeholder-ojude-procession.png"
                alt="Royal Procession"
                width={120}
                height={120}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-gray-300 text-sm">
                  The Oluepe of Epe and his chiefs make a grand entrance to the festival grounds, accompanied by royal
                  drummers, praise singers, and attendants. The procession features elaborate regalia, traditional
                  symbols of authority, and ceremonial displays.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Horse Riding Display</h3>
            <div className="flex gap-4">
              <Image
                src="/placeholder-ojude-horse.png"
                alt="Horse Riding Display"
                width={120}
                height={120}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-gray-300 text-sm">
                  Skilled horsemen from prominent families perform impressive equestrian displays, showcasing their
                  horsemanship with acrobatic stunts and formations. The horses are adorned with colorful decorations
                  and traditional regalia representing family heritage.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Age-Grade Parades</h3>
            <div className="flex gap-4">
              <Image
                src="/placeholder-ojude-parade.png"
                alt="Age-Grade Parade"
                width={120}
                height={120}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-gray-300 text-sm">
                  Different age-grade associations (known as "Regberegbe") parade in their distinctive attire, each
                  group trying to outdo the others in the elegance of their appearance and the coordination of their
                  performance. These groups play important social and cultural roles in the community.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Cultural Performances</h3>
            <div className="flex gap-4">
              <Image
                src="/placeholder-ojude-performance.png"
                alt="Cultural Performance"
                width={120}
                height={120}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-gray-300 text-sm">
                  Various cultural troupes perform traditional music and dances that tell stories of Epe's history and
                  cultural values. These performances feature traditional instruments, colorful costumes, and
                  choreography that has been preserved through generations.
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
          <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-y divide-gray-800">
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Day 1: Eid Prayers & Opening</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Morning Eid prayers at the central mosque</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Official opening of the festival by the Oluepe</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Preliminary cultural displays and exhibitions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Evening musical performances</span>
                </li>
              </ul>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Day 2: Main Celebration</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Grand procession to the Oluepe's palace</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Horse riding displays by prominent families</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Age-grade association parades and performances</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Traditional music and dance competitions</span>
                </li>
              </ul>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Day 3: Closing Ceremony</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Award presentations to outstanding participants</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Final cultural performances</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Closing speeches by dignitaries</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Community feast and celebrations</span>
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
                Ojude Oba represents a unique cultural institution that embodies the harmonious blend of Islamic and
                Yoruba traditions in Epe. The festival serves as a living testament to how these two cultural influences
                have coexisted and enriched each other over generations.
              </p>
              <p className="text-gray-300 mb-4">
                Beyond its celebratory aspects, the festival plays a crucial role in reinforcing traditional governance
                structures by publicly reaffirming the community's allegiance to the Oluepe. This helps maintain social
                cohesion and respect for traditional authority in a rapidly changing world.
              </p>
              <p className="text-gray-300">
                For younger generations, Ojude Oba provides an immersive educational experience about their cultural
                heritage. By participating in or witnessing the festival, they learn about traditional values, customs,
                and the historical development of their community.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder-ojude-significance.png"
                alt="Cultural significance of Ojude Oba"
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
              The festival takes place in the center of Epe town, primarily around the palace of the Oluepe. The venue
              is accessible by road from Lagos and other surrounding areas.
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
                <span>Dress modestly out of respect for the cultural and religious nature of the event</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                <span>Bring sun protection for outdoor activities</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                <span>Be respectful when taking photographs, especially of traditional rulers</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section>
        <div className="bg-purple-900/30 rounded-2xl p-8 text-center border border-purple-800/50">
          <h2 className="text-2xl font-bold mb-4 text-white">Experience the Ojude Oba Festival</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Join us for this grand cultural celebration and witness the rich heritage of Epe Kingdom.
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
