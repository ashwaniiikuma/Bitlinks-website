export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-100 to-purple-100 px-4 py-10">

      {/* HERO */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-600 mb-4">
          About BitLinks
        </h1>
        <p className="text-gray-600 text-lg">
          A modern URL shortener that allows users to create, manage, edit, and track links efficiently with a secure and user-friendly dashboard.
        </p>
      </div>

      {/* MISSION + VISION */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h2 className="text-xl font-bold text-purple-600 mb-2"> Our Mission</h2>
          <p className="text-gray-600">
            To provide a powerful yet simple platform where users can shorten, edit, and manage their links effortlessly.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h2 className="text-xl font-bold text-purple-600 mb-2"> Our Vision</h2>
          <p className="text-gray-600">
            To build a scalable and reliable link management system used globally by individuals and businesses.
          </p>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-8">
          How It Works
        </h2>

        <div className="space-y-6">
          {[
            "Paste your long URL",
            "Generate a custom short link",
            "Login to access your dashboard",
            "Edit, delete, copy and search your links",
            "Track clicks and manage everything easily"
          ].map((step, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="bg-purple-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">
                {index + 1}
              </div>
              <p className="text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-8">
          Key Features
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Instant URL Shortening",
            "Secure Google Login (NextAuth)",
            "Dashboard for managing links",
            "Edit Short URLs",
            "Delete Links Anytime",
            "Search & Filter Links",
            "Copy to Clipboard",
            "Contact Form with Email (Nodemailer)",
            "Fast Redirection"
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition"
            >
              <p className="text-gray-700 font-semibold">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TECH STACK */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Technologies Used
        </h2>
        <p className="text-gray-600">
          Built using Next.js (frontend + backend), MongoDB for database,
          NextAuth for authentication, Nodemailer for sending emails,
          and Tailwind CSS for modern UI design.
        </p>
      </div>

    </div>
  );
}