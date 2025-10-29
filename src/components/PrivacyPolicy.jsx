import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-base-100 font-rubik">
      {/* Header */}
      <div className="navbar bg-base-300 shadow-sm px-4">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost p-0 sm:p-2">
            <span className="text-2xl">🧑‍💻</span>
            <span className="italic font-bold text-lg sm:text-xl ml-1">
              SwipeStack
            </span>
          </Link>
        </div>
        <div className="navbar-end">
          <Link to="/" className="btn btn-ghost btn-sm">
            Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="text-sm text-center text-base-content/70 mb-8">
          Last Updated: October 29, 2025
        </p>

        <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-base-content/80 mb-4">
              Welcome to SwipeStack! We respect your privacy and are committed
              to protecting your personal data. This privacy policy explains how
              we collect, use, and safeguard your information when you use our
              networking and dating platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              2. Information We Collect
            </h2>
            <div className="bg-base-200 p-6 rounded-lg mb-4">
              <h3 className="text-xl font-semibold mb-3">
                2.1 Personal Information
              </h3>
              <p className="text-base-content/80 mb-2">
                We collect information you provide directly:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                <li>Name, email address, and phone number</li>
                <li>Profile photos and bio information</li>
                <li>Age, gender, and location data</li>
                <li>Professional information (for networking features)</li>
                <li>Preferences and interests</li>
              </ul>
            </div>

            <div className="bg-base-200 p-6 rounded-lg mb-4">
              <h3 className="text-xl font-semibold mb-3">2.2 Usage Data</h3>
              <p className="text-base-content/80 mb-2">
                We automatically collect:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                <li>Device information and IP address</li>
                <li>App usage patterns and interactions</li>
                <li>Swipe preferences and match data</li>
                <li>Chat messages and communication logs</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-base-content/80 mb-4">We use your data to:</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <p className="text-base-content/80">
                  Provide and improve our matching algorithm
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <p className="text-base-content/80">
                  Enable communication between matched users
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <p className="text-base-content/80">
                  Personalize your experience
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <p className="text-base-content/80">
                  Ensure platform safety and prevent fraud
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <p className="text-base-content/80">
                  Process payments and subscriptions
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Data Sharing</h2>
            <p className="text-base-content/80 mb-4">
              We do not sell your personal data. We may share your information
              only in these circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base-content/80 ml-4">
              <li>With other users when you match or connect</li>
              <li>With service providers who help us operate the platform</li>
              <li>When required by law or legal process</li>
              <li>To protect the rights and safety of our users</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
            <p className="text-base-content/80 mb-4">
              We implement industry-standard security measures to protect your
              data, including encryption, secure servers, and regular security
              audits. However, no method of transmission over the internet is
              100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
            <p className="text-base-content/80 mb-4">You have the right to:</p>
            <div className="bg-base-200 p-6 rounded-lg">
              <ul className="space-y-3 text-base-content/80">
                <li>• Access and download your personal data</li>
                <li>• Correct inaccurate information</li>
                <li>• Delete your account and data</li>
                <li>• Opt-out of marketing communications</li>
                <li>• Restrict certain data processing</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Cookies and Tracking</h2>
            <p className="text-base-content/80 mb-4">
              We use cookies and similar technologies to enhance your
              experience, analyze usage patterns, and personalize content. You
              can control cookie settings through your browser.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
            <p className="text-base-content/80 mb-4">
              SwipeStack is not intended for users under 18 years of age. We do
              not knowingly collect information from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              9. Changes to This Policy
            </h2>
            <p className="text-base-content/80 mb-4">
              We may update this privacy policy periodically. We will notify you
              of significant changes via email or app notification.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
            <p className="text-base-content/80 mb-4">
              If you have questions about this privacy policy, please contact
              us:
            </p>
            <div className="bg-base-200 p-6 rounded-lg">
              <p className="text-base-content/80 mb-2">
                <strong>Email:</strong> privacy@swipestack.com
              </p>
              <p className="text-base-content/80 mb-2">
                <strong>Address:</strong> Pune, Maharashtra, India
              </p>
              <Link to="/contact-us" className="text-primary hover:underline">
                Visit our Contact Page →
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer bg-base-200 text-base-content p-10 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-sm text-base-content/70">
            © 2025 SwipeStack. All rights reserved by Abhishek Biradar.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
