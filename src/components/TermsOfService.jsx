import { Link } from "react-router-dom";

const TermsOfService = () => {
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
        <h1 className="text-4xl font-bold mb-6 text-center">
          Terms of Service
        </h1>
        <p className="text-sm text-center text-base-content/70 mb-8">
          Last Updated: October 29, 2025
        </p>

        <div className="alert alert-warning mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>
            By using SwipeStack, you agree to these terms. Please read them
            carefully.
          </span>
        </div>

        <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-base-content/80 mb-4">
              By accessing or using SwipeStack ("the Service"), you agree to be
              bound by these Terms of Service. If you do not agree to these
              terms, please do not use our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Eligibility</h2>
            <div className="bg-base-200 p-6 rounded-lg">
              <p className="text-base-content/80 mb-4">
                To use SwipeStack, you must:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                <li>Be at least 18 years of age</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>
                  Not be prohibited from using the Service under applicable laws
                </li>
                <li>Not have been previously banned from SwipeStack</li>
                <li>Provide accurate and truthful information</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Account Registration</h2>
            <p className="text-base-content/80 mb-4">
              When creating an account, you agree to:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <p className="text-base-content/80">
                  Provide accurate, current, and complete information
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <p className="text-base-content/80">
                  Maintain the security of your password and account
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <p className="text-base-content/80">
                  Update your information to keep it accurate
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <p className="text-base-content/80">
                  Accept responsibility for all activities under your account
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <p className="text-base-content/80">
                  Notify us immediately of any unauthorized access
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. User Conduct</h2>
            <div className="bg-error/10 border border-error/30 p-6 rounded-lg mb-4">
              <h3 className="text-xl font-semibold mb-3">You agree NOT to:</h3>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                <li>Impersonate any person or entity</li>
                <li>Post false, misleading, or fraudulent content</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Upload inappropriate, offensive, or illegal content</li>
                <li>Spam or send unsolicited messages</li>
                <li>
                  Use the Service for commercial purposes without authorization
                </li>
                <li>Attempt to access other users' accounts</li>
                <li>Interfere with the Service's operation</li>
                <li>Use automated systems (bots) without permission</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              5. Content and Intellectual Property
            </h2>
            <div className="bg-base-200 p-6 rounded-lg mb-4">
              <h3 className="text-xl font-semibold mb-3">Your Content</h3>
              <p className="text-base-content/80 mb-2">
                You retain ownership of content you post. By posting, you grant
                SwipeStack:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                <li>
                  A worldwide, non-exclusive license to use, display, and
                  distribute your content
                </li>
                <li>The right to moderate, remove, or refuse any content</li>
                <li>Permission to use your content for promotional purposes</li>
              </ul>
            </div>
            <div className="bg-base-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Our Content</h3>
              <p className="text-base-content/80">
                All SwipeStack branding, logos, design, and features are owned
                by us and protected by intellectual property laws. You may not
                copy, modify, or distribute our content without permission.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              6. Subscriptions and Payments
            </h2>
            <p className="text-base-content/80 mb-4">
              Premium features require payment:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base-content/80 ml-4">
              <li>Subscriptions renew automatically unless canceled</li>
              <li>Prices are subject to change with notice</li>
              <li>All sales are final except as stated in our Refund Policy</li>
              <li>You are responsible for all charges on your account</li>
              <li>Failure to pay may result in service suspension</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Safety and Security</h2>
            <div className="bg-info/10 border border-info/30 p-6 rounded-lg">
              <p className="text-base-content/80 mb-4">
                Your safety is important to us. We encourage you to:
              </p>
              <ul className="space-y-2 text-base-content/80">
                <li>• Meet in public places for first meetings</li>
                <li>• Tell someone about your plans</li>
                <li>• Report suspicious behavior immediately</li>
                <li>• Never share financial information</li>
                <li>• Trust your instincts</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
            <p className="text-base-content/80 mb-4">
              We may suspend or terminate your account:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base-content/80 ml-4">
              <li>For violation of these Terms</li>
              <li>For fraudulent or illegal activity</li>
              <li>If you harm other users or the Service</li>
              <li>At our discretion for any reason with notice</li>
            </ul>
            <p className="text-base-content/80 mt-4">
              You may delete your account at any time through the app settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Disclaimers</h2>
            <div className="bg-base-200 p-6 rounded-lg">
              <p className="text-base-content/80 mb-4">
                SwipeStack is provided "as is" without warranties of any kind:
              </p>
              <ul className="space-y-2 text-base-content/80">
                <li>• We do not guarantee matches or relationships</li>
                <li>• We are not responsible for user-generated content</li>
                <li>• We do not verify the accuracy of user profiles</li>
                <li>• We are not liable for user interactions or meetings</li>
                <li>• Service availability may vary and is not guaranteed</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              10. Limitation of Liability
            </h2>
            <p className="text-base-content/80 mb-4">
              To the maximum extent permitted by law, SwipeStack shall not be
              liable for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base-content/80 ml-4">
              <li>Any indirect, incidental, or consequential damages</li>
              <li>Loss of profits, data, or goodwill</li>
              <li>Actions or conduct of other users</li>
              <li>Unauthorized access to your account</li>
              <li>Service interruptions or technical issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Dispute Resolution</h2>
            <div className="bg-base-200 p-6 rounded-lg">
              <p className="text-base-content/80 mb-4">In case of disputes:</p>
              <ol className="list-decimal list-inside space-y-2 text-base-content/80">
                <li>Contact our support team first to resolve informally</li>
                <li>If unresolved, disputes will be governed by Indian law</li>
                <li>Jurisdiction will be in Pune, Maharashtra, India</li>
                <li>Arbitration may be required for certain disputes</li>
              </ol>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
            <p className="text-base-content/80 mb-4">
              We may update these Terms at any time. Significant changes will be
              notified via:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base-content/80 ml-4">
              <li>In-app notifications</li>
              <li>Email to your registered address</li>
              <li>Prominent notice on our website</li>
            </ul>
            <p className="text-base-content/80 mt-4">
              Continued use after changes constitutes acceptance of new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
            <div className="bg-base-200 p-6 rounded-lg">
              <p className="text-base-content/80 mb-4">
                For questions about these Terms of Service:
              </p>
              <p className="text-base-content/80 mb-2">
                <strong>Email:</strong> legal@swipestack.com
              </p>
              <p className="text-base-content/80 mb-2">
                <strong>Support:</strong> support@swipestack.com
              </p>
              <p className="text-base-content/80 mb-4">
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

export default TermsOfService;