import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdb-react-ui-kit";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import tenth from "../../assets/topcourses/Tenth.webp";
import twellvth from "../../assets/topcourses/twellvth.webp";
import diploma from "../../assets/topcourses/diploma.webp";
import phd from "../../assets/topcourses/phd.webp";
import postgraduation from "../../assets/topcourses/postgraduation.webp";

// all icons import
import agriculture from "../../assets/topcourses/icons/agriculture.png";
import architeture from "../../assets/topcourses/icons/architecture.png";
import arts from "../../assets/topcourses/icons/arts.png";
import aviation from "../../assets/topcourses/icons/aviation.png";
import commerce from "../../assets/topcourses/icons/commerce.png";
import computerapplication from "../../assets/topcourses/icons/computerapplication.png";
import dental from "../../assets/topcourses/icons/dental.png";
import design from "../../assets/topcourses/icons/design.png";
import education from "../../assets/topcourses/icons/education.png";
import engineering from "../../assets/topcourses/icons/Engineering.png";
import hotelmanagement from "../../assets/topcourses/icons/hotelmanagement.png";
import law from "../../assets/topcourses/icons/law.png";
import management from "../../assets/topcourses/icons/management.png";
import masscommunication from "../../assets/topcourses/icons/masscommunication.png";
import medical from "../../assets/topcourses/icons/Medical.png";
import paramedical from "../../assets/topcourses/icons/paramedical.png";
import pharmacy from "../../assets/topcourses/icons/pharmacy.png";
import science from "../../assets/topcourses/icons/science.png";
import veterinary from "../../assets/topcourses/icons/veterinary.png";
import vocational from "../../assets/topcourses/icons/vocational.png";

