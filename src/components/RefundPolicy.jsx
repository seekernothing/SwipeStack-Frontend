import { Link } from "react-router-dom";

const RefundPolicy = () => {
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
        <h1 className="text-4xl font-bold mb-6 text-center">Refund Policy</h1>
        <p className="text-sm text-center text-base-content/70 mb-8">
          Last Updated: October 29, 2025
        </p>

        <div className="alert alert-info mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>
            Please read this refund policy carefully before making any purchase.
          </span>
        </div>

        <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Overview</h2>
            <p className="text-base-content/80 mb-4">
              At SwipeStack, we want you to be completely satisfied with your
              purchase. This refund policy outlines the conditions under which
              refunds are provided for our premium features and subscription
              services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Subscription Refunds</h2>
            <div className="bg-base-200 p-6 rounded-lg mb-4">
              <h3 className="text-xl font-semibold mb-3">
                2.1 Monthly Subscriptions
              </h3>
              <p className="text-base-content/80 mb-2">
                Monthly subscriptions are eligible for a full refund if:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                <li>Request is made within 7 days of purchase</li>
                <li>You have not used premium features extensively</li>
                <li>You have not violated our Terms of Service</li>
              </ul>
            </div>

            <div className="bg-base-200 p-6 rounded-lg mb-4">
              <h3 className="text-xl font-semibold mb-3">
                2.2 Annual Subscriptions
              </h3>
              <p className="text-base-content/80 mb-2">
                Annual subscriptions are eligible for a prorated refund if:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                <li>Request is made within 14 days of purchase</li>
                <li>Refund amount will be calculated based on unused months</li>
                <li>Minimum usage requirements are met</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Non-Refundable Items</h2>
            <div className="bg-error/10 border border-error/30 p-6 rounded-lg">
              <p className="text-base-content/80 mb-4">
                The following purchases are <strong>NOT eligible</strong> for
                refunds:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                <li>In-app purchases (Super Likes, Boosts, etc.)</li>
                <li>One-time premium features</li>
                <li>Subscriptions after the refund window has closed</li>
                <li>Accounts banned for Terms of Service violations</li>
                <li>Promotional or discounted subscriptions</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              4. How to Request a Refund
            </h2>
            <p className="text-base-content/80 mb-4">
              To request a refund, follow these steps:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="badge badge-primary badge-lg">1</div>
                <div>
                  <h4 className="font-semibold mb-1">Contact Support</h4>
                  <p className="text-base-content/80 text-sm">
                    Email us at <strong>refunds@swipestack.com</strong> with
                    your account details
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="badge badge-primary badge-lg">2</div>
                <div>
                  <h4 className="font-semibold mb-1">Provide Information</h4>
                  <p className="text-base-content/80 text-sm">
                    Include your transaction ID, reason for refund, and account
                    email
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="badge badge-primary badge-lg">3</div>
                <div>
                  <h4 className="font-semibold mb-1">Wait for Review</h4>
                  <p className="text-base-content/80 text-sm">
                    Our team will review your request within 5-7 business days
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="badge badge-primary badge-lg">4</div>
                <div>
                  <h4 className="font-semibold mb-1">Receive Refund</h4>
                  <p className="text-base-content/80 text-sm">
                    If approved, refunds are processed within 10-14 business
                    days
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Processing Time</h2>
            <p className="text-base-content/80 mb-4">
              Once your refund is approved:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base-content/80 ml-4">
              <li>Credit card refunds: 5-10 business days</li>
              <li>Debit card refunds: 7-14 business days</li>
              <li>UPI/Net Banking: 3-7 business days</li>
              <li>Digital wallet refunds: 2-5 business days</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Cancellation Policy</h2>
            <p className="text-base-content/80 mb-4">
              You can cancel your subscription at any time through:
            </p>
            <div className="bg-base-200 p-6 rounded-lg">
              <ul className="space-y-2 text-base-content/80">
                <li>• App Settings → Subscription → Cancel</li>
                <li>• Website Account Settings</li>
                <li>• Contacting customer support</li>
              </ul>
              <div className="mt-4 p-4 bg-warning/10 border border-warning/30 rounded">
                <p className="text-sm text-base-content/80">
                  <strong>Note:</strong> Cancellation stops future billing but
                  does not automatically trigger a refund for the current
                  billing period.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              7. Special Circumstances
            </h2>
            <p className="text-base-content/80 mb-4">
              We may consider refunds outside our standard policy for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base-content/80 ml-4">
              <li>Technical issues preventing service usage</li>
              <li>Duplicate charges or billing errors</li>
              <li>Service outages lasting more than 24 hours</li>
              <li>Unauthorized charges on your account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
            <div className="bg-base-200 p-6 rounded-lg">
              <p className="text-base-content/80 mb-4">
                For refund requests or questions about this policy:
              </p>
              <p className="text-base-content/80 mb-2">
                <strong>Email:</strong> refunds@swipestack.com
              </p>
              <p className="text-base-content/80 mb-2">
                <strong>Support Email:</strong> support@swipestack.com
              </p>
              <p className="text-base-content/80 mb-4">
                <strong>Address:</strong> Pune, Maharashtra, India
              </p>
              <Link to="/contact-us" className="text-primary hover:underline">
                Visit our Contact Page →
              </Link>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Policy Changes</h2>
            <p className="text-base-content/80 mb-4">
              We reserve the right to modify this refund policy at any time.
              Changes will be effective immediately upon posting to this page.
              Your continued use of SwipeStack after changes constitutes
              acceptance of the updated policy.
            </p>
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

export default RefundPolicy;
