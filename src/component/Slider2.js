import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './banner';

export default function ImageSlider2(){
  return (
    <Carousel>
      <Carousel.Item>
        
        <img src="https://github.com/imsudhirpawar/ShreyaEnterprises-react/blob/main/public/OilPress/cm1.jpg?raw=true" className="w-100" text="First slide"/>
        
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://github.com/imsudhirpawar/ShreyaEnterprises-react/blob/main/public/OilPress/currency-counting-machine.jpg?raw=true" className="w-100" text="Second slide"/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src="https://shorturl.at/hHLQU" className="w-100" text="Fourth slide"/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img src="https://shorturl.at/opN14" className="w-100" text="Third slide"/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
  );
}


// export default function ImageSlider() {
//     return (
// <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//   <ol className="carousel-indicators">
//     <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//   </ol>
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img className="d-block w-100" src="..." alt="First slide"/>
//     </div>
//     <div className="carousel-item">
//       <img className="d-block w-100" src="..." alt="Second slide"/>
//     </div>
//     <div className="carousel-item">
//       <img className="d-block w-100" src="..." alt="Third slide"/>
//     </div>
//   </div>
//   <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="sr-only">Previous</span>
//   </a>
//   <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="sr-only">Next</span>
//   </a>
// </div>
//  );
//   }