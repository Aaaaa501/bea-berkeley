import Image from "next/image"

export const metadata = {
  title: "Executive Board - Behavioral Economics Association at Berkeley",
  description: "Meet the Executive Board of the Behavioral Economics Association at Berkeley",
}

export default function ExecBoardPage() {
  const execMembers = [
    {
      name: "Jane Doe",
      position: "President",
      bio: "Jane is a senior studying Economics and Psychology. She is interested in behavioral finance and decision-making under uncertainty.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "John Smith",
      position: "Vice President",
      bio: "John is a junior studying Business Administration. He is interested in applying behavioral economics to marketing and consumer behavior.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Johnson",
      position: "Treasurer",
      bio: "Emily is a senior studying Economics and Data Science. She is interested in using data to understand economic behavior.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Brown",
      position: "Events Coordinator",
      bio: "Michael is a junior studying Cognitive Science. He is interested in the neural basis of economic decision-making.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Wilson",
      position: "Marketing Director",
      bio: "Sarah is a sophomore studying Business Administration and Psychology. She is interested in consumer psychology and behavioral marketing.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "David Lee",
      position: "BWIM Coordinator",
      bio: "David is a senior studying Economics and Political Science. He is interested in behavioral economics applications in public policy.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Jessica Chen",
      position: "Research Coordinator",
      bio: "Jessica is a junior studying Economics and Statistics. She is interested in experimental economics and research methods.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Robert Kim",
      position: "Technology Officer",
      bio: "Robert is a senior studying Computer Science and Economics. He is interested in applying behavioral economics to technology design.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col pt-20">
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Executive Board</h1>

          <div className="mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSCF8223_edited.jpg-qLn4b80lcQdfYbIcvghavYl1VrbsEZ.jpeg"
              alt="Executive Board"
              width={1000}
              height={400}
              className="w-full max-w-4xl h-auto rounded-lg mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {execMembers.map((member, index) => (
              <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-square relative bg-gray-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-16 h-16 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-blue-700 mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

