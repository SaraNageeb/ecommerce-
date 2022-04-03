import Navebar from "../components/Navebar"
import Slideshow from "../components/Slideshow"
import CardGrid from "../components/CardGrid";
import img3 from '../assets/card/toyes.jpg';
import {Container,Row,Col,Card,Nav,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <>
    <Navebar/>
    <Slideshow /> 
    <Card className="mt-5">
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#first">Best Seller</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">New Products</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" >
          Sale
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
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
  <Card.Img src={img3} alt="Card image"  height={200}/>
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
     
    </Container>
   
     
    
    </>
  )
}

export default Home