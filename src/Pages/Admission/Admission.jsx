import React from 'react';
// LATEST NOTIFICATION
import ACPM from "../../assets/admission/ACPM.webp";
import CDAC from "../../assets/admission/CDAC NOIDA.webp";
import Central from "../../assets/admission/CENTRAL UNIVERSITY.webp";
import GMC from "../../assets/admission/GMC JAMMU.webp";
import HPU from "../../assets/admission/HPU.webp";
import IIMJammu from "../../assets/admission/IIM JAMMU.webp";
import IIMKashipur from "../../assets/admission/IIM KASHIPUR.webp";
import IIMNagpur from "../../assets/admission/IIM NAGPUR.webp";
import IIMRaipur from "../../assets/admission/IIM RAIPUR.webp";
import IIMRanchi from "../../assets/admission/IIM RANCHI.webp";
import IIMTrichi from "../../assets/admission/IIM TRICHY.webp";
import IIMUdaypur from "../../assets/admission/IIM UDAYPUR.webp";
import IIMSambalpur from "../../assets/admission/IIM-Sambalpur.webp";
import IMTGaziyabad from "../../assets/admission/IMT GAZIYABAD.webp";
import IMTBusiness from "../../assets/admission/ITM BUSINESS.webp";
import Jigyasa from "../../assets/admission/JIGYASA.webp";
import JssMedical from "../../assets/admission/JSS MEDICAL.webp";
import PSITKanpur from "../../assets/admission/PSIT KANPUR.webp";
import THENeotia from "../../assets/admission/THE NEOTIA.webp";
import RMLAU from "../../assets/admission/RMLAU.webp";
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
        <MDBCardImage src={ACPM} position='top' alt='...' />
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
        <MDBCardImage src={CDAC} position='top' alt='...' />
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
        <MDBCardImage src={Central} position='top' alt='...' />
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
        <MDBCardImage src={GMC} position='top' alt='...' />
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
        <MDBCardImage src={HPU} position='top' alt='...' />
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
        <MDBCardImage src={IIMJammu} position='top' alt='...' />
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
        <MDBCardImage src={IIMKashipur} position='top' alt='...' />
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
        <MDBCardImage src={IIMNagpur} position='top' alt='...' />
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
      <MDBCardImage src={IIMRaipur} position='top' alt='...' />
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
      <MDBCardImage src={IIMRanchi} position='top' alt='...' />
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
      <MDBCardImage src={IIMTrichi} position='top' alt='...' />
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
      <MDBCardImage src={IIMUdaypur} position='top' alt='...' />
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
      <MDBCardImage src={IIMSambalpur} position='top' alt='...' />
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
      <MDBCardImage src={IMTGaziyabad} position='top' alt='...' />
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
      <MDBCardImage src={IMTBusiness} position='top' alt='...' />
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
      <MDBCardImage src={Jigyasa} position='top' alt='...' />
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
      <MDBCardImage src={JssMedical} position='top' alt='...' />
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
      <MDBCardImage src={PSITKanpur} position='top' alt='...' />
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
      <MDBCardImage src={THENeotia} position='top' alt='...' />
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
      <MDBCardImage src={RMLAU} position='top' alt='...' />
      <MDBCardBody className="d-flex justify-content-between align-items-start flex-column">
        <div>
          <h5 className="mb-2">First Subtitle</h5>
          <div className="d-flex justify-content-between align-items-center">
            <MDBCardTitle>Main Title</MDBCardTitle>
            <MDBBtn href='#' style={{}}>Apply Now</MDBBtn>
          </div>
        </div>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    

      {/*<MDBCard>
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
      </MDBCard>*/}

      {/*<MDBCard>
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
      </MDBCard>*/}

      {/*      <MDBCard>
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
      </MDBCard>*/}

      {/*<MDBCard>
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
      </MDBCard>*/}
    </Row>
    </section>
  </div>
  <br />
    </div>
  )
}

export default Admission
