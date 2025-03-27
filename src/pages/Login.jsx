import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "../components/Navbar";

const LoginPage = () => {
  const containerRef = useRef(null);
  const welcomeTextRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const googleBtnRef = useRef(null);
  const dividerRef = useRef(null);
  const formRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  useEffect(() => {
    // Create animation timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.8 },
    });

    // Section fade in
    tl.fromTo(
      containerRef.current,
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0 }
    )
      // Welcome text animation
      .fromTo(
        welcomeTextRef.current,
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
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0 },
        "-=0.4"
      )
      // Divider animation
      .fromTo(
        dividerRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0 },
        "-=0.3"
      )
      // Form animation
      .fromTo(
        formRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0 },
        "-=0.2"
      )
      // Image animations
      .fromTo(
        img1Ref.current,
        { autoAlpha: 0, x: -50 },
        { autoAlpha: 1, x: 0 },
        "-=0.5"
      )
      .fromTo(
        img2Ref.current,
        { autoAlpha: 0, x: 50 },
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
                    ref={welcomeTextRef}
                    style={{ opacity: 0 }}
                  >
                    Welcome back!
                  </p>
                  <h2
                    className="mt-10 mb-5 text-brand-1"
                    ref={titleRef}
                    style={{ opacity: 0 }}
                  >
                    Member Login
                  </h2>
                  <p
                    className="font-sm text-muted mb-30"
                    ref={subtitleRef}
                    style={{ opacity: 0 }}
                  >
                    Access to all features. No credit card required.
                  </p>
                </div>
                <form
                  className="login-register text-start mt-20"
                  action="#"
                  ref={formRef}
                  style={{ opacity: 0 }}
                >
                  <div className="form-group">
                    <label className="form-label" htmlFor="input-1">
                      Username or Email address *
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
                <img className="shape-1" src="/imgs/login.png" width={300} />
              </div>
              <div className="img-2" ref={img2Ref} style={{ opacity: 0 }}>
                <img src="/imgs/login1.png" width={300} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LoginPage;
