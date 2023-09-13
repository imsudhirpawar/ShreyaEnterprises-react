
// import ImageSlider2 from "./Slider2";
// import "./orderItems.css";
// export default function OrderItems2() {
//   return (
  
//     <section className="container product-section" id="section2">
//       <div className="row ">
//         <div id="pic">
//           <ImageSlider2 />
//           <div className="d-flex justify-content-evenly">
//             <button className="btn btn-outline-warning p-2 m-3 " disabled>
//               <i className="bi bi-cart-plus"></i>
//               Add to Cart
//             </button>
//             <button className="btn btn-outline-warning m-3 p-2 buyNow">
//               <i className="bi bi-lightning"></i>
//               Buy it Now
//             </button>
//           </div>
//         </div>

//         <div className="col-md-6 ">
//           <div className="product-info">
//             <p className="product-title display-6">
//               Domestic Oil Press Machine
//             </p>

//             <p className="product-price">
//               <span className="sale-price h2 text-danger-emphasis">
//                 ₹19,750
//               </span>

//               <del className="del">₹25,000</del>
//               <span className="m-2 percentOff">21% off</span>
//             </p>

//             <div className="row">
//               <div className="col-auto">
//                 <ul className="product-description text-secondary list-unstyled discriptionList">
//                   <li className="d-flex align-items-start mb-3">
//                     <i className="bi bi-tag-fill text-success  me-2 ic"></i>A
//                     versatile household oil extraction machine suitable for a
//                     variety of ingredients such as peanuts, coconuts, sesame,
//                     soybeans, macadamia nuts, walnuts, sunflower seeds,
//                     vegetable seeds, flax seeds, and more.
//                   </li>
//                   <li className="d-flex align-items-start mb-3">
//                     <i className="bi bi-tag-fill text-success  me-2 ic"></i>
//                     The motor utilized in this machine is an industrial-grade
//                     motor capable of sustained operation exceeding 5 hours. To
//                     optimize performance and longevity, we recommend operating
//                     it for 5 hours followed by a 1-hour rest period.
//                   </li>
//                   <li className="d-flex align-items-start mb-3">
//                     <i className="bi bi-tag-fill text-success me-2 ic"></i>
//                     The oil extraction yield can reach up to 45%, contingent
//                     upon the type of oilseed.
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <table className="table working-capacity">
//               <thead>
//                 <tr>
//                   <th>Material</th>
//                   <th>Oil Yield</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>Peanut</td>
//                   <td>45-55%</td>
//                 </tr>
//                 <tr>
//                   <td>Sesame</td>
//                   <td>42-55%</td>
//                 </tr>
//                 <tr>
//                   <td>Sunflower</td>
//                   <td>35-45%</td>
//                 </tr>
//                 <tr>
//                   <td>Almond</td>
//                   <td>45-60%</td>
//                 </tr>
//                 <tr>
//                   <td>Coconut</td>
//                   <td>55-65%</td>
//                 </tr>
//                 <tr>
//                   <td>Mustard</td>
//                   <td>30-33%</td>
//                 </tr>
//                 <tr>
//                   <td>Flax Seed</td>
//                   <td>30-45%</td>
//                 </tr>
//                 <tr>
//                   <td>Soybean</td>
//                   <td>10-15%</td>
//                 </tr>
//               </tbody>
//             </table>

//             <table className="table product-specs">
//               <thead>
//                 <tr>
//                   <th>Specifications</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>Capacity</td>
//                   <td>3-6 Kg/Hr (According to the Material)</td>
//                 </tr>
//                 <tr>
//                   <td>Voltage</td>
//                   <td>220v</td>
//                 </tr>
//                 <tr>
//                   <td>Weight</td>
//                   <td>13 Kg</td>
//                 </tr>
//                 <tr>
//                   <td>Power</td>
//                   <td>400w</td>
//                 </tr>
//                 <tr>
//                   <td>Material</td>
//                   <td>304# Food Grade Stainless Steel</td>
//                 </tr>
//                 <tr>
//                   <td>Machine Dimension</td>
//                   <td>460(L) * 190(W) * 240(H) Mm</td>
//                 </tr>
//                 <tr>
//                   <td>Service</td>
//                   <td>No Require</td>
//                 </tr>
//                 <tr>
//                   <td>Warranty</td>
//                   <td>1 year</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </section>
  
//   );
// }


// ./component/OrderItems2.js

import React from "react";
import ImageSlider2 from "./Slider2";
import { Link } from "react-router-dom";
import './orderItems.css'

