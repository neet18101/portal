import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Login from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";
import Aos from "aos";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";


function App() {
  useEffect(() => {
    Aos.init();
  }, [])
  
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sing-up" element={<RegisterPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
