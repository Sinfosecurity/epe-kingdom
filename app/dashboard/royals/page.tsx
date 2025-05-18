import Image from "next/image";
import Link from "next/link";
import {
  Crown,
  Award,
  Users,
  Calendar,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RoyalsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/placeholder-kings-hero.png"
            alt="Epe Kingdom Royalty"
            width={1200}
            height={500}
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-xl">
              The Royal Heritage of Epe Kingdom
            </h1>
            <p className="text-white/90 max-w-xl mb-6">
              Discover the monarchs, chiefs, and council members who have shaped
              and continue to guide the destiny of Epe Kingdom.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Meet the Current Olu Epe
              </Button>
              <Button className="text-white bg-white/10">Royal History</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Royal Categories Tabs */}
      <section className="mb-16">
        <Tabs defaultValue="olu-epe" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-800">
              <TabsTrigger
                value="olu-epe"
                className="data-[state=active]:bg-purple-600"
              >
                <Crown className="mr-2 h-4 w-4" />
                Olu Epe of Epe
              </TabsTrigger>
              <TabsTrigger
                value="chiefs"
                className="data-[state=active]:bg-purple-600"
              >
                <Award className="mr-2 h-4 w-4" />
                Chiefs
              </TabsTrigger>
              <TabsTrigger
                value="council"
                className="data-[state=active]:bg-purple-600"
              >
                <Users className="mr-2 h-4 w-4" />
                Council Members
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Olu Epe Tab Content */}
          <TabsContent value="olu-epe" className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">
                The Olu Epe of Epe
              </h2>
              <p className="text-gray-300">
                The Olu Epe is the paramount ruler of Epe Kingdom, a position of
                great honor and responsibility. The monarchy has a rich history
                dating back generations, with each ruler contributing to the
                kingdom's legacy.
              </p>
            </div>

            {/* Current Olu Epe */}
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 mb-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="relative">
                    <Image
                      src="/placeholder-current-king.png"
                      alt="Current Olu Epe"
                      width={400}
                      height={500}
                      className="rounded-xl object-cover aspect-[3/4]"
                    />
                    <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-medium px-2.5 py-1 rounded">
                      Current Monarch
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    His Royal Majesty, Oba Shefiu Olatunji Adewale
                  </h3>
                  <p className="text-purple-400 font-medium mb-4">
                    Olu Epe of Epe Kingdom
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar className="h-5 w-5 text-purple-400" />
                      <span>Coronation: October 2006</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin className="h-5 w-5 text-purple-400" />
                      <span>Royal Palace, Epe</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">
                    His Royal Majesty, Oba Shefiu Olatunji Adewale, is the
                    current Olu Epe of Epe Kingdom. Since his coronation in
                    2006, he has been dedicated to preserving Epe's cultural
                    heritage while promoting development and prosperity for his
                    people.
                  </p>

                  <p className="text-gray-300 mb-6">
                    Under his leadership, Epe has seen significant advancements
                    in infrastructure, education, and cultural preservation. He
                    continues to be a unifying figure, bringing together the
                    diverse communities within Epe Kingdom.
                  </p>

                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Full Royal Biography
                  </Button>
                </div>
              </div>
            </div>

            {/* Past Olu Epes */}
            <h3 className="text-xl font-bold text-white mb-6">
              Past Olu Epes of Epe Kingdom
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Past Ruler 1 */}
              <Card className="bg-gray-900 border-gray-800 text-gray-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white">Oba Kosoko</CardTitle>
                  <CardDescription className="text-gray-400">
                    Ruled: 1851 - 1872
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder-king-kosoko.png"
                    alt="Oba Kosoko"
                    width={300}
                    height={400}
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-gray-300">
                    Oba Kosoko was a prominent figure who established Epe as a
                    significant settlement after leaving Lagos. His leadership
                    laid the foundation for Epe's growth.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>

              {/* Past Ruler 2 */}
              <Card className="bg-gray-900 border-gray-800 text-gray-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white">
                    Oba Olufolarin Ogunsanwo
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Ruled: 1985 - 2006
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder-king-olufolarin.png"
                    alt="Oba Olufolarin Ogunsanwo"
                    width={300}
                    height={400}
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-gray-300">
                    Oba Olufolarin Ogunsanwo was known for his wisdom and
                    diplomatic skills. He modernized many aspects of Epe's
                    governance and cultural practices.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>

              {/* Past Ruler 3 */}
              <Card className="bg-gray-900 border-gray-800 text-gray-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white">
                    Oba Shefiu Adewale
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Ruled: 2007 - present
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder-king-kamorudeen.png"
                    alt="Oba Shefiu Adewale"
                    width={300}
                    height={400}
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-gray-300">
                    Oba Shefiu Adewale was a progressive leader who focused on
                    education and economic development. His reign saw increased
                    recognition of Epe's cultural significance.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </div>

            {/* Royal Regalia Section */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-white mb-6">
                Royal Regalia & Symbols
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-gray-900 border-gray-800 text-gray-100">
                  <CardContent className="pt-6">
                    <Image
                      src="/placeholder-crown.png"
                      alt="Royal Crown"
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h4 className="font-medium text-white mb-2">
                      The Royal Crown
                    </h4>
                    <p className="text-sm text-gray-300">
                      Symbol of authority and divine connection, worn during
                      official ceremonies.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800 text-gray-100">
                  <CardContent className="pt-6">
                    <Image
                      src="/placeholder-staff.png"
                      alt="Royal Staff"
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h4 className="font-medium text-white mb-2">
                      The Royal Staff
                    </h4>
                    <p className="text-sm text-gray-300">
                      Represents the monarch's authority to lead and make
                      judgments.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800 text-gray-100">
                  <CardContent className="pt-6">
                    <Image
                      src="/placeholder-drums.png"
                      alt="Royal Drums"
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h4 className="font-medium text-white mb-2">Royal Drums</h4>
                    <p className="text-sm text-gray-300">
                      Used to announce the king's presence and during important
                      ceremonies.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800 text-gray-100">
                  <CardContent className="pt-6">
                    <Image
                      src="/placeholder-regalia.png"
                      alt="Royal Regalia"
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h4 className="font-medium text-white mb-2">
                      Royal Garments
                    </h4>
                    <p className="text-sm text-gray-300">
                      Elaborate clothing that signifies the monarch's status and
                      cultural heritage.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Chiefs Tab Content */}
          <TabsContent value="chiefs" className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Chiefs of Epe Kingdom
              </h2>
              <p className="text-gray-300">
                The chiefs of Epe Kingdom serve as advisors to the Olu Epe and
                play crucial roles in governance, cultural preservation, and
                community leadership. Each chief holds a specific title with
                associated responsibilities.
              </p>
            </div>

            {/* High Chiefs */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Award className="mr-2 h-5 w-5 text-purple-400" />
                High Chiefs
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Chief 1 */}
                <Card className="bg-gray-900 border-gray-800 text-gray-100">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Image
                        src="/placeholder-royal-court.png"
                        alt="Chief Oluwole Adeyemi"
                        width={100}
                        height={100}
                        className="rounded-full w-20 h-20 object-cover"
                      />
                      <div>
                        <h4 className="font-medium text-white">
                          Chief Oluwole Adeyemi
                        </h4>
                        <p className="text-purple-400 text-sm mb-2">
                          Olisa of Epe Kingdom
                        </p>
                        <p className="text-sm text-gray-300">
                          Prime minister and head of the council of chiefs,
                          advising the Olu Epe on matters of governance.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Chief 2 */}
                <Card className="bg-gray-900 border-gray-800 text-gray-100">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Image
                        src="/placeholder-coronation.png"
                        alt="Chief Babatunde Ogunlana"
                        width={100}
                        height={100}
                        className="rounded-full w-20 h-20 object-cover"
                      />
                      <div>
                        <h4 className="font-medium text-white">
                          Chief Babatunde Ogunlana
                        </h4>
                        <p className="text-purple-400 text-sm mb-2">
                          Balogun of Epe
                        </p>
                        <p className="text-sm text-gray-300">
                          Traditional war chief responsible for security matters
                          and defense of the kingdom.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Chief 3 */}
                <Card className="bg-gray-900 border-gray-800 text-gray-100">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Image
                        src="/placeholder-procession.png"
                        alt="Chief Adebisi Adekunle"
                        width={100}
                        height={100}
                        className="rounded-full w-20 h-20 object-cover"
                      />
                      <div>
                        <h4 className="font-medium text-white">
                          Chief Adebisi Adekunle
                        </h4>
                        <p className="text-purple-400 text-sm mb-2">
                          Iyaloja of Epe
                        </p>
                        <p className="text-sm text-gray-300">
                          Head of market women and trade, overseeing commercial
                          activities in the kingdom.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Chief 4 */}
                <Card className="bg-gray-900 border-gray-800 text-gray-100">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Image
                        src="/placeholder-declaration.png"
                        alt="Chief Ibrahim Olatunji"
                        width={100}
                        height={100}
                        className="rounded-full w-20 h-20 object-cover"
                      />
                      <div>
                        <h4 className="font-medium text-white">
                          Chief Ibrahim Olatunji
                        </h4>
                        <p className="text-purple-400 text-sm mb-2">
                          Odofin of Epe
                        </p>
                        <p className="text-sm text-gray-300">
                          Royal treasurer responsible for the kingdom's finances
                          and economic affairs.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Chief 5 */}
                <Card className="bg-gray-900 border-gray-800 text-gray-100">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Image
                        src="/placeholder-fish-market.png"
                        alt="Chief Folashade Ogunleye"
                        width={100}
                        height={100}
                        className="rounded-full w-20 h-20 object-cover"
                      />
                      <div>
                        <h4 className="font-medium text-white">
                          Chief Folashade Ogunleye
                        </h4>
                        <p className="text-purple-400 text-sm mb-2">
                          Apena of Epe
                        </p>
                        <p className="text-sm text-gray-300">
                          Cultural custodian responsible for preserving
                          traditions and conducting ceremonies.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Chief 6 */}
                <Card className="bg-gray-900 border-gray-800 text-gray-100">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Image
                        src="/placeholder-mosque.png"
                        alt="Chief Mustapha Adebayo"
                        width={100}
                        height={100}
                        className="rounded-full w-20 h-20 object-cover"
                      />
                      <div>
                        <h4 className="font-medium text-white">
                          Chief Mustapha Adebayo
                        </h4>
                        <p className="text-purple-400 text-sm mb-2">
                          Imam of Epe
                        </p>
                        <p className="text-sm text-gray-300">
                          Religious leader providing spiritual guidance and
                          leading Islamic prayers.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quarter Chiefs */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Award className="mr-2 h-5 w-5 text-purple-400" />
                Quarter Chiefs
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Quarter 1 */}
                <Card className="bg-gray-900 border-gray-800 text-gray-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white">
                      Oke-Balogun Quarter
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Northern District
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                        <p className="text-sm text-gray-300">
                          Chief Adewale Olusegun - Baale
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                        <p className="text-sm text-gray-300">
                          Chief Abiodun Olaiya - Deputy
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                        <p className="text-sm text-gray-300">
                          Chief Folake Adeniyi - Women's Leader
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quarter 2 */}
                <Card className="bg-gray-900 border-gray-800 text-gray-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white">
                      Isale-Eko Quarter
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Central District
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                        <p className="text-sm text-gray-300">
                          Chief Tajudeen Olawale - Baale
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                        <p className="text-sm text-gray-300">
                          Chief Rasheed Ogunbiyi - Deputy
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                        <p className="text-sm text-gray-300">
                          Chief Aminat Badmus - Women's Leader
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quarter 3 */}
                <Card className="bg-gray-900 border-gray-800 text-gray-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white">
                      Ita-Opo Quarter
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Waterfront District
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                        <p className="text-sm text-gray-300">
                          Chief Nurudeen Lawal - Baale
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                        <p className="text-sm text-gray-300">
                          Chief Kazeem Oloyede - Deputy
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                        <p className="text-sm text-gray-300">
                          Chief Bolanle Adekoya - Women's Leader
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Chieftaincy Process */}
            <div className="mt-12 bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">
                The Chieftaincy Process
              </h3>
              <p className="text-gray-300 mb-6">
                In Epe Kingdom, chieftaincy titles are conferred through a
                traditional process that honors merit, lineage, and service to
                the community. The Olu Epe, in consultation with existing
                chiefs, selects individuals worthy of these prestigious
                positions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-4">
                    1
                  </div>
                  <h4 className="font-medium text-white mb-2">Nomination</h4>
                  <p className="text-sm text-gray-300">
                    Candidates are nominated based on their contributions to the
                    community and character.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-4">
                    2
                  </div>
                  <h4 className="font-medium text-white mb-2">Screening</h4>
                  <p className="text-sm text-gray-300">
                    The council of chiefs evaluates candidates' suitability and
                    background.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-4">
                    3
                  </div>
                  <h4 className="font-medium text-white mb-2">Approval</h4>
                  <p className="text-sm text-gray-300">
                    The Olu Epe gives final approval after consultation with
                    spiritual leaders.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-4">
                    4
                  </div>
                  <h4 className="font-medium text-white mb-2">Installation</h4>
                  <p className="text-sm text-gray-300">
                    A ceremonial installation is performed with traditional
                    rites and celebrations.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Council Members Tab Content */}
          <TabsContent value="council" className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Epe Kingdom Council
              </h2>
              <p className="text-gray-300">
                The Epe Kingdom Council serves as the governing body that
                assists the Olu Epe in administration and decision-making.
                Council members represent various interests and sectors of the
                community.
              </p>
            </div>

            {/* Executive Council */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Users className="mr-2 h-5 w-5 text-purple-400" />
                Executive Council
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Council Member 1 - Chairman */}
                <Card className="bg-gray-900 border-gray-800 text-gray-100 md:col-span-3">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <Image
                        src="/placeholder-current-king.png"
                        alt="Oba Kamorudeen Animashaun"
                        width={150}
                        height={150}
                        className="rounded-xl w-32 h-32 object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-white text-lg">
                          Oba Kamorudeen Animashaun
                        </h4>
                        <p className="text-purple-400 font-medium mb-2">
                          Chairman, Epe Kingdom Council
                        </p>
                        <p className="text-gray-300">
                          As the Olu Epe of Epe Kingdom, His Royal Majesty
                          serves as the Chairman of the Epe Kingdom Council,
                          providing leadership and final authority on council
                          decisions. The council operates under his guidance to
                          ensure the welfare and development of Epe Kingdom.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Council Member 2 */}
                <Card className="bg-gray-900 border-gray-800 text-gray-100">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <Image
                        src="/placeholder-royal-court.png"
                        alt="Chief Oluwole Adeyemi"
                        width={100}
                        height={100}
                        className="rounded-full w-24 h-24 object-cover mb-4"
                      />
                      <h4 className="font-medium text-white">
                        Chief Oluwole Adeyemi
                      </h4>
                      <p className="text-purple-400 text-sm mb-2">
                        Vice Chairman
                      </p>
                      <p className="text-sm text-gray-300">
                        Serves as the Olisa of Epe and second-in-command on the
                        council, coordinating affairs in the monarch's absence.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Council Member 3 */}
                <Card className="bg-gray-900 border-gray-800 text-gray-100">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <Image
                        src="/placeholder-declaration.png"
                        alt="Chief Ibrahim Olatunji"
                        width={100}
                        height={100}
                        className="rounded-full w-24 h-24 object-cover mb-4"
                      />
                      <h4 className="font-medium text-white">
                        Chief Ibrahim Olatunji
                      </h4>
                      <p className="text-purple-400 text-sm mb-2">Secretary</p>
                      <p className="text-sm text-gray-300">
                        Maintains records of council proceedings and
                        communications, serving as the administrative backbone.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Council Member 4 */}
                <Card className="bg-gray-900 border-gray-800 text-gray-100">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <Image
                        src="/placeholder-coronation.png"
                        alt="Chief Babatunde Ogunlana"
                        width={100}
                        height={100}
                        className="rounded-full w-24 h-24 object-cover mb-4"
                      />
                      <h4 className="font-medium text-white">
                        Chief Babatunde Ogunlana
                      </h4>
                      <p className="text-purple-400 text-sm mb-2">
                        Security Advisor
                      </p>
                      <p className="text-sm text-gray-300">
                        Oversees security matters and liaises with law
                        enforcement to ensure peace in the kingdom.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Council Committees */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-white mb-6">
                Council Committees
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Committee 1 */}
                <Card className="bg-gray-900 border-gray-800 text-gray-100">
                  <CardHeader>
                    <CardTitle className="text-white">
                      Cultural Affairs Committee
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                        <div>
                          <p className="text-gray-200 font-medium">
                            Chief Adebisi Adekunle
                          </p>
                          <p className="text-sm text-gray-300">
                            Committee Chair
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                        <div>
                          <p className="text-gray-200 font-medium">
                            Mr. Olalekan Salami
                          </p>
                          <p className="text-sm text-gray-300">
                            Cultural Historian
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                        <div>
                          <p className="text-gray-200 font-medium">
                            Mrs. Funmilayo Adegoke
                          </p>
                          <p className="text-sm text-gray-300">
                            Festival Coordinator
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-800">
                      <p className="text-sm text-gray-300">
                        Responsible for preserving cultural heritage, organizing
                        traditional festivals, and promoting Epe's cultural
                        identity.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Committee 2 */}
                <Card className="bg-gray-900 border-gray-800 text-gray-100">
                  <CardHeader>
                    <CardTitle className="text-white">
                      Development Committee
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                        <div>
                          <p className="text-gray-200 font-medium">
                            Chief Mustapha Adebayo
                          </p>
                          <p className="text-sm text-gray-300">
                            Committee Chair
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                        <div>
                          <p className="text-gray-200 font-medium">
                            Mr. Adewale Johnson
                          </p>
                          <p className="text-sm text-gray-300">
                            Infrastructure Expert
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                        <div>
                          <p className="text-gray-200 font-medium">
                            Mrs. Bisi Ogunleye
                          </p>
                          <p className="text-sm text-gray-300">
                            Education Advocate
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-800">
                      <p className="text-sm text-gray-300">
                        Focuses on infrastructure development, educational
                        advancement, and economic growth initiatives for Epe
                        Kingdom.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Committee 3 */}
                <Card className="bg-gray-900 border-gray-800 text-gray-100">
                  <CardHeader>
                    <CardTitle className="text-white">
                      Tourism & External Affairs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                        <div>
                          <p className="text-gray-200 font-medium">
                            Chief Folashade Ogunleye
                          </p>
                          <p className="text-sm text-gray-300">
                            Committee Chair
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                        <div>
                          <p className="text-gray-200 font-medium">
                            Mr. Tunde Bakare
                          </p>
                          <p className="text-sm text-gray-300">
                            Tourism Consultant
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                        <div>
                          <p className="text-gray-200 font-medium">
                            Mrs. Kemi Adelaja
                          </p>
                          <p className="text-sm text-gray-300">
                            Public Relations
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-800">
                      <p className="text-sm text-gray-300">
                        Promotes Epe as a tourist destination, manages external
                        relations, and coordinates with government agencies.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Committee 4 */}
                <Card className="bg-gray-900 border-gray-800 text-gray-100">
                  <CardHeader>
                    <CardTitle className="text-white">
                      Youth & Community Affairs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                        <div>
                          <p className="text-gray-200 font-medium">
                            Chief Tajudeen Olawale
                          </p>
                          <p className="text-sm text-gray-300">
                            Committee Chair
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                        <div>
                          <p className="text-gray-200 font-medium">
                            Mr. Segun Adebayo
                          </p>
                          <p className="text-sm text-gray-300">
                            Youth Coordinator
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                        <div>
                          <p className="text-gray-200 font-medium">
                            Mrs. Toyin Oladipo
                          </p>
                          <p className="text-sm text-gray-300">
                            Community Organizer
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-800">
                      <p className="text-sm text-gray-300">
                        Addresses youth development, community welfare, and
                        social programs to benefit Epe residents.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Council Functions */}
            <div className="mt-12 bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">
                Council Functions & Responsibilities
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-white mb-3 flex items-center">
                    <div className="w-2 h-6 bg-purple-600 mr-3 rounded-sm"></div>
                    Governance & Administration
                  </h4>
                  <ul className="space-y-2 pl-5">
                    <li className="text-gray-300 text-sm list-disc">
                      Advising the Olu Epe on governance matters
                    </li>
                    <li className="text-gray-300 text-sm list-disc">
                      Resolving community disputes and conflicts
                    </li>
                    <li className="text-gray-300 text-sm list-disc">
                      Implementing royal decrees and policies
                    </li>
                    <li className="text-gray-300 text-sm list-disc">
                      Maintaining law and order within the kingdom
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-white mb-3 flex items-center">
                    <div className="w-2 h-6 bg-purple-600 mr-3 rounded-sm"></div>
                    Cultural Preservation
                  </h4>
                  <ul className="space-y-2 pl-5">
                    <li className="text-gray-300 text-sm list-disc">
                      Safeguarding traditional customs and practices
                    </li>
                    <li className="text-gray-300 text-sm list-disc">
                      Organizing cultural festivals and ceremonies
                    </li>
                    <li className="text-gray-300 text-sm list-disc">
                      Documenting and preserving Epe's history
                    </li>
                    <li className="text-gray-300 text-sm list-disc">
                      Promoting cultural education among youth
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-white mb-3 flex items-center">
                    <div className="w-2 h-6 bg-purple-600 mr-3 rounded-sm"></div>
                    Community Development
                  </h4>
                  <ul className="space-y-2 pl-5">
                    <li className="text-gray-300 text-sm list-disc">
                      Initiating and supporting development projects
                    </li>
                    <li className="text-gray-300 text-sm list-disc">
                      Advocating for infrastructure improvements
                    </li>
                    <li className="text-gray-300 text-sm list-disc">
                      Promoting education and healthcare initiatives
                    </li>
                    <li className="text-gray-300 text-sm list-disc">
                      Supporting economic opportunities for residents
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-white mb-3 flex items-center">
                    <div className="w-2 h-6 bg-purple-600 mr-3 rounded-sm"></div>
                    External Relations
                  </h4>
                  <ul className="space-y-2 pl-5">
                    <li className="text-gray-300 text-sm list-disc">
                      Representing Epe in government and public forums
                    </li>
                    <li className="text-gray-300 text-sm list-disc">
                      Building relationships with neighboring communities
                    </li>
                    <li className="text-gray-300 text-sm list-disc">
                      Attracting tourism and investment to Epe
                    </li>
                    <li className="text-gray-300 text-sm list-disc">
                      Promoting Epe's interests at state and national levels
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Call to Action */}
      <section className="mb-12">
        <div className="bg-purple-900/30 rounded-2xl p-8 border border-purple-800/50 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Experience Epe's Royal Heritage
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Visit the Royal Palace, attend traditional ceremonies, and immerse
            yourself in the rich cultural heritage of Epe Kingdom. Learn about
            our history and meet the people who preserve our traditions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Plan Your Visit
            </Button>
            <Button
              variant="outline"
              className="border-purple-600 text-purple-400 hover:bg-purple-900/50"
            >
              View Royal Calendar
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
