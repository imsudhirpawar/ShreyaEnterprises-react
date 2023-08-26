import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Information() {
  return (
    <Card className="text-center m-3 mt-4 fs-5" style={{
        border: "none"
    }}>
      <Card.Body>
        <Card.Title className='fs-4' style={{color:"#4e7084"}}>Welcome to Shreya Enterprises!</Card.Title>
        <Card.Text style={{color:"green"}}>
        Your Trusted Source for Quality Products:<br/>
        We offer a compact Domestic Oil Press for pure & fresh oil and <br/>
        an efficient Counting Machine with Fake Note Detection.<br/>
        Experience convenience & reliability with us.
        </Card.Text>
       
      </Card.Body>
     
    </Card>
  );
}

export default Information;