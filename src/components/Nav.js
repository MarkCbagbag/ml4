import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import img_5terre_wide from "../assets/img/img_5terre_wide.jpg";
import kaiju_img1 from "../assets/img/kaiju_img1.avif";

const Nav1 = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <div className="row">
          <div className="col-md-6">
            <h1>im matthew and welcome to my first bootstrap</h1>
            <br />
            <div className="col">
              <h5>student bsit</h5>
            </div>
            <div className="row">
              <div className="col">
                <button type="button" className="btn btn-outline-dark">
                  Click Me!1
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-outline-dark">
                  Click Me!2
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <section className="noper p-3 mb-2 bg-dark text-white">
              worlds finest industry
            </section>
            <br />
            <section>
              <a href="#" className="btn btn-primary" role="button">
                link text
              </a>
              <div>
                <img
                  src={img_5terre_wide}
                  alt="5 Terre"
                  className="img-fluid"
                />
              </div>
            </section>
            <br />
            <a href="#" className="btn btn-primary" role="button">
              link text1
            </a>
            <div>
              <img src={kaiju_img1} alt="Kaiju" className="img-fluid" />
            </div>
          </div>
        </div>
      </Container>

      <footer>
        <p>Author: Hege Refsnes</p>
        <p>
          <a href="mailto:hege@example.com">hege@example.com</a>
        </p>
      </footer>
    </>
  );
};

export default Nav1;
