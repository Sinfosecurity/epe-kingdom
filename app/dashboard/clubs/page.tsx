import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Calendar, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Club data
const clubs = [
  {
    id: "young-brothers",
    name: "The Young Brothers Club",
    founded: "1985",
    description:
      "A brotherhood of young men dedicated to community service, personal development, and preserving Epe's cultural heritage.",
    members: "120+",
    activities: [
      "Community outreach",
      "Youth mentorship",
      "Cultural preservation",
      "Sports tournaments",
    ],
    meetingLocation: "Epe Town Hall, every last Saturday",
    image: "/epe-09.jpg",
    contactEmail: "youngbrothers@epe-kingdom.com",
  },
  {
    id: "royal-bundles",
    name: "Royal Bundles Club",
    founded: "1972",
    description:
      "An exclusive club of distinguished individuals committed to supporting royal initiatives and promoting Epe's development.",
    members: "75",
    activities: [
      "Royal ceremonies support",
      "Educational scholarships",
      "Heritage preservation",
      "Annual royal gala",
    ],
    meetingLocation: "Royal Palace Annex, first Sunday monthly",
    image: "/epe-10.jpg",
    contactEmail: "royalbundles@epe-kingdom.com",
  },
  {
    id: "epe-women-association",
    name: "Epe Women's Association",
    founded: "1968",
    description:
      "A powerful collective of women dedicated to empowerment, entrepreneurship, and preserving the cultural values of Epe.",
    members: "200+",
    activities: [
      "Women's empowerment workshops",
      "Microfinance initiatives",
      "Cultural exhibitions",
      "Health awareness campaigns",
    ],
    meetingLocation: "Epe Community Center, second Saturday monthly",
    image: "/placeholder-7qd1g.png",
    contactEmail: "epewomen@epe-kingdom.com",
  },
  {
    id: "epe-women-associations",
    name: "Diamond Club",
    founded: "1968",
    description:
      "A powerful collective of women dedicated to empowerment, entrepreneurship, and preserving the cultural values of Epe.",
    members: "200+",
    activities: [
      "Women's empowerment workshops",
      "Microfinance initiatives",
      "Cultural exhibitions",
      "Health awareness campaigns",
    ],
    meetingLocation: "Epe Community Center, second Saturday monthly",
    image: "/placeholder-7qd1g.png",
    contactEmail: "epewomen@epe-kingdom.com",
  },
  {
    id: "epe-youth-forum",
    name: "Epe Youth Forum",
    founded: "2005",
    description:
      "A vibrant platform for Epe youths to engage in community development, leadership training, and cultural exchange.",
    members: "150+",
    activities: [
      "Leadership development",
      "Community service",
      "Cultural festivals",
      "Educational programs",
    ],
    meetingLocation: "Epe Youth Center, every Friday evening",
    image:
      "/placeholder.svg?height=300&width=500&query=diverse group of young African people in casual and traditional clothing",
    contactEmail: "epeyouth@epe-kingdom.com",
  },
  {
    id: "epe-fishermen-guild",
    name: "Epe Fishermen's Guild",
    founded: "1950",
    description:
      "The oldest professional association in Epe, representing fishermen and preserving traditional fishing practices.",
    members: "90",
    activities: [
      "Sustainable fishing practices",
      "Annual fishing festival",
      "Apprenticeship programs",
      "Environmental conservation",
    ],
    meetingLocation: "Epe Waterfront, last Thursday monthly",
    image:
      "/placeholder.svg?height=300&width=500&query=fishermen with traditional fishing equipment by a lake",
    contactEmail: "fishermenguild@epe-kingdom.com",
  },
  {
    id: "epe-cultural-preservation",
    name: "Epe Cultural Preservation Society",
    founded: "1990",
    description:
      "Dedicated to documenting, preserving, and promoting the rich cultural heritage and traditions of Epe Kingdom.",
    members: "65",
    activities: [
      "Cultural documentation",
      "Museum curation",
      "Traditional arts workshops",
      "Heritage education",
    ],
    meetingLocation: "Epe Heritage Center, first Saturday monthly",
    image:
      "/placeholder.svg?height=300&width=500&query=traditional African artifacts and cultural items display",
    contactEmail: "culturalsociety@epe-kingdom.com",
  },
  {
    id: "epe-cultural-preservations",
    name: "Epe Cultural Preservation Society",
    founded: "1990",
    description:
      "Dedicated to documenting, preserving, and promoting the rich cultural heritage and traditions of Epe Kingdom.",
    members: "65",
    activities: [
      "Cultural documentation",
      "Museum curation",
      "Traditional arts workshops",
      "Heritage education",
    ],
    meetingLocation: "Epe Heritage Center, first Saturday monthly",
    image:
      "/placeholder.svg?height=300&width=500&query=traditional African artifacts and cultural items display",
    contactEmail: "culturalsociety@epe-kingdom.com",
  },
];

export default function ClubsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=1200&query=diverse group of people in traditional Nigerian attire at a community gathering"
            alt="Epe Kingdom Clubs"
            width={1200}
            height={400}
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-xl">
              Epe Kingdom Clubs & Associations
            </h1>
            <p className="text-white/90 max-w-xl mb-6">
              Discover the vibrant community organizations that preserve our
              heritage, foster unity, and drive development in Epe Kingdom.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 w-fit">
              Join a Club
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Community Through Unity
          </h2>
          <p className="text-gray-300 mb-6">
            Epe Kingdom's clubs and associations form the backbone of our
            community, preserving our cultural heritage while driving social and
            economic development. These organizations bring together people from
            all walks of life, united by their love for Epe and commitment to
            its prosperity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
              <Users className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-gray-200">700+ Members</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
              <Calendar className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-gray-200">50+ Annual Events</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
              <MapPin className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-gray-200">6 Meeting Locations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Clubs Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-white">Featured Clubs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubs.map((club) => (
            <Card
              key={club.id}
              className="bg-gray-900 border-gray-800 text-gray-100 overflow-hidden flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={club.image || "/placeholder.svg"}
                  alt={club.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-white">{club.name}</CardTitle>
                <CardDescription className="text-gray-400">
                  Founded in {club.founded} • {club.members} members
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-gray-300 mb-4">{club.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-200">
                    Key Activities:
                  </h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {club.activities.slice(0, 3).map((activity, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="border-t border-gray-800 pt-4 flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-400">
                  <Mail className="h-4 w-4 mr-1 text-purple-400" />
                  Contact
                </div>
                <Link
                  href={`/dashboard/clubs/${club.id}`}
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Join a Club CTA */}
      {/* <section>
        <div className="bg-gradient-to-r from-purple-900/30 to-gray-900/30 rounded-2xl p-8 border border-purple-800/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Join a Club Today
            </h2>
            <p className="text-gray-300 mb-6">
              Becoming a member of an Epe Kingdom club is a wonderful way to
              connect with your community, preserve our cultural heritage, and
              contribute to the development of our kingdom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Apply for Membership
              </Button>
              <Button
                variant="outline"
                className="border-purple-600 text-purple-400 hover:bg-purple-900/20"
              >
                Start a New Club
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
