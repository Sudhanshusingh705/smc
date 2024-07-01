import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBListGroup,
  MDBListGroupItem,
  MDBBtn,
} from "mdb-react-ui-kit";
// import "./Animation.css"

const Animation = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  const cardStyles = {
    background: "linear-gradient(to bottom right, #98E2FF, #66D9E8)",
    borderRadius: "10px",
    padding: "20px",
    width: "auto", // Adjusting width to auto to make it responsive
    maxWidth: "100%", // Limiting max width to 100% for responsiveness
  };

  const cardContainerStyle = {
    marginBottom: "20px", // Adjust margin as needed
  };

  const cardStyle = {
    width: "100%", // Ensure full width of the container
  };

  // Sample data for exams
  const exams = [
    { id: 1, name: "JEE Main", courses: "B.Tech/B.E" },
    { id: 2, name: "CAT", courses: "MBA, PGDM" },
    { id: 3, name: "NEET", courses: "MBBS, BDS, B.V.SC, BAMS, BHMS, BUMS" },
    { id: 4, name: "BITSAT", courses: "B.E, B.Pharm, M.Sc" },
    { id: 5, name: "VITEEE", courses: "B.Tech" },
    { id: 6, name: "GATE", courses: "B.Tech/B.E, B.Pharm, B.Arch" },
    { id: 7, name: "NATA", courses: "B.Arch" },
    {
      id: 8,
      name: "CLAT",
      courses: "BA LLB (Hons), B.Com LLB (Hons), B.Sc LLB (Hons)",
    },
    { id: 9, name: "MAT", courses: "MBA, PGDM" },
    { id: 10, name: "SNAP", courses: "MBA" },
  ];

  return (
    <div className="section">
      <h2 className="section-title">
      Top Animation Colleges in India 2023-2024
      </h2>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="9" className="mx-auto">
            <div className="pageDescription text-center">
              <h1>Animation Colleges</h1>

              {showContent ? (
                <>
                  {/* ... truncated for brevity ... */}
                  <div className="readMoreDiv">
                    <button
                      className="readMoreButton"
                      onClick={toggleContent}
                      style={{ width: "150px", height: "50px" }} // Adjusted width and height
                    >
                      Show Less
                    </button>
                  </div>
                  <h2>
                Animation Full Course 2023 National, State &amp; University
                Level
              </h2>
                  <p>
                    <div className="mb-2">
                      <span>
                      Students are increasingly choosing to major in animation to
                      pursue higher education. The field of animation offers a
                      variety of courses. There are animation courses available at
                      the undergraduate, graduate, and doctoral levels for
                      students to choose from. Students who want to enroll in
                      animation courses must pass an animation full course at the
                      national, university, or state level. Here, were giving you
                      all the information you need about animation Full Course
                      2023.
                      </span>
                    </div>
                    <div className="mb-2">
                      <span>
                        Engineering is a discipline that involves various
                        scientific principles to design, innovate, and develop
                        machines, software, hardware, technical systems, and
                        processes. Engineering offers a degree in multiple
                        specialisations such as computer science and
                        engineering, mechanical engineering, civil engineering,
                        chemical engineering, etc.
                      </span>
                    </div>
                  </p>
                </>
              ) : (
                <>
                  {/* ... condensed content ... */}
                  <button
                    className="readMoreButton"
                    onClick={toggleContent}
                    style={{ width: "150px", height: "50px" }} // Adjusted width and height
                  >
                    Show More
                  </button>
                </>
              )}
              {/* Additional content */}
              {showContent && (
                <>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Top Engineering Colleges in India include colleges like
                      IIT Madras, IIT Delhi, IIT Bombay, and BITS Pilani.
                    </span>
                  </p>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Engineering is a discipline that involves various
                      scientific principles to design, innovate, and develop
                      machines, software, hardware, technical systems, and
                      processes. Engineering offers a degree in multiple
                      specializations such as computer science and engineering,
                      mechanical engineering, civil engineering, chemical
                      engineering, etc.
                    </span>
                    <span>
                      Courses offered in top engineering colleges in India
                      are&nbsp;
                      <a href="#">BE</a>,&nbsp;
                      <a href="#">BTech</a>
                      ,&nbsp;
                      <a href="#">MTech</a>
                      ,&nbsp;<a href="#">ME</a>, Diploma in Engineering, PhD.
                    </span>
                    <span>
                      Entrance exams accepted by the best colleges for
                      engineering are JEE MAINS, JEE Advanced, BITSAT, KCET etc.
                      There are various job opportunities after an Engineering
                      degree like software engineer, mechanical engineer,
                      electrical engineer, web developer, biomedical engineer
                      etc.
                    </span>
                  </p>
                  <h2>Top Engineering Colleges in India: Highlights</h2>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Candidates must have passed 10+2 with a minimum of 50%
                      marks in the PCB/PCMB stream to get admission to top
                      Engineering colleges in India. Tabulated below are the key
                      highlights regarding the engineering colleges in India
                    </span>
                  </p>
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>
                            <p>
                              <strong>College Type</strong>
                            </p>
                          </td>
                          <td>
                            <p>
                              <span>Government Colleges - 822 &amp; </span>
                              <span>Private Colleges - 3982</span>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>
                              <strong>Colleges Affiliated To</strong>
                            </p>
                          </td>
                          <td>
                            <p>
                              <span>NAAC, UGC, AICTE</span>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>
                              <strong>Entrance Exams Accepted</strong>
                            </p>
                          </td>
                          <td>
                            <p>
                              <span>JEE MAINS, JEE Advanced, BITSAT, KCET</span>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>
                              <strong>Specializations</strong>
                            </p>
                          </td>
                          <td>
                            <p>
                              <span>
                                Computer Science Engineering, Mechanical
                                Engineering, Civil Engineering, Aeronautical
                                Engineering
                              </span>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>
                              <strong>Approximate Fees</strong>
                            </p>
                          </td>
                          <td>
                            <p>
                              <span>
                                The annual fee of engineering colleges in India
                                ranges between 125000 to 350000.
                              </span>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2>
                    <strong>Ranking of Engineering Colleges in India</strong>
                  </h2>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      NIRF and many other ranking sources have ranked various
                      government and private colleges in India. Given below are
                      the ranking of&nbsp; top engineering colleges in India by
                      various sources to make it easier for engineering
                      aspirants to choose the best engineering colleges.
                    </span>
                  </p>
                </>
              )}
            </div>
          </MDBCol>
        </MDBRow>
        {/* Spacer */}
        <MDBRow>
          <MDBCol md="12" className="text-center">
            <div style={{ height: "50px" }}></div> {/* Adjust spacer height */}
          </MDBCol>
        </MDBRow>
        {/* Additional Columns */}
        <MDBRow>
          <MDBContainer>
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="gx-3">
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="w-100 mb-4">
                  <div style={{ position: "relative" }}>
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                      alt="..."
                      position="top"
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "auto",
                        width: "100%",
                      }}
                    />
                    <img
                      src="https://mdbootstrap.com/img/new/standard/nature/181.webp"
                      alt="Circular"
                      className="rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: "3px solid white",
                      }}
                    />
                  </div>
                  <MDBCardBody className="d-flex flex-column align-items-center mt-5">
                    <MDBCardText className="text-center">
                      <h5>Card Title</h5>
                    </MDBCardText>
                    <MDBRow className="w-100 mt-2">
                      <MDBCol md="6" className="text-center mb-3 mb-md-0">
                        <p>
                          <strong>Average Fees</strong>
                        </p>
                        <p>$10,000</p>
                        <p>
                          <strong>No of Courses</strong>
                        </p>
                        <p>50</p>
                      </MDBCol>
                      <MDBCol md="6" className="text-center">
                        <p>
                          <strong>Median Salary</strong>
                        </p>
                        <p>$70,000</p>
                        <p>
                          <strong>Exam</strong>
                        </p>
                        <p>GMAT</p>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-between w-100 mt-3">
                      <MDBBtn color="primary">Apply Now</MDBBtn>
                      <MDBBtn color="primary">Brochure</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br />
          </MDBContainer>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Animation;
