import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import NavComp from './components/NavComp';
import NavbarComp from './components/NavbarComp';
import CardComp from './components/CardComp';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faBagShopping, faEnvelope, faHeart} from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';


function App() {

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // 슬라이더에 보여지는 화면 창 
    slidesToScroll: 1
  };

  return (
    <div className="App">
      <NavbarComp />
      <CardComp />
      <Button as="a" variant="primary" onClick={()=>{alert("클릭")}}>
      <FontAwesomeIcon icon={faEnvelope} />
      <FontAwesomeIcon icon={faBagShopping} />
      <FontAwesomeIcon icon={faHeart} />
        Button as link
      </Button>
      <Container>
        <Row>
          <Col xs>1 of 3</Col>
          <Col>Variable width content</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
      <Slider {...settings}> 
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>

    </div>
  );
}

export default App;