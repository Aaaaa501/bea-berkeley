export const metadata = {
  title: "Join Us - Behavioral Economics Association at Berkeley",
  description: "Join the Behavioral Economics Association at Berkeley",
}

export default function JoinUsPage() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Join Us</h1>

          <div className="prose prose-lg max-w-none mb-8">
            <p>
              We're excited that you're interested in joining the Behavioral Economics Association at Berkeley! We
              welcome students from all backgrounds and majors who are interested in exploring the intersection of
              psychology and economics.
            </p>

            <h2>Membership Benefits</h2>
            <p>As a member of BEA, you'll have access to:</p>

            <ul>
              <li>Exclusive workshops and speaker events</li>
              <li>Networking opportunities with professionals in the field</li>
              <li>Research opportunities in behavioral economics</li>
              <li>Leadership opportunities within the organization</li>
              <li>A community of students interested in behavioral economics</li>
            </ul>

            <h2>How to Join</h2>
            <p>
              To join BEA, please fill out the membership application form below. We accept new members at the beginning
              of each semester. If you have any questions, feel free to reach out to us at{" "}
              <a href="mailto:contact@beaberkeley.com">contact@beaberkeley.com</a>.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Membership Application</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </label>
                  <input id="firstName" type="text" className="w-full px-3 py-2 border rounded-md" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>
                  <input id="lastName" type="text" className="w-full px-3 py-2 border rounded-md" required />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <input id="email" type="email" className="w-full px-3 py-2 border rounded-md" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="major" className="text-sm font-medium">
                  Major
                </label>
                <input id="major" type="text" className="w-full px-3 py-2 border rounded-md" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="year" className="text-sm font-medium">
                  Year
                </label>
                <select id="year" className="w-full px-3 py-2 border rounded-md" required>
                  <option value="">Select your year</option>
                  <option value="Freshman">Freshman</option>
                  <option value="Sophomore">Sophomore</option>
                  <option value="Junior">Junior</option>
                  <option value="Senior">Senior</option>
                  <option value="Graduate">Graduate</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="interest" className="text-sm font-medium">
                  Why are you interested in joining BEA?
                </label>
                <textarea id="interest" className="w-full px-3 py-2 border rounded-md h-32" required></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

