import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Crown, Calendar, Scroll, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function KingsPage() {
  // Update the kings data array with correct information
  // Kings data
  const kings = [
    {
      id: "current-oluepe",
      name: "Oba Shefiu Olatunji Adewale",
      period: "2018 - Present",
      image: "/placeholder-current-king.png",
      title: "The Current Oluepe of Epe",
      description:
        "Oba Shefiu Olatunji Adewale, the current Oluepe of Epe Kingdom, has focused on community development, cultural preservation, and modernization during his reign. As the traditional ruler, he has worked to balance respect for Epe's rich heritage with the demands of contemporary governance.",
      achievements: [
        "Strengthening of traditional institutions and cultural practices",
        "Promotion of peace and unity among different communities in Epe",
        "Support for educational initiatives and youth development",
        "Advocacy for infrastructure development in Epe region",
      ],
    },
    {
      id: "oba-kamorudeen",
      name: "Oba Kamorudeen Animashaun",
      period: "2006 - 2017",
      image: "/placeholder-king-kamorudeen.png",
      title: "The 17th Oluepe of Epe",
      description:
        "Oba Kamorudeen Animashaun's reign saw significant developments in Epe's infrastructure and cultural institutions. He worked to promote Epe's heritage while advocating for modern amenities and services for the community.",
      achievements: [
        "Modernization of the palace and royal institutions",
        "Promotion of Epe's cultural heritage through festivals",
        "Development initiatives for the community",
        "Strengthening relationships with government agencies",
      ],
    },
    {
      id: "oba-olufolarin",
      name: "Oba Michael Olufolarin Ogunlusi",
      period: "1985 - 2006",
      image: "/placeholder-king-olufolarin.png",
      title: "The 16th Oluepe of Epe",
      description:
        "Oba Michael Olufolarin Ogunlusi's reign was marked by efforts to integrate traditional governance with modern administrative systems. He played a crucial role in establishing Epe as an important cultural and administrative center in Lagos State.",
      achievements: [
        "Integration of traditional and modern governance",
        "Expansion of educational institutions in Epe",
        "Promotion of tourism and cultural festivals",
        "Advocacy for infrastructure development",
      ],
    },
    {
      id: "oba-kosoko",
      name: "Oba Kosoko",
      period: "Mid-19th Century",
      image: "/placeholder-king-kosoko.png",
      title: "Exiled King of Lagos and Influential Figure in Epe",
      description:
        "Though not officially an Oluepe, Oba Kosoko's influence on Epe's development was profound. After being exiled from Lagos in the 1850s, he established a significant settlement in Epe, bringing followers and cultural practices that greatly influenced the region's development.",
      achievements: [
        "Establishment of a significant settlement in Epe",
        "Introduction of Islamic practices and institutions",
        "Development of trade networks and economic activities",
        "Cultural and political influence that shaped Epe's identity",
      ],
    },
  ]

  // Timeline data for royal succession
  const timeline = [
    {
      period: "Pre-19th Century",
      events: "Early traditional rulers governed Epe, with leadership structures based on Yoruba traditional systems.",
    },
    {
      period: "Mid-19th Century",
      events:
        "Significant influence from Oba Kosoko and his followers after their exile from Lagos, introducing new cultural and political elements.",
    },
    {
      period: "Late 19th Century",
      events:
        "Formalization of the Oluepe title under colonial influence, with recognition of traditional authority within the colonial administrative system.",
    },
    {
      period: "20th Century",
      events:
        "Evolution of the Oluepe's role through Nigeria's independence and state reorganizations, adapting traditional governance to modern political structures.",
    },
    {
      period: "21st Century",
      events:
        "The current era of the monarchy, balancing traditional roles with development initiatives and cultural preservation in a rapidly changing world.",
    },
  ]

  // Royal symbols and their meanings
  const royalSymbols = [
    {
      name: "The Crown (Ade)",
      description:
        "Symbolizes the divine authority and leadership of the Oluepe. Adorned with beads and ornaments that represent wisdom, prosperity, and connection to ancestors.",
      image: "/placeholder-crown.png",
    },
    {
      name: "The Staff of Office (Opa Ase)",
      description:
        "Represents the Oluepe's judicial and executive powers. The staff is a physical embodiment of the king's authority to make and enforce decisions.",
      image: "/placeholder-staff.png",
    },
    {
      name: "Royal Drums (Ilu Oba)",
      description:
        "Special drums used exclusively for royal ceremonies and communications. Different drum patterns convey specific messages and are used to announce the king's presence.",
      image: "/placeholder-drums.png",
    },
    {
      name: "Beaded Regalia",
      description:
        "Elaborate beaded garments and accessories worn by the Oluepe during ceremonies. The patterns and colors hold specific meanings related to the history and values of Epe Kingdom.",
      image: "/placeholder-regalia.png",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/placeholder-kings-hero.png"
            alt="Royal Palace of Epe"
            width={1200}
            height={500}
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex flex-col justify-center p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-xl">The Kings of Epe Kingdom</h1>
            <p className="text-white/90 max-w-xl mb-6">
              Discover the royal lineage and rich monarchical history of the Oluepe of Epe, from ancient times to the
              present day.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-white">The Monarchy of Epe</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-4">
              The institution of the Oluepe (King of Epe) represents one of the oldest and most respected traditional
              leadership structures in Lagos State. The monarchy has played a crucial role in preserving the cultural
              heritage, maintaining social cohesion, and guiding the development of Epe throughout its history.
            </p>
            <p className="text-gray-300 mb-4">
              The Oluepe serves as both a political leader and a cultural custodian, embodying the values, traditions,
              and aspirations of the people of Epe. The position combines elements of traditional Yoruba kingship with
              influences from Islamic traditions that became prominent in the region during the 19th century.
            </p>
            <p className="text-gray-300">
              Throughout the colonial period, independence, and into the modern era, the institution of the Oluepe has
              evolved while maintaining its cultural significance. Today, the Oluepe continues to play an important role
              in community leadership, cultural preservation, and development initiatives, working alongside modern
              governmental structures.
            </p>
          </div>
        </div>
      </section>

      {/* Royal Succession Timeline */}
      <section className="mb-16 relative">
        <h2 className="text-2xl font-bold mb-8 text-white text-center">Royal Succession Timeline</h2>

        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-800/50 z-0"></div>

        <div className="relative z-10 space-y-12">
          {timeline.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center">
              <div
                className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12"} mb-4 md:mb-0`}
              >
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 inline-block">
                  <h3 className="text-xl font-bold text-purple-400 mb-2">{item.period}</h3>
                  <p className="text-gray-300">{item.events}</p>
                </div>
              </div>
              <div className="bg-purple-600 rounded-full h-6 w-6 flex items-center justify-center z-10 mx-4 md:mx-0">
                <div className="bg-purple-300 rounded-full h-3 w-3"></div>
              </div>
              <div
                className={`md:w-1/2 ${index % 2 === 0 ? "md:order-2 md:pl-12 hidden md:block" : "md:pr-12 hidden md:block md:text-right"}`}
              >
                {/* This div is intentionally empty to maintain the timeline layout */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Kings */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-white">Notable Rulers of Epe</h2>
        <div className="space-y-8">
          {kings.map((king, index) => (
            <div
              key={king.id}
              className={`flex flex-col ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800`}
            >
              <div className="md:w-1/3">
                <div className="relative h-full min-h-[300px]">
                  <Image src={king.image || "/placeholder.svg"} alt={king.name} fill className="object-cover" />
                </div>
              </div>
              <div className="md:w-2/3 p-6 md:p-8">
                <div className="flex items-center mb-2">
                  <Crown className="h-5 w-5 text-purple-400 mr-2" />
                  <h3 className="text-xl font-bold text-white">{king.name}</h3>
                </div>
                <div className="flex items-center mb-4">
                  <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                  <p className="text-sm text-gray-400">{king.period}</p>
                </div>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">{king.title}</h4>
                <p className="text-gray-300 mb-4">{king.description}</p>
                <div className="mt-4">
                  <h5 className="font-medium text-white mb-2">Key Achievements:</h5>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {king.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <Award className="h-4 w-4 text-purple-400 mr-2 mt-1" />
                        <span className="text-sm text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <Link href={`/dashboard/kings/${king.id}`}>
                    <Button variant="outline" className="border-purple-600 text-white hover:bg-purple-900/30">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Royal Symbols */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-white">Royal Symbols & Regalia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {royalSymbols.map((symbol, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 text-gray-100 overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3">
                  <Image
                    src={symbol.image || "/placeholder.svg"}
                    alt={symbol.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="sm:w-2/3 p-6">
                  <CardTitle className="text-white mb-2">{symbol.name}</CardTitle>
                  <CardDescription className="text-gray-300">{symbol.description}</CardDescription>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Royal Governance */}
      <section className="mb-16">
        <div className="bg-gray-900/50 rounded-2xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-white">Royal Governance Structure</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <Image
                src="/placeholder-royal-court.png"
                alt="Royal Court of Epe"
                width={500}
                height={300}
                className="w-full rounded-xl mb-4 md:mb-0"
              />
            </div>
            <div className="md:w-1/2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-2">The Oluepe</h3>
                  <p className="text-gray-300">
                    At the apex of the traditional governance structure is the Oluepe, who serves as the paramount ruler
                    and final authority on traditional matters. The Oluepe is selected from royal lineages according to
                    established succession practices.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-2">Council of Chiefs</h3>
                  <p className="text-gray-300">
                    The Oluepe is supported by a council of chiefs, each representing different aspects of community
                    life or specific areas within the kingdom. These chiefs serve as advisors to the king and help in
                    the administration of traditional affairs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-2">Kingmakers</h3>
                  <p className="text-gray-300">
                    A select group of high-ranking chiefs known as kingmakers plays a crucial role in the selection and
                    installation of a new Oluepe when the throne becomes vacant. They ensure that succession follows
                    traditional protocols and that the selected candidate meets the required criteria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Royal Ceremonies */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-white">Royal Ceremonies & Traditions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gray-900 border-gray-800 text-gray-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Crown className="h-5 w-5 text-purple-400" />
                Coronation Ceremony
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/placeholder-coronation.png"
                alt="Coronation Ceremony"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-300">
                The installation of a new Oluepe involves elaborate rituals that span several days. The ceremony
                includes traditional rites, prayers, and public celebrations that officially transfer the authority and
                spiritual mandate to the new king.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 text-gray-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Users className="h-5 w-5 text-purple-400" />
                Royal Processions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/placeholder-procession.png"
                alt="Royal Procession"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-300">
                During important festivals and events, the Oluepe leads royal processions through Epe. These processions
                feature traditional music, dance, and displays of royal regalia, allowing the community to honor their
                king and celebrate their cultural heritage.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 text-gray-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Scroll className="h-5 w-5 text-purple-400" />
                Royal Declarations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/placeholder-declaration.png"
                alt="Royal Declaration"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-300">
                Important announcements and decisions are traditionally made by the Oluepe through formal declarations.
                These are communicated to the community through town criers or during special gatherings, maintaining
                the oral tradition of royal communications.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Visit the Palace */}
      <section>
        <div className="bg-purple-900/30 rounded-2xl p-8 text-center border border-purple-800/50">
          <h2 className="text-2xl font-bold mb-4 text-white">Visit the Royal Palace of Epe</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Experience the rich royal heritage of Epe Kingdom by visiting the palace. Learn about the monarchy's
            history, view royal artifacts, and immerse yourself in the cultural traditions that have shaped Epe for
            generations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Plan Your Visit <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/dashboard/tourism">
              <Button variant="outline" className="border-purple-600 text-white hover:bg-purple-900/30">
                Explore Tourism <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
