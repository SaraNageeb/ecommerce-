import { Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import slider1 from '../assets/slidshow/makeup.jpg';
import slider2 from '../assets/slidshow/decore.jpg';
import slider3 from '../assets/slidshow/deliver.jpg';
import slider4 from '../assets/slidshow/electronic.jpg';
import slider5 from '../assets/slidshow/clothes.jpg';

  


const Slideshow = () => {
  return (
    <Carousel>
      
      <Carousel.Item >
      <img
        className="d-block w-100 "
        src={slider4}
        alt="First slide" 
        height={400}   
        style={{objectFit: "cover"}} 
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item >
      <img
        className="d-block w-100 "
        src={slider1}
        alt="First slide" 
        height={400}   
        style={{objectFit: "cover"}} 
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
        className="d-block w-100 "
        src={slider2}
        alt="First slide" 
        height={400}   
        style={{objectFit: "cover"}} 
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item >
      <img
        className="d-block w-100 "
        src={slider5}
        alt="First slide" 
        height={400}   
        style={{objectFit: "cover"}} 
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
        className="d-block w-100 "
        src={slider3}
        alt="First slide" 
        height={400}   
        style={{objectFit: "cover"}} 
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Slideshow