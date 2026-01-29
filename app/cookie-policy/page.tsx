import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-offWhite">
      <Header />
      <main className="flex-1 py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm">
            <h1 className="text-3xl font-bold mb-8 font-poppins text-deepBlue">Cookie Policy</h1>

            <div className="space-y-6 font-roboto text-gray-600">
              <p>Last Updated: April 10, 2023</p>

              <div className="space-y-4">
                <h2 className="text-xl font-bold font-poppins text-deepBlue">1. Introduction</h2>
                <p>
                  This Cookie Policy explains how VoiceAI ("we," "our," or "us") uses cookies and similar technologies
                  to recognize you when you visit our website. It explains what these technologies are and why we use
                  them, as well as your rights to control our use of them.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold font-poppins text-deepBlue">2. What Are Cookies?</h2>
                <p>
                  Cookies are small data files that are placed on your computer or mobile device when you visit a
                  website. Cookies are widely used by website owners to make their websites work, or to work more
                  efficiently, as well as to provide reporting information.
                </p>
                <p>
                  Cookies set by the website owner (in this case, VoiceAI) are called "first-party cookies." Cookies set
                  by parties other than the website owner are called "third-party cookies." Third-party cookies enable
                  third-party features or functionality to be provided on or through the website (e.g., advertising,
                  interactive content, and analytics).
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold font-poppins text-deepBlue">3. Why Do We Use Cookies?</h2>
                <p>
                  We use first-party and third-party cookies for several reasons. Some cookies are required for
                  technical reasons in order for our website to operate, and we refer to these as "essential" or
                  "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users
                  to enhance the experience on our website. Third parties serve cookies through our website for
                  advertising, analytics, and other purposes.
                </p>
                <p>
                  The specific types of first and third-party cookies served through our website and the purposes they
                  perform are described below:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with
                    services available through our website and to use some of its features, such as access to secure
                    areas.
                  </li>
                  <li>
                    <strong>Performance and Functionality Cookies:</strong> These cookies are used to enhance the
                    performance and functionality of our website but are non-essential to their use. However, without
                    these cookies, certain functionality may become unavailable.
                  </li>
                  <li>
                    <strong>Analytics and Customization Cookies:</strong> These cookies collect information that is used
                    either in aggregate form to help us understand how our website is being used or how effective our
                    marketing campaigns are, or to help us customize our website for you.
                  </li>
                  <li>
                    <strong>Advertising Cookies:</strong> These cookies are used to make advertising messages more
                    relevant to you. They perform functions like preventing the same ad from continuously reappearing,
                    ensuring that ads are properly displayed, and in some cases selecting advertisements that are based
                    on your interests.
                  </li>
                  <li>
                    <strong>Social Media Cookies:</strong> These cookies are used to enable you to share pages and
                    content that you find interesting on our website through third-party social networking and other
                    websites. These cookies may also be used for advertising purposes.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold font-poppins text-deepBlue">4. How Can You Control Cookies?</h2>
                <p>
                  You have the right to decide whether to accept or reject cookies. You can exercise your cookie
                  preferences by clicking on the appropriate opt-out links provided in the cookie banner on our website.
                </p>
                <p>
                  You can also set or amend your web browser controls to accept or refuse cookies. If you choose to
                  reject cookies, you may still use our website though your access to some functionality and areas of
                  our website may be restricted. As the means by which you can refuse cookies through your web browser
                  controls vary from browser to browser, you should visit your browser's help menu for more information.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold font-poppins text-deepBlue">
                  5. How Often Will We Update This Cookie Policy?
                </h2>
                <p>
                  We may update this Cookie Policy from time to time in order to reflect, for example, changes to the
                  cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this
                  Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                </p>
                <p>The date at the top of this Cookie Policy indicates when it was last updated.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold font-poppins text-deepBlue">
                  6. Where Can You Get Further Information?
                </h2>
                <p>If you have any questions about our use of cookies or other technologies, please contact us at:</p>
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
