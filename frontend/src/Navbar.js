import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Head() {
  return (

    <Navbar style={{position:"absolute",top:"0px",width:"100%",backgroundColor:"#cc6666"}}>
      <Container >


        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{color:"white"}}>
            <Nav.Link href="#General">Latest News</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    
  );
}

export default Head;