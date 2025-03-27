import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const tagsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animation timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate elements with fade-up effect
    tl.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )
      .fromTo(
        descriptionRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        tagsRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        imageRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      );
  }, []);

  return (
    <section className="section-box">
      <div className="banner-hero hero-1 banner-homepage4">
        <div className="banner-inner">
          <div className="row">
            {/* Left Side */}
            <div className="col-xl-7 col-lg-12">
              <div className="block-banner">
                <h1
                  className="heading-banner"
                  ref={headingRef}
                  style={{ opacity: 0 }}
                >
                  Unlock the Career
                  <span className="color-brand-2"> You Deserve</span>
                  <br className="d-none d-lg-block" />
                  Find the Perfect Job Today
                </h1>
                <div
                  className="banner-description mt-20"
                  ref={descriptionRef}
                  style={{ opacity: 0 }}
                >
                  Each month, more than 3 million job seekers turn to website in
                  their search for work,
                  <br className="d-none d-lg-block" />
                  making over 140,000 applications every single day
                </div>

                {/* Popular tags */}
                <div
                  className="list-tags-banner mt-60"
                  ref={tagsRef}
                  style={{ opacity: 0 }}
                >
                  <strong>Popular Searches:</strong>
                  <a href="#">Designer</a>, <a href="#">Web</a>,{" "}
                  <a href="#">IOS</a>, <a href="#">Developer</a>,{" "}
                  <a href="#">PHP</a>, <a href="#">Senior</a>,{" "}
                  <a href="#">Engineer</a>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-xl-5 col-lg-12 d-none d-xl-block col-md-6">
              <div
                className="banner-imgs"
                ref={imageRef}
                style={{ opacity: 0 }}
              >
                <div className="block-1 shape-1">
                  <img
                    className="img-responsive"
                    src="../imgs/banner1.png"
                    alt="jobBox"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
