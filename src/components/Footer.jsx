import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer mt-50">
        <div className="container">
          <div className="row">
            <div className="footer-col-1 col-md-3 col-sm-12">
              <a href="index.html">
                <span
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  OPSBRIDGES
                </span>
              </a>
              <div className="mt-20 mb-20 font-xs color-text-paragraph-2">
                Unlock the Career You Deserve Find the Perfect Job Today
              </div>
              <div className="footer-social">
                <a className="icon-socials icon-facebook" href="#" />
                <a className="icon-socials icon-twitter" href="#" />
                <a className="icon-socials icon-linkedin" href="#" />
              </div>
            </div>
            <div className="col-md-3 col-xs-6">
              <h6 className="mb-20">Resources</h6>
              <ul className="menu-footer">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className=" col-md-3 col-xs-6">
              <h6 className="mb-20">Community</h6>
              <ul className="menu-footer">
                <li>
                  <a href="#">Feature</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Credit</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
            <div className=" col-md-3 col-xs-6">
              <h6 className="mb-20">More</h6>
              <ul className="menu-footer">
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom mt-50">
            <div className="row">
              <div className="col-md-6">
                <span className="font-xs color-text-paragraph">
                  Copyright © 2022. OPSBRIDGES all right reserved
                </span>
              </div>
              <div className="col-md-6 text-md-end text-start">
                <div className="footer-social">
                  <a className="font-xs color-text-paragraph" href="#">
                    Privacy Policy
                  </a>
                  <a
                    className="font-xs color-text-paragraph mr-30 ml-30"
                    href="#"
                  >
                    Terms &amp; Conditions
                  </a>
                  <a className="font-xs color-text-paragraph" href="#">
                    Security
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
