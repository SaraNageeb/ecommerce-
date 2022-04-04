import Navebar from "../components/Navebar"
import Slideshow from "../components/Slideshow"
import CardGrid from "../components/CardGrid";
import img3 from '../assets/card/toyes.jpg';
import Footer from "../components/Footer"
import {Container,Row,Col,Card,Nav,Button,Badge} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <>
    <Navebar/>
    <Slideshow />  
    <Card className="mt-5">
  <Card.Header>
    <Nav variant="pills" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#first">Best Seller</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">New Products</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#disabled" disabled>
        Sale
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      xxxxx
      <Row xs={2} md={3} lg={4} 	xl={6}className="g-4">
  {Array.from({ length: 12 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={img3} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Badge pill bg="secondary">
    best seller
  </Badge> 
          <Card.Text>
            This is a longer card with supporting text below as a natural
            
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>






      sss
    </Card.Text>
   </Card.Body>
</Card>
 
    <Container fluid >
    
    <Row className="mt-5">
        <Col>
          <h2> Catagories </h2>
        </Col>
      </Row>
      <Row className="mt-5">
       
        <Col>
           <CardGrid/>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col sm={8}>
        <Card className="bg-dark text-white">
  <Card.Img src={img3} alt="Card image"  height={200} style={{objectFit: "cover"}} />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
        </Col>
        <Col sm={4}>
        <Card className="bg-dark text-white">
  <Card.Img src={img3} alt="Card image"  height={200} roundedCircle />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
        </Col>
      </Row>
     <Footer/>
    </Container>
   
      
    
    </>
  )
}

export default Home