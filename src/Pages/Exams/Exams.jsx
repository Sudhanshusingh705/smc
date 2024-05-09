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
          <MDBCol>
          <MDBCard>
          <MDBCardImage position='top' alt='...' src='https://mdbootstrap.com/img/new/standard/city/062.webp' />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
          </MDBCardBody>
          <MDBListGroup flush>
            <a href="#" style={{ color: 'black' }}>
              <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
            </a>
            <a href="#" style={{ color: 'black' }}>
              <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
            </a>
            <a href="#" style={{ color: 'black' }}>
              <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
            </a>
          </MDBListGroup>
        </MDBCard>
          </MDBCol>
          <MDBCol>
          <MDBCard>
          <MDBCardImage position='top' alt='...' src='https://mdbootstrap.com/img/new/standard/city/062.webp' />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
          </MDBCardBody>
          <MDBListGroup flush>
            <a href="#" style={{ color: 'black' }}>
              <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
            </a>
            <a href="#" style={{ color: 'black' }}>
              <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
            </a>
            <a href="#" style={{ color: 'black' }}>
              <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
            </a>
          </MDBListGroup>
        </MDBCard>
          
          </MDBCol>
          <MDBCol>
          <MDBCard>
          <MDBCardImage position='top' alt='...' src='https://mdbootstrap.com/img/new/standard/city/062.webp' />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
          </MDBCardBody>
          <MDBListGroup flush>
            <a href="#" style={{ color: 'black' }}>
              <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
            </a>
            <a href="#" style={{ color: 'black' }}>
              <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
            </a>
            <a href="#" style={{ color: 'black' }}>
              <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
            </a>
          </MDBListGroup>
        </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Exams;