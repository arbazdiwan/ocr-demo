export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">
          PAN Card Data Extraction Made Easy
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Extract information from PAN cards instantly using our advanced OCR
          technology
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <img src="/file.svg" alt="Upload" className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Quick Upload</h3>
          <p className="text-gray-600">
            Simply upload a photo of the PAN card and let our system do the work
          </p>
        </div>

        <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <img src="/window.svg" alt="Extract" className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Accurate Extraction</h3>
          <p className="text-gray-600">
            Automatically extracts PAN number, name, date of birth, and other
            details
          </p>
        </div>

        <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <img src="/globe.svg" alt="History" className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">View History</h3>
          <p className="text-gray-600">
            Access your previously scanned PAN cards and their extracted
            information
          </p>
        </div>
      </div>

      {/* Demo Section */}
      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          How It Works
        </h2>
        <div className="flex justify-center items-center space-x-4">
          <div className="text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-2 mx-auto">
              1
            </div>
            <p>Upload PAN card image</p>
          </div>
          <div className="text-gray-400">→</div>
          <div className="text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-2 mx-auto">
              2
            </div>
            <p>OCR processes the image</p>
          </div>
          <div className="text-gray-400">→</div>
          <div className="text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-2 mx-auto">
              3
            </div>
            <p>View extracted details</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mb-16">
        <a
          href="/scan"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Try PAN Card Scanner
        </a>
      </div>

      {/* Roadmap Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Project Roadmap
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {/* Completed Tasks */}
            <div>
              <h3 className="text-lg font-medium mb-4 text-green-600">
                Completed ✓
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Direct PAN card image scanning implementation
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Cloud serverless architecture and storage bucket integration
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Distributed system architecture implementation
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    OCR processing using queue-based microservice
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Interactive frontend implementation
                  </span>
                </div>
              </div>
            </div>

            {/* Upcoming Tasks */}
            <div>
              <h3 className="text-lg font-medium mb-4 text-blue-600">
                Coming Soon
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">
                    End-to-end encryption for data in transit and at rest (Top
                    Priority)
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    User authentication and authorization
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    API rate limiting implementation
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Automated storage cleanup for processed documents
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Smart image scaling for improved OCR accuracy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="border-t pt-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">About the Developer</h3>
          <p className="text-gray-600 mb-4">Built with ❤️ by Arbaz Diwan</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/arbazdiwan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/arbaz-diwan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://drive.google.com/drive/folders/1i-r_XEDDv9h9o1vso7kOvll9bY5za47U?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
