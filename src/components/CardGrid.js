import {Card,Row,Col} from 'react-bootstrap';
import img1 from '../assets/card/clothes.jpg';
import img2 from '../assets/card/decore.jpg';
import img3 from '../assets/card/toyes.jpg';

const CardGrid = () => {
 const  cardArray = [
    { id:1,
      img: img1,
      description: "projectText"
    },
    { id:2,
      img: img2,
      description: "projessssssctText"
    },
    { id:3,
      img: img3,
      description: "prossjectText"
    },
  ]
  return (

<Row xs={3}  md={6} className="g-4">
  {Array.from({ length: 6 }).map((cardArray, idx) => (
    <Col>
      <Card className="border-0 ">
        <Card.Img variant="top" className="rounded-pill "src={img1}  />
        <Card.ImgOverlay className='d-flex align-items-center justify-content-center'>
    <Card.Title className="text-light"> Card title</Card.Title>
    
  </Card.ImgOverlay>
        
      </Card>
    </Col>
  ))}
</Row>
  )
}

export default CardGrid