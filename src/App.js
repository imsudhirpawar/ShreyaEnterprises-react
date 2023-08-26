import React from "react";
import BootstrapNavbar from "./component/navbar";
import Banner from "./component/banner";
import "./App.css";
import CardItems from "./component/cardGroup";
import Footer from "./component/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./component/contactForm";
import About from "./component/about";
import Login from "./component/login";
import IntroSection from "./component/IntroSection"; // Import the IntroSection component
import Information from "./component/info";
import OrderItems from "./component/orderItems";
import OrderItems2 from "./component/orderItems2";
import ScrollToTop from './component/ScrollToTop'; 
import { useEffect } from 'react';

function App() {



  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/64d76c56cc26a871b02ed364/1h7knudiq';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <BootstrapNavbar></BootstrapNavbar>
        <Routes>
        
          <Route
            path="/"
            element={
              <>
                <Banner className="banner mb-3"></Banner>
                {/* <IntroSection /> Add the IntroSection component here */}
                {/* <Information/> */}
                <CardItems className="CardItems"></CardItems>
                <Footer className="footerApp"></Footer>
              </>
            }
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/orderItems" element={<OrderItems/>}></Route>
          <Route path="/orderItems2" element={<OrderItems2/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
  
}

export default App;
