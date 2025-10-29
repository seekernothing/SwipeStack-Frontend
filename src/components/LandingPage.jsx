import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
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

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <a className="hover:text-primary text-sm">Features</a>
            </li>
            <li>
              <a className="hover:text-primary text-sm">Safety</a>
            </li>
            <li>
              <a className="hover:text-primary text-sm">Support</a>
            </li>
            <li>
              <a className="hover:text-primary text-sm">About</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <button
            type="button"
            onClick={handleLoginClick}
            className="btn btn-outline  btn-sm sm:btn-md"
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero min-h-[70vh] sm:min-h-[80vh] bg-gradient-to-br from-primary/10 to-secondary/10 px-4">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-base-content mb-4 sm:mb-6">
              MAKE THE NEXT MOVE
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-base-content/70 mb-6 sm:mb-8">
              Your perfect match is just a swipe away
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="btn btn-primary btn-md sm:btn-lg">
                Download now
              </button>
              <button
                type="button"
                onClick={handleLoginClick}
                className="btn btn-outline btn-md sm:btn-lg"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 sm:py-16 bg-base-200 px-4">
        <div className="container mx-auto ml-2">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                BRING YOUR NETWORKING GAME UP
              </h2>
              <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 opacity-90">
                You deserve better, so we've designed great ways for you to
                build more and stress less.
              </p>
              <button className="btn btn-primary btn-sm sm:btn-md">
                See what's new
              </button>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-base-100 rounded-3xl overflow-hidden shadow-xl border border-amber-400 transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Professional networking"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}

      <div className="py-12 sm:py-16 bg-base-100 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-base-content">
            WE'RE NOT JUST FOR NETWORKING
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {/* SwipeStack Date */}
            <div className="card group bg-base-200 shadow-md border border-amber-400 overflow-hidden">
              <figure className="px-4 pt-4 sm:px-6 sm:pt-6">
                <div className="w-full h-32 sm:h-40 rounded-xl overflow-hidden transition-transform duration-500 group-hover:scale-105">
                  <img
                    src="https://images.unsplash.com/photo-1591711696773-c4b7fe4d3d74?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D"
                    alt="SwipeStack Date"
                    className="w-full h-full object-cover"
                  />
                </div>
              </figure>
              <div className="card-body p-4 sm:p-6">
                <h3 className="card-title text-lg sm:text-xl">
                  SwipeStack Date
                </h3>
                <p className="text-base-content/70 text-xs sm:text-sm">
                  Find someone who actually wants to date, not just scroll
                  forever.
                </p>
              </div>
            </div>

            {/* Find Friends */}
            <div className="card group bg-base-200 shadow-md border border-amber-400 overflow-hidden">
              <figure className="px-4 pt-4 sm:px-6 sm:pt-6">
                <div className="w-full h-32 sm:h-40 rounded-xl overflow-hidden transition-transform duration-500 group-hover:scale-105">
                  <img
                    src="https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D"
                    alt="Find Friends"
                    className="w-full h-full object-cover"
                  />
                </div>
              </figure>
              <div className="card-body p-4 sm:p-6">
                <h3 className="card-title text-lg sm:text-xl">Find Friends</h3>
                <p className="text-base-content/70 text-xs sm:text-sm">
                  Meet someone like you. Make new friends and find new
                  activities.
                </p>
              </div>
            </div>

            {/* Career Moves */}
            <div className="card group bg-base-200 shadow-md border border-amber-400 overflow-hidden">
              <figure className="px-4 pt-4 sm:px-6 sm:pt-6">
                <div className="w-full h-32 sm:h-40 rounded-xl overflow-hidden transition-transform duration-500 group-hover:scale-105">
                  <img
                    src="https://images.unsplash.com/photo-1672523053262-5905218b665d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D"
                    alt="Career Moves"
                    className="w-full h-full object-cover"
                  />
                </div>
              </figure>
              <div className="card-body p-4 sm:p-6">
                <h3 className="card-title text-lg sm:text-xl">Career Moves</h3>
                <p className="text-base-content/70 text-xs sm:text-sm">
                  Connect with professionals and find new opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}

      <div className="py-12 sm:py-16 bg-base-200 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
            {/* Image Side */}
            <div className="lg:w-1/2 flex justify-center order-2 lg:order-1">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-base-100 rounded-3xl overflow-hidden shadow-xl border border-amber-400 transition-transform duration-500 hover:scale-105">
                <img
                  src="https://images.unsplash.com/photo-1499439398383-cfcbab21207d?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D"
                  alt="First move"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Side */}
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                MAKE THE FIRST MOVE
              </h2>
              <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 opacity-90">
                We're the only app that makes dating better by trusting women's
                experiences first.
              </p>
              <button
                onClick={handleLoginClick}
                className="btn btn-primary btn-sm sm:btn-md"
              >
                About SwipeStack
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}

      <div className="py-12 sm:py-16 bg-base-100">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-base-content">
            SUCCESS STORIES
          </h2>
          {/* Carousel Centered */}
          <div className="flex justify-center">
            <div className="carousel w-full max-w-3xl rounded-box shadow-xl">
              {/* Slide 1 */}
              <div id="slide1" className="carousel-item relative w-full">
                <div className="card bg-base-200 shadow-xl w-full border-2 border-amber-400 transition-all duration-500 hover:shadow-2xl">
                  <figure className="overflow-hidden">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1661906789703-a25a1e53180e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Happy couple"
                      className="w-full h-48 sm:h-64 object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </figure>
                  <div className="card-body p-4 sm:p-6">
                    <h3 className="card-title text-lg sm:text-xl animate-pulse">
                      Rahul Met his Bussiness Cofounder
                    </h3>
                    <p className="text-base-content/70 text-sm">
                      "It is great for networking"
                    </p>
                  </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                  <a
                    href="#slide3"
                    className="btn btn-circle btn-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    ❮
                  </a>
                  <a
                    href="#slide2"
                    className="btn btn-circle btn-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    ❯
                  </a>
                </div>
              </div>

              {/* Slide 2 */}
              <div id="slide2" className="carousel-item relative w-full">
                <div className="card bg-base-200 shadow-xl w-full border-2 border-amber-400 transition-all duration-500 hover:shadow-2xl">
                  <figure className="overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1496602910407-bacda74a0fe4?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Happy couple"
                      className="w-full h-48 sm:h-64 object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </figure>
                  <div className="card-body p-4 sm:p-6">
                    <h3 className="card-title text-lg sm:text-xl animate-pulse">
                      Rahul Found His Soulmate
                    </h3>
                    <p className="text-base-content/70 text-sm">
                      "SwipeStack changed my life forever!"
                    </p>
                  </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                  <a
                    href="#slide1"
                    className="btn btn-circle btn-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    ❮
                  </a>
                  <a
                    href="#slide3"
                    className="btn btn-circle btn-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    ❯
                  </a>
                </div>
              </div>

              {/* Slide 3 */}
              <div id="slide3" className="carousel-item relative w-full">
                <div className="card bg-base-200 shadow-xl w-full border-2 border-amber-400 transition-all duration-500 hover:shadow-2xl">
                  <figure className="overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1621112904887-419379ce6824?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Happy couple"
                      className="w-full h-48 sm:h-64 object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </figure>
                  <div className="card-body p-4 sm:p-6">
                    <h3 className="card-title text-lg sm:text-xl animate-pulse">
                      Rohit Found His Club-Hopping Crew
                    </h3>
                    <p className="text-base-content/70 text-sm">
                      "Connected with people who vibe with my nightlife energy."
                    </p>
                  </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                  <a
                    href="#slide2"
                    className="btn btn-circle btn-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    ❮
                  </a>
                  <a
                    href="#slide1"
                    className="btn btn-circle btn-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end of flex justify-center */}
        </div>
      </div>

      {/* Professional Footer */}
      <footer className="footer bg-base-200 text-base-content pt-10 pb-6 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">🧑‍💻</span>
                <span className="italic font-bold text-xl">SwipeStack</span>
              </div>
              <p className="text-sm mb-2">
                Making genuine connections since 2024
              </p>
              <p className="text-sm text-base-content/70">
                <b>Copyright © All right reserved by Abhishek Biradar.</b>
              </p>
            </div>

            {/* Links Column */}
            <div>
              <h3 className="footer-title text-sm uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a className="link link-hover text-sm">About us</a>
                </li>
                <li>
                  <a className="link link-hover text-sm">Careers</a>
                </li>

                <li>
                  <a className="link link-hover text-sm">Press</a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="footer-title text-sm uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/terms-of-service"
                    className="link link-hover text-sm"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="link link-hover text-sm"
                  >
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link to="/refund-policy" className="link link-hover text-sm">
                    Refund policy
                  </Link>
                </li>
                <li>
                  <a className="link link-hover text-sm">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Social Column */}
            <div>
              <h3 className="footer-title text-sm uppercase tracking-wider mb-4">
                Connect
              </h3>
              <div className="grid grid-flow-col gap-4 w-max">
                <a className="hover:opacity-75">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a className="hover:opacity-75">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a className="hover:opacity-75">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
                <a className="hover:opacity-75">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
              <div className="mt-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-sm">
                      Subscribe to our newsletter
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="your@email.com"
                      className="input input-bordered input-sm w-full pr-16"
                    />
                    <button className="btn btn-primary btn-sm absolute top-0 right-0 rounded-l-none">
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="divider my-6"></div>

          {/* <div className="text-center text-xs text-base-content/70  ">
            <p className="">All rights reserved. SwipeStack® is a registered trademark.</p>
            <p className="mt-1">A project by Abhishek Biradar</p>
          </div> */}
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
