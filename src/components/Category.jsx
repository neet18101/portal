import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Category() {
  // Category data
  const categories = [
    {
      id: 1,
      name: "Marketing & Sale",
      icon: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage1/lightning.svg",
      jobs: 1526,
      link: "jobs-list.html",
    },
    {
      id: 2,
      name: "Customer Help",
      icon: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage1/lightning.svg",
      jobs: 185,
      link: "jobs-grid.html",
    },
    {
      id: 3,
      name: "Finance",
      icon: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage1/lightning.svg",
      jobs: 168,
      link: "jobs-grid.html",
    },
    {
      id: 4,
      name: "Software",
      icon: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage1/lightning.svg",
      jobs: 1856,
      link: "jobs-list.html",
    },
    {
      id: 5,
      name: "Human Resource",
      icon: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage1/lightning.svg",
      jobs: 165,
      link: "jobs-grid.html",
    },
    {
      id: 6,
      name: "Management",
      icon: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage1/lightning.svg",
      jobs: 965,
      link: "jobs-grid.html",
    },
    {
      id: 7,
      name: "Retail & Products",
      icon: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage1/lightning.svg",
      jobs: 563,
      link: "jobs-list.html",
    },
    {
      id: 8,
      name: "Security Analyst",
      icon: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage1/lightning.svg",
      jobs: 254,
      link: "jobs-grid.html",
    },
    {
      id: 9,
      name: "Content Writer",
      icon: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage1/lightning.svg",
      jobs: 142,
      link: "jobs-grid.html",
    },
    {
      id: 10,
      name: "Market Research",
      icon: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage1/lightning.svg",
      jobs: 532,
      link: "jobs-list.html",
    },
  ];

  return (
    <section className="section-box mt-110 bg-cat">
      <div className="section-box wow animate__ animate__fadeIn mt-70 animated">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title mb-10 wow animate__ animate__fadeInUp">
              Browse by category
            </h2>
            <p className="font-lg color-text-paragraph-2 wow animate__ animate__fadeInUp">
              Find the job that's perfect for you. about 800+ new jobs everyday
            </p>
          </div>

          <div className="box-swiper mt-50">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              spaceBetween={15}
              slidesPerView={5}
              breakpoints={{
                // Responsive breakpoints
                320: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
              }}
            >
              {categories.map((category, index) => (
                <SwiperSlide key={category.id}>
                  <div className="hover-up" data-swiper-slide-index={index}>
                    <a href={category.link}>
                      <div className="item-logo">
                        <div className="image-left">
                          <img
                            alt="jobBox"
                            src={category.icon}
                          />
                        </div>
                        <div className="text-info-right">
                          <h4>Content Writer</h4>
                          <p className="font-xs">
                            142<span> Jobs Available</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation buttons */}
            <div
              className="swiper-button-next"
              tabIndex={0}
              role="button"
              aria-label="Next slide"
            />
            <div
              className="swiper-button-prev"
              tabIndex={0}
              role="button"
              aria-label="Previous slide"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