const TopCourses = () => {
  return (
    <MDBContainer>
      <MDBTypography
        tag="h1"
        className="text-center my-5"
        style={{ color: "mediumblue" }}
      >
        DON'T KNOW WHAT TO CHOOSE ?
        <br />
        CHOOSE BY YOUR LEVEL
      </MDBTypography>
      <MDBTypography
        tag="h4"
        className="text-center mb-3"
        style={{ color: "gray" }}
      >
        Searchmycollege.com is an extensive search engine for
        <br />
        the students, parents, and education industry players
        <br />
        who are seeking information
      </MDBTypography>
      <br />
      <MDBRow>
        <MDBCol md="4" sm="6" xs="12" className="mb-4">
          <MDBContainer className="my-5">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image"
              >
                <MDBCardImage src={tenth} fluid alt="after 10th " />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                >
                  <MDBCardTitle
                    className="text-center text-white position-absolute w-100"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                  >
                    After 10th Courses
                    <br />
                    <br />
                    Applicable for Diploma courses & Certification courses
                  </MDBCardTitle>
                </div>
              </MDBRipple>
              <MDBCardBody>
                <MDBRow className="justify-content-center">
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "130px", height: "40px" }}
                      href="#"
                    >
                      16 ITI
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "100px", height: "40px" }}
                      href="#"
                    >
                      4 Arts
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "130px", height: "40px" }}
                      href="#"
                    >
                      2 Dental
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "150px", height: "40px" }}
                      href="#"
                    >
                      1 Animation
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "140px", height: "40px" }}
                      href="#"
                    >
                      1 HotelManagement
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "100px", height: "40px" }}
                      href="#"
                    >
                      1 VocationalCourses
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </MDBCol>
        <MDBCol md="4" sm="6" xs="12" className="mb-4">
          <MDBContainer className="my-5">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image"
              >
                <MDBCardImage src={twellvth} fluid alt="after 12th" />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                >
                  <MDBCardTitle
                    className="text-center text-white position-absolute w-100"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                  >
                    After 10+2 Courses
                    <br />
                    <br />
                    Applicable for Degree courses & Diploma courses &
                    Certification courses
                  </MDBCardTitle>
                </div>
              </MDBRipple>
              <MDBCardBody>
                <MDBRow className="justify-content-center">
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "130px", height: "40px" }}
                      href="#"
                    >
                      205 Engineering
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "100px", height: "40px" }}
                      href="#"
                    >
                      145 Arts
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "130px", height: "40px" }}
                      href="#"
                    >
                      136 Science
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "150px", height: "40px" }}
                      href="#"
                    >
                      89 Management
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "140px", height: "40px" }}
                      href="#"
                    >
                      53 Commerce
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "100px", height: "40px" }}
                      href="#"
                    >
                      38 Education
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "110px", height: "40px" }}
                      href="#"
                    >
                      36 Medical
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "130px", height: "40px" }}
                      href="#"
                    >
                      30 Design
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </MDBCol>
        <MDBCol md="4" sm="12" xs="12" className="mb-4">
          <MDBContainer className="my-5">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image"
              >
                <MDBCardImage src={diploma} fluid alt="diploma" />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                >
                  <MDBCardTitle
                    className="text-center text-white position-absolute w-100"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                  >
                    Diploma Courses
                    <br />
                    <br />
                    Applicable for Diploma courses
                  </MDBCardTitle>
                </div>
              </MDBRipple>
              <MDBCardBody>
                <MDBRow className="justify-content-center">
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "130px", height: "40px" }}
                      href="#"
                    >
                      79 Management
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "100px", height: "40px" }}
                      href="#"
                    >
                      31 Arts
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "130px", height: "40px" }}
                      href="#"
                    >
                      27 Medical
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "150px", height: "40px" }}
                      href="#"
                    >
                      22 Engineering
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "140px", height: "40px" }}
                      href="#"
                    >
                      14 Law
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "100px", height: "40px" }}
                      href="#"
                    >
                      13 Science
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "110px", height: "40px" }}
                      href="#"
                    >
                      10 HotelManagement
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "130px", height: "40px" }}
                      href="#"
                    >
                      9 Education
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="4" sm="6" xs="12" className="mb-4">
          <MDBCard className="mt-1">
            <MDBRipple rippleColor="light" rippleTag="div" className="bg-image">
              <MDBCardImage src={diploma} fluid alt="diploma" />
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <MDBCardTitle
                  className="text-center text-white position-absolute w-100"
                  style={{ top: "50%", transform: "translateY(-50%)" }}
                >
                  Certification Courses
                  <br />
                  <br />
                  Applicable for Certification courses
                </MDBCardTitle>
              </div>
            </MDBRipple>
            <MDBCardBody>
              <MDBRow className="justify-content-center">
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "130px", height: "40px" }}
                    href="#"
                  >
                    12 Arts
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "100px", height: "40px" }}
                    href="#"
                  >
                    9 Commerce
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "130px", height: "40px" }}
                    href="#"
                  >
                    8 Management
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "150px", height: "40px" }}
                    href="#"
                  >
                    6 Science
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "140px", height: "40px" }}
                    href="#"
                  >
                    4 Design
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "100px", height: "40px" }}
                    href="#"
                  >
                    4 Computerapplication
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "110px", height: "40px" }}
                    href="#"
                  >
                    2 Education
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "130px", height: "40px" }}
                    href="#"
                  >
                    2 Law
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn style={{ minWidth: "90px", height: "40px" }} href="#">
                    2 Agriculture
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" sm="6" xs="12" className="mb-4">
          <MDBCard className="mt-1">
            <MDBRipple rippleColor="light" rippleTag="div" className="bg-image">
              <MDBCardImage src={postgraduation} fluid alt="postgraduation" />
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <MDBCardTitle
                  className="text-center text-white position-absolute w-100"
                  style={{ top: "50%", transform: "translateY(-50%)" }}
                >
                  Masters Degree/Post Graduation Courses
                  <br />
                  <br />
                  Applicable for Degree courses & Diploma courses
                </MDBCardTitle>
              </div>
            </MDBRipple>
            <MDBCardBody>
              <MDBRow className="justify-content-center">
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "130px", height: "40px" }}
                    href="#"
                  >
                    217 Management
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "100px", height: "40px" }}
                    href="#"
                  >
                    174 Engineering
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "130px", height: "40px" }}
                    href="#"
                  >
                    126 Medical
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "150px", height: "40px" }}
                    href="#"
                  >
                    109 Science
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "140px", height: "40px" }}
                    href="#"
                  >
                    104 Arts
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "100px", height: "40px" }}
                    href="#"
                  >
                    25 Law
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "110px", height: "40px" }}
                    href="#"
                  >
                    23 Commerce
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "130px", height: "40px" }}
                    href="#"
                  >
                    20 Dental
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn style={{ minWidth: "90px", height: "40px" }} href="#">
                    15 Pharmacy
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" sm="6" xs="12" className="mb-4">
          <MDBCard className="mt-1">
            <MDBRipple rippleColor="light" rippleTag="div" className="bg-image">
              <MDBCardImage src={phd} fluid alt="phd" />
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <MDBCardTitle
                  className="text-center text-white position-absolute w-100"
                  style={{ top: "50%", transform: "translateY(-50%)" }}
                >
                  Ph.D Research Courses
                  <br />
                  <br />
                  Applicable for Degree courses
                </MDBCardTitle>
              </div>
            </MDBRipple>
            <MDBCardBody>
              <MDBRow className="justify-content-center">
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "130px", height: "40px" }}
                    href="#"
                  >
                    67 Science
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "100px", height: "40px" }}
                    href="#"
                  >
                    64 Arts
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "130px", height: "40px" }}
                    href="#"
                  >
                    35 Medical
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "150px", height: "40px" }}
                    href="#"
                  >
                    25 Engineering
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "140px", height: "40px" }}
                    href="#"
                  >
                    22 Management
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "100px", height: "40px" }}
                    href="#"
                  >
                    8 Pharmacy
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "110px", height: "40px" }}
                    href="#"
                  >
                    7 Commerce
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "130px", height: "40px" }}
                    href="#"
                  >
                    6 Agriculture
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn style={{ minWidth: "90px", height: "40px" }} href="#">
                    4 Law
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <br />
      <br />
      <MDBContainer>
        <MDBTypography
          tag="h1"
          className="text-center my-5"
          style={{ color: "mediumblue" }}
        >
          CHOOSE BY INTEREST
        </MDBTypography>
        <MDBTypography
          tag="h4"
          className="text-center mb-3"
          style={{ color: "gray" }}
        >
          Searchmycollege.com is an extensive search engine for
          <br />
          the students, parents, and education industry players
          <br />
          who are seeking information
        </MDBTypography>
        <br />
        <MDBRow>
          <MDBCol md="4" sm="6" xs="12" className="mb-4">
          <MDBContainer className="my-5">
          <MDBCard>
            <MDBCardBody>
              <MDBRow className="align-items-center">
                <MDBCol xs="12" className="text-center mb-3">
                  <MDBCardImage
                    src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                    fluid
                    alt="Circular"
                    style={{ borderRadius: '50%', maxWidth: '200px' }}
                  />
                </MDBCol>
                <MDBCol xs="12" className="text-center mb-3">
                  <MDBCardTitle>Card Title</MDBCardTitle>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6" sm="6" xs="12" className="mb-3">
                  <a href="#" className="d-block mb-2 text-center">Link 1</a>
                  <a href="#" className="d-block mb-2 text-center">Link 2</a>
                  <a href="#" className="d-block mb-2 text-center">Link 3</a>
                </MDBCol>
                <MDBCol md="6" sm="6" xs="12" className="mb-3">
                  <a href="#" className="d-block mb-2 text-center">Link 4</a>
                  <a href="#" className="d-block mb-2 text-center">Link 5</a>
                  <a href="#" className="d-block mb-2 text-center">Link 6</a>
                </MDBCol>
              </MDBRow>
              <MDBRow className="justify-content-center">
                <MDBCol xs="12" className="text-center">
                  <MDBBtn href="#" style={{ backgroundColor: '#3d3d3d' }}>
                    Explore More Courses
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
          </MDBCol>
          <MDBCol md="4" sm="6" xs="12" className="mb-4">
            <MDBContainer className="my-5">
              <MDBCard>
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image"
                >
                  <MDBCardImage src={twellvth} fluid alt="after 12th" />
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                  >
                    <MDBCardTitle
                      className="text-center text-white position-absolute w-100"
                      style={{ top: "50%", transform: "translateY(-50%)" }}
                    >
                      After 10+2 Courses
                      <br />
                      <br />
                      Applicable for Degree courses & Diploma courses &
                      Certification courses
                    </MDBCardTitle>
                  </div>
                </MDBRipple>
                <MDBCardBody>
                  <MDBRow className="justify-content-center">
                    <MDBCol md="auto" className="mb-3">
                      <MDBBtn
                        style={{ minWidth: "130px", height: "40px" }}
                        href="#"
                      >
                        205 Engineering
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol md="auto" className="mb-3">
                      <MDBBtn
                        style={{ minWidth: "100px", height: "40px" }}
                        href="#"
                      >
                        145 Arts
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol md="auto" className="mb-3">
                      <MDBBtn
                        style={{ minWidth: "130px", height: "40px" }}
                        href="#"
                      >
                        136 Science
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol md="auto" className="mb-3">
                      <MDBBtn
                        style={{ minWidth: "150px", height: "40px" }}
                        href="#"
                      >
                        89 Management
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol md="auto" className="mb-3">
                      <MDBBtn
                        style={{ minWidth: "140px", height: "40px" }}
                        href="#"
                      >
                        53 Commerce
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol md="auto" className="mb-3">
                      <MDBBtn
                        style={{ minWidth: "100px", height: "40px" }}
                        href="#"
                      >
                        38 Education
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol md="auto" className="mb-3">
                      <MDBBtn
                        style={{ minWidth: "110px", height: "40px" }}
                        href="#"
                      >
                        36 Medical
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol md="auto" className="mb-3">
                      <MDBBtn
                        style={{ minWidth: "130px", height: "40px" }}
                        href="#"
                      >
                        30 Design
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBContainer>
          </MDBCol>
          <MDBCol md="4" sm="12" xs="12" className="mb-4">
            <MDBContainer className="my-5">
              <MDBCard>
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image"
                >
                  <MDBCardImage src={diploma} fluid alt="diploma" />
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                  >
                    <MDBCardTitle
                      className="text-center text-white position-absolute w-100"
                      style={{ top: "50%", transform: "translateY(-50%)" }}
                    >
                      Diploma Courses
                      <br />
                      <br />
                      Applicable for Diploma courses
                    </MDBCardTitle>
                  </div>
                </MDBRipple>
                <MDBCardBody>
                  <MDBRow className="justify-content-center">
                    <MDBCol md="auto" className="mb-3">
                      <MDBBtn
                        style={{ minWidth: "130px", height: "40px" }}
                        href="#"
                      >
                        79 Management
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol md="auto" className="mb-3">
                      <MDBBtn
                        style={{ minWidth: "100px", height: "40px" }}
                        href="#"
                      >
                        31 Arts
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol md="auto" className="mb-3">
                      <MDBBtn
                        style={{ minWidth: "130px", height: "40px" }}
                        href="#"
                      >
                        27 Medical
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol md="auto" className="mb-3">
                      <MDBBtn
                        style={{ minWidth: "150px", height: "40px" }}
                        href="#"
                      >
                        22 Engineering
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol md="auto" className="mb-3">
                      <MDBBtn
                        style={{ minWidth: "140px", height: "40px" }}
                        href="#"
                      >
                        14 Law
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol md="auto" className="mb-3">
                      <MDBBtn
                        style={{ minWidth: "100px", height: "40px" }}
                        href="#"
                      >
                        13 Science
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol md="auto" className="mb-3">
                      <MDBBtn
                        style={{ minWidth: "110px", height: "40px" }}
                        href="#"
                      >
                        10 HotelManagement
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol md="auto" className="mb-3">
                      <MDBBtn
                        style={{ minWidth: "130px", height: "40px" }}
                        href="#"
                      >
                        9 Education
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="4" sm="6" xs="12" className="mb-4">
            <MDBCard className="mt-1">
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image"
              >
                <MDBCardImage src={diploma} fluid alt="diploma" />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                >
                  <MDBCardTitle
                    className="text-center text-white position-absolute w-100"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                  >
                    Certification Courses
                    <br />
                    <br />
                    Applicable for Certification courses
                  </MDBCardTitle>
                </div>
              </MDBRipple>
              <MDBCardBody>
                <MDBRow className="justify-content-center">
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "130px", height: "40px" }}
                      href="#"
                    >
                      12 Arts
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "100px", height: "40px" }}
                      href="#"
                    >
                      9 Commerce
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "130px", height: "40px" }}
                      href="#"
                    >
                      8 Management
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "150px", height: "40px" }}
                      href="#"
                    >
                      6 Science
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "140px", height: "40px" }}
                      href="#"
                    >
                      4 Design
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "100px", height: "40px" }}
                      href="#"
                    >
                      4 Computerapplication
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "110px", height: "40px" }}
                      href="#"
                    >
                      2 Education
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "130px", height: "40px" }}
                      href="#"
                    >
                      2 Law
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "90px", height: "40px" }}
                      href="#"
                    >
                      2 Agriculture
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" sm="6" xs="12" className="mb-4">
            <MDBCard className="mt-1">
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image"
              >
                <MDBCardImage src={postgraduation} fluid alt="postgraduation" />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                >
                  <MDBCardTitle
                    className="text-center text-white position-absolute w-100"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                  >
                    Masters Degree/Post Graduation Courses
                    <br />
                    <br />
                    Applicable for Degree courses & Diploma courses
                  </MDBCardTitle>
                </div>
              </MDBRipple>
              <MDBCardBody>
                <MDBRow className="justify-content-center">
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "130px", height: "40px" }}
                      href="#"
                    >
                      217 Management
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "100px", height: "40px" }}
                      href="#"
                    >
                      174 Engineering
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "130px", height: "40px" }}
                      href="#"
                    >
                      126 Medical
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "150px", height: "40px" }}
                      href="#"
                    >
                      109 Science
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "140px", height: "40px" }}
                      href="#"
                    >
                      104 Arts
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "100px", height: "40px" }}
                      href="#"
                    >
                      25 Law
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "110px", height: "40px" }}
                      href="#"
                    >
                      23 Commerce
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "130px", height: "40px" }}
                      href="#"
                    >
                      20 Dental
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "90px", height: "40px" }}
                      href="#"
                    >
                      15 Pharmacy
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" sm="6" xs="12" className="mb-4">
            <MDBCard className="mt-1">
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image"
              >
                <MDBCardImage src={phd} fluid alt="phd" />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                >
                  <MDBCardTitle
                    className="text-center text-white position-absolute w-100"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                  >
                    Ph.D Research Courses
                    <br />
                    <br />
                    Applicable for Degree courses
                  </MDBCardTitle>
                </div>
              </MDBRipple>
              <MDBCardBody>
                <MDBRow className="justify-content-center">
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "130px", height: "40px" }}
                      href="#"
                    >
                      67 Science
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "100px", height: "40px" }}
                      href="#"
                    >
                      64 Arts
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "130px", height: "40px" }}
                      href="#"
                    >
                      35 Medical
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "150px", height: "40px" }}
                      href="#"
                    >
                      25 Engineering
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "140px", height: "40px" }}
                      href="#"
                    >
                      22 Management
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "100px", height: "40px" }}
                      href="#"
                    >
                      8 Pharmacy
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "110px", height: "40px" }}
                      href="#"
                    >
                      7 Commerce
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "130px", height: "40px" }}
                      href="#"
                    >
                      6 Agriculture
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "90px", height: "40px" }}
                      href="#"
                    >
                      4 Law
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
  );
};

export default TopCourses;
