/*eslint-disable*/
import React from "react";
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
          <Container className="container-lg"></Container>
          <Container>
            <Row className="row-grid align-items-center my-md">
              <Col lg="6">
                <h3 className="text-primary font-weight-light mb-2">
                  Made with Argon Design System
                </h3>
                <h4 className="mb-0 font-weight-light">
                  Nullam dui urna, porttitor at lectus ac, posuere aliquet
                  massa.
                </h4>
              </Col>
            </Row>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="https://www.creative-tim.com?ref=adsr-footer"
                    target="_blank"
                  >
                    Creative Tim
                  </a>
                  .
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href="https://www.creative-tim.com?ref=adsr-footer"
                      target="_blank"
                    >
                      Creative Tim
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      href="https://en.m.wikipedia.org/wiki/MIT_License"
                      target="_blank"
                    >
                      MIT License
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
