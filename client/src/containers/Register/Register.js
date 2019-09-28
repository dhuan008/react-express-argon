import React from "react";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  CardHeader,
  Container,
  Row,
  Col
} from "reactstrap";
import LandingNavbar from "../../components/organisms/LandingNavbar/LandingNavbar.jsx";
import CardsFooter from "../../components/organisms/CardsFooter/CardsFooter.jsx";
import { Formik, Field } from "formik";

const Register = ({ register }) => {
  return (
    <>
      <LandingNavbar />
      <main>
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="pt-lg-md">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-white pb-5">
                    <div className="text-muted text-center mb-3">
                      <small>Sign up with</small>
                    </div>
                    <div className="text-center">
                      <Button
                        className="btn-neutral btn-icon mr-4"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <span className="btn-inner--icon mr-1">
                          <img
                            alt="..."
                            src={require("../../assets/img/icons/common/github.svg")}
                          />
                        </span>
                        <span className="btn-inner--text">Github</span>
                      </Button>
                      <Button
                        className="btn-neutral btn-icon ml-1"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <span className="btn-inner--icon mr-1">
                          <img
                            alt="..."
                            src={require("../../assets/img/icons/common/google.svg")}
                          />
                        </span>
                        <span className="btn-inner--text">Google</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>Or sign up with credentials</small>
                    </div>
                    {/* Formik Form Start */}
                    <Formik
                      initialValues={{ name: "", email: "", password: "" }}
                      validate={values => {
                        let errors = {};

                        if (!values.name) {
                          errors.name = "Required";
                        }

                        if (!values.email) {
                          errors.email = "Required";
                        } else if (
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.email
                          )
                        ) {
                          errors.email = "Invalid email address";
                        }

                        if (!values.password) {
                          errors.password = "Required";
                        }

                        return errors;
                      }}
                      onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(true);

                        register(values, setSubmitting);
                      }}
                    >
                      {({ errors, touched, handleSubmit, isSubmitting }) => (
                        <Form role="form" onSubmit={handleSubmit}>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-hat-3" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Field
                                name="name"
                                render={({ field }) => (
                                  <Input
                                    placeholder="Name"
                                    type="text"
                                    {...field}
                                  />
                                )}
                              />
                            </InputGroup>
                            <div className="text-center">
                              <small className="text-warning">
                                {errors.name && touched.name && errors.name}
                              </small>
                            </div>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-email-83" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Field
                                name="email"
                                render={({ field }) => (
                                  <Input
                                    placeholder="Email"
                                    type="text"
                                    {...field}
                                  />
                                )}
                              />
                            </InputGroup>
                            <div className="text-center">
                              <small className="text-warning">
                                {errors.email && touched.email && errors.email}
                              </small>
                            </div>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-lock-circle-open" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Field
                                name="password"
                                placeholder="Password"
                                render={({ field }) => (
                                  <Input
                                    placeholder="Password"
                                    type="password"
                                    {...field}
                                  />
                                )}
                              />
                            </InputGroup>
                          </FormGroup>
                          <div className="text-center">
                            <small className="text-warning">
                              {errors.password &&
                                touched.password &&
                                errors.password}
                            </small>
                          </div>
                          <Row className="my-4">
                            <Col xs="12">
                              <div className="custom-control custom-control-alternative custom-checkbox">
                                <input
                                  className="custom-control-input"
                                  id="customCheckRegister"
                                  type="checkbox"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="customCheckRegister"
                                >
                                  <span>
                                    I agree with the{" "}
                                    <a
                                      href="#pablo"
                                      onClick={e => e.preventDefault()}
                                    >
                                      Privacy Policy
                                    </a>
                                  </span>
                                </label>
                              </div>
                            </Col>
                          </Row>
                          <div className="text-center">
                            <Button
                              className="mt-4"
                              color="primary"
                              type="submit"
                              disabled={isSubmitting}
                            >
                              Create account
                            </Button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <CardsFooter />
    </>
  );
};

Register.propTypes = {};

export default Register;
