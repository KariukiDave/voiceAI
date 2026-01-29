import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col bg-offWhite">
      <Header />
      <main className="flex-1 py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm">
            <h1 className="text-3xl font-bold mb-8 font-poppins text-deepBlue">Terms of Service</h1>

            <div className="space-y-6 font-roboto text-gray-600">
              <p>Last Updated: April 10, 2023</p>

              <div className="space-y-4">
                <h2 className="text-xl font-bold font-poppins text-deepBlue">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using VoiceAI's services, website, or any applications made available by VoiceAI
                  (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do
                  not agree to these Terms, you may not access or use the Services.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold font-poppins text-deepBlue">2. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. We will provide notice of any material changes
                  by posting the updated Terms on our website and updating the "Last Updated" date. Your continued use
                  of the Services after any such changes constitutes your acceptance of the new Terms.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold font-poppins text-deepBlue">3. Description of Services</h2>
                <p>
                  VoiceAI provides AI-powered voice agent services that automate customer interactions through phone
                  calls. Our Services include, but are not limited to, AI voice agents, analytics, and integration with
                  third-party systems.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold font-poppins text-deepBlue">4. Account Registration</h2>
                <p>
                  To use certain features of the Services, you may be required to register for an account. You agree to
                  provide accurate, current, and complete information during the registration process and to update such
                  information to keep it accurate, current, and complete.
                </p>
                <p>
                  You are responsible for safeguarding your password and for all activities that occur under your
                  account. You agree to notify us immediately of any unauthorized use of your account.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold font-poppins text-deepBlue">5. Subscription and Billing</h2>
                <p>
                  Some of our Services require payment of fees. You agree to pay all fees in accordance with the pricing
                  and payment terms presented to you for the Services. You agree to provide us with complete and
                  accurate billing information.
                </p>
                <p>
                  Unless otherwise specified, all fees are quoted in U.S. Dollars. You are responsible for paying all
                  taxes associated with your use of the Services.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold font-poppins text-deepBlue">6. Intellectual Property Rights</h2>
                <p>
                  The Services and their entire contents, features, and functionality (including but not limited to all
                  information, software, text, displays, images, video, and audio, and the design, selection, and
                  arrangement thereof) are owned by VoiceAI, its licensors, or other providers of such material and are
                  protected by copyright, trademark, patent, trade secret, and other intellectual property or
                  proprietary rights laws.
                </p>
                <p>
                  These Terms do not grant you any right, title, or interest in the Services, others' content in the
                  Services, VoiceAI trademarks, logos, or other brand features.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold font-poppins text-deepBlue">7. User Content</h2>
                <p>
                  You retain all rights in, and are solely responsible for, the content you post to the Services,
                  including voice recordings, text, images, and other materials ("User Content").
                </p>
                <p>
                  By submitting User Content to the Services, you grant VoiceAI a worldwide, non-exclusive, royalty-free
                  license to use, reproduce, modify, adapt, publish, translate, create derivative works from,
                  distribute, and display such content in connection with providing and improving the Services.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold font-poppins text-deepBlue">8. Prohibited Uses</h2>
                <p>You agree not to use the Services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    In any way that violates any applicable federal, state, local, or international law or regulation
                  </li>
                  <li>
                    To transmit, or procure the sending of, any advertising or promotional material, including any "junk
                    mail," "chain letter," "spam," or any other similar solicitation
                  </li>
                  <li>
                    To impersonate or attempt to impersonate VoiceAI, a VoiceAI employee, another user, or any other
                    person or entity
                  </li>
                  <li>
                    To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services,
                    or which may harm VoiceAI or users of the Services
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold font-poppins text-deepBlue">9. Termination</h2>
                <p>
                  We may terminate or suspend your account and access to the Services immediately, without prior notice
                  or liability, for any reason whatsoever, including without limitation if you breach these Terms.
                </p>
                <p>
                  Upon termination, your right to use the Services will immediately cease. If you wish to terminate your
                  account, you may simply discontinue using the Services or contact us to request account deletion.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold font-poppins text-deepBlue">10. Disclaimer of Warranties</h2>
                <p>
                  THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
                  IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                  PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold font-poppins text-deepBlue">11. Limitation of Liability</h2>
                <p>
                  IN NO EVENT WILL VOICEAI, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS,
                  OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN
                  CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL,
                  INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold font-poppins text-deepBlue">12. Governing Law</h2>
                <p>
                  These Terms and any dispute or claim arising out of or related to them, their subject matter, or their
                  formation shall be governed by and construed in accordance with the laws of the State of California,
                  without giving effect to any choice or conflict of law provisions.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold font-poppins text-deepBlue">13. Contact Information</h2>
                <p>Questions about the Terms should be sent to us at:</p>
                <p>
                  Email: legal@voiceai.com
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
