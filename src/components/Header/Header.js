import { Container, Nav, Navbar, Form, Button, NavDropdown, ButtonGroup, ButtonToolbar, Row, Col} from "react-bootstrap"
import logo from "./logo.png"

function Header() {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="BrandLogo" style={{width: "30px"}}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Row>
              <Col>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Col>
              <Col xs="auto">
                <ButtonToolbar aria-label="Toolbar with button groups">
                  <ButtonGroup className="me-2" aria-label="First group">
                    <Button variant="outline-primary">Login</Button>
                    <Button variant="primary">Sign up</Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </Col>
            </Row>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
