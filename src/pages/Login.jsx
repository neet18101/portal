import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { AiFillGoogleSquare } from "react-icons/ai";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Loginscreen = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "100px" }}>
        <div className="container">
          <div className="row justify-content-center mt-10">
            <div className="col-12 col-lg-10">
              <div className="card shadow rounded">
                <div className="row g-0">
                  {/* Left side - Illustration */}
                  <div className="col-md-6 d-md-flex justify-content-center align-items-center">
                    <img
                      src="/imgs/banner1.png"
                      alt="Person sitting on chair with laptop"
                      className="img-fluid"
                      width={400}
                    />
                  </div>

                  {/* Right side - Form */}
                  <div className="col-md-6">
                    <div className="card-body p-4 p-md-5">
                      <h1 className="fw-bold mb-4 fs-2">Sign In</h1>

                      <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                          <div className="input-group">
                            <span className="input-group-text bg-white border-end-0">
                              <FaUser />
                            </span>
                            <input
                              type="text"
                              className="form-control border-start-0"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Your Name"
                            />
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="input-group">
                            <span className="input-group-text bg-white border-end-0">
                              <FaLock />
                            </span>
                            <input
                              type="password"
                              className="form-control border-start-0"
                              name="password"
                              value={formData.password}
                              onChange={handleChange}
                              placeholder="Password"
                            />
                          </div>
                        </div>

                        <div className="mb-4 form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="rememberMe"
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="rememberMe"
                          >
                            Remember me
                          </label>
                        </div>

                        <div className="mb-4">
                          <button
                            type="submit"
                            className="btn  w-100 py-2"
                            style={{
                              backgroundColor: "#0d1128",
                              color: "#fff",
                              fontSize: "18px",
                              fontWeight: "700px",
                            }}
                          >
                            Log in
                          </button>
                        </div>
                      </form>

                      <div className="text-center" style={{color: "#fff"}}>
                        <a
                          href="#"
                          className="text-decoration-none"
                          style={{
                            padding: "12px",
                            background: " #00a79d",
                            borderRadius: "10px",
                           
                            fontSize: "15px",
                            fontWeight: "500",
                          }}
                        >
                          Create an account
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Loginscreen;
