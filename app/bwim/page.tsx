"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

export default function BWIMPage() {
  const heroRef = useRef(null)
  const missionRef = useRef(null)
  const activitiesRef = useRef(null)

  const isMissionInView = useInView(missionRef, { once: true, amount: 0.3 })
  const isActivitiesInView = useInView(activitiesRef, { once: true, amount: 0.3 })

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6106-Mpsc8UkAbqrasnTN5wlBgP6ysRgvmZ.jpeg"
          alt="BWIM Team"
          fill
          priority
          className="object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Berkeley Women in Markets
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white mb-10 max-w-3xl font-light"
          >
            Promoting gender diversity in economic markets
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-16 md:py-24 px-4 md:px-8 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Our Mission</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              BWIM aims to increase the representation and participation of women in economics, finance, and related
              fields. We believe that diverse perspectives lead to better decision-making and more innovative solutions
              to economic challenges.
            </p>

            <div className="bg-blue-700/50 rounded-xl p-8 mb-8">
              <p className="text-lg text-blue-100 italic">
                "Berkeley Women in Markets is a special initiative by the Behavioral Economics Association at Berkeley
                focused on promoting gender diversity in economic markets and the field of behavioral economics."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Activities Section */}
      <section ref={activitiesRef} className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isActivitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">What We Do</h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              BWIM organizes a variety of activities to support women interested in behavioral economics and related
              fields:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  title: "Mentorship Programs",
                  description: "We connect undergraduate women with graduate students and professionals in the field.",
                },
                {
                  title: "Workshops",
                  description: "We conduct workshops on topics relevant to women in economics and finance.",
                },
                {
                  title: "Speaker Series",
                  description: "We invite successful women in the field to share their experiences and insights.",
                },
                {
                  title: "Networking Events",
                  description: "We organize events to help women connect with professionals and peers in the field.",
                },
                {
                  title: "Research Opportunities",
                  description:
                    "We connect women with research opportunities in behavioral economics and related fields.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isActivitiesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
                >
                  <div className="h-2 bg-blue-600"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/join-us"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors text-lg"
              >
                Join BWIM
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute h-64 w-64 rounded-full bg-blue-600 -top-20 -left-20"></div>
          <div className="absolute h-96 w-96 rounded-full bg-yellow-400 -bottom-40 -right-40"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Get Involved</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              We welcome all students, regardless of gender, who are interested in promoting gender diversity in
              economics and finance.
            </p>
            <Link
              href="/join-us"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors text-lg"
            >
              Join Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

