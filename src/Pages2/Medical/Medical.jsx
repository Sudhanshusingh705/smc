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
// import "./Medical.css";

const Medical = () => {
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
        Top Medical Colleges in India 2023-2024
      </h2>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="9" className="mx-auto">
            <div className="pageDescription text-center">
              <h1>Medical Colleges</h1>

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
                  <div className="container mt-4">
                  <div className="content-section">
                    <p>
                      <div className="mb-2">
                        <span>
                          Top medical colleges in India include AIIMS Delhi, CMC Vellore, PGIMER Chandigarh, JIPMER Puducherry, KMC Manipal, etc. Medicine comprises a variety of health care practices to maintain and restore health through the prevention and treatment of illness. Top medical colleges in India offer various specializations - Physiotherapy, Anaesthesia, Medicine, and Pediatrics. To get admission to the best medical colleges in India, candidates must appear for the entrance examinations. The most famous entrance examinations for medical colleges are NEET UG & NEET PG. After pursuing Medical, one can practice Medicine as a general physician, surgeon, medical officer, dentist, etc.
                        </span>
                      </div>
                    </p>
                    <h2>
                      <strong>
                        <span data-preserver-spaces="true">Top Medical Colleges in India: Highlights</span>
                      </strong>
                    </h2>
                    <p>
                      <span data-preserver-spaces="true">
                        To get admission to medical colleges, candidates must have passed the 12th examination with a minimum of 50% marks from a recognized board. Below mentioned are the key highlights regarding top medical colleges in India.
                      </span>
                    </p>
                    <div className="table-responsive">
                      <table className="table table-bordered highlight-table">
                        <tbody>
                          <tr>
                            <td>
                              <p><strong>College Type</strong></p>
                            </td>
                            <td>
                              <p>Government Colleges - 615 & Private Colleges - 1377</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p><strong>Colleges Affiliated To</strong></p>
                            </td>
                            <td>
                              <p>UGC, MCI, NAAC</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p><strong>Entrance Exams Accepted</strong></p>
                            </td>
                            <td>
                              <p>NEET UG, NEET PG, AIIMS PG, CUET</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p><strong>Specialisations</strong></p>
                            </td>
                            <td>
                              <p>Physiotherapy, Anaesthesia, Medicine, Pediatrics</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p><strong>Approximate Fees</strong></p>
                            </td>
                            <td>
                              <p>Annual fee ranges between 10,000-5,00,000.</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="container mt-4">
                <div className="row">
                  <div className="col">
                    <div className="content-section">
                      <h2><strong>Ranking of Medical Colleges in India</strong></h2>
                      <p>Medical colleges are ranked based on several parameters by renowned institutions. Ranking of medical colleges in India helps students choose the best medical colleges. Below are the rankings of the top medical colleges in India provided by reputed institutions for the convenience of aspiring medical candidates.</p>
                      <h3><strong>Top Medical Colleges in India NIRF Ranking</strong></h3>
                      <p>NIRF releases the ranking of top medical colleges in India every year. Below mentioned are the best medical colleges in India by NIRF.</p>
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Ranking</th>
                              <th>College Name</th>
                              <th>NIRF Score</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td><a className="in-cell-link" href="#">AIIMS Delhi</a></td>
                              <td>91.60</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td><a className="in-cell-link" href="#">PGIMER Chandigarh</a></td>
                              <td>79.00</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td><a className="in-cell-link" href="#">CMC Vellore</a></td>
                              <td>72.84</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td><a className="in-cell-link" href="#">National Institute of Mental Health and Neurosciences</a></td>
                              <td>71.56</td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td><a className="in-cell-link" href="#">BHU Varanasi</a></td>
                              <td>68.12</td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td><a className="in-cell-link" href="#">JIPMER Puducherry</a></td>
                              <td>67.64</td>
                            </tr>
                            <tr>
                              <td>7</td>
                              <td><a className="in-cell-link" href="#">Sanjay Gandhi Postgraduate Institute of Medical Sciences</a></td>
                              <td>67.18</td>
                            </tr>
                            <tr>
                              <td>8</td>
                              <td><a className="in-cell-link" href="#">Amrita University Coimbatore</a></td>
                              <td>66.49</td>
                            </tr>
                            <tr>
                              <td>9</td>
                              <td><a className="in-cell-link" href="#">Sree Chitra Tirunal Institute for Medical Sciences and Technology</a></td>
                              <td>65.17</td>
                            </tr>
                            <tr>
                              <td>10</td>
                              <td><a className="in-cell-link" href="#">KMC Manipal</a></td>
                              <td>63.89</td>
                            </tr>
                            {/* Add more rows as needed */}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container mt-4">
              <div className="row">
                <div className="col">
                  <div className="content-section">
                    <h3><strong>Top Medical Colleges in India by India Today Ranking</strong></h3>
                    <p>Below is the list of top 10 medical colleges in India by India Today ranking.</p>
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>S. No.</th>
                            <th>College Name</th>
                            <th>MBBS Total Tuition Fees (INR)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td><a className="in-cell-link" href="#">AIIMS Delhi</a></td>
                            <td>8,140</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td><a className="in-cell-link" href="#">CMC Vellore</a></td>
                            <td>2,41,650</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td><a className="in-cell-link" href="#">BHU Varanasi</a></td>
                            <td>51,845</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td><a className="in-cell-link" href="#">KMC Manipal</a></td>
                            <td>89,00,000</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td><a className="in-cell-link" href="#">JIPMER Puducherry</a></td>
                            <td>24,850</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td><a className="in-cell-link" href="#">KGMU</a></td>
                            <td>2,74,500</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td><a className="in-cell-link" href="#">Sri Ramachandra University Chennai</a></td>
                            <td>50,00,000</td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td><a className="in-cell-link" href="#">St Johns Medical College</a></td>
                            <td>31,40,850</td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td><a className="in-cell-link" href="#">AMU</a></td>
                            <td>50,000</td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td><a className="in-cell-link" href="#">MAMC Delhi</a></td>
                            <td>22,225</td>
                          </tr>
                          {/* Add more rows as needed */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mt-4">
            <div className="row">
              <div className="col">
                <div className="content-section">
                  <h3><strong>Top 10 Medical Colleges in India</strong></h3>
                  <p>Below mentioned is the list of top 10 medical colleges in India.</p>
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>S. No.</th>
                          <th>College Name</th>
                          <th>MBBS/MD Total Tuition Fees (INR)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td><a className="in-cell-link" href="#">AIIMS Delhi</a></td>
                          <td>8,140</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td><a className="in-cell-link" href="#">PGIMER Chandigarh</a></td>
                          <td>7,100</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td><a className="in-cell-link" href="#">CMC Vellore</a></td>
                          <td>2,41,650</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td><a className="in-cell-link" href="#">Sanjay Gandhi Postgraduate Institute of Medical Sciences</a></td>
                          <td>2,06,000</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td><a className="in-cell-link" href="#">BHU Varanasi</a></td>
                          <td>51,845</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td><a className="in-cell-link" href="#">KMC Manipal</a></td>
                          <td>89,00,000</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td><a className="in-cell-link" href="#">JIPMER Puducherry</a></td>
                          <td>24,850</td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td><a className="in-cell-link" href="#">KGMU</a></td>
                          <td>2,74,500</td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td><a className="in-cell-link" href="#">Sri Ramachandra University Chennai</a></td>
                          <td>50,00,000</td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td><a className="in-cell-link" href="#">St Johns Medical College</a></td>
                          <td>31,40,850</td>
                        </tr>
                        {/* Add more rows as needed */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-4">
          <div className="row">
            <div className="col">
              <div className="content-section">
                <h3><strong>Top 10 Medical Universities in India</strong></h3>
                <p>Top medical colleges in India are affiliated to approved universities in India. Below mentioned are the top 10 medical universities in India.</p>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>S. No.</th>
                        <th>University Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td><a className="in-cell-link" href="#">BHU Varanasi</a></td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td><a className="in-cell-link" href="#">UCMS</a></td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td><a className="in-cell-link" href="#">KGMU</a></td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td><a className="in-cell-link" href="#">Jamia Hamdard University</a></td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td><a className="in-cell-link" href="#">Manipal Academy of Higher Education</a></td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td><a className="in-cell-link" href="#">AMU</a></td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td><a className="in-cell-link" href="#">AIIMS Delhi</a></td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td><a className="in-cell-link" href="#">Sanjay Gandhi Postgraduate Institute of Medical Sciences</a></td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td><a className="in-cell-link" href="#">Institute of Post Graduate Medical Education and Research</a></td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td><a className="in-cell-link" href="#">Amrita University Coimbatore</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
    
          <div className="row mt-4">
            <div className="col">
              <div className="content-section">
                <h3><strong>Deemed Medical Colleges in India</strong></h3>
                <p>Listed below is the best deemed medical colleges in India.</p>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>S. No.</th>
                        <th>College Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td><a className="in-cell-link" href="#">Subharti Medical College Meerut</a></td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td><a className="in-cell-link" href="#">Hind Institute of Medical Sciences</a></td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td><a className="in-cell-link" href="#">Shri Ram Murti Smarak Institute of Medical Sciences</a></td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td><a className="in-cell-link" href="#">MJPRU Bareilly</a></td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td><a className="in-cell-link" href="#">Smt. Kashibai Navale Medical College and General Hospital</a></td>
                      </tr>
                      {/* Add more rows as needed */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-4">
        <div className="row">
          <div className="col">
            <div className="content-section">
              <h3><strong>Lowest Cutoff Medical Colleges in India</strong></h3>
              <p>Below mentioned is the lowest cutoff medical colleges in India.</p>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>S. No.</th>
                      <th>College Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td><a className="in-cell-link" href="#">Subharti Medical College Meerut</a></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td><a className="in-cell-link" href="#">Hind Institute of Medical Sciences</a></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td><a className="in-cell-link" href="#">Shri Ram Murti Smarak Institute of Medical Sciences</a></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td><a className="in-cell-link" href="#">MJPRU Bareilly</a></td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td><a className="in-cell-link" href="#">Smt. Kashibai Navale Medical College and General Hospital</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
  
        <div className="row mt-4">
          <div className="col">
            <div className="content-section">
              <h2><strong>Medical Colleges Fees in India</strong></h2>
              <p>The fees of medical colleges vary depending on the type - government or private. Government medical colleges charge less fees compared to private medical colleges in India. Top government medical colleges in India charge low fees and provide quality education & resources.</p>
              <h3><strong>Top Government Medical Colleges in India with Fees</strong></h3>
              <p>There are around 2074 medical colleges in India, of which 615 are government medical colleges. Given below is the list of top government medical colleges fees in India.</p>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>College Name</th>
                      <th>MBBS Total Tuition Fees (INR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><a className="in-cell-link" href="#">AIIMS Delhi</a></td>
                      <td>8,140</td>
                    </tr>
                    <tr>
                      <td><a className="in-cell-link" href="#">BHU Varanasi</a></td>
                      <td>51,845</td>
                    </tr>
                    <tr>
                      <td><a className="in-cell-link" href="#">KGMU</a></td>
                      <td>2,74,500</td>
                    </tr>
                    <tr>
                      <td><a className="in-cell-link" href="#">AMU</a></td>
                      <td>50,000</td>
                    </tr>
                    <tr>
                      <td><a className="in-cell-link" href="#">MAMC Delhi</a></td>
                      <td>22,225</td>
                    </tr>
                    <tr>
                      <td><a className="in-cell-link" href="#">VMMC</a></td>
                      <td>1,67,500</td>
                    </tr>
                    <tr>
                      <td><a className="in-cell-link" href="#">Annamalai University</a></td>
                      <td>5,54,370</td>
                    </tr>
                    <tr>
                      <td><a className="in-cell-link" href="#">Sri Venkateswara Institute of Medical Sciences</a></td>
                      <td>3,39,500</td>
                    </tr>
                    <tr>
                      <td><a className="in-cell-link" href="#">AFMC</a></td>
                      <td>1,59,350</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
  
        <div className="row mt-4">
          <div className="col">
            <div className="content-section">
              <h3><strong>Private Medical Colleges in India with Fees</strong></h3>
              <p>Below is the list of best private medical colleges fees in India.</p>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>College Name</th>
                      <th>MBBS Total Tuition Fees (INR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><a className="in-cell-link" href="#">CMC Vellore</a></td>
                      <td>2,41,650</td>
                    </tr>
                    <tr>
                      <td><a className="in-cell-link" href="#">KMC Manipal</a></td>
                      <td>89,00,000</td>
                    </tr>
                    <tr>
                      <td><a className="in-cell-link" href="#">Sri Ramachandra University Chennai</a></td>
                      <td>50,00,000</td>
                    </tr>
                    <tr>
                      <td><a className="in-cell-link" href="#">St Johns Medical College</a></td>
                      <td>31,40,850</td>
                    </tr>
                    <tr>
                      <td><a className="in-cell-link" href="#">Jamia Hamdard University</a></td>
                      <td>64,00,000</td>
                    </tr>
                    <tr>
                      <td><a className="in-cell-link" href="#">KMC Mangalore</a></td>
                      <td>89,00,000</td>
                    </tr>
                    <tr>
                      <td><a className="in-cell-link" href="#">JSS Medical College</a></td>
                      <td>73,75,000</td>
                    </tr>
                    <tr>
                      <td><a className="in-cell-link" href="#">CMC Ludhiana</a></td>
                      <td>33,00,000</td>
                    </tr>
                    <tr>
                      <td><a className="in-cell-link" href="#">Dr. D.Y. Patil Vidyapeeth, Pune</a></td>
                      <td>27,50,000</td>
                    </tr>
                    <tr>
                      <td><a className="in-cell-link" href="#">DMCH Ludhiana</a></td>
                      <td>11,00,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4">
      <div className="row">
        <div className="col">
          <div className="content-section">
            <h3><strong>Cheapest Medical Colleges in India&nbsp;</strong></h3>
            <p>The top medical colleges in India charge meagre fees. AIIMS medical colleges in India are not only the best colleges for medical, but also among the cheapest. The list of cheapest medical colleges fees is given below.</p>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>College Name</th>
                    <th>MBBS Total Tuition Fees (INR)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><a className="in-cell-link" href="#">Lady Hardinge Medical College</a></td>
                    <td>7,000</td>
                  </tr>
                  <tr>
                    <td><a className="in-cell-link" href="#">AIIMS Nagpur</a></td>
                    <td>8,140</td>
                  </tr>
                  <tr>
                    <td><a className="in-cell-link" href="#">AIIMS Raipur</a></td>
                    <td>8,140</td>
                  </tr>
                  <tr>
                    <td><a className="in-cell-link" href="#">AIIMS Delhi</a></td>
                    <td>8,140</td>
                  </tr>
                  <tr>
                    <td><a className="in-cell-link" href="#">AIIMS Mangalagiri</a></td>
                    <td>8,140</td>
                  </tr>
                  <tr>
                    <td><a className="in-cell-link" href="#">The Tamil Nadu Dr. M.G.R. Medical University</a></td>
                    <td>45,000</td>
                  </tr>
                  <tr>
                    <td><a className="in-cell-link" href="#">Ranchi University</a></td>
                    <td>11,750</td>
                  </tr>
                  <tr>
                    <td><a className="in-cell-link" href="#">MAMC Delhi</a></td>
                    <td>22,225</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <div className="content-section">
            <h2><strong>Top Medical Colleges in India Admission</strong></h2>
            <p>Admission to top medical colleges in India can be through entrance examinations accepted by the medical colleges. Cutoff list of top medical colleges in India is released every year after the entrance exams.</p>
            <h3><strong>Eligibility Criteria</strong></h3>
            <p>Candidates must fulfill the eligibility criteria to get admission to the best medical colleges.</p>
            <p><strong>MBBS</strong></p>
            <ul>
              <li>Candidates must have passed 12th with a minimum of 45% marks from PCB/PCMB stream.</li>
            </ul>
            <p><strong>MD</strong></p>
            <ul>
              <li>Candidates need to have a valid MBBS degree from a University/Institute recognized by the MCI.</li>
            </ul>
            <p><strong>Ph.D.</strong></p>
            <ul>
              <li>A post-graduate degree in Medicine or MS/MD with a minimum aggregate of 55% marks from a recognized university.</li>
            </ul>
            <p>Below mentioned are the top medical colleges in India with admission links</p>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>S. No.</th>
                    <th>College Name</th>
                    <th>Admission Link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>All India Institute of Medical Sciences, (AIIMS) New Delhi</td>
                    <td>All India Institute of Medical Sciences, (AIIMS) New Delhi Admission Link</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Post Graduate Institute of Medical Education & Research, (PGIMER) Chandigarh</td>
                    <td>Post Graduate Institute of Medical Education & Research, (PGIMER) Chandigarh Admission Link</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Christian Medical College, (CMC) Vellore</td>
                    <td>Christian Medical College, (CMC) Vellore Admission Link</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Sanjay Gandhi Postgraduate Institute of Medical Sciences, (SGPGIMS) Lucknow</td>
                    <td>Sanjay Gandhi Postgraduate Institute of Medical Sciences, (SGPGIMS) Lucknow Admission Link</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Banaras Hindu University, (BHU) Varanasi</td>
                    <td>Banaras Hindu University, (BHU) Varanasi Admission Link</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Kasturba Medical College, (KMC) Manipal</td>
                    <td>Kasturba Medical College, (KMC) Manipal Admission Link</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Jawaharlal Institute of Post Graduate Medical Education & Research, (JIPMER) Puducherry</td>
                    <td>Jawaharlal Institute of Post Graduate Medical Education & Research, (JIPMER) Puducherry Admission Link</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>King Georges Medical University, (KGMU) Lucknow</td>
                    <td>King Georges Medical University, (KGMU) Lucknow Admission Link</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Sri Ramachandra Institute of Higher Education & Research, Chennai</td>
                    <td>Sri Ramachandra Institute of Higher Education & Research, Chennai Admission Link</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>St. Johns Medical College, Bangalore</td>
                    <td>St. Johns Medical College, Bangalore Admission Link</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
    <div>
      <h2>
        <strong>Specialisations Available in Top Medical Colleges in India</strong>
      </h2>
      <p>
        <span>
          Specialisation is offered in many subjects in top medical colleges in India. Listed below is the list of most famous specialisations opted by students in top ranking medical colleges in India
        </span>
      </p>
      <ul>
        <li aria-level="1">Physiotherapy</li>
        <li aria-level="1">Medical Laboratory Technology</li>
        <li aria-level="1">Anaesthesia</li>
        <li aria-level="1">Medicine</li>
        <li aria-level="1">Pediatrics</li>
      </ul>
      {/* Top Medical Colleges in India for Physiotherapy */}
      <h3>
        <strong>Top Medical Colleges in India for Physiotherapy</strong>
      </h3>
      <p>
        <span>
          The top medical colleges in India offer specialization in Physiotherapy. Listed below is the list of top medical colleges in India offering specialization in Physiotherapy
        </span>
      </p>
      <ul>
        <li aria-level="1">
          <span>
            <a className="in-cell-link" href="#">
              PGIMER Chandigarh
            </a>
          </span>
        </li>
        <li aria-level="1">
          <span>
            <a className="in-cell-link" href="#">
              CMC Vellore
            </a>
          </span>
        </li>
        <li aria-level="1">
          <span>
            <a className="in-cell-link" href="#">
              KGMU
            </a>
          </span>
        </li>
        <li aria-level="1">
          <span>
            <a className="in-cell-link" href="#">
              Sri Ramachandra University Chennai
            </a>
          </span>
        </li>
        <li aria-level="1">
          <span>
            <a className="in-cell-link" href="#">
              AMU
            </a>
          </span>
        </li>
      </ul>
      <p>
        <strong>Read More: </strong>Top Medical Colleges in India for Physiotherapy
      </p>
      {/* Top Medical Colleges in India for Medical Laboratory Technology */}
      <h3>
        <strong>Top Medical Colleges in India for Medical Laboratory Technology</strong>
      </h3>
      <p>
        <span>
          Best medical colleges in India offer specialization in Medical Laboratory Technology. Listed below are the top medical colleges in India offering specialization in Medical Laboratory Technology
        </span>
      </p>
      <ul>
        <li>
          <span>
            <a className="in-cell-link" href="#">
              PGIMER Chandigarh
            </a>
          </span>
        </li>
        <li>
          <span>
            <a className="in-cell-link" href="#">
              BHU Varanasi
            </a>
          </span>
        </li>
        <li>
          <span>
            <a className="in-cell-link" href="#">
              JIPMER Puducherry
            </a>
          </span>
        </li>
        <li>
          <span>
            <a className="in-cell-link" href="#">
              KGMU
            </a>
          </span>
        </li>
        <li>
          <span>
            <a className="in-cell-link" href="#">
              Sri Ramachandra University Chennai
            </a>
          </span>
        </li>
      </ul>
      <p>
        <strong>Read More: </strong>Top Medical Colleges in India for Medical Laboratory Technology
      </p>
      {/* Top Medical Colleges in India for Anaesthesia */}
      <h3>
        <strong>Top Medical Colleges in India for Anaesthesia</strong>
      </h3>
      <p>
        <span>
          Below mentioned are top medical colleges in India offering specialization in Anaesthesia
        </span>
      </p>
      <ul>
        <li>
          <span>
            <a className="in-cell-link" href="#">
              AIIMS Delhi
            </a>
          </span>
        </li>
        <li>
          <span>
            <a className="in-cell-link" href="#">
              PGIMER Chandigarh
            </a>
          </span>
        </li>
        <li>
          <span>
            <a className="in-cell-link" href="#">
              CMC Vellore
            </a>
          </span>
        </li>
        <li>
          <span>
            <a className="in-cell-link" href="#">
              Sanjay Gandhi Postgraduate Institute of Medical Sciences
            </a>
          </span>
        </li>
        <li>
          <span>
            <a className="in-cell-link" href="#">
              BHU Varanasi
            </a>
          </span>
        </li>
      </ul>
      <p>
        <strong>Read More: </strong>Top Medical Colleges in India for Anaesthesia
      </p>
      {/* Top Medical Colleges in India for Medicine */}
      <h3>
        <strong>Top Medical Colleges in India for Medicine</strong>
      </h3>
      <p>
        Given below is the best medical colleges in India offering specialization in Medicine
      </p>
      <ul>
        <li>
          <span>
            <a className="in-cell-link" href="#">
              AIIMS Delhi
            </a>
          </span>
        </li>
        <li>
          <span>
            <a className="in-cell-link" href="#">
              PGIMER Chandigarh
            </a>
          </span>
        </li>
        <li>
          <span>
            <a className="in-cell-link" href="#">
              CMC Vellore
            </a>
          </span>
        </li>
        <li>
          <span>
            <a className="in-cell-link" href="#">
              Sanjay Gandhi Postgraduate Institute of Medical Sciences
            </a>
          </span>
        </li>
        <li>
          <span>
            <a className="in-cell-link" href="#">
              BHU Varanasi
            </a>
          </span>
        </li>
      </ul>
      <p>
        <strong>Read More: </strong>Top Medical Colleges in India for Medicine
      </p>
      {/* Top Medical Colleges in India for Pediatrics */}
      <h3>
        <strong>Top Medical Colleges in India for Pediatrics</strong>
      </h3>
      <p>
        Pediatrics is one of the most famous specializations opted by MD students. Given below is the list of top medical colleges in India offering specialization in Pediatrics.
      </p>
      <ul>
        <li>
          <span>
            <a className="in-cell-link" href="#">
              AIIMS Delhi
            </a>
          </span>
        </li>
        <li>
          <span>
            <a className="in-cell-link" href="#">
              PGIMER Chandigarh
            </a>
          </span>
        </li>
        <li>
          <span>
            <a className="in-cell-link" href="#">
              CMC Vellore
            </a>
          </span>
        </li>
        <li>
          <span>
            <a className="in-cell-link" href="#">
              Sanjay Gandhi Postgraduate Institute of Medical Sciences
            </a>
          </span>
        </li>
        <li>
          <span>
            <a className="in-cell-link" href="#">
              BHU Varanasi
            </a>
          </span>
        </li>
      </ul>
      <p>
        <strong>Read More: </strong>Top Medical Colleges in India for Pediatrics
      </p>
      {/* Entrance Exams for Top Medical Colleges in India */}
      <h2>
        <strong>Entrance Exams for Top Medical Colleges in India</strong>
      </h2>
      <p>
        <span>
          There are entrance exams conducted all over the country for admission to top medical colleges in India. Listed below are the most prestigious entrance exams for medical in India
        </span>
      </p>
      <ul>
        <li aria-level="1">
          <span>NEET UG</span>
        </li>
        <li aria-level="1">NEET PG</li>
        <li aria-level="1">CUET</li>
      </ul>
    </div>
    {/* Top Medical Colleges in India Accepting NEET UG Score */}
    <div>
      <h3>
        <strong>Top Medical Colleges in India Accepting NEET UG Score</strong>
      </h3>
      <p>
        <span>
          NTA conducts NEET UG for admission to MBBS &amp; BDS courses every year. Given below is the list of best medical colleges in India accepting NEET UG score
        </span>
      </p>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>S. No.</th>
              <th>College Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <a className="in-cell-link" href="#">
                  AIIMS Delhi
                </a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <a className="in-cell-link" href="#">
                  CMC Vellore
                </a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <a className="in-cell-link" href="#">
                  BHU Varanasi
                </a>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <a className="in-cell-link" href="#">
                  KMC Manipal
                </a>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <a className="in-cell-link" href="#">
                  KGMU
                </a>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                <a className="in-cell-link" href="#">
                  Sri Ramachandra University Chennai
                </a>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>
                <a className="in-cell-link" href="#">
                  St John.s Medical College
                </a>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>
                <a className="in-cell-link" href="#">
                  AMU
                </a>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>
                <a className="in-cell-link" href="#">
                  MAMC Delhi
                </a>
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>
                <a className="in-cell-link" href="#">
                  Jamia Hamdard University
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div className="container">
  {/* Top Medical Colleges in India Accepting NEET PG Score */}
  <div className="section">
      <h3>
        <strong>Top Medical Colleges in India Accepting NEET PG Score</strong>
      </h3>
      <p>
        <span>
          NTA conducts NEET PG for admission to MS &amp; MD courses every year. Given below is the list of top PG medical colleges in India accepting NEET PG score
        </span>
      </p>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              <td><strong>S. No.</strong></td>
              <td><strong>College Name</strong></td>
            </tr>
            <tr>
              <td>1</td>
              <td><a className="in-cell-link" href="#">AIIMS Delhi</a></td>
            </tr>
            <tr>
              <td>2</td>
              <td><a className="in-cell-link" href="#">JIPMER Puducherry</a></td>
            </tr>
            <tr>
              <td>3</td>
              <td><a className="in-cell-link" href="#">St John's Medical College</a></td>
            </tr>
            <tr>
              <td>4</td>
              <td><a className="in-cell-link" href="#">Jamia Hamdard University</a></td>
            </tr>
            <tr>
              <td>5</td>
              <td><a className="in-cell-link" href="#">KMC Mangalore</a></td>
            </tr>
            <tr>
              <td>6</td>
              <td><a className="in-cell-link" href="#">CMC Vellore</a></td>
            </tr>
            <tr>
              <td>7</td>
              <td><a className="in-cell-link" href="#">GMC Aurangabad</a></td>
            </tr>
            <tr>
              <td>8</td>
              <td><a className="in-cell-link" href="#">Pondicherry Institute of Medical Sciences</a></td>
            </tr>
            <tr>
              <td>9</td>
              <td><a className="in-cell-link" href="#">MGM Medical College Navi Mumbai</a></td>
            </tr>
            <tr>
              <td>10</td>
              <td><a className="in-cell-link" href="#">Jawaharlal Nehru Medical College, AMU</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  {/* Top Medical Colleges in India NEET UG Cutoff 2021 */}
  <div className="section">
  <h2>
    <strong>Top Medical Colleges in India NEET UG Cutoff 2021</strong>
  </h2>
  <p>
    Below mentioned is the list of NEET UG cutoff for top medical colleges in India
  </p>
  <div className="table-responsive">
    <table className="table">
      <tbody>
        <tr>
          <td><strong>College Name</strong></td>
          <td><strong>Opening Rank</strong></td>
          <td><strong>Closing Rank</strong></td>
        </tr>
        <tr>
          <td><a className="in-cell-link" href="#">AIIMS Delhi</a></td>
          <td>27</td>
          <td>1,628</td>
        </tr>
        <tr>
          <td><a className="in-cell-link" href="#">CMC Vellore</a></td>
          <td>276</td>
          <td>2,341</td>
        </tr>
        <tr>
          <td><a className="in-cell-link" href="#">BHU Varanasi</a></td>
          <td>820</td>
          <td>974</td>
        </tr>
        <tr>
          <td><a className="in-cell-link" href="#">KMC Manipal</a></td>
          <td>48,507</td>
          <td>53,472</td>
        </tr>
        <tr>
          <td><a className="in-cell-link" href="#">The Tamil Nadu Dr. M.G.R. Medical University</a></td>
          <td>1,67,843</td>
          <td>3,87,400</td>
        </tr>
        <tr>
          <td><a className="in-cell-link" href="#">KGMU</a></td>
          <td>1,666</td>
          <td>15,330</td>
        </tr>
        <tr>
          <td><a className="in-cell-link" href="#">Sri Ramachandra University Chennai</a></td>
          <td>51,500</td>
          <td>2,30,552</td>
        </tr>
        <tr>
          <td><a className="in-cell-link" href="#">St John's Medical College</a></td>
          <td>9,670</td>
          <td>18,910</td>
        </tr>
        <tr>
          <td><a className="in-cell-link" href="#">AMU</a></td>
          <td>1,754</td>
          <td>8,240</td>
        </tr>
        <tr>
          <td><a className="in-cell-link" href="#">MAMC Delhi</a></td>
          <td>45</td>
          <td>92</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
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

export default Medical;
