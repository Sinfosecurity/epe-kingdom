import Image from "next/image"
import { ArrowRight, Mail, Phone, MapPin, Heart, Users, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  // Team members data
  const teamMembers = [
    {
      name: "Adewale Johnson",
      role: "Project Lead",
      image: "/placeholder-gawjo.png",
      bio: "Cultural historian with over 15 years of experience documenting Nigerian heritage.",
    },
    {
      name: "Funmilayo Adeyemi",
      role: "Content Director",
      image: "/placeholder-crpsv.png",
      bio: "Specialist in Yoruba cultural documentation and digital preservation of heritage.",
    },
    {
      name: "Ibrahim Olatunji",
      role: "Research Coordinator",
      image: "/placeholder-vnd3l.png",
      bio: "Expert in Epe's Islamic history and traditional governance structures.",
    },
    {
      name: "Tolu Adeleke",
      role: "Technical Lead",
      image: "/placeholder-m6jqq.png",
      bio: "Web developer focused on creating accessible digital platforms for cultural heritage.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/placeholder-6mbs5.png"
            alt="Epe Kingdom Project Team"
            width={1200}
            height={500}
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex flex-col justify-center p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-xl">About Epe Kingdom Project</h1>
            <p className="text-white/90 max-w-xl mb-6">
              Preserving and celebrating the rich cultural heritage of Epe for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-white">Our Mission & Vision</h2>

          <div className="bg-gray-900/50 rounded-2xl p-6 md:p-8 border border-gray-800 mb-8">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Mission</h3>
            <p className="text-gray-300 mb-4">
              The Epe Kingdom project aims to document, preserve, and promote the rich cultural heritage, history, and
              traditions of Epe. We are committed to creating a comprehensive digital repository that showcases
              everything related to Epe - from its royal lineage and festivals to its Islamic heritage, health centers,
              and tourist attractions.
            </p>
            <p className="text-gray-300">
              By making this knowledge accessible to everyone, we hope to foster a deeper appreciation for Epe's
              contributions to Nigerian culture and ensure that its unique heritage is preserved for future generations.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-2xl p-6 md:p-8 border border-gray-800">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Vision</h3>
            <p className="text-gray-300 mb-4">
              We envision a world where the cultural heritage of Epe is celebrated globally, where its history is
              studied in educational institutions, and where its traditions continue to thrive in contemporary society.
            </p>
            <p className="text-gray-300">
              Our vision is to create the most comprehensive and authoritative resource on Epe Kingdom, serving as a
              bridge between past traditions and future innovations, and connecting the people of Epe with their
              diaspora and the wider world.
            </p>
          </div>
        </div>
      </section>

      {/* Project Goals */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-white">Project Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gray-900 border-gray-800 text-gray-100">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-white">
                <Globe className="h-5 w-5 text-purple-400" />
                Digital Preservation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Create a comprehensive digital archive of Epe's cultural heritage, historical documents, oral histories,
                and visual artifacts to ensure their preservation for future generations.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 text-gray-100">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-white">
                <Users className="h-5 w-5 text-purple-400" />
                Community Engagement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Foster a sense of pride and ownership among the people of Epe by involving them in the documentation
                process and creating platforms for sharing their stories and experiences.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 text-gray-100">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-white">
                <Heart className="h-5 w-5 text-purple-400" />
                Cultural Promotion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Promote Epe's cultural heritage to a global audience, highlighting its unique traditions, festivals,
                crafts, and contributions to Nigerian culture and history.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Approach */}
      <section className="mb-16">
        <div className="bg-gray-900/50 rounded-2xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-white">Our Approach</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <Image
                src="/placeholder-596j6.png"
                alt="Research Process"
                width={500}
                height={300}
                className="w-full rounded-xl mb-4 md:mb-0"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-300 mb-4">
                Our approach combines rigorous historical research with community participation. We work closely with
                local historians, traditional rulers, community elders, and cultural institutions to ensure the accuracy
                and authenticity of our content.
              </p>
              <p className="text-gray-300 mb-4">
                We employ modern digital technologies to document and present Epe's heritage in engaging and accessible
                formats, including interactive timelines, high-quality photography, video documentaries, and oral
                history recordings.
              </p>
              <p className="text-gray-300">
                We are committed to ethical documentation practices that respect cultural sensitivities and intellectual
                property rights, ensuring that the communities of Epe maintain ownership of their cultural heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-white">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 text-gray-100">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-purple-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Partners & Supporters */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-white">Our Partners & Supporters</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <Image
                src="/placeholder-3kqv4.png"
                alt="Epe Cultural Heritage Foundation"
                width={100}
                height={100}
                className="mb-4 opacity-80 hover:opacity-100 transition-opacity"
              />
              <p className="text-sm text-center text-gray-400">Epe Cultural Heritage Foundation</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/placeholder.svg?height=100&width=100&query=government ministry logo"
                alt="Lagos State Ministry of Tourism"
                width={100}
                height={100}
                className="mb-4 opacity-80 hover:opacity-100 transition-opacity"
              />
              <p className="text-sm text-center text-gray-400">Lagos State Ministry of Tourism</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/placeholder.svg?height=100&width=100&query=university logo"
                alt="University of Lagos"
                width={100}
                height={100}
                className="mb-4 opacity-80 hover:opacity-100 transition-opacity"
              />
              <p className="text-sm text-center text-gray-400">University of Lagos</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/placeholder.svg?height=100&width=100&query=tech company logo"
                alt="Digital Heritage Nigeria"
                width={100}
                height={100}
                className="mb-4 opacity-80 hover:opacity-100 transition-opacity"
              />
              <p className="text-sm text-center text-gray-400">Digital Heritage Nigeria</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Contribute */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-white">How You Can Contribute</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gray-900 border-gray-800 text-gray-100">
            <CardHeader>
              <CardTitle className="text-white">Share Your Knowledge</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                If you have historical information, photographs, documents, or stories related to Epe, we would love to
                hear from you. Your contributions help make our archive more comprehensive.
              </p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Submit Content</Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 text-gray-100">
            <CardHeader>
              <CardTitle className="text-white">Volunteer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Join our team of volunteers who help with research, content creation, translation, community outreach,
                and technical development. We welcome diverse skills and perspectives.
              </p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Become a Volunteer</Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 text-gray-100">
            <CardHeader>
              <CardTitle className="text-white">Support the Project</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Your financial support helps us continue our work of documenting and preserving Epe's cultural heritage.
                All contributions, big or small, make a difference.
              </p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Support Us</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section>
        <div className="bg-purple-900/30 rounded-2xl p-8 border border-purple-800/50">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-purple-800/50 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-purple-300" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Email Us</h3>
              <p className="text-gray-300">contact@epekingdom.org</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-purple-800/50 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-purple-300" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+234 (0) 123 456 7890</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-purple-800/50 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-purple-300" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">Epe Heritage Center, Epe, Lagos State, Nigeria</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
