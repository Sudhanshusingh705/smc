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
import animation from "../../assets/topcourses/icons/animation.png";
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
                  {/*<MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "130px", height: "40px" }}
                      href="#"
                    >
                      30 Design
                    </MDBBtn>
                  </MDBCol>*/}
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
                  {/*<MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "130px", height: "40px" }}
                      href="#"
                    >
                      9 Education
                    </MDBBtn>
                  </MDBCol>*/}
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
                {/*<MDBCol md="auto" className="mb-3">
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
                </MDBCol>*/}
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
                {/*<MDBCol md="auto" className="mb-3">
                  <MDBBtn style={{ minWidth: "90px", height: "40px" }} href="#">
                    15 Pharmacy
                  </MDBBtn>
                </MDBCol>*/}
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
              <MDBCard className="d-flex flex-column flex-md-row align-items-center shadow-lg">
                <MDBCol
                  xs="12"
                  md="4"
                  className="d-flex justify-content-center mb-3 mb-md-0"
                >
                  <MDBCardImage
                    src={engineering}
                    fluid
                    alt="Circular"
                    style={{
                      width: "80px",
                      height: "75px",
                      borderRadius: "50%",
                      marginTop: "-90px",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Engineering
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="#" className="d-block mb-2 text-center">
                        BE/B.Tech
                      </a>  
                      <a href="#" className="d-block mb-2 text-center">
                        Polytechnic
                      </a>
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="#" className="d-block mb-2 text-center">
                    ME/M.Tech
                  </a>
                  {/*<a href="#" className="d-block mb-2 text-center">Link 5</a>
                  <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
                </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="#" style={{ backgroundColor: "crimson" }}>
                        Explore More Courses
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBCard>
            </MDBContainer>
          </MDBCol>
          <MDBCol md="4" sm="6" xs="12" className="mb-4">
            <MDBContainer className="my-5">
              <MDBCard className="d-flex flex-column flex-md-row align-items-center shadow-lg">
                <MDBCol
                  xs="12"
                  md="4"
                  className="d-flex justify-content-center mb-3 mb-md-0"
                >
                  <MDBCardImage
                    src={medical}
                    fluid
                    alt="Circular"
                    style={{
                      width: "80px",
                      height: "75px",
                      borderRadius: "50%",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Medical
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="#" className="d-block mb-2 text-center">
                        BAMS
                      </a>
                      <a href="#" className="d-block mb-2 text-center">
                        B.Sc 
                      </a>
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="#" className="d-block mb-2 text-center">
                        BPT
                      </a>
                      <a href="#" className="d-block mb-2 text-center">
                        BHMS
                      </a>
                      {/*<a href="#" className="d-block mb-2 text-center">Link 5</a>
              <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="#" style={{ backgroundColor: "crimson" }}>
                        Explore More Courses
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBCard>
            </MDBContainer>
          </MDBCol>
          <MDBCol md="4" sm="12" xs="12" className="mb-4">
            <MDBContainer className="my-5">
              <MDBCard className="d-flex flex-column flex-md-row align-items-center shadow-lg">
                <MDBCol
                  xs="12"
                  md="4"
                  className="d-flex justify-content-center mb-3 mb-md-0"
                >
                  <MDBCardImage
                    src={science}
                    fluid
                    alt="Circular"
                    style={{
                      width: "80px",
                      height: "75px",
                      borderRadius: "50%",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Science
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="#" className="d-block mb-2 text-center">
                        M.Sc
                      </a>
                      <a href="#" className="d-block mb-2 text-center">
                        B.Sc
                      </a>
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="#" className="d-block mb-2 text-center">
                        B.F.Sc
                      </a>
                      <a href="#" className="d-block mb-2 text-center">
                        M.F.Sc
                      </a>
                      {/*<a href="#" className="d-block mb-2 text-center">Link 5</a>
              <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="#" style={{ backgroundColor: "crimson" }}>
                        Explore More Courses
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBCard>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
        <MDBRow>
        <MDBCol md="4" sm="6" xs="12" className="mb-4">
          <MDBContainer className="my-5">
            <MDBCard className="mt-1 d-flex flex-column flex-md-row align-items-center shadow-lg">
              <MDBCol
                xs="12"
                md="4"
                className="d-flex justify-content-center mb-3 mb-md-0"
              >
                <MDBCardImage
                  src={commerce}
                  fluid
                  alt="Circular"
                  style={{
                    width: "80px",
                    height: "75px",
                    borderRadius: "50%",
                  }}
                />
              </MDBCol>
              <MDBCol xs="12" md="8" className="p-4">
                <MDBCardTitle tag="h4" className="text-center mb-3">
                  Commerce
                </MDBCardTitle>
                <MDBRow>
                  <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="#" className="d-block mb-2 text-center">
                      M.Com
                    </a>
                    <a href="#" className="d-block mb-2 text-center">
                      B.Com
                    </a>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="justify-content-center">
                  <MDBCol xs="12" className="text-center">
                    <MDBBtn href="#" style={{ backgroundColor: "crimson" }}>
                      Explore More Courses
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBCard>
          </MDBContainer>
        </MDBCol>
        <MDBCol md="4" sm="6" xs="12" className="mb-4">
          <MDBContainer className="my-5">
            <MDBCard className="d-flex flex-column flex-md-row align-items-center shadow-lg">
              <MDBCol
                xs="12"
                md="4"
                className="d-flex justify-content-center mb-3 mb-md-0"
              >
                <MDBCardImage
                  src={management}
                  fluid
                  alt="Circular"
                  style={{
                    width: "80px",
                    height: "75px",
                    borderRadius: "50%",
                  }}
                />
              </MDBCol>
              <MDBCol xs="12" md="8" className="p-4">
                <MDBCardTitle tag="h4" className="text-center mb-3">
                  Management
                </MDBCardTitle>
                <MDBRow>
                  <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="#" className="d-block mb-2 text-center">
                      BBA/BMS
                    </a>
                    <a href="#" className="d-block mb-2 text-center">
                      MBA/PGDM
                    </a>
                  </MDBCol>
                  <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="#" className="d-block mb-2 text-center">
                      BHM
                    </a>
                    <a href="#" className="d-block mb-2 text-center">
                      MBA
                    </a>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="justify-content-center">
                  <MDBCol xs="12" className="text-center">
                    <MDBBtn href="#" style={{ backgroundColor: "crimson" }}>
                      Explore More Courses
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBCard>
          </MDBContainer>
        </MDBCol>
        <MDBCol md="4" sm="6" xs="12" className="mb-4">
          <MDBContainer className="my-5">
            <MDBCard className="d-flex flex-column flex-md-row align-items-center shadow-lg">
              <MDBCol
                xs="12"
                md="4"
                className="d-flex justify-content-center mb-3 mb-md-0"
              >
                <MDBCardImage
                  src={arts}
                  fluid
                  alt="Circular"
                  style={{
                    width: "80px",
                    height: "75px",
                    borderRadius: "50%",
                  }}
                />
              </MDBCol>
              <MDBCol xs="12" md="8" className="p-4">
                <MDBCardTitle tag="h4" className="text-center mb-3">
                  Arts
                </MDBCardTitle>
                <MDBRow>
                  <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="#" className="d-block mb-2 text-center">
                      BA
                    </a>
                    <a href="#" className="d-block mb-2 text-center">
                      BFA
                    </a>
                  </MDBCol>
                  <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="#" className="d-block mb-2 text-center">
                      BSW
                    </a>
                    <a href="#" className="d-block mb-2 text-center">
                      MA
                    </a>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="justify-content-center">
                  <MDBCol xs="12" className="text-center">
                    <MDBBtn href="#" style={{ backgroundColor: "crimson" }}>
                      Explore More Courses
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBCard>
          </MDBContainer>
        </MDBCol>
        </MDBRow>
        <br />
        <MDBRow>
          <MDBCol md="4" sm="6" xs="12" className="mb-4">
            <MDBContainer className="my-5">
              <MDBCard className="d-flex flex-column flex-md-row align-items-center shadow-lg">
                <MDBCol
                  xs="12"
                  md="4"
                  className="d-flex justify-content-center mb-3 mb-md-0"
                >
                  <MDBCardImage
                    src={computerapplication}
                    fluid
                    alt="Circular"
                    style={{
                      width: "80px",
                      height: "75px",
                      borderRadius: "50%",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Computer Application
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="#" className="d-block mb-2 text-center">
                        BCA
                      </a>
                      {/*<a href="#" className="d-block mb-2 text-center">Link 3</a>*/}
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="#" className="d-block mb-2 text-center">
                    MCA
                  </a>
            {/*<a href="#" className="d-block mb-2 text-center">Link 4</a>
            <a href="#" className="d-block mb-2 text-center">Link 5</a>
            <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
          </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="#" style={{ backgroundColor: "crimson" }}>
                        Explore More Courses
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBCard>
            </MDBContainer>
          </MDBCol>
          <MDBCol md="4" sm="6" xs="12" className="mb-4">
            <MDBContainer className="my-5">
              <MDBCard className="d-flex flex-column flex-md-row align-items-center shadow-lg">
                <MDBCol
                  xs="12"
                  md="4"
                  className="d-flex justify-content-center mb-3 mb-md-0"
                >
                  <MDBCardImage
                    src={education}
                    fluid
                    alt="Circular"
                    style={{
                      width: "80px",
                      height: "75px",
                      borderRadius: "50%",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Education
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="#" className="d-block mb-2 text-center">
                        B.Ed
                      </a>
                      <a href="#" className="d-block mb-2 text-center">
                        B.P.Ed
                      </a>
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="#" className="d-block mb-2 text-center">
                        M.Ed
                      </a>
                      <a href="#" className="d-block mb-2 text-center">
                        M.P.Ed
                      </a>
                      {/* <a href="#" className="d-block mb-2 text-center">Link 5</a>
            <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="#" style={{ backgroundColor: "crimson" }}>
                        Explore More Courses
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBCard>
            </MDBContainer>
          </MDBCol>
          <MDBCol md="4" sm="6" xs="12" className="mb-4">
            <MDBContainer className="my-5">
              <MDBCard className="d-flex flex-column flex-md-row align-items-center shadow-lg">
                <MDBCol
                  xs="12"
                  md="4"
                  className="d-flex justify-content-center mb-3 mb-md-0"
                >
                  <MDBCardImage
                    src={law}
                    fluid
                    alt="Circular"
                    style={{
                      width: "80px",
                      height: "75px",
                      borderRadius: "50%",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Law
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="#" className="d-block mb-2 text-center">
                        LLB
                      </a>
                      <a href="#" className="d-block mb-2 text-center">
                        BA/BBA
                      </a>
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="#" className="d-block mb-2 text-center">
                    LLM
                    </a>
                      {/*<a href="#" className="d-block mb-2 text-center">MA</a>
              <a href="#" className="d-block mb-2 text-center">Link 5</a>
            <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="#" style={{ backgroundColor: "crimson" }}>
                        Explore More Courses
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBCard>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
        <br />
        <MDBRow>
          <MDBCol md="4" sm="6" xs="12" className="mb-4">
            <MDBContainer className="my-5">
              <MDBCard className="d-flex flex-column flex-md-row align-items-center shadow-lg">
                <MDBCol
                  xs="12"
                  md="4"
                  className="d-flex justify-content-center mb-3 mb-md-0"
                >
                  <MDBCardImage
                    src={pharmacy}
                    fluid
                    alt="Circular"
                    style={{
                      width: "80px",
                      height: "75px",
                      borderRadius: "50%",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Pharmacy
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="#" className="d-block mb-2 text-center">
                        B.Pharma
                      </a>
                      <a href="#" className="d-block mb-2 text-center">
                        M.Pharma
                      </a>
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="#" className="d-block mb-2 text-center">
                        D.Pharma
                      </a>
                      <a href="#" className="d-block mb-2 text-center">Pharma.D</a>
          {/*
          <a href="#" className="d-block mb-2 text-center">Link 5</a>
          <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
        </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="#" style={{ backgroundColor: "crimson" }}>
                        Explore More Courses
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBCard>
            </MDBContainer>
          </MDBCol>
          <MDBCol md="4" sm="6" xs="12" className="mb-4">
            <MDBContainer className="my-5">
              <MDBCard className="d-flex flex-column flex-md-row align-items-center shadow-lg">
                <MDBCol
                  xs="12"
                  md="4"
                  className="d-flex justify-content-center mb-3 mb-md-0"
                >
                  <MDBCardImage
                    src={agriculture}
                    fluid
                    alt="Circular"
                    style={{
                      width: "80px",
                      height: "75px",
                      borderRadius: "50%",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Agriculture
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="#" className="d-block mb-2 text-center">
                        B.Sc (agriculture)
                      </a>
                      {/*<a href="#" className="d-block mb-2 text-center">BHM/(Hospital)</a>*/}
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="#" className="d-block mb-2 text-center">
                        M.Sc (agriculture)
                      </a>
                      {/* 
          <a href="#" className="d-block mb-2 text-center">Link 5</a>
          <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="#" style={{ backgroundColor: "crimson" }}>
                        Explore More Courses
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBCard>
            </MDBContainer>
          </MDBCol>
          <MDBCol md="4" sm="6" xs="12" className="mb-4">
            <MDBContainer className="my-5">
              <MDBCard className="d-flex flex-column flex-md-row align-items-center shadow-lg">
                <MDBCol
                  xs="12"
                  md="4"
                  className="d-flex justify-content-center mb-3 mb-md-0"
                >
                  <MDBCardImage
                    src={dental}
                    fluid
                    alt="Circular"
                    style={{
                      width: "80px",
                      height: "75px",
                      borderRadius: "50%",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Dental
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="#" className="d-block mb-2 text-center">
                        BDS
                      </a>
                      <a href="#" className="d-block mb-2 text-center">
                        MDS
                      </a>
                      {/*<a href="#" className="d-block mb-2 text-center">BSW</a>*/}
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      {/*<a href="#" className="d-block mb-2 text-center">MA</a>
            <a href="#" className="d-block mb-2 text-center">Link 5</a>
          <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="#" style={{ backgroundColor: "crimson" }}>
                        Explore More Courses
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBCard>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
        <br />
        <MDBRow>
          <MDBCol md="4" sm="6" xs="12" className="mb-4">
            <MDBContainer className="my-5">
              <MDBCard className="d-flex flex-column flex-md-row align-items-center shadow-lg">
                <MDBCol
                  xs="12"
                  md="4"
                  className="d-flex justify-content-center mb-3 mb-md-0"
                >
                  <MDBCardImage
                    src={paramedical}
                    fluid
                    alt="Circular"
                    style={{
                      width: "80px",
                      height: "75px",
                      borderRadius: "50%",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Para Medical
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="#" className="d-block mb-2 text-center">
                        B.Sc (Nursing)
                      </a>
                      <a href="#" className="d-block mb-2 text-center">
                      GNM
                    </a>
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="#" className="d-block mb-2 text-center">
                      M.Sc (nursing)
                    </a>
                    <a href="#" className="d-block mb-2 text-center">
                        ANM
                      </a>
        {/*<a href="#" className="d-block mb-2 text-center">Link 4</a>
        <a href="#" className="d-block mb-2 text-center">Link 5</a>
        <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
      </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="#" style={{ backgroundColor: "crimson" }}>
                        Explore More Courses
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBCard>
            </MDBContainer>
          </MDBCol>
          <MDBCol md="4" sm="6" xs="12" className="mb-4">
            <MDBContainer className="my-5">
              <MDBCard className="d-flex flex-column flex-md-row align-items-center shadow-lg">
                <MDBCol
                  xs="12"
                  md="4"
                  className="d-flex justify-content-center mb-3 mb-md-0"
                >
                  <MDBCardImage
                    src={architeture}
                    fluid
                    alt="Circular"
                    style={{
                      width: "80px",
                      height: "75px",
                      borderRadius: "50%",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Architecture
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="#" className="d-block mb-2 text-center">
                        B.Arch
                      </a>
                      <a href="#" className="d-block mb-2 text-center">
                        B.Planning
                      </a>           
                      <a href="#" className="d-block mb-2 text-center">
                        Design
                      </a>           
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="#" className="d-block mb-2 text-center">
                        M.Arch
                      </a>
                      <a href="#" className="d-block mb-2 text-center">
                        M.Planning
                      </a>
                      {/* <a href="#" className="d-block mb-2 text-center">Link 5</a>
        <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="#" style={{ backgroundColor: "crimson" }}>
                        Explore More Courses
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBCard>
            </MDBContainer>
          </MDBCol>
          <MDBCol md="4" sm="6" xs="12" className="mb-4">
            <MDBContainer className="my-5">
              <MDBCard className="d-flex flex-column flex-md-row align-items-center shadow-lg">
                <MDBCol
                  xs="12"
                  md="4"
                  className="d-flex justify-content-center mb-3 mb-md-0"
                >
                  <MDBCardImage
                    src={veterinary}
                    fluid
                    alt="Circular"
                    style={{
                      width: "80px",
                      height: "75px",
                      borderRadius: "50%",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Veterinary Science
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="#" className="d-block mb-2 text-center">
                        BVSc
                      </a>
                      <a href="#" className="d-block mb-2 text-center">
                        Ph.D
                      </a>
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="#" className="d-block mb-2 text-center">
                        MVSc
                      </a>
                      {/*
        <a href="#" className="d-block mb-2 text-center">MA</a>
          <a href="#" className="d-block mb-2 text-center">Link 5</a>
        <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="#" style={{ backgroundColor: "crimson" }}>
                        Explore More Courses
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBCard>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
        <br />
        <MDBRow>
          <MDBCol md="4" sm="6" xs="12" className="mb-4">
            <MDBContainer className="my-5">
              <MDBCard className="d-flex flex-column flex-md-row align-items-center shadow-lg">
                <MDBCol
                  xs="12"
                  md="4"
                  className="d-flex justify-content-center mb-3 mb-md-0"
                >
                  <MDBCardImage
                    src={hotelmanagement}
                    fluid
                    alt="Circular"
                    style={{
                      width: "80px",
                      height: "75px",
                      borderRadius: "50%",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Hotel Management
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="#" className="d-block mb-2 text-center">
                        BHM
                      </a>
                      <a href="#" className="d-block mb-2 text-center">
                        MHM
                      </a>
                      {/*<a href="#" className="d-block mb-2 text-center">Link 3</a>*/}
                    </MDBCol>
                    {/*<MDBCol md="6" sm="6" xs="12" className="mb-3">
      <a href="#" className="d-block mb-2 text-center">Link 4</a>
      <a href="#" className="d-block mb-2 text-center">Link 5</a>
      <a href="#" className="d-block mb-2 text-center">Link 6</a>
    </MDBCol>*/}
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="#" style={{ backgroundColor: "crimson" }}>
                        Explore More Courses
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBCard>
            </MDBContainer>
          </MDBCol>
          <MDBCol md="4" sm="6" xs="12" className="mb-4">
            <MDBContainer className="my-5">
              <MDBCard className="d-flex flex-column flex-md-row align-items-center shadow-lg">
                <MDBCol
                  xs="12"
                  md="4"
                  className="d-flex justify-content-center mb-3 mb-md-0"
                >
                  <MDBCardImage
                    src={aviation}
                    fluid
                    alt="Circular"
                    style={{
                      width: "80px",
                      height: "75px",
                      borderRadius: "50%",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Aviation
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="#" className="d-block mb-2 text-center">
                        Bachelor of Aviation
                      </a>
                      <a href="#" className="d-block mb-2 text-center">
                      AME
                    </a>
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="#" className="d-block mb-2 text-center">
                        M.Sc (Aviation)
                      </a>
                      <a href="#" className="d-block mb-2 text-center">
                      CPL
                    </a>
                      {/* 
      <a href="#" className="d-block mb-2 text-center">Executive MBA</a>
      <a href="#" className="d-block mb-2 text-center">Link 5</a>
      <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="#" style={{ backgroundColor: "crimson" }}>
                        Explore More Courses
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBCard>
            </MDBContainer>
          </MDBCol>
          <MDBCol md="4" sm="6" xs="12" className="mb-4">
            <MDBContainer className="my-5">
              <MDBCard className="d-flex flex-column flex-md-row align-items-center shadow-lg">
                <MDBCol
                  xs="12"
                  md="4"
                  className="d-flex justify-content-center mb-3 mb-md-0"
                >
                  <MDBCardImage
                    src={masscommunication}
                    fluid
                    alt="Circular"
                    style={{
                      width: "80px",
                      height: "75px",
                      borderRadius: "50%",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Mass Communication
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="#" className="d-block mb-2 text-center">
                        BMM
                      </a>
                      <a href="#" className="d-block mb-2 text-center">
                        MMC
                      </a>
                      {/*
      <a href="#" className="d-block mb-2 text-center">BSW</a>
        */}
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      {/*
      <a href="#" className="d-block mb-2 text-center">MA</a>
        <a href="#" className="d-block mb-2 text-center">Link 5</a>
      <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="#" style={{ backgroundColor: "crimson" }}>
                        Explore More Courses
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBCard>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
        <br />
        <MDBRow>
          <MDBCol md="4" sm="6" xs="12" className="mb-4">
            <MDBContainer className="my-5">
              <MDBCard className="d-flex flex-column flex-md-row align-items-center shadow-lg">
                <MDBCol
                  xs="12"
                  md="4"
                  className="d-flex justify-content-center mb-3 mb-md-0"
                >
                  <MDBCardImage
                    src={design}
                    fluid
                    alt="Circular"
                    style={{
                      width: "80px",
                      height: "75px",
                      borderRadius: "50%",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Design
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="#" className="d-block mb-2 text-center">
                        B.Des
                      </a>
                      <a href="#" className="d-block mb-2 text-center">
                        B.F.A
                      </a>
                      <a href="#" className="d-block mb-2 text-center">
                        B.A
                      </a>
                      {/*<a href="#" className="d-block mb-2 text-center">Link 3</a>*/}
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="#" className="d-block mb-2 text-center">
                        M.Des
                      </a>
                      <a href="#" className="d-block mb-2 text-center">
                        M.A
                      </a>
    {/*<a href="#" className="d-block mb-2 text-center">Link 4</a>
    <a href="#" className="d-block mb-2 text-center">Link 5</a>
    <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
  </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="#" style={{ backgroundColor: "crimson" }}>
                        Explore More Courses
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBCard>
            </MDBContainer>
          </MDBCol>
          <MDBCol md="4" sm="6" xs="12" className="mb-4">
            <MDBContainer className="my-5">
              <MDBCard className="d-flex flex-column flex-md-row align-items-center shadow-lg">
                <MDBCol
                  xs="12"
                  md="4"
                  className="d-flex justify-content-center mb-3 mb-md-0"
                >
                  <MDBCardImage
                    src={vocational}
                    fluid
                    alt="Circular"
                    style={{
                      width: "80px",
                      height: "75px",
                      borderRadius: "50%",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Vocational Courses
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="#" className="d-block mb-2 text-center">
                        Bachelor's
                      </a>
                      <a href="#" className="d-block mb-2 text-center">
                        Marketing
                      </a>
                      {/*
      <a href="#" className="d-block mb-2 text-center">MBA/PGDM</a>
    <a href="#" className="d-block mb-2 text-center">BHM/(Hospital)</a>
      */}
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="#" className="d-block mb-2 text-center">
                    Accounting
                  </a>
                  <a href="#" className="d-block mb-2 text-center">
                    Banking
                  </a>
                      {/* 
    <a href="#" className="d-block mb-2 text-center">Executive MBA</a>
    <a href="#" className="d-block mb-2 text-center">Link 5</a>
    <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="#" style={{ backgroundColor: "crimson" }}>
                        Explore More Courses
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBCard>
            </MDBContainer>
          </MDBCol>
          <MDBCol md="4" sm="6" xs="12" className="mb-4">
            <MDBContainer className="my-5">
              <MDBCard className="d-flex flex-column flex-md-row align-items-center shadow-lg">
                <MDBCol
                  xs="12"
                  md="4"
                  className="d-flex justify-content-center mb-3 mb-md-0"
                >
                  <MDBCardImage
                    src={animation}
                    fluid
                    alt="Circular"
                    style={{
                      width: "80px",
                      height: "75px",
                      borderRadius: "50%",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Animation
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="#" className="d-block mb-2 text-center">
                        BSc in Animation
                      </a>
                      <a href="#" className="d-block mb-2 text-center">
                      Visual Arts
                      </a>
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="#" className="d-block mb-2 text-center">
                        Digital Animation
                      </a>
                      <a href="#" className="d-block mb-2 text-center">
                         VFX
                      </a>
                      {/*<a href="#" className="d-block mb-2 text-center">Link 5</a>
    <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="#" style={{ backgroundColor: "crimson" }}>
                        Explore More Courses
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBCard>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
        <br />
        <br />
        <MDBContainer className="my-5">
        <MDBRow className="justify-content-center">
          <MDBCol xs="12" className="text-center mb-4">
            <h2 style={{color: "gray"}}>#TRENDING COURSE SEARCH</h2>
          </MDBCol>
        </MDBRow>
        <br />
        <br />
        <MDBRow className="justify-content-center">
          <MDBCol xs="6" sm="4" md="2" className="mb-3 d-flex justify-content-center">
            <MDBBtn href="/engineering" style={{ backgroundColor: "transparent", width: "100%", color: "black", borderRadius: "25px" }}>
              BE/B.Tech courses
            </MDBBtn>
          </MDBCol>
          <MDBCol xs="6" sm="4" md="2" className="mb-3 d-flex justify-content-center">
            <MDBBtn href="/medical" style={{ backgroundColor: "transparent", width: "100%", color: "black", borderRadius: "25px" }}>
              MBBS courses
            </MDBBtn>
          </MDBCol>
          <MDBCol xs="6" sm="4" md="2" className="mb-3 d-flex justify-content-center">
            <MDBBtn href="/science" style={{ backgroundColor: "transparent", width: "100%", color: "black", borderRadius: "25px" }}>
              B.Sc courses
            </MDBBtn>
          </MDBCol>
          <MDBCol xs="6" sm="4" md="2" className="mb-3 d-flex justify-content-center">
            <MDBBtn href="/commerce" style={{ backgroundColor: "transparent", width: "100%", color: "black", borderRadius: "25px" }}>
              B.Com courses
            </MDBBtn>
          </MDBCol>
          <MDBCol xs="6" sm="4" md="2" className="mb-3 d-flex justify-content-center">
            <MDBBtn href="/arts" style={{ backgroundColor: "transparent", width: "100%", color: "black", borderRadius: "25px" }}>
              BA courses
            </MDBBtn>
          </MDBCol>
          <MDBCol xs="6" sm="4" md="2" className="mb-3 d-flex justify-content-center">
            <MDBBtn href="/management" style={{ backgroundColor: "transparent", width: "100%", color: "black", borderRadius: "25px" }}>
              MBA/PGDM courses 
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </MDBContainer>
    </MDBContainer>
  );
};

export default TopCourses;
