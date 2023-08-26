import { useState } from "react";
import "./contactform.css";
import { Card, Form, Button } from "react-bootstrap";
import Footer from "./footer";
import { json } from "react-router-dom";
const Contact = () => {
//   let alert = `<div class="alert alert-success" role="alert">
//     Your data has been saved . 
// </div>`;

  const [userData, setUserData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });
  

  let name, value;
  const postUserData = (event) => {

      name = event.target.name;
      value = event.target.value;

      setUserData({... userData, [name]: value});

  };



  // firebase connection

  const submitData = async (event) => {

   
  if (event) {
    event.preventDefault();
    // Your logic here
  



    const { name,
    number,
    email,
    message } = userData;

   const res = await fetch(
    'https://console.firebase.google.com/u/0/project/reactshreyaenterprises/database/reactshreyaenterprises-default-rtdb/data/~2F/userDataRecords.json', 
   {
    method: "POST",
    Headers: {
     "Content-type" : "application/json"
    },
    body: JSON.stringify({
      name,
      number,
      email,
      message
    })
   }
   );

   if (res) {
    alert("Done!")
   } else {
    alert("Please fill the valid data.")
   }

  }

  }

  return (
    <div div className="mainIm">
      <div className="cardBody container-wrapper">
        <Card className=" contactCard">
          <Card.Body className="cardBody">
            <Card.Title className="mb-4">
              <h2>Contact Us</h2>
            </Card.Title>
            <Form className="form text-muted" method="POST">
              <Form.Group controlId="formName" className=" formGroup">
                <Form.Label> Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  className="form-content"
                  name="name"
                  value={userData.name}
                  onChange={postUserData}
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className=" formGroup">
                <Form.Label>Phone Number </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your phone number"
                  className="form-content "
                  name="number"
                  value={userData.number}
                  onChange={postUserData}
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className=" formGroup">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="form-content"
                  name="email"
                  value={userData.email}
                  onChange={postUserData}
                />
              </Form.Group>

              <Form.Group controlId="formMessage" className=" formGroup">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your message"
                  className="form-content"
                  name="message"
                  value={userData.message}
                  onChange={postUserData}
                />
              </Form.Group>

              <Button
                variant="success"
                type="submit"
                className="contactButton"
                onClick={submitData}
              >
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
