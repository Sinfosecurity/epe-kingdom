import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Clock, Calendar, Star, Compass, Utensils, Hotel, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function TourismPage() {
  // Tourist attractions data
  const attractions = [
    {
      id: "epe-waterfront",
      name: "Epe Waterfront",
      category: "Natural Attraction",
      image: "/placeholder-waterfront.png",
      rating: 4.8,
      description:
        "A scenic waterfront along the Lagos Lagoon offering beautiful views, boat rides, and fresh fish markets. The perfect spot to experience Epe's connection to water and fishing heritage.",
      activities: ["Boat rides", "Fresh fish market", "Sunset viewing", "Photography"],
    },
    {
      id: "oluepe-palace",
      name: "Oluepe Royal Palace",
      category: "Historical Site",
      image: "/placeholder-palace.png",
      rating: 4.6,
      description:
        "The traditional seat of the Oluepe of Epe, showcasing royal artifacts, traditional architecture, and cultural heritage. Visitors can learn about the monarchy and governance structure.",
      activities: ["Guided tours", "Cultural exhibitions", "Royal history", "Photography"],
    },
    {
      id: "epe-central-mosque",
      name: "Epe Central Mosque",
      category: "Religious Heritage",
      image: "/placeholder-mosque.png",
      rating: 4.7,
      description:
        "A historic mosque dating back to the 19th century, featuring beautiful Islamic architecture and serving as a center for Islamic learning and worship in the region.",
      activities: ["Architectural tours", "Islamic history", "Photography"],
    },
    {
      id: "lekki-conservation",
      name: "Lekki Conservation Centre",
      category: "Eco-Tourism",
      image: "/placeholder-conservation.png",
      rating: 4.9,
      description:
        "A nature reserve near Epe offering canopy walkways, wildlife viewing, and ecological education. Home to diverse flora and fauna in a protected environment.",
      activities: ["Canopy walkway", "Nature trails", "Bird watching", "Wildlife photography"],
    },
    {
      id: "epe-fish-market",
      name: "Epe Fish Market",
      category: "Cultural Experience",
      image: "/placeholder-fish-market.png",
      rating: 4.5,
      description:
        "One of the largest fish markets in Lagos State, offering a vibrant atmosphere where visitors can observe traditional fishing commerce and purchase fresh seafood.",
      activities: ["Market tours", "Food tasting", "Cultural immersion", "Shopping"],
    },
    {
      id: "epe-mangroves",
      name: "Epe Mangrove Forest",
      category: "Natural Attraction",
      image: "/placeholder-mangrove.png",
      rating: 4.7,
      description:
        "Explore the lush mangrove ecosystems that surround Epe through guided boat tours. Witness unique wildlife and plant species in their natural habitat.",
      activities: ["Boat tours", "Wildlife spotting", "Photography", "Eco-education"],
    },
  ]

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "United Kingdom",
      image: "/placeholder-testimonial1.png",
      text: "Visiting the Epe Waterfront was the highlight of my trip to Nigeria. The boat ride through the lagoon was peaceful and the fresh fish we had for lunch was incredible!",
    },
    {
      name: "Oluwaseun Adebayo",
      location: "Lagos, Nigeria",
      image: "/placeholder-testimonial2.png",
      text: "As a Lagos resident, I never knew such beauty existed so close to the city. The cultural heritage and natural attractions of Epe make it a perfect weekend getaway.",
    },
    {
      name: "David Chen",
      location: "Canada",
      image: "/placeholder-testimonial3.png",
      text: "The Kayo Kayo festival coincided with our visit, and it was a spectacular cultural experience! The people of Epe were incredibly welcoming and proud to share their traditions.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/placeholder-tourism-hero.png"
            alt="Epe Tourism"
            width={1200}
            height={500}
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex flex-col justify-center p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-xl">
              Discover the Beauty of Epe Kingdom
            </h1>
            <p className="text-white/90 max-w-xl mb-6">
              Explore natural wonders, historical landmarks, and cultural experiences in this hidden gem of Lagos State.
            </p>
            <Button className="w-fit bg-purple-600 hover:bg-purple-700">
              Plan Your Visit <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-white">Welcome to Epe</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-4">
              Nestled along the serene shores of the Lagos Lagoon, Epe offers visitors a refreshing escape from the
              hustle and bustle of Lagos city. With its rich cultural heritage, natural beauty, and historical
              significance, Epe presents a unique blend of attractions for tourists seeking authentic Nigerian
              experiences.
            </p>
            <p className="text-gray-300 mb-4">
              From its vibrant waterfront and bustling fish markets to its royal palace and historic mosques, Epe
              provides diverse experiences for nature lovers, history enthusiasts, and cultural explorers alike. The
              town's strategic location also makes it an ideal base for exploring the wider Lekki Peninsula and its
              ecological attractions.
            </p>
            <p className="text-gray-300">
              Whether you're planning a day trip from Lagos or a longer stay to fully immerse yourself in the local
              culture, Epe welcomes you with open arms and promises memorable experiences that showcase the best of
              Nigeria's heritage and natural beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="mb-12">
        <div className="bg-gray-900/50 rounded-2xl p-6 md:p-8 border border-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-white">Visitor Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-purple-900/50 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-medium text-white mb-1">Location</h3>
                <p className="text-sm text-gray-300">
                  Located approximately 60 km from Lagos city center, in Lagos State, Nigeria
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-900/50 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-medium text-white mb-1">Best Time to Visit</h3>
                <p className="text-sm text-gray-300">
                  November to March (dry season) offers the most comfortable weather for exploration
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-900/50 p-3 rounded-lg">
                <Calendar className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-medium text-white mb-1">Festival Season</h3>
                <p className="text-sm text-gray-300">
                  Plan your visit during July-September to experience traditional festivals
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-900/50 p-3 rounded-lg">
                <Compass className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-medium text-white mb-1">Getting There</h3>
                <p className="text-sm text-gray-300">
                  Accessible by road from Lagos via the Lekki-Epe Expressway (1-2 hour drive)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Attractions */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-white">Featured Attractions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction) => (
            <Card key={attraction.id} className="bg-gray-900 border-gray-800 text-gray-100 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={attraction.image || "/placeholder.svg"}
                  alt={attraction.name}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-0 right-0 bg-black/60 backdrop-blur-sm px-2 py-1 m-2 rounded-md flex items-center">
                  <Star className="h-3 w-3 text-yellow-400 mr-1 fill-yellow-400" />
                  <span className="text-xs text-white">{attraction.rating}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center text-xs text-purple-300">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{attraction.category}</span>
                  </div>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-white">{attraction.name}</CardTitle>
                <CardDescription className="text-gray-400">Tourist attraction</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm mb-4">{attraction.description}</p>
                <div className="flex flex-wrap gap-2">
                  {attraction.activities.slice(0, 3).map((activity, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full border border-gray-700"
                    >
                      {activity}
                    </span>
                  ))}
                  {attraction.activities.length > 3 && (
                    <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full border border-gray-700">
                      +{attraction.activities.length - 3} more
                    </span>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/dashboard/tourism/${attraction.id}`}>
                  <Button
                    variant="outline"
                    className="bg-purple-900/30 border-purple-600 text-white hover:bg-white hover:text-purple-900"
                  >
                    Explore <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-white">Explore Epe</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
          <div className="aspect-[16/9] relative">
            <Image src="/placeholder-map.png" alt="Map of Epe tourist attractions" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <Button className="bg-purple-600 hover:bg-purple-700">Download Tourist Map</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation & Dining */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-white">Where to Stay & Eat</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 rounded-2xl p-6 md:p-8 border border-gray-800">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-purple-900/50 p-3 rounded-lg">
                <Hotel className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Accommodation</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Epe offers a range of accommodation options to suit different budgets and preferences. From waterfront
              resorts and boutique hotels to guesthouses and homestays, visitors can find comfortable places to rest
              after a day of exploration.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                <span className="text-white">Epe Resort & Spa</span>
                <div className="flex">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <Star className="h-4 w-4 text-gray-600" />
                </div>
              </div>
              <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                <span className="text-white">Waterfront Hotel</span>
                <div className="flex">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <Star className="h-4 w-4 text-gray-600" />
                  <Star className="h-4 w-4 text-gray-600" />
                </div>
              </div>
              <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                <span className="text-white">Epe Heritage Inn</span>
                <div className="flex">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <Star className="h-4 w-4 text-gray-600" />
                </div>
              </div>
            </div>
            <Button className="mt-4 w-full bg-purple-600 hover:bg-purple-700">Find Accommodation</Button>
          </div>

          <div className="bg-gray-900/50 rounded-2xl p-6 md:p-8 border border-gray-800">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-purple-900/50 p-3 rounded-lg">
                <Utensils className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Dining</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Experience the culinary delights of Epe, known especially for its fresh seafood. From waterfront
              restaurants serving the day's catch to local eateries offering traditional Yoruba dishes, there's
              something to satisfy every palate.
            </p>
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-3">
                <h4 className="font-medium text-white mb-1">Must-Try Local Dishes</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                    <span>Fresh Tilapia & Catfish (grilled or in pepper soup)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                    <span>Epe-style Seafood Okra Soup</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                    <span>Traditional Amala with Ewedu & Gbegiri</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <h4 className="font-medium text-white mb-1">Popular Restaurants</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                    <span>Lagoon View Restaurant (seafood specialist)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                    <span>Epe Heritage Kitchen (traditional cuisine)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                    <span>Waterside Grill (fresh catch barbecue)</span>
                  </li>
                </ul>
              </div>
            </div>
            <Button className="mt-4 w-full bg-purple-600 hover:bg-purple-700">Discover Local Cuisine</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-white">Visitor Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-6 relative">
              <div className="mb-4">
                <svg className="h-8 w-8 text-purple-500/30" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-gray-300 text-sm mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <div>
                  <p className="text-white font-medium">{testimonial.name}</p>
                  <p className="text-gray-400 text-xs">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Tips */}
      <section className="mb-16">
        <div className="bg-gray-900/50 rounded-2xl p-6 md:p-8 border border-gray-800">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-900/50 p-3 rounded-lg">
              <Info className="h-6 w-6 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Travel Tips</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium text-white mb-2">Getting Around</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Local taxis and motorcycle taxis (okada) are readily available for short distances</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Consider hiring a local guide for the best experience of hidden gems</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Boat tours are an excellent way to explore the waterfront and lagoon areas</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white mb-2">Best Practices</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Dress modestly when visiting religious sites like mosques and traditional palaces</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Ask permission before taking photographs of people or cultural ceremonies</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Carry cash as credit card facilities may be limited in smaller establishments</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white mb-2">What to Pack</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Lightweight, breathable clothing suitable for tropical weather</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Sun protection: hat, sunglasses, and sunscreen</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                  <span>Insect repellent, especially if visiting during evening hours or rainy season</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section>
        <div className="bg-purple-900/30 rounded-2xl p-8 text-center border border-purple-800/50">
          <h2 className="text-2xl font-bold mb-4 text-white">Plan Your Visit to Epe Kingdom</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Experience the natural beauty, rich culture, and warm hospitality of Epe. Whether you're planning a day trip
            or an extended stay, Epe offers unforgettable experiences for every traveler.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Book a Tour <Calendar className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/dashboard/festivals">
              <Button variant="outline" className="border-purple-600 text-white hover:bg-purple-900/30">
                Explore Festivals <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
