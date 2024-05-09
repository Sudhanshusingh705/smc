import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import "./Exams.css"; // Assuming Exams.css is in the same directory

const Exams = () => {
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
    { id: 8, name: "CLAT", courses: "BA LLB (Hons), B.Com LLB (Hons), B.Sc LLB (Hons)" },
    { id: 9, name: "MAT", courses: "MBA, PGDM" },
    { id: 10, name: "SNAP", courses: "MBA" },
  ];

  return (
    <div className="section">
      <h2 className="section-title">Top Exams in India 2023</h2>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="9" className="mx-auto">
            <div className="pageDescription text-center">
              <h1>Top Exams</h1>

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
                      The top entrance exams in India are JEE Main, CAT, NEET,
                      JEE Advanced, etc. The objective of these entrance exams
                      is to test the students' ability to handle academic
                      challenges and provide merit-based admission to colleges
                      in India.
                    </span>
                  </p>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Indian exams enjoy a special place in the world, as some
                      of them are believed to be very tough nuts to crack.&nbsp;
                    </span>
                  </p>
                  <h2>Top 10 Entrance Exams in India</h2>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Here are the top 10 exams in India based on popularity.
                    </span>
                  </p>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>S.No.</th>
                          <th>Exam Name</th>
                          <th>Courses</th>
                        </tr>
                      </thead>
                      <tbody>
                        {exams.map((exam) => (
                          <tr key={exam.id}>
                            <td>{exam.id}</td>
                            <td>{exam.name}</td>
                            <td>{exam.courses}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      The above-mentioned competitive exams are considered
                      tough, and one needs to prepare rather well to crack them.
                      Going through the previous years' question papers and mock
                      tests will help students to pass these exams with flying
                      colours.
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
            <MDBCard style={cardStyles}>
              <MDBCardBody>
                <MDBCardTitle>ENGINEERING</MDBCardTitle>
                {/*<MDBCardText>
                Participating Colleges
                </MDBCardText>*/}
              </MDBCardBody>
              <div className="jsx-600450678">
              <hr className="jsx-600450678 mt-2 mb-2" />
              <a
                data-ga-title="Application Process"
                data-ga-href="exams/neet/application-process"
                className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                href="/exams/neet/application-process"
                style={{ textDecoration: "none" }}
              >
                Application Process
                <svg
                  fill="#666"
                  xmlns="http://www.w3.org/2000/svg"
                  width="451.846"
                  height="451.847"
                  viewBox="0 0 451.846 451.847"
                  xmlSpace="preserve"
                  style={{ width: 10, height: 10 }}
                >
                  <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                </svg>
              </a>
            </div>
            <div className="jsx-600450678">
              <hr className="jsx-600450678 mt-2 mb-2" />
              <a
                data-ga-title="Exam Info"
                data-ga-href="exams/neet"
                className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                href="/exams/neet"
                style={{ textDecoration: "none" }}
              >
                Exam Info
                <svg
                  fill="#666"
                  xmlns="http://www.w3.org/2000/svg"
                  width="451.846"
                  height="451.847"
                  viewBox="0 0 451.846 451.847"
                  xmlSpace="preserve"
                  style={{ width: 10, height: 10 }}
                >
                  <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                </svg>
              </a>
            </div>
            </MDBCard>
          </MDBCol>
          <MDBCol>
          <MDBCard style={cardStyles}>
          <MDBCardBody>
            <MDBCardTitle>JEE Main</MDBCardTitle>
            <MDBCardText>
            Participating Colleges
            </MDBCardText>
          </MDBCardBody>
          <div className="jsx-600450678">
          <hr className="jsx-600450678 mt-2 mb-2" />
          <a
            data-ga-title="Application Process"
            data-ga-href="exams/neet/application-process"
            className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
            href="/exams/neet/application-process"
            style={{ textDecoration: "none" }}
          >
            Application Process
            <svg
              fill="#666"
              xmlns="http://www.w3.org/2000/svg"
              width="451.846"
              height="451.847"
              viewBox="0 0 451.846 451.847"
              xmlSpace="preserve"
              style={{ width: 10, height: 10 }}
            >
              <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
            </svg>
          </a>
        </div>
        <div className="jsx-600450678">
          <hr className="jsx-600450678 mt-2 mb-2" />
          <a
            data-ga-title="Exam Info"
            data-ga-href="exams/neet"
            className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
            href="/exams/neet"
            style={{ textDecoration: "none" }}
          >
            Exam Info
            <svg
              fill="#666"
              xmlns="http://www.w3.org/2000/svg"
              width="451.846"
              height="451.847"
              viewBox="0 0 451.846 451.847"
              xmlSpace="preserve"
              style={{ width: 10, height: 10 }}
            >
              <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
            </svg>
          </a>
        </div>
        </MDBCard>
          </MDBCol>
          <MDBCol>
          <MDBCard style={cardStyles}>
          <MDBCardBody>
            <MDBCardTitle>CAT</MDBCardTitle>
            <MDBCardText>
            Participating Colleges
            </MDBCardText>
          </MDBCardBody>
          <div className="jsx-600450678">
          <hr className="jsx-600450678 mt-2 mb-2" />
          <a
            data-ga-title="Application Process"
            data-ga-href="exams/neet/application-process"
            className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
            href="/exams/neet/application-process"
            style={{ textDecoration: "none" }}
          >
            Application Process
            <svg
              fill="#666"
              xmlns="http://www.w3.org/2000/svg"
              width="451.846"
              height="451.847"
              viewBox="0 0 451.846 451.847"
              xmlSpace="preserve"
              style={{ width: 10, height: 10 }}
            >
              <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
            </svg>
          </a>
        </div>
        <div className="jsx-600450678">
          <hr className="jsx-600450678 mt-2 mb-2" />
          <a
            data-ga-title="Exam Info"
            data-ga-href="exams/neet"
            className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
            href="/exams/neet"
            style={{ textDecoration: "none" }}
          >
            Exam Info
            <svg
              fill="#666"
              xmlns="http://www.w3.org/2000/svg"
              width="451.846"
              height="451.847"
              viewBox="0 0 451.846 451.847"
              xmlSpace="preserve"
              style={{ width: 10, height: 10 }}
            >
              <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
            </svg>
          </a>
        </div>
        </MDBCard>
          </MDBCol>
        </MDBRow>
        <br />
        <MDBRow className="gx-3">
          <MDBCol>
            <MDBCard style={cardStyles}>
              <MDBCardBody>
                <MDBCardTitle>JEE-Ad</MDBCardTitle>
                <MDBCardText>Participating Colleges</MDBCardText>
              </MDBCardBody>
              <div className="jsx-600450678">
              <hr className="jsx-600450678 mt-2 mb-2" />
              <a
                data-ga-title="Application Process"
                data-ga-href="exams/jee-advanced/application-process"
                className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                href="/exams/jee-advanced/application-process"
                style={{ textDecoration: "none" }}
              >
                Application Process
                <svg
                  fill="#666"
                  xmlns="http://www.w3.org/2000/svg"
                  width="451.846"
                  height="451.847"
                  viewBox="0 0 451.846 451.847"
                  xmlSpace="preserve"
                  style={{ width: 10, height: 10 }}
                >
                  <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                </svg>
              </a>
            </div>
            <div className="jsx-600450678">
              <hr className="jsx-600450678 mt-2 mb-2" />
              <a
                data-ga-title="Exam Info"
                data-ga-href="exams/jee-advanced"
                className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                href="/exams/jee-advanced"
                style={{ textDecoration: "none" }}
              >
                Exam Info
                <svg
                  fill="#666"
                  xmlns="http://www.w3.org/2000/svg"
                  width="451.846"
                  height="451.847"
                  viewBox="0 0 451.846 451.847"
                  xmlSpace="preserve"
                  style={{ width: 10, height: 10 }}
                >
                  <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                </svg>
              </a>
            </div>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard style={cardStyles}>
              <MDBCardBody>
                <MDBCardTitle>GATE</MDBCardTitle>
                <MDBCardText>Participating Colleges</MDBCardText>
              </MDBCardBody>
              <div className="jsx-600450678">
              <hr className="jsx-600450678 mt-2 mb-2" />
              <a
                data-ga-title="Application Process"
                data-ga-href="exams/gate/application-process"
                className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                href="/exams/gate/application-process"
                style={{ textDecoration: "none" }}
              >
                Application Process
                <svg
                  fill="#666"
                  xmlns="http://www.w3.org/2000/svg"
                  width="451.846"
                  height="451.847"
                  viewBox="0 0 451.846 451.847"
                  xmlSpace="preserve"
                  style={{ width: 10, height: 10 }}
                >
                  <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                </svg>
              </a>
            </div>
            <div className="jsx-600450678">
              <hr className="jsx-600450678 mt-2 mb-2" />
              <a
                data-ga-title="Exam Info"
                data-ga-href="exams/gate"
                className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                href="/exams/gate"
                style={{ textDecoration: "none" }}
              >
                Exam Info
                <svg
                  fill="#666"
                  xmlns="http://www.w3.org/2000/svg"
                  width="451.846"
                  height="451.847"
                  viewBox="0 0 451.846 451.847"
                  xmlSpace="preserve"
                  style={{ width: 10, height: 10 }}
                >
                  <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                </svg>
              </a>
            </div>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard style={cardStyles}>
              <MDBCardBody>
                <MDBCardTitle>NMAT</MDBCardTitle>
                <MDBCardText>Participating Colleges</MDBCardText>
              </MDBCardBody>
              <div className="jsx-600450678">
              <hr className="jsx-600450678 mt-2 mb-2" />
              <a
                data-ga-title="Application Process"
                data-ga-href="exams/nmat/application-process"
                className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                href="/exams/nmat/application-process"
                style={{ textDecoration: "none" }}
              >
                Application Process
                <svg
                  fill="#666"
                  xmlns="http://www.w3.org/2000/svg"
                  width="451.846"
                  height="451.847"
                  viewBox="0 0 451.846 451.847"
                  xmlSpace="preserve"
                  style={{ width: 10, height: 10 }}
                >
                  <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                </svg>
              </a>
            </div>
            <div className="jsx-600450678">
              <hr className="jsx-600450678 mt-2 mb-2" />
              <a
                data-ga-title="Exam Info"
                data-ga-href="exams/nmat"
                className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                href="/exams/nmat"
                style={{ textDecoration: "none" }}
              >
                Exam Info
                <svg
                  fill="#666"
                  xmlns="http://www.w3.org/2000/svg"
                  width="451.846"
                  height="451.847"
                  viewBox="0 0 451.846 451.847"
                  xmlSpace="preserve"
                  style={{ width: 10, height: 10 }}
                >
                  <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                </svg>
              </a>
            </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        </MDBContainer>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Exams;