const OrderItems2 = () => {

  return (
    <section className="container product-section" id="section2">
      
      <div className="row">
        <div id="pic">
          <ImageSlider2 /> {/* Use the ImageSlider2 component here */}
          <div className="d-flex justify-content-evenly">
            {/* Add buttons for cart and buy now */}
            <button className="btn btn-outline-warning p-2 m-3 " disabled>
              <i className="bi bi-cart-plus"></i>
              Add to Cart
            </button>
            <Link to="/login" >
            <button className="btn btn-outline-warning m-3 p-2 buyNow">
              <i className="bi bi-lightning"></i>
               Buy it Now
            </button>
            </Link>
          </div>
        </div>

        <div className="col-md-6">
          <div className="product-info">
            <p className="product-title display-6">Counting Machine</p>

            <p className="product-price">
              {/* Add the pricing information for the Counting Machine */}
              <span className="sale-price h2 text-danger-emphasis">₹5,999</span>
              <del className="del">₹9,999</del>
              <span className="m-2 percentOff">20% off</span>
            </p>

            <ul className="product-description text-secondary list-unstyled discriptionList">
              {/* Add the product description for the Counting Machine */}
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-tag-fill text-success  me-2 ic"></i>ACCURACY & SPEED: Accurate Counting of number of notes for NEW INR₹10 ₹20 ₹50 ₹100 ₹200 ₹500 & ₹2000. It is not a mix note counter. It does not count value of mix notes. It counts number of notes.
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-tag-fill text-success  me-2 ic"></i>INTELLIGENT DETECTION: Advanced Counterfeit Detection with UV / MG which makes it impossible to miss any fake notes. Intelligent Fake Note Recognition. If the notes are very damaged or very old then the machine might detect it as fake. If the notes are sticky and stick to one another, it might show as error (we recommend to check for sticky notes if error comes up). It does not detect torn or taped notes.
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-tag-fill text-success me-2 ic"></i>COLOUR LCD DISPLAY: Colour Changing LCD Display which changes to Red when a non-genuine note is detected. Additional External Display has been provided for customer viewing. Convenient retractable hidden handle has been provided if carrying the product is necessary. This machine is not wireless. It has to be plugged in for use.
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-tag-fill text-success me-2 ic"></i>Included in box - Note Counting Machine, External Display, Manual. Note: 1. If notes are flying out of the machine, kindly adjust the hopper. 2. Kindly stack the notes uniformly on the hopper while inserting to avoid notes getting stuck. 3. Use care when inserting Rs.10 notes. Due to the smaller size of the note you might experience some flying out. 4. Try inserting lesser notes at a time if notes are getting stuck.
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-tag-fill text-success me-2 ic"></i>Heavy-Duty & Extremely Durable. Keep sheltered from high dust conditions and maintain cleanliness for best use. Please read the manual carefully and use the machine accordingly. For any technical issues please scroll down to Product Details on this page to see our Customer Care information or refer to the MRP Sticker on the Product Box.
              </li>
            </ul>

            <table className="table product-specs">
              <thead>
                <tr>
                  <th>Specifications</th>
                </tr>
              </thead>
              <tbody>
                {/* Add the specifications table for the Counting Machine */}
                <tr>
                  <td>Model Name</td>
                  <td>Blue LED Note/Money/Currency Counting Machine with Fake Note Detection Updated</td>
                </tr>
                <tr>
                  <td>Counting Speed</td>
                  <td>1000 notes/min</td>
                </tr>
                <tr>
                  <td>Acceptable Denominations</td>
                  <td>10, 20, 50, 100, 200, 500, 2000</td>
                </tr>
                <tr>
                  <td>Stacker Capacity</td>
                  <td>150 Notes</td>
                </tr>
                <tr>
                  <td>Hopper Capacity</td>
                  <td>150 Notes</td>
                </tr>
                <tr>
                  <td>Display Features</td>
                  <td>LED</td>
                </tr>
                <tr>
                  <td>Fake Note Detection</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Duplicate Note Detection</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Cut Note Detection</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Chain Note Detection</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Power Features</td>
                  <td>Power Source: Electricity, Power Consumption: 220 W</td>
                </tr>
                <tr>
                  <td>Dimensions</td>
                  <td>Width: 14 inch, Height: 15 inch, Depth: 16 inch</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>5 kg</td>
                </tr>
                <tr>
                  <td>Warranty</td>
                  <td>1 year offsite warranty</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderItems2;
