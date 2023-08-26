
import { Link } from "react-router-dom";
import ImageSlider from "./Slider";
import "./orderItems.css";
export default function OrderItems() {
  return (
  
    <section className="container product-section" id="section2">
      <div className="row ">
        <div id="pic">
          <ImageSlider />
          <div className="d-flex justify-content-evenly">
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

        <div className="col-md-6 ">
          <div className="product-info">
            <p className="product-title display-6">
              Domestic Oil Press Machine
            </p>

            <p className="product-price">
              <span className="sale-price h2 text-danger-emphasis">
                ₹19,750
              </span>

              <del className="del">₹25,000</del>
              <span className="m-2 percentOff">21% off</span>
            </p>

            <div className="row">
              <div className="col-auto">
                <ul className="product-description text-secondary list-unstyled discriptionList">
                  <li className="d-flex align-items-start mb-3">
                    <i className="bi bi-tag-fill text-success  me-2 ic"></i>A
                    versatile household oil extraction machine suitable for a
                    variety of ingredients such as peanuts, coconuts, sesame,
                    soybeans, macadamia nuts, walnuts, sunflower seeds,
                    vegetable seeds, flax seeds, and more.
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <i className="bi bi-tag-fill text-success  me-2 ic"></i>
                    The motor utilized in this machine is an industrial-grade
                    motor capable of sustained operation exceeding 5 hours. To
                    optimize performance and longevity, we recommend operating
                    it for 5 hours followed by a 1-hour rest period.
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <i className="bi bi-tag-fill text-success me-2 ic"></i>
                    The oil extraction yield can reach up to 45%, contingent
                    upon the type of oilseed.
                  </li>
                </ul>
              </div>
            </div>

            <table className="table working-capacity">
              <thead>
                <tr>
                  <th>Material</th>
                  <th>Oil Yield</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Peanut</td>
                  <td>45-55%</td>
                </tr>
                <tr>
                  <td>Sesame</td>
                  <td>42-55%</td>
                </tr>
                <tr>
                  <td>Sunflower</td>
                  <td>35-45%</td>
                </tr>
                <tr>
                  <td>Almond</td>
                  <td>45-60%</td>
                </tr>
                <tr>
                  <td>Coconut</td>
                  <td>55-65%</td>
                </tr>
                <tr>
                  <td>Mustard</td>
                  <td>30-33%</td>
                </tr>
                <tr>
                  <td>Flax Seed</td>
                  <td>30-45%</td>
                </tr>
                <tr>
                  <td>Soybean</td>
                  <td>10-15%</td>
                </tr>
              </tbody>
            </table>

            <table className="table product-specs">
              <thead>
                <tr>
                  <th>Specifications</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Capacity</td>
                  <td>3-6 Kg/Hr (According to the Material)</td>
                </tr>
                <tr>
                  <td>Voltage</td>
                  <td>220v</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>13 Kg</td>
                </tr>
                <tr>
                  <td>Power</td>
                  <td>400w</td>
                </tr>
                <tr>
                  <td>Material</td>
                  <td>304# Food Grade Stainless Steel</td>
                </tr>
                <tr>
                  <td>Machine Dimension</td>
                  <td>460(L) * 190(W) * 240(H) Mm</td>
                </tr>
                <tr>
                  <td>Service</td>
                  <td>No Require</td>
                </tr>
                <tr>
                  <td>Warranty</td>
                  <td>1 year</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  
  );
}
