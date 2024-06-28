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
} from "mdb-react-ui-kit";
// import "./Exams.css"; // Assuming Exams.css is in the same directory

const Engineering = () => {
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
        Top Engineering Colleges in India 2023-2024
      </h2>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="9" className="mx-auto">
            <div className="pageDescription text-center">
              <h1>Engineering Colleges</h1>

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
                      Top Engineering Colleges in India include colleges like IIT
                      Madras, IIT Delhi, IIT Bombay, and BITS Pilani.
                    </span>
                  </div>
                  <div className="mb-2">
                    <span>
                      Engineering is a discipline that involves various scientific
                      principles to design, innovate, and develop machines, software,
                      hardware, technical systems, and processes. Engineering offers a
                      degree in multiple specialisations such as computer science and
                      engineering, mechanical engineering, civil engineering, chemical
                      engineering, etc.
                    </span>
                  </div>
                </p>
                <p>
                  <div className="mb-2">
                    <span>
                      Courses offered in top engineering colleges in India are&nbsp;
                      <a href="#">BE</a>,&nbsp;<a href="#">BTech</a>,&nbsp;
                      <a href="#">MTech</a>,&nbsp;<a href="#">ME</a>, Diploma in
                      Engineering, PhD.
                    </span>
                  </div>
                  <div className="mb-2">
                    <span>
                      Entrance exams accepted by the best colleges for engineering are
                      JEE MAINS, JEE Advanced, BITSAT, KCET etc. There are various job
                      opportunities after an Engineering degree like software
                      engineer, mechanical engineer, electrical engineer, web
                      developer, biomedical engineer etc.
                    </span>
                  </div>
                </p>
                <h2>
            <strong>Top Engineering Colleges in India: Highlights</strong>
                </h2>
                  <p>
            <span>
              Candidates must have passed 10+2 with a minimum of 50% marks in
              the PCB/PCMB stream to get admission to top Engineering colleges
              in India. Tabulated below are the key highlights regarding the
              engineering colleges in India
            </span>
                  </p>
                  <div className="table-responsive">
            <table className="table table-bordered">
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
                      <strong>Specialisations</strong>
                    </p>
                  </td>
                  <td>
                    <p>
                      <span>
                        Computer Science Engineering, Mechanical Engineering,
                        Civil Engineering, Aeronautical Engineering
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
                        The annual fee of engineering colleges in India ranges
                        between 125000 to 350000.
                      </span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
                  </div>
                  <div>
            <h2>
              <span>
                <strong>Ranking</strong>&nbsp;
                <strong>of Engineering Colleges in India</strong>
              </span>
            </h2>
            <p>
              <span>
                NIRF and many other ranking sources have ranked various
                government and private colleges in India. Given below are the
                ranking of top engineering colleges in India by various sources
                to make it easier for engineering aspirants to choose the best
                engineering colleges.
              </span>
            </p>
            <h3>
              <strong>NIRF Ranking of Engineering Colleges</strong>
            </h3>
            <p>
              Engineering college ranking by NIRF is done on the basis of
              various parameters like teaching, learning, resources etc.
              Tabulated below are the best engineering colleges in India ranked
              by NIRF.
            </p>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <strong>Ranking</strong>
                    </th>
                    <th>
                      <strong>College Name</strong>
                    </th>
                    <th>
                      <strong>NIRF Score</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <a className="in-cell-link" href="#">
                        IIT Madras
                      </a>
                    </td>
                    <td>90.14</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <a className="in-cell-link" href="#">
                        IIT Delhi
                      </a>
                    </td>
                    <td>88.12</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <a className="in-cell-link" href="#">
                        IIT Bombay
                      </a>
                    </td>
                    <td>83.96</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      <a className="in-cell-link" href="#">
                        IIT Kanpur
                      </a>
                    </td>
                    <td>82.56</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>
                      <a className="in-cell-link" href="#">
                        IIT Kharagpur
                      </a>
                    </td>
                    <td>78.89</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>
                      <a className="in-cell-link" href="#">
                        IIT Roorkee
                      </a>
                    </td>
                    <td>76.70</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>
                      <a className="in-cell-link" href="#">
                        IIT Guwahati
                      </a>
                    </td>
                    <td>72.98</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>
                      <a className="in-cell-link" href="#">
                        NIT Trichy
                      </a>
                    </td>
                    <td>69.17</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>
                      <a className="in-cell-link" href="#">
                        IIT Hyderabad
                      </a>
                    </td>
                    <td>68.03</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>
                      <a className="in-cell-link" href="#">
                        NIT Surathkal
                      </a>
                    </td>
                    <td>66.04</td>
                  </tr>
                </tbody>
              </table>
            </div>
                  </div>
                  <div>
                  <h3>
                    <strong>
                      Top Engineering Colleges in India by India Today Ranking
                    </strong>
                  </h3>
                  <p>
                    Tabulated below are the ranking of Engineering colleges in India
                    by India Today
                  </p>
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>
                            <strong>Ranking</strong>
                          </th>
                          <th>
                            <strong>College Name</strong>
                          </th>
                          <th>
                            <strong>B.E./B.Tech Total Tuition Fees (INR)</strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <a className="in-cell-link" href="#">
                              IIT Delhi
                            </a>
                          </td>
                          <td>8,80,000</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <a className="in-cell-link" href="#">
                              IIT Bombay
                            </a>
                          </td>
                          <td>9,12,000</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            <a className="in-cell-link" href="#">
                              IIT Kanpur
                            </a>
                          </td>
                          <td>9,71,600</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>
                            <a className="in-cell-link" href="#">
                              IIT Kharagpur
                            </a>
                          </td>
                          <td>3,60,368</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>
                            <a className="in-cell-link" href="#">
                              IIT Roorkee
                            </a>
                          </td>
                          <td>8,54,000</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>
                            <a className="in-cell-link" href="#">
                              IIT Guwahati
                            </a>
                          </td>
                          <td>8,71,000</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>
                            <a className="in-cell-link" href="#">
                              IIT Bhubaneswar
                            </a>
                          </td>
                          <td>8,83,036</td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>
                            <a className="in-cell-link" href="#">
                              DTU Delhi
                            </a>
                          </td>
                          <td>8,76,000</td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>
                            <a className="in-cell-link" href="#">
                              NIT Trichy
                            </a>
                          </td>
                          <td>6,47,000</td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>
                            <a className="in-cell-link" href="#">
                              IIT Patna
                            </a>
                          </td>
                          <td>6,98,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                 </div>
                 <div>
                  <h3>
                    <strong>Top 10 Engineering Colleges in India</strong>
                  </h3>
                  <p>
                    Tabulated below are the 10 tier 1 Engineering colleges in India
                  </p>
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>
                            <strong>S. No.</strong>
                          </th>
                          <th>
                            <strong>College Name</strong>
                          </th>
                          <th>
                            <strong>B.E./B.Tech Total Tuition Fees (INR)</strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <a className="in-cell-link" href="#">
                              IIT Madras
                            </a>
                          </td>
                          <td>3,00,464</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <a className="in-cell-link" href="#">
                              IIT Delhi
                            </a>
                          </td>
                          <td>8,81,200</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            <a className="in-cell-link" href="#">
                              IIT Bombay
                            </a>
                          </td>
                          <td>9,12,000</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>
                            <a className="in-cell-link" href="#">
                              IIT Kharagpur
                            </a>
                          </td>
                          <td>3,60,368</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>
                            <a className="in-cell-link" href="#">
                              IIT Kanpur
                            </a>
                          </td>
                          <td>9,71,600</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>
                            <a className="in-cell-link" href="#">
                              IIT Roorkee
                            </a>
                          </td>
                          <td>8,54,000</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>
                            <a className="in-cell-link" href="#">
                              BITS Pilani
                            </a>
                          </td>
                          <td>20,51,100</td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>
                            <a className="in-cell-link" href="#">
                              IIT Guwahati
                            </a>
                          </td>
                          <td>8,71,000</td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>
                            <a className="in-cell-link" href="#">
                              IIT Hyderabad
                            </a>
                          </td>
                          <td>9,46,000</td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>
                            <a className="in-cell-link" href="#">
                              CEG Guindy
                            </a>
                          </td>
                          <td>2,00,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                 </div>
                 <div>
                 <h2>
                   <span>
                     <strong>Engineering College Fees in India</strong>&nbsp;
                   </span>
                 </h2>
                 <p>
                   <span>
                     Best engineering colleges in India offer B.Tech, M.Tech and other courses with a varying fee structure from low to high depending on the type of college and the facilities provided. Given below are engineering college fees in India in various types of colleges.
                   </span>
                 </p>
     
                 <h3>
                   <strong>Top Government Engineering Colleges in India with Fees</strong>
                 </h3>
                 <p>
                   Tabulated below are the top government engineering colleges in India
                 </p>
                 <div className="table-responsive">
                   <table className="table table-bordered">
                     <thead>
                       <tr>
                         <th>
                           <strong>Name</strong>
                         </th>
                         <th>
                           <strong>B.E./B.Tech Total Tuition Fees (INR)</strong>
                         </th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                         <td>
                           <a className="in-cell-link" href="#">
                             IIT Madras
                           </a>
                         </td>
                         <td>3,00,464</td>
                       </tr>
                       <tr>
                         <td>
                           <a className="in-cell-link" href="#">
                             IIT Delhi
                           </a>
                         </td>
                         <td>8,81,200</td>
                       </tr>
                       <tr>
                         <td>
                           <a className="in-cell-link" href="#">
                             IIT Bombay
                           </a>
                         </td>
                         <td>9,12,000</td>
                       </tr>
                       <tr>
                         <td>
                           <a className="in-cell-link" href="#">
                             CEG Guindy
                           </a>
                         </td>
                         <td>3,60,368</td>
                       </tr>
                       <tr>
                         <td>
                           <a className="in-cell-link" href="#">
                             IIT Kanpur
                           </a>
                         </td>
                         <td>9,71,600</td>
                       </tr>
                       <tr>
                         <td>
                           <a className="in-cell-link" href="#">
                             IIT Roorkee
                           </a>
                         </td>
                         <td>8,54,000</td>
                       </tr>
                       <tr>
                         <td>
                           <a className="in-cell-link" href="#">
                             IIT Guwahati
                           </a>
                         </td>
                         <td>8,71,000</td>
                       </tr>
                       <tr>
                         <td>
                           <a className="in-cell-link" href="#">
                             IIT Hyderabad
                           </a>
                         </td>
                         <td>9,46,000</td>
                       </tr>
                       <tr>
                         <td>
                           <a className="in-cell-link" href="#">
                             NIT Trichy
                           </a>
                         </td>
                         <td>6,47,000</td>
                       </tr>
                     </tbody>
                   </table>
                 </div>
               </div>
               <div>
                 <h3>
                   <strong>Top Private Engineering Colleges in India with Fees</strong>
                 </h3>
                 <p>
                   Tabulated below are the best private engineering colleges in India
                 </p>
                 <div className="table-responsive">
                   <table className="table table-bordered">
                     <thead>
                       <tr>
                         <th>
                           <strong>College Name</strong>
                         </th>
                         <th>
                           <strong>B.E./B.Tech Total Tuition Fees (INR)</strong>
                         </th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                         <td>
                           <a className="in-cell-link" href="#">
                             BITS Pilani
                           </a>
                         </td>
                         <td>20,51,100</td>
                       </tr>
                       <tr>
                         <td>
                           <a className="in-cell-link" href="#">
                             ICT Mumbai
                           </a>
                         </td>
                         <td>3,56,400</td>
                       </tr>
                       <tr>
                         <td>
                           <a className="in-cell-link" href="#">
                             VIT Vellore
                           </a>
                         </td>
                         <td>7,92,000</td>
                       </tr>
                       <tr>
                         <td>
                           <a className="in-cell-link" href="#">
                             Thapar University
                           </a>
                         </td>
                         <td>14,68,800</td>
                       </tr>
                       <tr>
                         <td>
                           <a className="in-cell-link" href="#">
                             IIST Trivandrum
                           </a>
                         </td>
                         <td>5,79,600</td>
                       </tr>
                       <tr>
                         <td>
                           <a className="in-cell-link" href="#">
                             Institute of Technical Education and Research
                           </a>
                         </td>
                         <td>9,40,000</td>
                       </tr>
                       <tr>
                         <td>
                           <a className="in-cell-link" href="#">
                             BIT Mesra
                           </a>
                         </td>
                         <td>11,40,000</td>
                       </tr>
                       <tr>
                         <td>
                           <a className="in-cell-link" href="#">
                             DTU Delhi
                           </a>
                         </td>
                         <td>8,76,000</td>
                       </tr>
                       <tr>
                         <td>
                           <a className="in-cell-link" href="#">
                             Amity University Noida
                           </a>
                         </td>
                         <td>12,44,000</td>
                       </tr>
                     </tbody>
                   </table>
                 </div>
               </div>
               <div>
                 <h3>
                   <strong>Cheapest Engineering Colleges in India</strong>
                 </h3>
                 <p>
                   Tabulated below are the low fees engineering colleges in India
                 </p>
                 <div className="table-responsive">
                   <table className="table table-bordered">
                     <thead>
                       <tr>
                         <th>
                           <strong>College Name</strong>
                         </th>
                         <th>
                           <strong>Diploma in Engineering Total Tuition Fees (INR)</strong>
                         </th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                         <td>
                           <a className="in-cell-link" href="#">
                             APCC
                           </a>
                         </td>
                         <td>2,505</td>
                       </tr>
                       <tr>
                         <td>Asansol Polytechnic, Asansol</td>
                         <td>1,020</td>
                       </tr>
                       <tr>
                         <td>Govt. Womens Polytechnic, Seraikela</td>
                         <td>1,215</td>
                       </tr>
                       <tr>
                         <td>Medinipur Sadar Government Polytechnic, Medinipur</td>
                         <td>1,800</td>
                       </tr>
                       <tr>
                         <td>Central Footwear Training Centre, Parganas</td>
                         <td>1,800</td>
                       </tr>
                       <tr>
                         <td>Haji Md. Serafat Mondal Government Polytechnic, Birbhum</td>
                         <td>1,800</td>
                       </tr>
                       <tr>
                         <td>Ratua S. N. Bose Government Polytechnic, Ratua</td>
                         <td>2,055</td>
                       </tr>
                       <tr>
                         <td>Government Womens Polytechnic, Patna</td>
                         <td>3,195</td>
                       </tr>
                       <tr>
                         <td>Nalhati Government Polytechnic, Birbhum</td>
                         <td>2,550</td>
                       </tr>
                       <tr>
                         <td>Raipur Government Polytechnic, Raipur</td>
                         <td>2,655</td>
                       </tr>
                     </tbody>
                   </table>
                 </div>
               </div>
               <div>
               <h2>
                 <strong>Top Engineering Colleges in India Admission</strong>
               </h2>
               <p>
                 Engineering colleges offer admission to various courses at
                 undergraduate, postgraduate, and PhD levels.
               </p>
               <h3>
                 <strong>Eligibility Criteria</strong>
               </h3>
               <p>
                 Candidates must fulfil the eligibility criteria to get
                 admission to top engineering colleges in India.
               </p>
               <p>
                 <strong>B.Tech/B.E.</strong>
               </p>
               <ul>
                 <li>
                   <span>
                     Candidates must have passed 10+2 with a minimum of 50%
                     marks in the PCB/PCMB stream
                   </span>
                 </li>
               </ul>
               <p>
                 <strong>M.Tech/M.E.</strong>
               </p>
               <ul>
                 <li>
                   Candidates must have completed a B.Tech/B.E. degree with
                   a valid GATE score.
                 </li>
               </ul>
               <p>
                 <strong>PhD</strong>
               </p>
               <ul>
                 <li>
                   Candidates must have completed a B.Tech/M. Tech degree
                   with a minimum of 55% marks and a valid GATE/NET score.
                 </li>
               </ul>
               <div className="table-responsive">
                 <table className="table table-bordered">
                   <thead>
                     <tr>
                       <th>
                         <strong>S. No.</strong>
                       </th>
                       <th>
                         <strong>College Name</strong>
                       </th>
                       <th>
                         <strong>Admission Link</strong>
                       </th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr>
                       <td>1</td>
                       <td>IIT Madras</td>
                       <td>
                         <a className="in-cell-link" href="#">
                           IIT Madras Admission Link
                         </a>
                       </td>
                     </tr>
                     <tr>
                       <td>2</td>
                       <td>IIT Delhi</td>
                       <td>
                         <a className="in-cell-link" href="#">
                           IIT Delhi Admission Link
                         </a>
                       </td>
                     </tr>
                     <tr>
                       <td>3</td>
                       <td>IIT Bombay</td>
                       <td>
                         <a className="in-cell-link" href="#">
                           IIT Bombay Admission Link
                         </a>
                       </td>
                     </tr>
                     <tr>
                       <td>4</td>
                       <td>IIT Kharagpur</td>
                       <td>
                         <a className="in-cell-link" href="#">
                           IIT Kharagpur Admission Link
                         </a>
                       </td>
                     </tr>
                     <tr>
                       <td>5</td>
                       <td>IIT Kanpur</td>
                       <td>
                         <a className="in-cell-link" href="#">
                           IIT Kanpur Admission Link
                         </a>
                       </td>
                     </tr>
                     <tr>
                       <td>6</td>
                       <td>IIT Roorkee</td>
                       <td>
                         <a className="in-cell-link" href="#">
                           IIT Roorkee Admission Link
                         </a>
                       </td>
                     </tr>
                     <tr>
                       <td>7</td>
                       <td>BITS Pilani</td>
                       <td>
                         <a className="in-cell-link" href="#">
                           BITS Pilani Admission Link
                         </a>
                       </td>
                     </tr>
                     <tr>
                       <td>8</td>
                       <td>IIT Guwahati</td>
                       <td>
                         <a className="in-cell-link" href="#">
                           IIT Guwahati Admission Link
                         </a>
                       </td>
                     </tr>
                     <tr>
                       <td>9</td>
                       <td>IIT Hyderabad</td>
                       <td>
                         <a className="in-cell-link" href="#">
                           IIT Hyderabad Admission Link
                         </a>
                       </td>
                     </tr>
                     <tr>
                       <td>10</td>
                       <td>
                         College of Engineering, Anna University (Chennai)
                       </td>
                       <td>
                         <a className="in-cell-link" href="#">
                           College of Engineering, Anna University
                           (Chennai) Admission Link
                         </a>
                       </td>
                     </tr>
                   </tbody>
                 </table>
               </div>
             </div>
             <div>
               <h2>
                 <strong>
                   Top Engineering Colleges in India for Lateral Entry
                 </strong>
               </h2>
               <p>
                 Some engineering colleges offer lateral entry. Tabulated
                 below are the best engineering colleges offering lateral
                 entry
               </p>
               <div className="table-responsive">
                 <table className="table table-bordered">
                   <thead>
                     <tr>
                       <th>
                         <strong>S. No.</strong>
                       </th>
                       <th>
                         <strong>College Name</strong>
                       </th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr>
                       <td>1</td>
                       <td>
                         <a className="in-cell-link" href="#">
                           Jadavpur University
                         </a>
                       </td>
                     </tr>
                     <tr>
                       <td>2</td>
                       <td>
                         <a className="in-cell-link" href="#">
                           Manipal Institute of Technology
                         </a>
                       </td>
                     </tr>
                     <tr>
                       <td>3</td>
                       <td>
                         <a className="in-cell-link" href="#">
                           PES University
                         </a>
                       </td>
                     </tr>
                     <tr>
                       <td>4</td>
                       <td>
                         <a className="in-cell-link" href="#">
                           Thapar University
                         </a>
                       </td>
                     </tr>
                     <tr>
                       <td>5</td>
                       <td>
                         <a className="in-cell-link" href="#">
                           PSGCT
                         </a>
                       </td>
                     </tr>
                     <tr>
                       <td>6</td>
                       <td>
                         <a className="in-cell-link" href="#">
                           DTU Delhi
                         </a>
                       </td>
                     </tr>
                     <tr>
                       <td>7</td>
                       <td>
                         <a className="in-cell-link" href="#">
                           COEP
                         </a>
                       </td>
                     </tr>
                     <tr>
                       <td>8</td>
                       <td>
                         <a className="in-cell-link" href="#">
                           KIIT University
                         </a>
                       </td>
                     </tr>
                     <tr>
                       <td>9</td>
                       <td>
                         <a className="in-cell-link" href="#">
                           Pondicherry Engineering College
                         </a>
                       </td>
                     </tr>
                     <tr>
                       <td>10</td>
                       <td>
                         <a className="in-cell-link" href="#">
                           RVCE
                         </a>
                       </td>
                     </tr>
                   </tbody>
                 </table>
               </div>
             </div>
             <div>
               <h2>
                 <strong>
                   Specialisations Available in Top Engineering Colleges in
                   India&nbsp;
                 </strong>
               </h2>
               <p>
                 Engineering courses are offered in various
                 specialisations. Few of the specialisations offer job
                 opportunities in various fields with high salary packages.
                 Below mentioned are the most popular engineering
                 specialisations in best engineering colleges in India
               </p>
               <ul>
                 <li>Chemical Engineering</li>
                 <li>Mechanical Engineering</li>
                 <li>Computer Science Engineering</li>
                 <li>Aeronautical Engineering</li>
                 <li>Civil Engineering</li>
               </ul>
             </div>
             <div>
             <h3>
               <strong>
                 Top Engineering Colleges in India for Computer Science
                 Engineering
               </strong>
             </h3>
             <p>
               Computer science and engineering are one of the most preferred
               courses among engineering students due to the booming technology
               and growth of tech startups. Listed below are some of the top
               engineering colleges for computer science
             </p>
             <ul>
               <li>
                 <a className="in-cell-link" href="#">
                   IIT Madras
                 </a>
               </li>
               <li>
                 <a className="in-cell-link" href="#">
                   IIT Delhi
                 </a>
               </li>
               <li>
                 <a className="in-cell-link" href="#">
                   IIT Bombay
                 </a>
               </li>
               <li>
                 <a className="in-cell-link" href="#">
                   BITS Pilani
                 </a>
               </li>
               <li>
                 <a className="in-cell-link" href="#">
                   IIT Kanpur
                 </a>
               </li>
             </ul>
             <p>
               <strong>Read More:</strong>{" "}
               <a href="#">
                 Top Engineering Colleges in India for Computer Science
                 Engineering
               </a>
             </p>
           </div>
           <div>
           <h3>
             <strong>
               Top Engineering Colleges in India for Mechanical Engineering
             </strong>
           </h3>
           <p>
             Listed below are the best engineering colleges for Mechanical
             Engineering
           </p>
           <ul>
             <li>
               <a className="in-cell-link" href="#">
                 IIT Madras
               </a>
             </li>
             <li>
               <a className="in-cell-link" href="#">
                 IIT Delhi
               </a>
             </li>
             <li>
               <a className="in-cell-link" href="#">
                 IIT Bombay
               </a>
             </li>
             <li>
               <a className="in-cell-link" href="#">
                 IIT Kharagpur
               </a>
             </li>
             <li>
               <a className="in-cell-link" href="#">
                 BITS Pilani
               </a>
             </li>
           </ul>
         </div>
         <div>
         <p>
           <strong>Read More:</strong> Top Engineering Colleges in India for
           Mechanical Engineering
         </p>
         <h3>
           <strong>
             Top Engineering Colleges in India for Aeronautical Engineering
           </strong>
         </h3>
         <p>
           Listed below are some of the best colleges for engineering
           offering Aeronautical Engineering specialization
         </p>
         <ul>
           <li>
             <a className="in-cell-link" href="#">
               Sathyabama Institute
             </a>
           </li>
           <li>
             <a className="in-cell-link" href="#">
               Kumaraguru College of Technology
             </a>
           </li>
           <li>
             <a className="in-cell-link" href="#">
               Bannari Amman Institute of Technology
             </a>
           </li>
           <li>
             <a className="in-cell-link" href="#">
               DSCE
             </a>
           </li>
           <li>
             <a className="in-cell-link" href="#">
               IIST Trivandrum
             </a>
           </li>
         </ul>
         <p>
           <strong>Read More:</strong>{" "}
           <a href="#">
             Top Engineering Colleges in India for Aeronautical Engineering
           </a>
         </p>
       </div>
       <h3>
       <strong>
         Top Engineering Colleges in India for Civil Engineering
       </strong>
     </h3>
     <p>
       Listed below are top engineering colleges that offer specialization
       in Civil Engineering
     </p>
     <ul>
       <li>
         <a className="in-cell-link" href="#">
           IIT Madras
         </a>
       </li>
       <li>
         <a className="in-cell-link" href="#">
           IIT Delhi
         </a>
       </li>
       <li>
         <a className="in-cell-link" href="#">
           IIT Bombay
         </a>
       </li>
       <li>
         <a className="in-cell-link" href="#">
           IIT Kharagpur
         </a>
       </li>
       <li>
         <a className="in-cell-link" href="#">
           IIT Kanpur
         </a>
       </li>
     </ul>
     <p>
       <strong>Read More:</strong>{" "}
       <a href="#">
         Top Engineering Colleges in India for Civil Engineering
       </a>
     </p>
     <h3>
            <strong>
              Top Engineering Colleges in India for Chemical Engineering
            </strong>
          </h3>
          <p>
            Listed below are some of the best colleges for engineering offering
            Chemical Engineering specialization
          </p>
          <ul>
            <li>
              <a className="in-cell-link" href="#">
                IIT Madras
              </a>
            </li>
            <li>
              <a className="in-cell-link" href="#">
                IIT Bombay
              </a>
            </li>
            <li>
              <a className="in-cell-link" href="#">
                IIT Kharagpur
              </a>
            </li>
            <li>
              <a className="in-cell-link" href="#">
                IIT Delhi
              </a>
            </li>
            <li>
              <a className="in-cell-link" href="#">
                IIT Guwahati
              </a>
            </li>
          </ul>
          <p>
            <strong>Read More:</strong>{" "}
            <a href="#">
              Top Engineering Colleges in India for Chemical Engineering
            </a>
          </p>
          <h2>
            <strong>
              Entrance Exams for Top Engineering Colleges in India
            </strong>
          </h2>
          <p>
            <span>
              Top engineering colleges in India offer admission based on the
              students' marks in various national or state-level entrance
              examinations. Below mentioned are some of the popular entrance
              exams to get admission to the best engineering colleges in India
            </span>
          </p>
          <ul>
            <li>
              <span>JEE Mains</span>
            </li>
            <li>JEE Advanced</li>
            <li>
              <span>BITSAT</span>
            </li>
            <li>
              <span>KCET</span>
            </li>
            <li>
              <span>GATE</span>
            </li>
          </ul>
          <h3>
          <strong>
            Top Engineering Colleges in India Accepting JEE Main Score
          </strong>
        </h3>
        <p>
          <span>
            JEE Main is an all-India test conducted for admission to top
            engineering colleges in India. Tabulated below are the top
            colleges for engineering accepting JEE Main Score
          </span>
        </p>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col"><strong>S. No.</strong></th>
                <th scope="col"><strong>College Name</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><a className="in-cell-link" href="#">VIT Vellore</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td><a className="in-cell-link" href="#">Thapar University</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td><a className="in-cell-link" href="#">NIT Warangal</a></td>
              </tr>
              <tr>
                <td>4</td>
                <td><a className="in-cell-link" href="#">IIIT Hyderabad</a></td>
              </tr>
              <tr>
                <td>5</td>
                <td><a className="in-cell-link" href="#">NIT Durgapur</a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>
        <strong>
          Top Engineering Colleges in India Accepting JEE Advanced Score
        </strong>
      </h3>
      <p>
        <span>
          Candidates who clear JEE Main are allowed to take up JEE Advanced
          to get admitted to the top-most engineering colleges in the
          country. Tabulated below are the best engineering colleges
          accepting JEE Advanced score
        </span>
      </p>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col"><strong>S. No.</strong></th>
              <th scope="col"><strong>College Name</strong></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><a className="in-cell-link" href="#">IIT Madras</a></td>
            </tr>
            <tr>
              <td>2</td>
              <td><a className="in-cell-link" href="#">IIT Delhi</a></td>
            </tr>
            <tr>
              <td>3</td>
              <td><a className="in-cell-link" href="#">IIT Bombay</a></td>
            </tr>
            <tr>
              <td>4</td>
              <td><a className="in-cell-link" href="#">IIT Kharagpur</a></td>
            </tr>
            <tr>
              <td>5</td>
              <td><a className="in-cell-link" href="#">IIT Kanpur</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>
            <strong>
              Top Engineering Colleges in India Accepting KCET Score
            </strong>
          </h3>
          <p>
            KCET is a state-level entrance examination conducted in Karnataka
            for various courses. Tabulated below are the best colleges for
            engineering accepting KCET score
          </p>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col"><strong>S. No.</strong></th>
                  <th scope="col"><strong>College Name</strong></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td><a className="in-cell-link" href="#">RVCE</a></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td><a className="in-cell-link" href="#">MSRIT</a></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td><a className="in-cell-link" href="#">BMSCE</a></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td><a className="in-cell-link" href="#">NHCE Bangalore</a></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td><a className="in-cell-link" href="#">PES University</a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3>
            <strong>
              Top Engineering Colleges in India Accepting GATE Score
            </strong>
          </h3>
          <p>
            <span>
              GATE is an all-India level entrance examination conducted for
              admission to the master's program and for admission to PhD.
              Tabulated below are top engineering colleges accepting GATE score
            </span>
          </p>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col"><strong>S. No.</strong></th>
                  <th scope="col"><strong>College Name</strong></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td><a className="in-cell-link" href="#">IIT Madras</a></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td><a className="in-cell-link" href="#">IIT Bombay</a></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td><a className="in-cell-link" href="#">IIT Kharagpur</a></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td><a className="in-cell-link" href="#">IIT Delhi</a></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td><a className="in-cell-link" href="#">IIT Guwahati</a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2>
          <strong>
            Best Placement Engineering Colleges in India
          </strong>
        </h2>
        <p>
          <span>
            Students of top engineering colleges in India are recruited by big companies during campus placements every year. Tabulated below are the best placement engineering colleges in India
          </span>
        </p>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th><strong>College Name</strong></th>
                <th><strong>Top Recruiters</strong></th>
                <th><strong>Placement Link</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p><span>Indian Institute of Technology, Kanpur</span></p>
                </td>
                <td>
                  <p><span>Flipkart, Microsoft, Myntra, Jaguar</span></p>
                </td>
                <td>
                  <a className="in-cell-link" href="#">IIT Kanpur Placement Link</a>
                </td>
              </tr>
              <tr>
                <td>
                  <p><span>Indian Institute of Technology, Madras</span></p>
                </td>
                <td>
                  <p><span>Google, Microsoft, TCS</span></p>
                </td>
                <td>
                  <a className="in-cell-link" href="#">IIT Madras Placement Link</a>
                </td>
              </tr>
              <tr>
                <td>
                  <p><span>Indian Institute of Technology, Bombay</span></p>
                </td>
                <td>
                  <p><span>Microsoft, Amazon, Google</span></p>
                </td>
                <td>
                  <a className="in-cell-link" href="#">IIT Bombay Placement Link</a>
                </td>
              </tr>
              <tr>
                <td>
                  <p><span>Indian Institute of Technology, Kharagpur</span></p>
                </td>
                <td>
                  <p><span>IBM, JP Morgan, Tata Steel, Microsoft</span></p>
                </td>
                <td>
                  <a className="in-cell-link" href="#">IIT Kharagpur Placement Link</a>
                </td>
              </tr>
              <tr>
                <td>
                  <p><span>Indian Institute of Technology, Delhi</span></p>
                </td>
                <td>
                  <p><span>Capgemini, Wipro, IBM, Dell, Infosys</span></p>
                </td>
                <td>
                  <a className="in-cell-link" href="#">IIT Delhi Placement Link</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>
        <strong>
          Average Salary Package in Top Engineering Colleges in India
        </strong>
      </h2>
      <p>
        <span>
          Tabulated below are the average salary package offered in the best colleges for engineering in India
        </span>
      </p>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th><strong>College Name</strong></th>
              <th><strong>Average Package</strong></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a className="in-cell-link" href="#">IIT Bombay</a></td>
              <td><p><span>16.5 LPA</span></p></td>
            </tr>
            <tr>
              <td><a className="in-cell-link" href="#">IIT Madras</a></td>
              <td><p><span>16.1 LPA</span></p></td>
            </tr>
            <tr>
              <td><a className="in-cell-link" href="#">IIT Delhi</a></td>
              <td><p><span>16 LPA</span></p></td>
            </tr>
            <tr>
              <td><a className="in-cell-link" href="#">BITS Pilani</a></td>
              <td><p><span>9.5 LPA</span></p></td>
            </tr>
            <tr>
              <td><a className="in-cell-link" href="#">SRM IST Chennai</a></td>
              <td><p><span>9 LPA</span></p></td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>
            <strong>Top Engineering Colleges in India Cutoff</strong>
          </h2>
          <p>
            <span>
              Tabulated below are the JEE Advanced cutoff ranks in Aerospace Engineering in top engineering colleges
            </span>
          </p>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th><strong>College Name</strong></th>
                  <th><strong>Opening Rank</strong></th>
                  <th><strong>Closing Rank</strong></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a className="in-cell-link" href="#">IIT Bombay</a></td>
                  <td>123</td>
                  <td>2118</td>
                </tr>
                <tr>
                  <td><a className="in-cell-link" href="#">IIT Delhi</a></td>
                  <td>741</td>
                  <td>879</td>
                </tr>
                <tr>
                  <td><a className="in-cell-link" href="#">IIT Kharagpur</a></td>
                  <td>3321</td>
                  <td>4493</td>
                </tr>
                <tr>
                  <td><a className="in-cell-link" href="#">IIT Kanpur</a></td>
                  <td>2209</td>
                  <td>3809</td>
                </tr>
                <tr>
                  <td><a className="in-cell-link" href="#">IIT Madras</a></td>
                  <td>190</td>
                  <td>3259</td>
                </tr>
              </tbody>
            </table>
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
              Top Engineering Colleges in India include colleges like
              IIT Madras, IIT Delhi, IIT Bombay, and BITS Pilani.
            </span>
                  </p>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Engineering is a discipline that involves various scientific
                      principles to design, innovate, and develop machines, software,
                      hardware, technical systems, and processes. Engineering offers a
                      degree in multiple specializations such as computer science and
                      engineering, mechanical engineering, civil engineering, chemical
                      engineering, etc.
                    </span>
                    <span>
                      Courses offered in top engineering colleges in India are&nbsp;
                      <a href="#">BE</a>,&nbsp;
                      <a href="#">BTech</a>
                      ,&nbsp;
                      <a href="#">MTech</a>
                      ,&nbsp;<a href="#">ME</a>, Diploma in Engineering, PhD.
                    </span>
                    <span>
                      Entrance exams accepted by the best colleges for engineering are
                      JEE MAINS, JEE Advanced, BITSAT, KCET etc. There are various job
                      opportunities after an Engineering degree like software engineer,
                      mechanical engineer, electrical engineer, web developer,
                      biomedical engineer etc.
                    </span>
                  </p>
                  <h2>Top Engineering Colleges in India: Highlights</h2>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Candidates must have passed 10+2 with a minimum of 50% marks in
                      the PCB/PCMB stream to get admission to top Engineering colleges
                      in India. Tabulated below are the key highlights regarding the
                      engineering colleges in India
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
                                Computer Science Engineering, Mechanical Engineering,
                                Civil Engineering, Aeronautical Engineering
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
                                The annual fee of engineering colleges in India ranges
                                between 125000 to 350000.
                              </span>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                   <h2>
            <strong>
              Ranking of Engineering Colleges in India
            </strong>
                    </h2>
                    <p>
                      <span style={{ fontWeight: 400 }}>
                        NIRF and many other ranking sources have ranked various
                        government and private colleges in India. Given below are the
                        ranking of&nbsp; top engineering colleges in India by various
                        sources to make it easier for engineering aspirants to choose the
                        best engineering colleges.
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      JEE-Main
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
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      UPESEAT
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
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      TS-EAMCET
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
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      JEE-Advance
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
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      AP-EAMCET
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
                    <MDBCardTitle>MANAGEMENT</MDBCardTitle>
                    {/*<MDBCardText>
            Participating Colleges
            </MDBCardText>*/}
                  </MDBCardBody>
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-ga-title="Application Process"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      CAT
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      MAT
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      SNAP
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      TS-ICET
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      UPESMET
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
                    <MDBCardTitle>SCIENCE</MDBCardTitle>
                    {/*<MDBCardText>
            Participating Colleges
            </MDBCardText>*/}
                  </MDBCardBody>
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-ga-title="Application Process"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      JCECE
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      IIT-JAM
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      IMU-CET
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      SET-EXAM
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      JEE-Advance
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
                    <MDBCardTitle>PHARMACY</MDBCardTitle>
                    {/*<MDBCardText>Participating Colleges</MDBCardText>*/}
                  </MDBCardBody>
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-ga-title="Application Process"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      GPat
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      BITSAT
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      WBJEE
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      AP-EAMCET
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      TS-EAMCET
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
                    <MDBCardTitle>LAW</MDBCardTitle>
                    {/*<MDBCardText>Participating Colleges</MDBCardText>*/}
                  </MDBCardBody>
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-ga-title="Application Process"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="/exams/gate/application-process"
                      style={{ textDecoration: "none" }}
                    >
                      CLAT
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      ULSAT
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      AILET
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      AP-LAWCET
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      TS-LAWCET
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
                    <MDBCardTitle>DESIGN</MDBCardTitle>
                    {/*<MDBCardText>Participating Colleges</MDBCardText>*/}
                  </MDBCardBody>
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-ga-title="Application Process"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      NID
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      NIFT
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      UCEED
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      UID-DAT
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      UPES-DAT
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
                    <MDBCardTitle>COMMERCE</MDBCardTitle>
                    {/*<MDBCardText>Participating Colleges</MDBCardText>*/}
                  </MDBCardBody>
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-ga-title="Application Process"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      NPAT
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      DSAT
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      OUCET
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      BHU-UET
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      IPU-CET
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
                    <MDBCardTitle>DENTAL</MDBCardTitle>
                    {/*<MDBCardText>Participating Colleges</MDBCardText>*/}
                  </MDBCardBody>
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-ga-title="Application Process"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      NEET
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      RUET
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      PGIMER
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      NEET-MDS
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      MP-DMAT
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
                    <MDBCardTitle>DENTAL</MDBCardTitle>
                    {/*<MDBCardText>Participating Colleges</MDBCardText>*/}
                  </MDBCardBody>
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-ga-title="Application Process"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      NEET
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      RUET
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      PGIMER
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      NEET-MDS
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      MP-DMAT
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
                    <MDBCardTitle>AECHITECTURE</MDBCardTitle>
                    {/*<MDBCardText>Participating Colleges</MDBCardText>*/}
                  </MDBCardBody>
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-ga-title="Application Process"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      NATA
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      KIITE
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      JEE-Main
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      JEE-Advance
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      COMEDK-UGET
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
                    <MDBCardTitle>ARTS</MDBCardTitle>
                    {/*<MDBCardText>Participating Colleges</MDBCardText>*/}
                  </MDBCardBody>
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-ga-title="Application Process"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      NPAT
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      CUCET
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      KIITEE
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      DAVV-CET
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      TISSNET
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
                    <MDBCardTitle>AGRICULTURE</MDBCardTitle>
                    {/*<MDBCardText>Participating Colleges</MDBCardText>*/}
                  </MDBCardBody>
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-ga-title="Application Process"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      KEAM
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      BCECE
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      MHT-CET
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      AGRICET
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      ICAR-AIEEA
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
                    <MDBCardTitle>PARA MEDICAL</MDBCardTitle>
                    {/*<MDBCardText>Participating Colleges</MDBCardText>*/}
                  </MDBCardBody>
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-ga-title="Application Process"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      CPNET
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      SMFWBEE
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      JENPAUH
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      AIIM-NURSING
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      BHU BSC NURSING
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
                    <MDBCardTitle>EDUCATION</MDBCardTitle>
                    {/*<MDBCardText>Participating Colleges</MDBCardText>*/}
                  </MDBCardBody>
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-ga-title="Application Process"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      AP-EdCET
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      TS-EDCET
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      IGNOU-BEd
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      Bihar CET BEd
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      Mah BEd CET
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
                    <MDBCardTitle>COMPUTER APPLICATION</MDBCardTitle>
                    {/*<MDBCardText>Participating Colleges</MDBCardText>*/}
                  </MDBCardBody>
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-ga-title="Application Process"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      PGCET
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      TANCET
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      TS ICET
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      AP ICET
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
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      MAH MCA CET
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
          </MDBContainer>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Engineering;
