import React from 'react';
// LATEST NOTIFICATION
import Admissionbanner from "../../assets/banner/Admissionbanner.jpg";
import comedklogo from "../../assets/notification/comedklogo.webp";
import gatelogo from "../../assets/notification/gatellogo.webp";
import IPULogo from "../../assets/notification/IPULogo.webp";
import logo from "../../assets/notification/logo.webp";
import ntalogo from "../../assets/notification/ntalogo.webp";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';

const Admission = () => {
  return (
    <div>
    <div className="container text-center">
    {/*<img
    src={Admissionbanner} // Replace 'banner-image-url.jpg' with your banner image URL
    alt="Banner"
    className="img-fluid"
    style={{ maxWidth: '100%', height: '200px', width: "100%" }}
    />*/}
    <br />
    <br />

    <h2 className="text" style={{ fontWeight: "bold", fontSize: "70px" }}>
    GET ADMISSION IN BEST COLLEGES{" "}
    </h2>
    <br />
    <br />
    <section className="featured-post">
      <Row xs={1} md={3} lg={4} className="g-4">
        <Col>
        <MDBCard>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
        <MDBCardBody className="d-flex justify-content-between align-items-start flex-column">
          <div>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
          </div>
          <MDBBtn href='#' className="mt-3 mt-md-0">Button</MDBBtn>
        </MDBCardBody>
        </MDBCard>
        </Col>

        <MDBCard>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
        <MDBCardBody className="d-flex justify-content-between align-items-start flex-column">
          <div>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
          </div>
          <MDBBtn href='#' className="mt-3 mt-md-0">Button</MDBBtn>
        </MDBCardBody>
        </MDBCard>

        <MDBCard>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
        <MDBCardBody className="d-flex justify-content-between align-items-start flex-column">
          <div>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
          </div>
          <MDBBtn href='#' className="mt-3 mt-md-0">Button</MDBBtn>
        </MDBCardBody>
        </MDBCard>

        <MDBCard>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
        <MDBCardBody className="d-flex justify-content-between align-items-start flex-column">
          <div>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
          </div>
          <MDBBtn href='#' className="mt-3 mt-md-0">Button</MDBBtn>
        </MDBCardBody>
        </MDBCard>

        <MDBCard>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
        <MDBCardBody className="d-flex justify-content-between align-items-start flex-column">
          <div>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
          </div>
          <MDBBtn href='#' className="mt-3 mt-md-0">Button</MDBBtn>
        </MDBCardBody>
        </MDBCard>

        <MDBCard>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
        <MDBCardBody className="d-flex justify-content-between align-items-start flex-column">
          <div>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
          </div>
          <MDBBtn href='#' className="mt-3 mt-md-0">Button</MDBBtn>
        </MDBCardBody>
        </MDBCard>

        <MDBCard>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
        <MDBCardBody className="d-flex justify-content-between align-items-start flex-column">
          <div>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
          </div>
          <MDBBtn href='#' className="mt-3 mt-md-0">Button</MDBBtn>
        </MDBCardBody>
        </MDBCard>

        <MDBCard>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
        <MDBCardBody className="d-flex justify-content-between align-items-start flex-column">
          <div>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
          </div>
          <MDBBtn href='#' className="mt-3 mt-md-0">Button</MDBBtn>
        </MDBCardBody>
        </MDBCard>
      </Row>
    </section>
    <br />
    <section className="featured-post">
    <Row xs={1} md={3} lg={4} className="g-4">
      <Col>
      <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody className="d-flex justify-content-between align-items-start flex-column">
        <div>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </div>
        <MDBBtn href='#' className="mt-3 mt-md-0">Button</MDBBtn>
      </MDBCardBody>
      </MDBCard>
      </Col>

      <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody className="d-flex justify-content-between align-items-start flex-column">
        <div>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </div>
        <MDBBtn href='#' className="mt-3 mt-md-0">Button</MDBBtn>
      </MDBCardBody>
      </MDBCard>

      <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody className="d-flex justify-content-between align-items-start flex-column">
        <div>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </div>
        <MDBBtn href='#' className="mt-3 mt-md-0">Button</MDBBtn>
      </MDBCardBody>
      </MDBCard>

      <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody className="d-flex justify-content-between align-items-start flex-column">
        <div>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </div>
        <MDBBtn href='#' className="mt-3 mt-md-0">Button</MDBBtn>
      </MDBCardBody>
      </MDBCard>

      <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody className="d-flex justify-content-between align-items-start flex-column">
        <div>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </div>
        <MDBBtn href='#' className="mt-3 mt-md-0">Button</MDBBtn>
      </MDBCardBody>
      </MDBCard>

      <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody className="d-flex justify-content-between align-items-start flex-column">
        <div>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </div>
        <MDBBtn href='#' className="mt-3 mt-md-0">Button</MDBBtn>
      </MDBCardBody>
      </MDBCard>

      <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody className="d-flex justify-content-between align-items-start flex-column">
        <div>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </div>
        <MDBBtn href='#' className="mt-3 mt-md-0">Button</MDBBtn>
      </MDBCardBody>
      </MDBCard>

      <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody className="d-flex justify-content-between align-items-start flex-column">
        <div>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </div>
        <MDBBtn href='#' className="mt-3 mt-md-0">Button</MDBBtn>
      </MDBCardBody>
      </MDBCard>
    </Row>
    </section>
    <br />
    <section className="featured-post">
    <Row xs={1} md={3} lg={4} className="g-4">
      <Col>
      <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody className="d-flex justify-content-between align-items-start flex-column">
        <div>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </div>
        <MDBBtn href='#' className="mt-3 mt-md-0">Button</MDBBtn>
      </MDBCardBody>
      </MDBCard>
      </Col>

      <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody className="d-flex justify-content-between align-items-start flex-column">
        <div>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </div>
        <MDBBtn href='#' className="mt-3 mt-md-0">Button</MDBBtn>
      </MDBCardBody>
      </MDBCard>

      <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody className="d-flex justify-content-between align-items-start flex-column">
        <div>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </div>
        <MDBBtn href='#' className="mt-3 mt-md-0">Button</MDBBtn>
      </MDBCardBody>
      </MDBCard>

      <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody className="d-flex justify-content-between align-items-start flex-column">
        <div>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </div>
        <MDBBtn href='#' className="mt-3 mt-md-0">Button</MDBBtn>
      </MDBCardBody>
      </MDBCard>

      <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody className="d-flex justify-content-between align-items-start flex-column">
        <div>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </div>
        <MDBBtn href='#' className="mt-3 mt-md-0">Button</MDBBtn>
      </MDBCardBody>
      </MDBCard>

      <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody className="d-flex justify-content-between align-items-start flex-column">
        <div>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </div>
        <MDBBtn href='#' className="mt-3 mt-md-0">Button</MDBBtn>
      </MDBCardBody>
      </MDBCard>

      <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody className="d-flex justify-content-between align-items-start flex-column">
        <div>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </div>
        <MDBBtn href='#' className="mt-3 mt-md-0">Button</MDBBtn>
      </MDBCardBody>
      </MDBCard>

      <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody className="d-flex justify-content-between align-items-start flex-column">
        <div>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </div>
        <MDBBtn href='#' className="mt-3 mt-md-0">Button</MDBBtn>
      </MDBCardBody>
      </MDBCard>
    </Row>
    </section>
  </div>
  <br />
    </div>
  )
}

export default Admission
