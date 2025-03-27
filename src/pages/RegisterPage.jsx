import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "../components/Navbar";

const RegisterPage = () => {
  // Create refs for animation targets
  const containerRef = useRef(null);
  const registerTextRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const googleBtnRef = useRef(null);
  const dividerRef = useRef(null);
  const formRef = useRef(null);
  const formInputsRef = useRef([]);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  // Add form input refs
  const addToInputsRef = (el) => {
    if (el && !formInputsRef.current.includes(el)) {
      formInputsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Create animation timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.6 },
    });

    // Section fade in
    tl.fromTo(
      containerRef.current,
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0 }
    )
      // Register text animation
      .fromTo(
        registerTextRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0 },
        "-=0.7"
      )
      // Title animation
      .fromTo(
        titleRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0 },
        "-=0.6"
      )
      // Subtitle animation
      .fromTo(
        subtitleRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0 },
        "-=0.5"
      )
      // Google button animation
      .fromTo(
        googleBtnRef.current,
        { autoAlpha: 0, y: 20, scale: 0.9 },
        { autoAlpha: 1, y: 0, scale: 1 },
        "-=0.4"
      )
      // Divider animation
      .fromTo(
        dividerRef.current,
        { autoAlpha: 0, width: 0 },
        { autoAlpha: 1, width: "100%" },
        "-=0.3"
      )
      // Form container animation
      .fromTo(
        formRef.current,
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0 },
        "-=0.2"
      )
      // Form inputs staggered animation
      .fromTo(
        formInputsRef.current,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
        },
        "-=0.1"
      )
      // Image animations
      .fromTo(
        img1Ref.current,
        { autoAlpha: 0, x: -100 },
        { autoAlpha: 1, x: 0 },
        "-=0.5"
      )
      .fromTo(
        img2Ref.current,
        { autoAlpha: 0, x: 100 },
        { autoAlpha: 1, x: 0 },
        "-=0.5"
      );
  }, []);

  return (
    <>
      <Navbar />
      <main className="main">
        <section
          className="pt-100 login-register"
          ref={containerRef}
          style={{ opacity: 0 }}
        >
          <div className="container">
            <div className="row login-register-cover">
              <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                <div className="text-center">
                  <p
                    className="font-sm text-brand-2"
                    ref={registerTextRef}
                    style={{ opacity: 0 }}
                  >
                    Register
                  </p>
                  <h2
                    className="mt-10 mb-5 text-brand-1"
                    ref={titleRef}
                    style={{ opacity: 0 }}
                  >
                    Start for free Today
                  </h2>
                </div>
                <form
                  className="login-register text-start mt-20"
                  action="#"
                  ref={formRef}
                  style={{ opacity: 0 }}
                >
                  <div className="form-group">
                    <label className="form-label" htmlFor="input-1">
                    Full Name
                    </label>
                    <input
                      className="form-control"
                      id="input-1"
                      type="text"
                      required
                      name="fullname"
                      placeholder="Steven Job"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="input-4">
                      Password *
                    </label>
                    <input
                      className="form-control"
                      id="input-4"
                      type="password"
                      required
                      name="password"
                      placeholder="************"
                    />
                  </div>
                  <div className="login_footer form-group d-flex justify-content-between">
                    <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">Remember me</span>
                      <span className="checkmark"></span>
                    </label>
                    <a className="text-muted" href="page-contact.html">
                      Forgot Password
                    </a>
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-brand-1 hover-up w-100"
                      type="submit"
                      name="login"
                    >
                      Login
                    </button>
                  </div>
                  <div className="text-muted text-center">
                    Don't have an Account?{" "}
                    <a href="page-signin.html">Sign up</a>
                  </div>
                </form>
              </div>
              <div
                className="img-1 d-none d-lg-block"
                ref={img1Ref}
                style={{ opacity: 0 }}
              >
                <img
                  className="shape-1"
                  src="assets/imgs/page/login-register/img-1.svg"
                  alt="JobBox"
                />
              </div>
              <div className="img-2" ref={img2Ref} style={{ opacity: 0 }}>
                <img
                  src="assets/imgs/page/login-register/img-2.svg"
                  alt="JobBox"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default RegisterPage;
