import React from "react";

function NewsLetter() {
  return (
    <>
      <section classname="section-box mt-50 mb-20">
        <div classname="box-newsletter box-newsletter-2">
          <div classname="container">
            <div classname="row">
              <div classname="col-xl-4 col-12 text-center d-none d-xl-block">
                <img
                  src="assets/imgs/page/homepage4/img-newsletter.png"
                  alt="joxBox"
                />
              </div>
              <div classname="col-xl-8 col-lg-12 col-12 text-center">
                <div classname="d-inline-block text-start">
                  <h2 classname="color-white">Subscribe our newsletter</h2>
                  <p classname="mt-10 font-lg color-white">
                    New Things Will Always Update Regularl
                  </p>
                  <div classname="box-form-newsletter mt-40">
                    <form classname="form-newsletter">
                      <input
                        classname="input-newsletter"
                        type="text"
                        defaultvalue=""
                        placeholder="Enter your email here"
                      />
                      <button classname="btn btn-default font-heading icon-send-letter">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsLetter;
