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

<Row xs={2} md={4} className="g-4">
  {Array.from({ length: 8 }).map((cardArray, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
         
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
  )
}

export default CardGrid