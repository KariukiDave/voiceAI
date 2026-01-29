import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-offWhite">
      <Header />
      <main className="flex-1 py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm">
            <h1 className="text-3xl font-bold mb-8 font-poppins text-deepBlue">Privacy Policy</h1>

            <div className="space-y-6 font-roboto text-gray-600">
              <p>Last Updated: April 10, 2023</p>

              <div className="space-y-4">
                <h2 className="text-xl font-bold font-poppins text-deepBlue">1. Introduction</h2>
                <p>
                  VoiceAI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
                  how we collect, use, disclose, and safeguard your information when you use our AI voice agent
                  services, visit our website, or interact with us in any way.
                </p>
                <p>
                  Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that
                  you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold font-poppins text-deepBlue">2. Information We Collect</h2>
                <p>We may collect several types of information from and about users of our services, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Personal Information:</strong> Name, email address, telephone number, company name, job
                    title, and other contact details you provide when registering for our services, subscribing to our
                    newsletter, or requesting a demo.
                  </li>
                  <li>
                    <strong>Voice Data:</strong> Audio recordings and transcripts of calls processed by our AI voice
                    agents.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Information about how you use our services, including log data, device
                    information, IP address, browser type, and pages visited.
                  </li>
                  <li>
                    <strong>Customer Data:</strong> Information about your customers that you provide to us or that we
                    collect on your behalf when providing our services.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold font-poppins text-deepBlue">3. How We Use Your Information</h2>
                <p>We may use the information we collect for various purposes, including to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process and complete transactions</li>
                  <li>Send administrative information, such as updates, security alerts, and support messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Train and improve our AI voice agents</li>
                  <li>Analyze usage patterns and trends</li>
                  <li>Protect against, identify, and prevent fraud and other illegal activity</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold font-poppins text-deepBlue">4. Disclosure of Your Information</h2>
                <p>We may disclose your personal information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Our subsidiaries and affiliates</li>
                  <li>Contractors, service providers, and other third parties we use to support our business</li>
                  <li>
                    A buyer or other successor in the event of a merger, divestiture, restructuring, reorganization,
                    dissolution, or other sale or transfer of some or all of our assets
                  </li>
                  <li>
                    Comply with any court order, law, or legal process, including to respond to any government or
                    regulatory request
                  </li>
                  <li>Enforce our terms of service</li>
                  <li>Protect the rights, property, or safety of our company, our customers, or others</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold font-poppins text-deepBlue">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect the security of your
                  personal information. However, please be aware that no method of transmission over the Internet or
                  method of electronic storage is 100% secure.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold font-poppins text-deepBlue">6. Your Rights</h2>
                <p>
                  Depending on your location, you may have certain rights regarding your personal information, such as:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The right to access your personal information</li>
                  <li>The right to rectify inaccurate personal information</li>
                  <li>The right to request deletion of your personal information</li>
                  <li>The right to restrict processing of your personal information</li>
                  <li>The right to data portability</li>
                  <li>The right to object to processing of your personal information</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the information provided in the "Contact Us" section
                  below.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold font-poppins text-deepBlue">7. Changes to Our Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy
                  Policy.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold font-poppins text-deepBlue">8. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                <p>
                  Email: privacy@voiceai.com
                  <br />
                  Address: 123 AI Street, Tech City, TC 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
