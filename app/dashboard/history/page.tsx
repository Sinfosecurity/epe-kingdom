import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/placeholder.svg?height=500&width=1200&query=ancient african kingdom with traditional buildings and palm trees"
            alt="Historical Epe"
            width={1200}
            height={500}
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex flex-col justify-center p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-xl">
              The Rich History of Epe Kingdom
            </h1>
            <p className="text-white/90 max-w-xl mb-6">
              Journey through time and discover the origins, evolution, and
              cultural heritage of Epe Kingdom.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-white">
            Origins and Foundation
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-4">
              Epe, a historic town in Lagos State, Nigeria, has a rich and
              complex history that dates back several centuries. The town's
              strategic location along the Lagos Lagoon made it an important
              settlement for trade, fishing, and agriculture.
            </p>
            <p className="text-gray-300 mb-4">
              The original settlers of Epe were primarily the Ijebu people, a
              subgroup of the Yoruba ethnic group. Historical accounts suggest
              that Epe was founded around the 18th century, though some oral
              traditions place its origins even earlier.
            </p>
            <p className="text-gray-300 mb-4">
              The name "Epe" is believed to have originated from the Yoruba
              phrase "Epe omi," which translates to "where the water meets the
              land," reflecting its geographical position as a coastal
              settlement.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-16 relative">
        <h2 className="text-2xl font-bold mb-8 text-white text-center">
          Historical Timeline
        </h2>

        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-800/50 z-0"></div>

        <div className="relative z-10 space-y-12">
          {/* Timeline Item 1 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 inline-block">
                <h3 className="text-xl font-bold text-purple-400 mb-2">
                  18th Century
                </h3>
                <p className="text-gray-300">
                  Founding of Epe by Ijebu settlers. The settlement became known
                  for fishing and agriculture, with its strategic location on
                  the Lagos Lagoon making it an important trading post.
                </p>
              </div>
            </div>
            <div className="bg-purple-600 rounded-full h-6 w-6 flex items-center justify-center z-10 mx-4 md:mx-0">
              <div className="bg-purple-300 rounded-full h-3 w-3"></div>
            </div>
            <div className="md:w-1/2 md:pl-12 hidden md:block">
              <Image
                src="/placeholder.svg?height=200&width=300&query=traditional yoruba fishing village 18th century"
                alt="Early Epe Settlement"
                width={300}
                height={200}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 hidden md:block md:text-right">
              <Image
                src="/placeholder.svg?height=200&width=300&query=19th century african slave trade resistance"
                alt="Epe During Colonial Era"
                width={300}
                height={200}
                className="rounded-xl shadow-lg ml-auto"
              />
            </div>
            <div className="bg-purple-600 rounded-full h-6 w-6 flex items-center justify-center z-10 mx-4 md:mx-0">
              <div className="bg-purple-300 rounded-full h-3 w-3"></div>
            </div>
            <div className="md:w-1/2 md:pl-12 mb-4 md:mb-0">
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 inline-block">
                <h3 className="text-xl font-bold text-purple-400 mb-2">
                  1851-1854
                </h3>
                <p className="text-gray-300">
                  Epe gained prominence as a place of refuge for Kosoko, a
                  deposed king of Lagos, and his followers after the British
                  bombardment of Lagos. This influx of refugees significantly
                  increased the population and influence of Epe.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 inline-block">
                <h3 className="text-xl font-bold text-purple-400 mb-2">1892</h3>
                <p className="text-gray-300">
                  Epe came under British colonial rule as part of the Lagos
                  Colony. This period marked significant changes in governance,
                  trade patterns, and cultural practices in the region.
                </p>
              </div>
            </div>
            <div className="bg-purple-600 rounded-full h-6 w-6 flex items-center justify-center z-10 mx-4 md:mx-0">
              <div className="bg-purple-300 rounded-full h-3 w-3"></div>
            </div>
            <div className="md:w-1/2 md:pl-12 hidden md:block">
              <Image
                src="/placeholder.svg?height=200&width=300&query=british colonial administration in nigeria 19th century"
                alt="British Colonial Era"
                width={300}
                height={200}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Timeline Item 4 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 hidden md:block md:text-right">
              <Image
                src="/placeholder.svg?height=200&width=300&query=nigerian independence celebration 1960"
                alt="Nigerian Independence"
                width={300}
                height={200}
                className="rounded-xl shadow-lg ml-auto"
              />
            </div>
            <div className="bg-purple-600 rounded-full h-6 w-6 flex items-center justify-center z-10 mx-4 md:mx-0">
              <div className="bg-purple-300 rounded-full h-3 w-3"></div>
            </div>
            <div className="md:w-1/2 md:pl-12 mb-4 md:mb-0">
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 inline-block">
                <h3 className="text-xl font-bold text-purple-400 mb-2">1960</h3>
                <p className="text-gray-300">
                  Nigeria gained independence from British colonial rule. Epe,
                  as part of Lagos State, entered a new era of self-governance
                  and development within the newly independent nation.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Item 5 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 inline-block">
                <h3 className="text-xl font-bold text-purple-400 mb-2">1967</h3>
                <p className="text-gray-300">
                  Epe became part of the newly created Lagos State following
                  Nigeria's state reorganization. This administrative change
                  further integrated Epe into the broader Lagos metropolitan
                  area.
                </p>
              </div>
            </div>
            <div className="bg-purple-600 rounded-full h-6 w-6 flex items-center justify-center z-10 mx-4 md:mx-0">
              <div className="bg-purple-300 rounded-full h-3 w-3"></div>
            </div>
            <div className="md:w-1/2 md:pl-12 hidden md:block">
              <Image
                src="/placeholder.svg?height=200&width=300&query=lagos state nigeria formation 1967"
                alt="Lagos State Formation"
                width={300}
                height={200}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Timeline Item 6 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 hidden md:block md:text-right">
              <Image
                src="/placeholder.svg?height=200&width=300&query=modern nigerian town development with traditional elements"
                alt="Modern Epe"
                width={300}
                height={200}
                className="rounded-xl shadow-lg ml-auto"
              />
            </div>
            <div className="bg-purple-600 rounded-full h-6 w-6 flex items-center justify-center z-10 mx-4 md:mx-0">
              <div className="bg-purple-300 rounded-full h-3 w-3"></div>
            </div>
            <div className="md:w-1/2 md:pl-12 mb-4 md:mb-0">
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 inline-block">
                <h3 className="text-xl font-bold text-purple-400 mb-2">
                  Present Day
                </h3>
                <p className="text-gray-300">
                  Today, Epe has evolved into a vibrant town that balances its
                  rich historical heritage with modern development. It remains
                  an important cultural center, known for its traditional
                  festivals, royal institutions, and as a hub for fishing and
                  agriculture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Heritage */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-white">
          Cultural Heritage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gray-900 border-gray-800 text-gray-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Landmark className="h-5 w-5 text-purple-400" />
                Traditional Governance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/placeholder.svg?height=250&width=400&query=traditional yoruba king with chiefs in palace"
                alt="Traditional Governance"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-300">
                Epe's traditional governance structure is centered around the
                Oluepe (King) and the council of chiefs. This system has evolved
                over centuries while maintaining its cultural significance and
                authority in community matters.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 text-gray-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Calendar className="h-5 w-5 text-purple-400" />
                Festivals and Traditions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/placeholder.svg?height=250&width=400&query=colorful yoruba festival with dancers and drummers"
                alt="Epe Festivals"
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-300">
                Epe is known for its vibrant cultural festivals that celebrate
                its heritage, including Ebi (Yam Festival), Kayo-Kayo Festival,
                and various Islamic celebrations that reflect the town's
                religious diversity and cultural richness.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Islamic Influence */}
      <section className="mb-16">
        <div className="bg-gray-900/50 rounded-2xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-white">
            Islamic Heritage in Epe
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=300&width=500&query=historic nigerian mosque with worshippers"
                alt="Islamic Heritage"
                width={500}
                height={300}
                className="w-full rounded-xl mb-4 md:mb-0"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-300 mb-4">
                Islam has played a significant role in shaping Epe's cultural
                identity since the 19th century. The influx of Muslims from
                Lagos, particularly following Kosoko's exile, strengthened
                Islamic practices in the region.
              </p>
              <p className="text-gray-300 mb-4">
                The town is home to several historic mosques, including some
                that date back to the 19th century. These religious institutions
                have been centers for both spiritual guidance and education.
              </p>
              <p className="text-gray-300">
                Islamic festivals such as Eid-el-Fitri and Eid-el-Kabir are
                celebrated with great enthusiasm in Epe, featuring special
                prayers, feasting, and cultural displays that blend Islamic
                traditions with local Yoruba customs.
              </p>
              <Link href="/dashboard/islam">
                <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
                  Explore Islamic Heritage{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Economic History */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-white">
          Economic Evolution
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gray-900 border-gray-800 text-gray-100">
            <CardHeader>
              <CardTitle className="text-white">Traditional Economy</CardTitle>
              <CardDescription className="text-gray-400">
                Pre-colonial era
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Epe's economy was traditionally based on fishing, farming, and
                local trade. The town's location on the Lagos Lagoon made
                fishing particularly important, with specialized techniques
                developed over generations.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 text-gray-100">
            <CardHeader>
              <CardTitle className="text-white">Colonial Influence</CardTitle>
              <CardDescription className="text-gray-400">
                19th - 20th century
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                British colonial rule introduced new trading patterns and
                economic structures. Epe became integrated into the broader
                colonial economy, with increased emphasis on cash crops and
                formalized trade networks.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 text-gray-100">
            <CardHeader>
              <CardTitle className="text-white">Modern Economy</CardTitle>
              <CardDescription className="text-gray-400">
                Present day
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Today, while fishing and agriculture remain important, Epe's
                economy has diversified to include tourism, small-scale
                manufacturing, and service industries. The town's proximity to
                Lagos has also influenced its economic development.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Historical Figures */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-white">
          Notable Historical Figures
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gray-900 border-gray-800 text-gray-100">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100&query=historical yoruba king portrait"
                    alt="Kosoko"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  Oba Kosoko
                </h3>
                <p className="text-sm text-gray-400 mb-3">19th Century</p>
                <p className="text-gray-300 text-sm">
                  Exiled king of Lagos who settled in Epe in the 1850s. His
                  arrival with followers significantly influenced Epe's
                  development and cultural landscape.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 text-gray-100">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100&query=traditional nigerian chief portrait"
                    alt="Historical Chief"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  Chief Oshodi Tapa
                </h3>
                <p className="text-sm text-gray-400 mb-3">19th Century</p>
                <p className="text-gray-300 text-sm">
                  A prominent warrior and advisor to Kosoko who played a
                  significant role in establishing the exiled Lagos community in
                  Epe and maintaining relations with neighboring settlements.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 text-gray-100">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100&query=traditional yoruba queen portrait"
                    alt="Historical Queen"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  Oluepe of Epe
                </h3>
                <p className="text-sm text-gray-400 mb-3">Traditional Ruler</p>
                <p className="text-gray-300 text-sm">
                  The traditional rulers of Epe have played crucial roles in
                  preserving cultural heritage, mediating disputes, and guiding
                  the community through various historical transitions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section>
        <div className="bg-purple-900/30 rounded-2xl p-8 text-center border border-purple-800/50">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Explore More of Epe's Rich Heritage
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Discover the royal lineage, vibrant festivals, and cultural
            landmarks that make Epe Kingdom a treasure of Nigerian heritage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/dashboard/kings">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Kings of Epe <Landmark className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/dashboard/festivals">
              <Button
                variant="outline"
                className="border-purple-600 text-white hover:bg-purple-900/30"
              >
                Cultural Festivals <Calendar className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/dashboard/tourism">
              <Button
                variant="outline"
                className="border-purple-600 text-white hover:bg-purple-900/30"
              >
                Historical Sites <MapPin className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
