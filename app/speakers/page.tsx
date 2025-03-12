"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function SpeakersPage() {
  const heroRef = useRef(null)
  const speakersRef = useRef(null)
  const [imageError, setImageError] = useState<Record<number, boolean>>({})

  const isSpeakersInView = useInView(speakersRef, { once: true, amount: 0.1 })

  const speakers = [
    {
      name: "Rehan Mir",
      title: "Senior Economic Analyst",
      topic: "Economic Decision Making in Uncertain Times",
      date: "March 15, 2024",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rehan%20Mir-qfekE4jSup0qbM2hxIS5wKEAYvNFjS.png",
    },
    {
      name: "Sharad Sagar",
      title: "Founder & CEO, Dexterity Global",
      topic: "Behavioral Economics in Social Enterprise",
      date: "March 28, 2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sharad%20Sagar-znarFQ0UOyJEtnVEhm6WjQXNmgorg2.png",
    },
    {
      name: "John Franzia",
      title: "Financial Markets Specialist",
      topic: "Market Psychology and Investment Behavior",
      date: "April 10, 2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/John%20Franzia-fmku2ThQRLbJOfGSyEFaE2tvwQg5Ht.png",
    },
    {
      name: "Neeknaz Abari",
      title: "Behavioral Research Lead",
      topic: "Innovation in Behavioral Studies",
      date: "April 25, 2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neeknaz%20Abari-qwJR4liiAXrktmvsOcqVVUiqnkA1zi.png",
    },
    {
      name: "Professor DellaVigna",
      title: "Professor of Economics and Business Administration",
      topic: "Behavioral Economics Research Methods",
      date: "February 15, 2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Professor%20DellaVigna-9SLpuy1p8c4u1XFo7T44XD49OzX3Nr.png",
    },
    {
      name: "Rahul Bhirani",
      title: "Investment Banking Associate",
      topic: "Behavioral Finance in Investment Decisions",
      date: "January 22, 2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rahul%20Bhirani-rKYgWGrXE6MGd0HjBzf1UkaBaHH6wr.png",
    },
    {
      name: "Professor Judy Hopelain",
      title: "Marketing Strategy Expert",
      topic: "Consumer Behavior and Market Research",
      date: "December 5, 2023",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Professor%20Judy%20Hopelain-ytCITmAUnnnUcPQd72h7w7BAhuqk0X.png",
    },
    {
      name: "Michael Kramer",
      title: "Behavioral Economics Consultant",
      topic: "Applications in Business Strategy",
      date: "November 15, 2023",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Michael%20Kramer-dsM9CCNx9bjiHzATfZt1PY05XJjwBX.png",
    },
    {
      name: "Jen Franklin",
      title: "CEO, Radiant Athletics",
      topic: "Decision Making in Business Leadership",
      date: "October 20, 2023",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jen%20Franklin-62FxSbholJyI9RZyZxyl2ldSvfUuPd.png",
    },
    {
      name: "Himel Dev",
      title: "Research Scientist",
      topic: "Behavioral Data Analysis",
      date: "September 8, 2023",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Himel-Dev-p8Tjy7gvIcjDOhiIcHUxd1sJBGr5NM.png",
    },
  ]

  const handleImageError = (index: number) => {
    setImageError((prev) => ({ ...prev, [index]: true }))
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[40vh] w-full bg-blue-800 flex items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute h-64 w-64 rounded-full bg-blue-600 -top-20 -left-20"></div>
          <div className="absolute h-96 w-96 rounded-full bg-yellow-400 -bottom-40 -right-40"></div>
        </div>
        <div className="text-center z-10 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Featured Speakers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Learn from industry experts and academics in the field of behavioral economics
          </motion.p>
        </div>
      </section>

      {/* Speakers Section */}
      <section ref={speakersRef} className="py-16 md:py-24 px-4 md:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight text-gray-900">Past Speakers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-200 group"
              >
                <div className="relative h-56 w-full bg-gray-200">
                  {imageError[index] ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
                      <span className="text-lg font-medium">{speaker.name}</span>
                    </div>
                  ) : (
                    <>
                      <Image
                        src={speaker.image || "/placeholder.svg"}
                        alt={speaker.name}
                        fill
                        className="object-cover object-center"
                        onError={() => handleImageError(index)}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="font-semibold text-xl mb-1">{speaker.name}</h3>
                        <p className="text-sm text-white/90">{speaker.title}</p>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-gray-800 mb-3">
                    <strong>Topic:</strong> {speaker.topic}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 text-sm">
                      <strong>Date:</strong> {speaker.date}
                    </p>
                    <Link
                      href="#"
                      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center text-sm group"
                    >
                      View details
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-blue-800 text-white relative overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Interested in Speaking?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              We're always looking for experts in behavioral economics to share their insights with our community.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-800 hover:bg-blue-50 font-medium py-3 px-8 rounded-full transition-colors text-lg"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

