import {Form,Button} from 'react-bootstrap';
import {Container,Row,Col} from 'react-bootstrap';


const Footer = () => {
  return (
    <div>
        <Container>
  <Row className='mt-5 g-0'>
    <Col md={{ span: 5, offset: 3 }}>


    <Form >
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
         

     <Form.Control type="email" placeholder="name@example.com"/>   
      
        

     </Form.Group>    

     </Form>


    </Col>
    <Col>
    <Button variant="secondary " >Secondary</Button>
    </Col>
  </Row>
</Container>

   
    
  
     
    </div>
  )
}

export default Footer