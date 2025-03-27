import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const LatestJob = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const tabsRef = useRef(null);
  const jobsRef = useRef([]);
  const [activeCategory, setActiveCategory] = useState(null); // Start with no category selected

  // Job categories data
  const categories = [
    {
      id: 1,
      name: "Management",
      icon: "https://opstack-html-frontend.vercel.app/assets/imgs/page/homepage1/management.svg",
    },
    {
      id: 2,
      name: "Marketing & Sale",
      icon: "https://opstack-html-frontend.vercel.app/assets/imgs/page/homepage1/marketing.svg",
    },
    {
      id: 3,
      name: "Finance",
      icon: "https://opstack-html-frontend.vercel.app/assets/imgs/page/homepage1/finance.svg",
    },
    {
      id: 4,
      name: "Human Resource",
      icon: "https://opstack-html-frontend.vercel.app/assets/imgs/page/homepage1/hr.svg",
    },
  ];

  // Job data with category IDs
  const jobs = [
    {
      id: 1,
      title: "React Native Web Developer",
      type: "Freelancer",
      location: "New York, US",
      time: "3 mins ago",
      salary: "$90 - $120",
      tags: ["Figma", "Adobe XD"],
      image: "img1.png",
      categoryId: 1, // Management
    },
    {
      id: 2,
      title: "Digital Marketing Manager",
      type: "Full time",
      location: "Chicago, US",
      time: "6 mins ago",
      salary: "$80 - $150",
      tags: ["SEO", "Word"],
      image: "img2.png",
      categoryId: 2, // Marketing & Sale
    },
    {
      id: 3,
      title: "Web Designer/Developer",
      type: "Full time",
      location: "Chicago, US",
      time: "9 mins ago",
      salary: "$120 - $150",
      tags: ["HTML", "CSS", "JS"],
      image: "img3.png",
      categoryId: 1, // Management
    },
    {
      id: 4,
      title: "Full Stack Engineer",
      type: "Full time",
      location: "Chicago, US",
      time: "13 mins ago",
      salary: "$80 - $150",
      tags: ["NodeJS", "MongoDB"],
      image: "img4.png",
      categoryId: 3, // Finance
    },
    {
      id: 5,
      title: "Frontend Developer Full time",
      type: "Full time",
      location: "Chicago, US",
      time: "16 mins ago",
      salary: "$80 - $150",
      tags: ["Bootstrap"],
      image: "img5.png",
      categoryId: 1, // Management
    },
    {
      id: 6,
      title: "React Native Mobile Developer",
      type: "Full time",
      location: "Chicago, US",
      time: "30 mins ago",
      salary: "$80 - $150",
      tags: ["React", "NextJS"],
      image: "img6.png",
      categoryId: 4, // Human Resource
    },
  ];

  // Initial animation on mount
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.8 },
    });

    tl.fromTo(
      sectionRef.current,
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0 }
    )
      .fromTo(
        titleRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0 },
        "-=0.5"
      )
      .fromTo(
        descRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0 },
        "-=0.4"
      )
      .fromTo(
        tabsRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0 },
        "-=0.3"
      );

    // Show all jobs by default
    setActiveCategory(null);
  }, []);

  // Animate jobs when category changes
  useEffect(() => {
    if (jobsRef.current.length > 0) {
      // Reset all jobs to hidden state before animating
      gsap.set(jobsRef.current, { autoAlpha: 0, y: 30 });

      // Animate them in
      gsap.to(jobsRef.current, {
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
      });
    }
  }, [activeCategory]);

  // Filter jobs by active category (show all if no category selected)
  const filteredJobs = activeCategory
    ? jobs.filter((job) => job.categoryId === activeCategory)
    : jobs;

  // Add ref to jobs array and clear the array when category changes
  const addToRefs = (el) => {
    if (el && !jobsRef.current.includes(el)) {
      jobsRef.current.push(el);
    }
  };

  // Clear refs when component unmounts or before updating
  useEffect(() => {
    return () => {
      jobsRef.current = [];
    };
  }, [activeCategory]);

  return (
    <section className="section-box mt-110" ref={sectionRef}>
      <div className="section-box mt-70">
        <div className="container">
          <div className="text-center">
            <h2
              className="section-title mb-10 uppercase"
              ref={titleRef}
              style={{ opacity: 0, fontWeight: "bold", color: "#0d1128" }}
            >
              Latest Jobs Post
            </h2>
            <p
              className="font-lg color-text-paragraph-2"
              ref={descRef}
              style={{ opacity: 0 }}
            >
              Explore the different types of available jobs to apply
              <br className="d-none d-lg-block" />
              discover which is right for you.
            </p>

            {/* Categories Tabs */}
            <div
              className="list-tabs d-flex list-tabs-2 mt-30 justify-content-center"
              ref={tabsRef}
              style={{ opacity: 0 }}
            >
              <ul className="nav nav-tabs" role="tablist">
                <li>
                  <a
                    className={activeCategory === null ? "active" : ""}
                    href="#tab-job-all"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveCategory(null);
                    }}
                  >
                    All Jobs
                  </a>
                </li>
                {categories.map((category) => (
                  <li key={category.id}>
                    <a
                      className={activeCategory === category.id ? "active" : ""}
                      href={`#tab-job-${category.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveCategory(category.id);
                      }}
                    >
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <div className="row">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
                  ref={addToRefs}
                  style={{ opacity: 0 }}
                >
                  <div className="card-grid-2 grid-bd-16 hover-up">
                    <div className="card-grid-2-image">
                      <span
                        className={`lbl-hot ${
                          job.type === "Freelancer" ? "bg-green" : ""
                        }`}
                      >
                        <span>{job.type}</span>
                      </span>
                      <div className="image-box">
                        <figure>
                          <img
                            src={`https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_23-2149365021.jpg?t=st=1743100429~exp=1743104029~hmac=5dc5bb36a7af4b2bcf2ccd6d59de7ef53b1c901ff31b5d76c585b66c3a4f0c6b&w=740`}
                            alt="opstack"
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h5>
                        <a href="job-details.html">{job.title}</a>
                      </h5>
                      <div className="mt-5">
                        <span className="card-location mr-15">
                          {job.location}
                        </span>
                        <span className="card-time">{job.time}</span>
                      </div>
                      <div className="card-2-bottom mt-20">
                        <div className="row">
                          <div className="col-xl-7 col-md-7 mb-2">
                            {job.tags.map((tag, index) => (
                              <a
                                key={index}
                                className="btn btn-tags-sm mr-5"
                                href="jobs-grid.html"
                              >
                                {tag}
                              </a>
                            ))}
                          </div>
                          <div className="col-xl-5 col-md-5 text-lg-end">
                            <span className="card-text-price">
                              {job.salary}
                            </span>
                            <span className="text-muted">/Hour</span>
                          </div>
                        </div>
                      </div>
                      <p className="font-sm color-text-paragraph mt-20">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestJob;
