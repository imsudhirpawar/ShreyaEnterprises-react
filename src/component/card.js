
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import './card.css';
import { Link } from 'react-router-dom';


function CardTemplate({ ...element }) {

  // const [data , setData] = useState([]);

  

  return (
    <div className="cardFormat">
    <Card className='cardA  ' >
      <div className="card-content ">
        <Card.Img variant="top" src={element.image} alt="Product Image" className='p-4' />
        </div>
        <div className="info justify-content-center d-flex a align-items-center">
          <Card.Body >
            <Card.Title className='title h5  text-muted' >{element.title}</Card.Title>
            <div className="price-container">
                            <span className="previous-price">Rs. {element.priceBefore}</span>
                            <span className="current-price">Rs. {element.priceNow}</span>
             </div>
            <Card.Text>{element.description}</Card.Text>
            {/* <div className="price-container">
                            <span className="previous-price">Rs. {element.priceBefore}</span>
                            <span className="current-price">Rs. {element.priceNow}</span>
             </div> */}
          </Card.Body>
          </div> 
        <Card.Body>
       
        <Link to={element.link} className='text-decoration-none' >
        <div className="d-grid gap-2">
      <Button variant="outline-success" size="md" className='p-2'>
          View deal
      </Button>
      </div>
        </Link>
            {/* <Card.Link href="/"></Card.Link>
            <Card.Link href="/"></Card.Link> */}
          </Card.Body> 
    </Card>
    </div>
  );
}

export default CardTemplate;
