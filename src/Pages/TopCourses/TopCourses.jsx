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
        style={{ color: "DarkSlateBlue" }}
      >
        DON'T KNOW WHAT TO CHOOSE ?
        <br />
        CHOOSE BY YOUR LEVEL
      </MDBTypography>
      <MDBTypography
        tag="h4"
        className="text-center mb-3"
        style={{ color: "gray", marginTop: "-40px" }}
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
                      href="#/exams"
                    >
                      16 ITI
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "100px", height: "40px" }}
                      href="/arts"
                    >
                      4 Arts
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "130px", height: "40px" }}
                      href="/dental"
                    >
                      2 Dental
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "150px", height: "40px" }}
                      href="/animation"
                    >
                      1 Animation
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "140px", height: "40px" }}
                      href="/hotelmanagement"
                    >
                      1 HotelManagement
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "100px", height: "40px" }}
                      href="/vocationalcourses"
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
                      href="/engineering"
                    >
                      205 Engineering
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "100px", height: "40px" }}
                      href="/arts"
                    >
                      145 Arts
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "130px", height: "40px" }}
                      href="/science"
                    >
                      136 Science
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "150px", height: "40px" }}
                      href="/management"
                    >
                      89 Management
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "140px", height: "40px" }}
                      href="commerce"
                    >
                      53 Commerce
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "100px", height: "40px" }}
                      href="/education"
                    >
                      38 Education
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "110px", height: "40px" }}
                      href="/medical"
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
                      href="/management"
                    >
                      79 Management
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "100px", height: "40px" }}
                      href="/arts"
                    >
                      31 Arts
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "130px", height: "40px" }}
                      href="/medical"
                    >
                      27 Medical
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "150px", height: "40px" }}
                      href="/engineering"
                    >
                      22 Engineering
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "140px", height: "40px" }}
                      href="/law"
                    >
                      14 Law
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "100px", height: "40px" }}
                      href="/science"
                    >
                      13 Science
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="auto" className="mb-3">
                    <MDBBtn
                      style={{ minWidth: "110px", height: "40px" }}
                      href="/hotelmanagement"
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
                    href="/arts"
                  >
                    12 Arts
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "100px", height: "40px" }}
                    href="/commerce"
                  >
                    9 Commerce
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "130px", height: "40px" }}
                    href="/management"
                  >
                    8 Management
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "150px", height: "40px" }}
                    href="/science"
                  >
                    6 Science
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "140px", height: "40px" }}
                    href="/design"
                  >
                    4 Design
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "100px", height: "40px" }}
                    href="/computerapplication"
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
                    href="/management"
                  >
                    217 Management
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "100px", height: "40px" }}
                    href="/engineering"
                  >
                    174 Engineering
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "130px", height: "40px" }}
                    href="/medical"
                  >
                    126 Medical
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "150px", height: "40px" }}
                    href="/science"
                  >
                    109 Science
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "140px", height: "40px" }}
                    href="/arts"
                  >
                    104 Arts
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "100px", height: "40px" }}
                    href="/law"
                  >
                    25 Law
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "110px", height: "40px" }}
                    href="/commerce"
                  >
                    23 Commerce
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "130px", height: "40px" }}
                    href="/dental"
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
                    href="/science"
                  >
                    67 Science
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "100px", height: "40px" }}
                    href="/arts"
                  >
                    64 Arts
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "130px", height: "40px" }}
                    href="/medical"
                  >
                    35 Medical
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "150px", height: "40px" }}
                    href="/engineering"
                  >
                    25 Engineering
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "140px", height: "40px" }}
                    href="/management"
                  >
                    22 Management
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "100px", height: "40px" }}
                    href="/pharmacy"
                  >
                    8 Pharmacy
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "110px", height: "40px" }}
                    href="/commerce"
                  >
                    7 Commerce
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn
                    style={{ minWidth: "130px", height: "40px" }}
                    href="/agriculture"
                  >
                    6 Agriculture
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="auto" className="mb-3">
                  <MDBBtn style={{ minWidth: "90px", height: "40px" }} href="/law">
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
          style={{ color: "DarkSlateBlue" }}
        >
          CHOOSE BY INTEREST
        </MDBTypography>
        <MDBTypography
          tag="h4"
          className="text-center mb-3"
          style={{ color: "gray", marginTop: "-40px"}}
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
                      <a href="/engineering" className="d-block mb-2 text-center">
                        B.Tech
                      </a>  
                      <a href="/engineering" className="d-block mb-2 text-center">
                        Diploma
                      </a>
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="/engineering" className="d-block mb-2 text-center">
                    M.Tech
                  </a>
                  {/*<a href="#" className="d-block mb-2 text-center">Link 5</a>
                  <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
                </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="/engineering" style={{ backgroundColor: "crimson" }}>
                        Explore Courses
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
                      marginTop: "-90px",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Medical
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="/medical" className="d-block mb-2 text-center">
                        BAMS
                      </a>
                      <a href="/medical" className="d-block mb-2 text-center">
                        B.Sc 
                      </a>
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="/medical" className="d-block mb-2 text-center">
                        BPT
                      </a>
                      <a href="/medical" className="d-block mb-2 text-center">
                        BHMS
                      </a>
                      {/*<a href="#" className="d-block mb-2 text-center">Link 5</a>
              <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="/medical" style={{ backgroundColor: "crimson" }}>
                        Explore Courses
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
                      marginTop: "-90px",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Science
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="/science" className="d-block mb-2 text-center">
                        M.Sc
                      </a>
                      <a href="/science" className="d-block mb-2 text-center">
                        B.Sc
                      </a>
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="/science" className="d-block mb-2 text-center">
                        B.F.Sc
                      </a>
                      <a href="/science" className="d-block mb-2 text-center">
                        M.F.Sc
                      </a>
                      {/*<a href="#" className="d-block mb-2 text-center">Link 5</a>
              <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="/science" style={{ backgroundColor: "crimson" }}>
                        Explore Courses
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBCard>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
        <MDBRow style={{marginTop: "-87px"}}>
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
                    marginTop: "-90px",
                  }}
                />
              </MDBCol>
              <MDBCol xs="12" md="8" className="p-4">
                <MDBCardTitle tag="h4" className="text-center mb-3">
                  Commerce
                </MDBCardTitle>
                <MDBRow>
                  <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="/commerce" className="d-block mb-2 text-center">
                      M.Com
                    </a>
                    <a href="science" className="d-block mb-2 text-center">
                      B.Com
                    </a>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="justify-content-center">
                  <MDBCol xs="12" className="text-center">
                    <MDBBtn href="/commerce" style={{ backgroundColor: "crimson" }}>
                      Explore Courses
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
                    marginTop: "-90px",
                  }}
                />
              </MDBCol>
              <MDBCol xs="12" md="8" className="p-4">
                <MDBCardTitle tag="h4" className="text-center mb-3">
                  Management
                </MDBCardTitle>
                <MDBRow>
                  <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="/management" className="d-block mb-2 text-center">
                      BBA/BMS
                    </a>
                    <a href="/management" className="d-block mb-2 text-center">
                      PGDM
                    </a>
                  </MDBCol>
                  <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="/management" className="d-block mb-2 text-center">
                      BHM
                    </a>
                    <a href="/management" className="d-block mb-2 text-center">
                      MBA
                    </a>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="justify-content-center">
                  <MDBCol xs="12" className="text-center">
                    <MDBBtn href="/management" style={{ backgroundColor: "crimson" }}>
                      Explore Courses
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
                    marginTop: "-90px",
                  }}
                />
              </MDBCol>
              <MDBCol xs="12" md="8" className="p-4">
                <MDBCardTitle tag="h4" className="text-center mb-3">
                  Arts
                </MDBCardTitle>
                <MDBRow>
                  <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="/arts" className="d-block mb-2 text-center">
                      BA
                    </a>
                    <a href="/arts" className="d-block mb-2 text-center">
                      BFA
                    </a>
                  </MDBCol>
                  <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="/arts" className="d-block mb-2 text-center">
                      BSW
                    </a>
                    <a href="/arts" className="d-block mb-2 text-center">
                      MA
                    </a>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="justify-content-center">
                  <MDBCol xs="12" className="text-center">
                    <MDBBtn href="/arts" style={{ backgroundColor: "crimson" }}>
                      Explore Courses
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBCard>
          </MDBContainer>
        </MDBCol>
        </MDBRow>
        <br />
        <MDBRow style={{marginTop: "-95px"}}>
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
                      marginTop: "-90px",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Computer Application
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="/computerapplication" className="d-block mb-2 text-center">
                        BCA
                      </a>
                      {/*<a href="#" className="d-block mb-2 text-center">Link 3</a>*/}
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="/computerapplication" className="d-block mb-2 text-center">
                    MCA
                  </a>
            {/*<a href="#" className="d-block mb-2 text-center">Link 4</a>
            <a href="#" className="d-block mb-2 text-center">Link 5</a>
            <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
          </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="/computerapplication" style={{ backgroundColor: "crimson" }}>
                        Explore Courses
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
                      marginTop: "-90px",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Education
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="/education" className="d-block mb-2 text-center">
                        B.Ed
                      </a>
                      <a href="/education" className="d-block mb-2 text-center">
                        B.P.Ed
                      </a>
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="/education" className="d-block mb-2 text-center">
                        M.Ed
                      </a>
                      <a href="/education" className="d-block mb-2 text-center">
                        M.P.Ed
                      </a>
                      {/* <a href="#" className="d-block mb-2 text-center">Link 5</a>
            <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="/education" style={{ backgroundColor: "crimson" }}>
                        Explore Courses
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
                      marginTop: "-90px",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Law
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="/law" className="d-block mb-2 text-center">
                        LLB
                      </a>
                      <a href="/law" className="d-block mb-2 text-center">
                        BA/BBA
                      </a>
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="/law" className="d-block mb-2 text-center">
                    LLM
                    </a>
                      {/*<a href="#" className="d-block mb-2 text-center">MA</a>
              <a href="#" className="d-block mb-2 text-center">Link 5</a>
            <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="/law" style={{ backgroundColor: "crimson" }}>
                        Explore Courses
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBCard>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
        <br />
        <MDBRow style={{marginTop: "-95px"}}>
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
                      marginTop: "-90px",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Pharmacy
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="/pharmacy" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>
                      B.Pharma
                      </a>
                      <a href="/pharmacy" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>Pharma.D</a>
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="/pharmacy" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>
                        D.Pharma
                      </a>
                    <a href="/pharmacy" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>
                        M.Pharma
                      </a>
          {/*
          <a href="#" className="d-block mb-2 text-center">Link 5</a>
          <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
        </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="/pharmacy" style={{ backgroundColor: "crimson" }}>
                        Explore Courses
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
                      marginTop: "-90px",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Agriculture
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="/agriculture" className="d-block mb-2 text-center" style={{fontSize: "13px"}}>
                        B.Sc (agriculture)
                      </a>
                      {/*<a href="#" className="d-block mb-2 text-center">BHM/(Hospital)</a>*/}
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="/agriculture" className="d-block mb-2 text-center" style={{fontSize: "13px"}}>
                        M.Sc (agriculture)
                      </a>
                      {/* 
          <a href="#" className="d-block mb-2 text-center">Link 5</a>
          <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="/agriculture" style={{ backgroundColor: "crimson" }}>
                        Explore Courses
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
                      marginTop: "-90px",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Dental
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="/dental" className="d-block mb-2 text-center" style={{fontSize: "13px"}}>
                        BDS
                      </a>
                      <a href="/dental" className="d-block mb-2 text-center" style={{fontSize: "13px"}}>
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
                      <MDBBtn href="/dental" style={{ backgroundColor: "crimson" }}>
                        Explore Courses
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBCard>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
        <br />
        <MDBRow style={{marginTop: "-95px"}}>
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
                      marginTop: "-90px",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Para Medical
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="/paramedical" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>
                        B.Sc (Nursing)
                      </a>
                      <a href="/paramedical" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>
                      GNM
                    </a>
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="/paramedical" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>
                      M.Sc (nursing)
                    </a>
                    <a href="/paramedical" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>
                        ANM
                      </a>
        {/*<a href="#" className="d-block mb-2 text-center">Link 4</a>
        <a href="#" className="d-block mb-2 text-center">Link 5</a>
        <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
      </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="/paramedical" style={{ backgroundColor: "crimson" }}>
                        Explore Courses
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
                      marginTop: "-90px",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Architecture
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="/architecture" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>
                        B.Arch
                      </a>
                      <a href="/architecture" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>
                        B.Planning
                      </a>           
                      <a href="/architecture" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>
                        Design
                      </a>           
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="/architecture" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>
                        M.Arch
                      </a>
                      <a href="/architecture" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>
                        M.Planning
                      </a>
                      {/* <a href="#" className="d-block mb-2 text-center">Link 5</a>
        <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="/architecture" style={{ backgroundColor: "crimson" }}>
                        Explore Courses
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
                      marginTop: "-90px",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Veterinary Science
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="/veterinaryscience" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>
                        BVSc
                      </a>
                      <a href="/veterinaryscience" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>
                        Ph.D
                      </a>
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="/veterinaryscience" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>
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
                      <MDBBtn href="/veterinaryscience" style={{ backgroundColor: "crimson" }}>
                        Explore Courses
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBCard>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
        <br />
        <MDBRow style={{marginTop: "-95px"}}>
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
                      marginTop: "-90px",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Hotel Management
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="/hotelmanagement" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>
                        BHM
                      </a>
                      <a href="/hotelmanagement" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>
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
                      <MDBBtn href="/hotelmanagement" style={{ backgroundColor: "crimson" }}>
                        Explore Courses
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
                      marginTop: "-90px",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Aviation
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="aviation" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>
                        Bachelor of Aviation
                      </a>
                      <a href="aviation" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>
                      AME
                    </a>
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="aviation" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>
                        M.Sc (Aviation)
                      </a>
                      <a href="aviation" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>
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
                      <MDBBtn href="/aviation" style={{ backgroundColor: "crimson" }}>
                        Explore Courses
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
                      marginTop: "-90px",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h5" className="text-center mb-3">
                    Mass Communication
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="/masscommunication" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>
                        BMM
                      </a>
                      <a href="/masscommunication" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>
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
                      <MDBBtn href="/masscommunication" style={{ backgroundColor: "crimson" }}>
                        Explore Courses
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBCard>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
        <br />
        <MDBRow style={{marginTop: "-95px"}}>
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
                      marginTop: "-90px",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Design
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="/design" className="d-block mb-2 text-center" style={{fontSize: "12px"}}>
                        B.Des
                      </a>
                      <a href="/design" className="d-block mb-2 text-center" style={{fontSize: "12px"}}>
                        B.F.A
                      </a>
                      <a href="/design" className="d-block mb-2 text-center" style={{fontSize: "12px"}}>
                        B.A
                      </a>
                      {/*<a href="#" className="d-block mb-2 text-center">Link 3</a>*/}
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="/design" className="d-block mb-2 text-center" style={{fontSize: "12px"}}>
                        M.Des
                      </a>
                      <a href="/design" className="d-block mb-2 text-center" style={{fontSize: "12px"}}>
                        M.A
                      </a>
    {/*<a href="#" className="d-block mb-2 text-center">Link 4</a>
    <a href="#" className="d-block mb-2 text-center">Link 5</a>
    <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
  </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="/design" style={{ backgroundColor: "crimson" }}>
                        Explore Courses
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
                      marginTop: "-90px",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h5" className="text-center mb-3">
                    Vocational Courses
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="/vocationalcourses" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>
                        Bachelor's
                      </a>
                      <a href="/vocationalcourses" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>
                        Marketing
                      </a>
                      {/*
      <a href="#" className="d-block mb-2 text-center">MBA/PGDM</a>
    <a href="#" className="d-block mb-2 text-center">BHM/(Hospital)</a>
      */}
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                    <a href="/vocationalcourses" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>
                    Accounting
                  </a>
                  <a href="/vocationalcourses" className="d-block mb-2 text-center" style={{fontSize: "14px"}}>
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
                      <MDBBtn href="/vocationalcourses" style={{ backgroundColor: "crimson" }}>
                        Explore Courses
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
                      marginTop: "-90px",
                    }}
                  />
                </MDBCol>
                <MDBCol xs="12" md="8" className="p-4">
                  <MDBCardTitle tag="h4" className="text-center mb-3">
                    Animation
                  </MDBCardTitle>
                  <MDBRow>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="/animation" className="d-block mb-2 text-center" style={{fontSize: "13px"}}>
                        BSc in Animation
                      </a>
                      <a href="/animation" className="d-block mb-2 text-center" style={{fontSize: "13px"}}>
                      Visual Arts
                      </a>
                    </MDBCol>
                    <MDBCol md="6" sm="6" xs="12" className="mb-3">
                      <a href="/animation" className="d-block mb-2 text-center" style={{fontSize: "13px"}}>
                        Digital Animation
                      </a>
                      <a href="/animation" className="d-block mb-2 text-center" style={{fontSize: "13px"}}>
                         VFX
                      </a>
                      {/*<a href="#" className="d-block mb-2 text-center">Link 5</a>
    <a href="#" className="d-block mb-2 text-center">Link 6</a>*/}
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="justify-content-center">
                    <MDBCol xs="12" className="text-center">
                      <MDBBtn href="#" style={{ backgroundColor: "crimson" }}>
                        Explore Courses
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
            <h2 style={{color: "DarkSlateBlue", marginTop: "-85px"}}>#TRENDING COURSE SEARCH</h2>
          </MDBCol>
        </MDBRow>
        <br />
        <br />
        <MDBRow className="justify-content-center" style={{ marginTop: "-30px"}}>
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
