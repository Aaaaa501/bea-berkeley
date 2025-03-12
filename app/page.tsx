"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

export default function Home() {
  const { scrollY } = useScroll()
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const partnersRef = useRef(null)
  const eventsRef = useRef(null)
  const teamRef = useRef(null)

  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 })
  const isPartnersInView = useInView(partnersRef, { once: true, amount: 0.3 })
  const isEventsInView = useInView(eventsRef, { once: true, amount: 0.3 })
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.3 })

  const heroY = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF8164%20%281%29_edited_edited.jpg-w0LoyeXrl87DH0KWI1iXlXdo04kna8.jpeg"
            alt="BEA Berkeley members"
            fill
            priority
            className="object-cover brightness-[0.6]"
          />
        </motion.div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Behavioral Economics Association
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white mb-10 max-w-3xl font-light"
          >
            Shaping the future of business, one decision at a time
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/join-us"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors text-lg"
            >
              Join Us
            </Link>
            <Link
              href="/about"
              className="bg-white/20 hover:bg-white/30 text-white border border-white/50 font-medium py-3 px-8 rounded-full transition-colors text-lg"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24 px-4 md:px-8 bg-gradient-to-b from-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Who Are We?</h2>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                The Behavioral Economics Association at Berkeley is a student organization dedicated to exploring the
                intersection of psychology and economics. We aim to understand how human behavior influences economic
                decision-making.
              </p>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Through workshops, speaker events, and research opportunities, we provide students with practical
                insights into behavioral economics and its applications in the real world.
              </p>
              <Link
                href="/about"
                className="inline-block bg-white text-blue-800 hover:bg-blue-50 font-medium py-3 px-8 rounded-full transition-colors text-lg"
              >
                About Us
              </Link>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6106-Mpsc8UkAbqrasnTN5wlBgP6ysRgvmZ.jpeg"
                  alt="BEA Event"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-800/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-yellow-400 rounded-full hidden md:block"></div>
              <div className="absolute -top-6 -left-6 h-16 w-16 bg-blue-500 rounded-full hidden md:block"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section ref={partnersRef} className="py-24 px-4 md:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isPartnersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">Our Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with leading companies and organizations to provide our members with valuable experiences
              and opportunities.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isPartnersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-5xl h-[300px] md:h-[400px] bg-white rounded-xl shadow-lg p-8 overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_splash-9nVA5fMLzi0MtkfOglTqmK06mY0fgC.png"
                alt="Partner Companies"
                fill
                className="object-contain p-8"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section ref={eventsRef} className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isEventsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for our upcoming events and connect with professionals and peers in the field of behavioral
              economics.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isEventsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Speaker Series: Behavioral Finance",
                date: "March 15, 2025",
                time: "5:00 PM",
                location: "Haas School of Business",
                description:
                  "Join us for an insightful discussion on behavioral economics applications in modern finance.",
              },
              {
                title: "Workshop: Decision Making Under Uncertainty",
                date: "March 22, 2025",
                time: "4:00 PM",
                location: "Evans Hall",
                description:
                  "A hands-on workshop exploring how people make decisions when faced with uncertain outcomes.",
              },
              {
                title: "Networking Event: Industry Professionals",
                date: "April 5, 2025",
                time: "6:00 PM",
                location: "Chou Hall",
                description: "Connect with professionals working in behavioral economics across various industries.",
              },
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isEventsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group border border-gray-100"
              >
                <div className="h-3 bg-blue-600"></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-blue-600">{event.date}</span>
                    <span className="text-sm text-gray-500">{event.time}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{event.title}</h3>
                  <p className="text-gray-500 mb-2 text-sm">{event.location}</p>
                  <p className="text-gray-700 mb-6">{event.description}</p>
                  <Link
                    href="/events"
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group"
                  >
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-12 text-center">
            <Link
              href="/events"
              className="inline-block bg-transparent hover:bg-blue-50 text-blue-600 border border-blue-600 font-medium py-3 px-8 rounded-full transition-colors text-lg"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section with Parallax */}
      <section
        ref={teamRef}
        className="py-24 px-4 md:px-8 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute h-64 w-64 rounded-full bg-blue-600 -top-20 -left-20"></div>
          <div className="absolute h-96 w-96 rounded-full bg-yellow-400 -bottom-40 -right-40"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated students behind the Behavioral Economics Association at Berkeley.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF8223_edited.jpg-qLn4b80lcQdfYbIcvghavYl1VrbsEZ.jpeg"
                alt="BEA Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <Link
                href="/exec-board"
                className="inline-block bg-white hover:bg-gray-100 text-blue-800 font-medium py-3 px-8 rounded-full transition-colors text-lg shadow-lg"
              >
                Meet Our Executive Board
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-4 md:px-8 bg-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute h-96 w-96 rounded-full bg-blue-600 -top-40 -right-40"></div>
          <div className="absolute h-64 w-64 rounded-full bg-yellow-400 -bottom-20 -left-20"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Subscribe to our newsletter to receive updates on events, research opportunities, and more.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-6 py-4 rounded-full text-gray-900 min-w-0 flex-1 max-w-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-medium py-4 px-8 rounded-full transition-colors text-lg"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

