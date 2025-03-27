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
        <div className="left-container"></div>
        <div className="right-container">
          <div className="right-container__box">
            <div className="right-container-box">
              <h2 className="right-container__h2">Nice to see you!</h2>
              <p className="right-container__p">
                Enter your email and password to sign in
              </p>
            </div>
            <div className="input-container">
              <label htmlFor="email" className="right-container__label">
                Email
              </label>
              <input
                type="text"
                className="right-container__input"
                name="email"
                placeholder="Your email address"
              />
              <label htmlFor="email" className="right-container__label">
                Password
              </label>
              <input
                type="password"
                className="right-container__input"
                name="password"
                placeholder="Your password"
              />
            </div>
            <div className="toggle-container">
              <input type="checkbox" className="toggle-box" name="checkbox" />
              <label htmlFor="checkbox">Remember me</label>
            </div>
            <button className="btn">SIGN IN</button>
            <p className="right-container__bottom-text">
              Don't have an account? <strong>Sign Up</strong>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
