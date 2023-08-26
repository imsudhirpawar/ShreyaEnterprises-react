import "./about.css";
import React from "react";
import Footer from "./footer";
import { Image } from "react-bootstrap";

export default function About() {
 

  return (
    <>
      <div className="image-container">
        <Image
          src={
            "https://images.unsplash.com/photo-1664575599730-0814817939de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          }
          className="aboutImage"
          fluid
        />
        <div className="text-overlay">
          <div className="text-box">
            <p>
              <h1>
                Our mission is to be <br />
                the#1 partner <br />
                to domestic Oil press & <br /> counting machine.
              </h1>
            </p>
          </div>
        </div>
        </div>
        <div className="text text-secondary p-5 w-100">
          <p className="text-dark ">
          About Us
          </p>
          
          <p>
            "Welcome to Shreya Enterprises! <br />
            At Shreya Enterprises, we take pride in providing high-quality
            products to meet your everyday needs. With a commitment to
            excellence and customer satisfaction, we offer two exceptional
            products to enhance your lifestyle:
          </p>
          <ol>
            <li>
              Domestic Oil Press:
              <ul>
                <li>
                  Our Domestic Oil Press is designed to extract pure and fresh
                  oil from various seeds and nuts, right in the comfort of your
                  home. Whether you're a health-conscious individual or a
                  culinary enthusiast, our oil press ensures you get the best
                  quality oil for your culinary delights.
                </li>
              </ul>
            </li>
            <li>
              Counting Machine:
              <ul>
                <li>
                  Efficiency and accuracy are crucial in today's fast-paced
                  world. Our Counting Machine simplifies your counting tasks,
                  making it easier and faster to manage your inventory,
                  finances, and more. Say goodbye to manual counting and embrace
                  the convenience of our reliable counting machine. At Shreya
                  Enterprises, we are dedicated to delivering products that make
                  a positive impact on your life. Our team works tirelessly to
                  maintain the highest standards of quality and customer
                  service.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      <Footer></Footer>
    </>
  );
}









