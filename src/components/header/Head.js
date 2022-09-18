import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
function Head() {
  return (
    <Navbar bg="white" style={{height:"60px"}}>
      <Container fluid className="bg-light p-2 mb-0">
        <Navbar.Brand href="/home" ><h4>FOODMAP</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/service">Service</Nav.Link>
            <NavDropdown title="Variety" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.3">Dairy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Organic</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Vegetables</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Bakery & Pastry
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Snacks & Beverages
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="What Are You Looking For?"
              className="me-2"
              style={{width:250}}
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Head;
