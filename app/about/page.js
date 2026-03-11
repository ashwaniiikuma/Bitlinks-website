// export default function About() {
//   return (
//     <div className="min-h-screen bg-purple-50 px-25 py-20">
//       <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10 space-y-10">

//         {/* Heading */}
//         <div>
//           <h1 className="text-4xl font-bold text-purple-700 mb-4 ">
//             About BitLinks
//           </h1>
//           <p className="text-gray-700 text-lg">
//             BitLinks is a modern URL shortening platform designed to make
//             sharing links faster, cleaner, and more efficient.
//           </p>
//         </div>

//         {/* Mission */}
//         <div>
//           <h2 className="text-2xl font-semibold text-purple-600 mb-3">
//              Our Mission
//           </h2>
//           <p className="text-gray-700">
//             Our mission is to simplify digital sharing by providing a fast,
//             reliable, and minimal link management solution built with modern
//             web technologies.
//           </p>
//         </div>

//         {/* How It Works */}
//         <div>
//           <h2 className="text-2xl font-semibold text-purple-600 mb-3">
//              How It Works
//           </h2>
//           <ol className="list-decimal list-inside text-gray-700 space-y-2">
//             <li>Paste your long URL</li>
//             <li>Generate a unique short link</li>
//             <li>Share it anywhere</li>
//             <li>Users are instantly redirected to the original URL</li>
//           </ol>
//         </div>

//         {/* Features */}
//         <div>
//           <h2 className="text-2xl font-semibold text-purple-600 mb-3">
//             Key Features
//           </h2>
//           <ul className="list-disc list-inside text-gray-700 space-y-2">
//             <li> Instant URL shortening</li>
//             <li> Fast redirection</li>
//             <li> Fully responsive design</li>
//             <li> Clean and minimal interface</li>
//             <li> Structured backend routing</li>
//           </ul>
//         </div>

//         {/* Tech Stack */}
//         <div>
//           <h2 className="text-2xl font-semibold text-purple-600 mb-3">
//              Technology Stack
//           </h2>
//           <ul className="list-disc list-inside text-gray-700 space-y-2">
//             <li>Next.js (App Router)</li>
//             <li>Tailwind CSS</li>
//             <li>MongoDB</li>
//             <li>Node.js</li>
//           </ul>
//         </div>

//         {/* Future Improvements */}
//         <div>
//           <h2 className="text-2xl font-semibold text-purple-600 mb-3">
//              Future Improvements
//           </h2>
//           <ul className="list-disc list-inside text-gray-700 space-y-2">
//             <li> Click analytics dashboard</li>
//             <li> User authentication system</li>
//             <li> Custom branded URLs</li>
//             <li> Link performance tracking</li>
//           </ul>
//         </div>

//         {/* Footer Note */}
//         <div className="border-t pt-6">
//           <p className="text-gray-600">
//             BitLinks was built as a full-stack learning project to demonstrate
//             routing, database integration, API handling, and modern UI
//             development using Next.js.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// }

export default function About() {
  return (
    <div className="min-h-screen bg-purple-50 px-4 sm:px-8 lg:px-16 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-8 lg:p-10 space-y-8">

        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-4">
            About BitLinks
          </h1>
          <p className="text-gray-700 text-base sm:text-lg">
            BitLinks is a modern URL shortening platform designed to make
            sharing links faster, cleaner, and more efficient.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-600 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-700">
            Our mission is to simplify digital sharing by providing a fast,
            reliable, and minimal link management solution built with modern
            web technologies.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-600 mb-3">
            How It Works
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Paste your long URL</li>
            <li>Generate a unique short link</li>
            <li>Share it anywhere</li>
            <li>Users are instantly redirected</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-600 mb-3">
            Key Features
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Instant URL shortening</li>
            <li>Fast redirection</li>
            <li>Responsive design</li>
            <li>Clean UI</li>
            <li>Structured routing</li>
          </ul>
        </div>

      </div>
    </div>
  );
}