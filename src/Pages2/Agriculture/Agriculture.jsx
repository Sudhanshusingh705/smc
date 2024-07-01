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
import "./Agriculture.css"
// import "./Exams.css"; // Assuming Exams.css is in the same directory

const Agriculture = () => {
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
      Top Agriculture Colleges in India 2023-2024
      </h2>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="9" className="mx-auto">
            <div className="pageDescription text-center">
              <h1>Agriculture Colleges</h1>

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
                  <p>
                    <div className="mb-2">
                      <span>
                      Agriculture Full Course 2023-2024 National, State &amp; University
                      Level
                      </span>
                    </div>
                    <div className="mb-2">
                      <span>
                      Students are increasingly choosing to major in agriculture
                      to pursue higher education. The field of agriculture offers
                      a variety of courses. There are agriculture courses
                      available at the undergraduate, graduate, and doctoral
                      levels for students to choose from. Students who want to
                      enroll in agriculture courses must pass an agriculture
                      entrance exam at the national, university, or state level.
                      Here, were giving you all the information you need about
                      Agriculture Entrance Exams 2023-2024.
                      </span>
                      <span>
                      The field deals with the scientific study of agriculture,
                    animal farming, natural resources, and land management,
                    improving the cultivation process, growing methods and
                    improving livestock. A career in agriculture is vast and is
                    a key role in the economy and employment. More than 50% of
                    the workforce in India contributes to agriculture industries
                    with rich biodiversity.
                      </span>
                      <span>
                      To get admission into courses like agricultural science,
                      horticulture, livestock management, etc., aspirants must
                      qualify for the different agricultural entrance exams. The
                      chance to appear at any of the top agriculture entrance
                      exams in India will leave an idea of the course-specific
                      field potential and performance.
                      </span>
                      <h2>Top Agriculture Exams in India</h2>
                      <span>
                      The Indian Council of Agricultural Research (ICAR) is a
                      national-level agricultural entrance exam accepted by
                      numerous colleges/universities for entry into the course.
                      Agricultural state-level entrance exams for studies include
                      AGRICET, BCECE, MHT CET, KEAM, etc. Take a look at the list
                      of top agriculture entrance exams in India.
                      </span>
                    </div>
                  </p>
                  <h2>Jharkhand JCECE 2023-2024</h2>
                  <p>
                    The Jharkhand Combined Entrance Competitive Examination
                    Board oversees the JCECE exam. The state administers this
                    test. It is used to determine who gets into first-year
                    professional degree programmes in engineering, agriculture,
                    and other fields. In Apr 2023, the JCECE application form
                    2023 will be made available.
                  </p>
                  <h2>Karnataka KCET 2023-2024</h2>
                  <p>
                    The Karnataka Examination Authority administers the KCET
                    (Karnataka Common Entrance Test) exam. The exam will be
                    administered in Apr 2023. Candidates will be able to sign up
                    for the exam starting in <strong>Jan 2023</strong>. There is
                    an entrance exam for agriculture for the numerous
                    universities and institutions in the state of Karnataka.
                  </p>
                  <h2>Kerala KEAM 2023-2024</h2>
                  <p>
                    The state-level entrance test called as Kerala Engineering,
                    Agriculture and Medical (KEAM 2023) is administered in
                    Kerala by the Commissioner of Entrance Examination (CEE).
                  </p>
                  <p>
                    Students applying for admission to programmes in
                    engineering, agriculture, and other professions will take
                    the KEAM 2023 test. In
                    <strong>Feb 2023</strong>, the application form will be made
                    available.
                  </p>
                  <h2>Madhya Pradesh MP PAT 2023-2024</h2>
                  <p>
                    The MP PAT, also known as the Madhya Pradesh Pre-Agriculture
                    Test, is administered by the Madhya Pradesh Professional
                    Examination Board. Candidates for the B.Sc. in agriculture
                    and the B.Tech. in agricultural programmes must take MP PAT
                    2023 exam. MP PAT application form will be made available
                    starting in <strong>May 2023.</strong>
                  </p>
                  <h2>Orissa OUAT 2023-2024</h2>
                  <p>
                    OUAT exam is administered by the Orissa University of
                    Agriculture and Technology (OUAT). To choose candidates for
                    undergraduate, graduate, and doctoral programmes, states use
                    the OUAT 2023 exam. These courses will be offered in the
                    subjects of agriculture, horticulture, veterinary science,
                    animal husbandry, agricultural engineering and technology,
                    fishery science, home science, and forestry.
                  </p>
                  <h2>Telangana TS EAMCET 2023-2024</h2>
                  <p>
                    The Telangana State Engineering, Agriculture, and Medical
                    Entrance Test, often known as TS EAMCET, is administered by
                    the Jawaharlal Nehru Technological University in Hyderabad.
                  </p>
                  <p>
                    A number of Telangana colleges base their admission
                    decisions on applicants TS EAMCET scores for programmes in
                    engineering, agriculture, and other disciplines. The TS
                    EAMCET application form will be available starting in Mar
                    2023.
                  </p>
                  <h2>Andhra Pradesh AP EAMCET (EAPCET) 2023-2024</h2>
                  <p>
                    The Jawaharlal Nehru Technological University in Kakinada
                    oversees the administration of the state exam known as the
                    AP EAPCET. used to be called the AP EAMCET. Exam for AP
                    EAPCET will be held in Apr 2023. (for Engineering). By
                    passing the AP EAMCET exam, students can apply for admission
                    to the many colleges in the state of Andhra Pradesh that
                    offer programmes in agriculture, engineering, pharmacy, and
                    other academic fields.
                  </p>
                  <h2>University Level Exams</h2>
                  <p>
                    Agriculture university level exams are mentioned below for
                    various agriculture, engineering and other courses.
                  </p>
                  <h2>LPU NEST 2023-2024</h2>
                  <p>
                    LPU NEST (Lovely Professional University National
                    Eligibility and Scholarship Test) is a university level
                    examination regulated by LPU University. Through this
                    examination, students will be admitted into various
                    agriculture, engineering and other courses offered by LPU.
                    Candidates can fill out LPU NEST application form from Dec
                    2022.
                  </p>
                  <h2>BVP CET 2023-2024</h2>
                  <p>
                    The Bharti Vidyapeeth Deemed University offers a variety of
                    undergraduate and graduate programmes in subjects like
                    nursing, agriculture, law, and many others.
                  </p>
                  <p>
                    To admit students to various programmes, this university
                    holds various agriculture entrance exams. Offline mode will
                    be used to administer the test (pen and paper based mode).
                  </p>
                  <h2>SAAT 2023-2024</h2>
                  <p>
                    The Siksha O Anusandhan University administers the
                    university-level SAAT (Siksha O Anusandhan University
                    Admission Test). This test is designed to choose candidates
                    for enrollment in agriculture and other courses provided by
                    SAAT and its sister campuses. Apr 2023 will be the month
                    that the exam is held.
                  </p>
                  <h2>AMU 2023-2024</h2>
                  <p>
                    The Aligarh Muslim University (AMU) conducts entrance exams
                    to offer admission to UG and PG programmes in various
                    subjects, including engineering, law, and agriculture.
                    Candidates will be admitted to different courses based on
                    their performance on the entrance exam. In Mar 2023, AMU
                    application form will be made available.
                  </p>
                  <h2>Allahabad University 2023-2024</h2>
                  <p>
                    Uttar Pradesh is the home of Allahabad University (also
                    known as the University of Allahabad). This university
                    administers UGAT, PGAT, and other tests to candidates for
                    admission. It provides admissions for diploma,
                    undergraduate, graduate, and other programmes in law,
                    agriculture, and many others. In <strong>Apr 2023,</strong>{" "}
                    UGAT 2023 and PGAT 2023 application forms will be made
                    available.
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

export default Agriculture;
