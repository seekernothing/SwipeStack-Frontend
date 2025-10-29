import { Link } from "react-router-dom";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

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
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-center text-base-content/70 mb-12 max-w-2xl mx-auto">
          Have questions or need help? We're here for you! Reach out and we'll
          get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Send us a Message</h2>

              {submitted ? (
                <div className="alert alert-success">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    Thank you! Your message has been sent successfully.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">Your Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">Email Address</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">Subject</span>
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="select select-bordered w-full"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="technical">Technical Support</option>
                      <option value="billing">Billing & Payments</option>
                      <option value="feedback">Feedback</option>
                      <option value="report">Report a Problem</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-control mb-6">
                    <label className="label">
                      <span className="label-text">Message</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      className="textarea textarea-bordered h-32"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-full">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Email Support */}
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📧</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email Support</h3>
                    <p className="text-base-content/70 mb-2">
                      For general inquiries and support
                    </p>
                    <a
                      href="mailto:support@swipestack.com"
                      className="text-primary hover:underline"
                    >
                      support@swipestack.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Support */}
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🔧</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Technical Support
                    </h3>
                    <p className="text-base-content/70 mb-2">
                      Having technical issues? We're here to help.
                    </p>
                    <a
                      href="mailto:tech@swipestack.com"
                      className="text-primary hover:underline"
                    >
                      tech@swipestack.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Inquiries */}
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">💼</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Business Inquiries
                    </h3>
                    <p className="text-base-content/70 mb-2">
                      Partnerships and business opportunities
                    </p>
                    <a
                      href="mailto:business@swipestack.com"
                      className="text-primary hover:underline"
                    >
                      business@swipestack.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Location */}
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📍</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Office Location</h3>
                    <p className="text-base-content/70">
                      Pune, Maharashtra
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  {/* Twitter */}
                  <a
                    href="#"
                    className="btn btn-circle btn-outline hover:btn-primary"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="#"
                    className="btn btn-circle btn-outline hover:btn-primary"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="#"
                    className="btn btn-circle btn-outline hover:btn-primary"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 ..."></path>
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="#"
                    className="btn btn-circle btn-outline hover:btn-primary"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0 ..."></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="faq-accordion" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                How do I delete my account?
              </div>
              <div className="collapse-content">
                <p className="text-base-content/70">
                  You can delete your account by going to Settings → Account →
                  Delete Account. Please note this action is permanent.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                How do I report a user?
              </div>
              <div className="collapse-content">
                <p className="text-base-content/70">
                  Tap on the user's profile, click the three dots, and select
                  "Report User." Our team reviews reports within 24 hours.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                What payment methods do you accept?
              </div>
              <div className="collapse-content">
                <p className="text-base-content/70">
                  We accept all major credit/debit cards, UPI, and digital
                  wallets.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                How long does support take to respond?
              </div>
              <div className="collapse-content">
                <p className="text-base-content/70">
                  We typically respond within 24–48 hours during business days.
                </p>
              </div>
            </div>
          </div>
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

export default ContactUs;
