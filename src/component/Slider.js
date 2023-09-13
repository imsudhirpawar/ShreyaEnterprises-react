import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './banner';

export default function ImageSlider(){
  return (
    <Carousel>
      <Carousel.Item>
        <img src="https://github.com/imsudhirpawar/ShreyaEnterprises-react/blob/main/public/OilPress/oilpress.jpg?raw=true" className='w-100'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://raw.githubusercontent.com/imsudhirpawar/ShreyaEnterprises-react/main/public/OilPress/image4.png" className='w-100'/>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://github.com/imsudhirpawar/ShreyaEnterprises-react/blob/main/public/OilPress/image4.png?raw=true" className='w-100'/>
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