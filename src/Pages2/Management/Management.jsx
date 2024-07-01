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
// import "./Management.css";

const Management = () => {
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
        Top Management Colleges in India 2023-2024
      </h2>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="9" className="mx-auto">
            <div className="pageDescription text-center">
              <h1>Management Colleges</h1>

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
                      Management involves planning, organising, leading, and
                      controlling human resources efficiently and effectively.
                      Management is a discipline that offers various UG, PG, PhD
                      level courses such as BBA, BMS, BBM, MBA, PGDM, etc., in
                      multiple specialisations like marketing, finance, human
                      resource, etc.&nbsp;
                      </span>
                    </div>
                    <div className="mb-2">
                      <span>
                      NIRF, and Times B School, have ranked various government
                      and private management colleges in India based on the
                      courses. Top management colleges in India like IIMs, IITs,
                      private B-schools provide quality education with better
                      career prospects and high placement packages for
                      students.&nbsp;
                      </span>
                    </div>
                  </p>
                  <p>
                    <div className="mb-2">
                      <span>
                        Courses offered in top engineering colleges in India
                        are&nbsp;
                        <a href="#">BE</a>,&nbsp;<a href="#">BTech</a>,&nbsp;
                        <a href="#">MTech</a>,&nbsp;<a href="#">ME</a>, Diploma
                        in Engineering, PhD.
                      </span>
                    </div>
                    <p>
                    <strong>Table of Contents&nbsp;</strong>
                  </p>
                  <ul>
                  <li aria-level={1}>
                    <a href="#top-management-colleges-in-india-by-nirf-ranking">
                      <span>
                        Top Management Colleges in India by NIRF Ranking
                      </span>
                    </a>
                  </li>
                  <li aria-level={1}>
                    <a href="#top-management-colleges-in-india-by-times-b-school">
                      <span>
                        Top Management Colleges in India by Times B School
                      </span>
                    </a>
                  </li>
                  <li aria-level={1}>
                    <a href="#specialisation-wise-management-colleges-in-india">
                      <span>
                        Specialisation-wise Management Colleges in India
                      </span>
                    </a>
                  </li>
                  <li aria-level={1}>
                    <a href="#fee-structure-of-top-management-colleges-in-india">
                      <span>
                        Fee Structure of Top Management Colleges in India
                      </span>
                    </a>
                  </li>
                  <li aria-level={1}>
                    <a href="#entrance-exams-accepted-for-management-colleges">
                      <span>
                        Entrance Exams accepted for Management Colleges&nbsp;
                      </span>
                    </a>
                  </li>
                  <li aria-level={1}>
                    <a href="#admission-and-eligibility-criteria-for-management-colleges">
                      <span>
                        Admission and Eligibility Criteria for Management
                        Colleges
                      </span>
                    </a>
                  </li>
                  <li aria-level={1}>
                    <a href="#cut-off-for-top-management-colleges-in-india">
                      <span>
                        Cut Off for Top Management Colleges in India
                      </span>
                    </a>
                  </li>
                  <li aria-level={1}>
                    <a href="#scope-of-management">
                      <span>Scope of Management</span>
                    </a>
                  </li>
                  <li aria-level={1}>
                    <a href="#management-placements">
                      <span>Management Placements</span>
                    </a>
                  </li>
                  <li aria-level={1}>
                    <a href="#faqs">
                      <span>FAQs</span>
                    </a>
                  </li>
                </ul>
                  </p>
                  <h2 id="top-management-colleges-in-india-by-nirf-ranking">
                    <strong>
                      Top Management Colleges in India by NIRF Ranking&nbsp;
                    </strong>
                  </h2>
                  <p>
                    <span>
                      National Institutional Ranking Framework (NIRF) is a
                      government ranking agency run by the Ministry of Human
                      Resource Development (MHRD) that uses specific
                      methodologies based on set parameters to rank institutions
                      in India every year. The ranking parameters and weightage
                      used by the NIRF to rank colleges are as follows:
                    </span>
                  </p>
                  <ul>
                    <li aria-level={1}>
                      <span>Teaching, Learning, and Resources (TLR) - 30%</span>
                    </li>
                    <li aria-level={1}>
                      <span>Research and Professional Practice (RP) - 30%</span>
                    </li>
                    <li aria-level={1}>
                      <span>Graduation Outcomes (GO) - 15%</span>
                    </li>
                    <li aria-level={1}>
                      <span>Outreach and Inclusivity (OI) - 15%</span>
                    </li>
                    <li aria-level={1}>
                      <span>Peer Perception (PR) - 10%</span>
                    </li>
                  </ul>
                  <p>
                    <span>
                      Following is the list of top management colleges in India
                      by NIRF ranking 2021:
                    </span>
                  </p>
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <td>
                            <p>
                              <strong>NIRF Ranking 2021</strong>
                            </p>
                          </td>
                          <td>
                            <p>
                              <strong>Name of the College</strong>
                            </p>
                          </td>
                          <td>
                            <p>
                              <strong>NIRF Score</strong>
                            </p>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span>1</span>
                          </td>
                          <td>
                            <span>
                              Indian Institute of Management, Ahmedabad
                            </span>
                          </td>
                          <td>
                            <span>83.69</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>2</span>
                          </td>
                          <td>
                            <span>
                              Indian Institute of Management, Bangalore
                            </span>
                          </td>
                          <td>
                            <span>83.48</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>3</span>
                          </td>
                          <td>
                            <span>
                              Indian Institute of Management, Calcutta
                            </span>
                          </td>
                          <td>
                            <span>80.04</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>4</span>
                          </td>
                          <td>
                            <span>
                              Indian Institute of Management, Kozhikode
                            </span>
                          </td>
                          <td>
                            <span>73.34</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>5</span>
                          </td>
                          <td>
                            <span>Indian Institute of Technology, Delhi</span>
                          </td>
                          <td>72.15</td>
                        </tr>
                        <tr>
                          <td>
                            <span>6</span>
                          </td>
                          <td>
                            <span>Indian Institute of Management, Indore</span>
                          </td>
                          <td>71.10</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>
                            <span>Indian Institute of Management, Lucknow</span>
                          </td>
                          <td>71.02</td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>
                            <span>
                              Xavier Labour Relations Institute (XLRI),
                              Jamshedpur
                            </span>
                          </td>
                          <td>69.93</td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>
                            <span>
                              Indian Institute of Management, Kharagpur
                            </span>
                          </td>
                          <td>69.50</td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>Indian Institute of Technology, Bombay</td>
                          <td>68.08</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2 id="top-management-colleges-in-india-by-times-b-school">
                  <strong>
                    Top Management Colleges in India by Times B School&nbsp;
                  </strong>
                </h2>
                <p>
                  <span>
                    Below listed are the top management colleges in India as
                    per Times B School ranking:
                  </span>
                </p>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <td>
                          <p>
                            <strong>Times B School Ranking 2021</strong>
                          </p>
                        </td>
                        <td>
                          <p>
                            <strong>Name of the College</strong>
                          </p>
                        </td>
                        <td>
                          <p>
                            <strong>MBA Total Tuition Fees (INR)</strong>
                          </p>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p>
                            <span>1</span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>
                              Xavier School of Management, Jamshedpur
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>23,60,000</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>2</span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>
                              Indian Institute of Management (IIM), Raipur
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>14,20,400</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>3</span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>
                              Indian Institute of Management (IIM), Udaipur
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>6,16,000</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>4</span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>
                              Indian Institute of Management (IIM), Shillong
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>14,60,000</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>5</span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>
                              Institute of Management Technology (IMT),
                              Ghaziabad
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>19,53,000</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>6</span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>
                              Indian Institute of Management (IIM), Kashipur
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>15,42,000</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>7</span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>
                              K.J Somaiya Institute of Management, Mumbai
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>6,47,350</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>8</span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>ICFAI Business School, Hyderabad</span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>14,00,000</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>8</span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>
                              Vinod Gupta School of Management, IIT Kharagpur
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>10,30,000</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>9</span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>
                              Department of Management Studies, IIT Delhi
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>9,60,000</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>10</span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>
                              Rajagiri Centre for Business Studies, Kochi
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>6,00,000</span>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="specialisation-wise-management-colleges-in-india">
                  <strong>
                    Specialisation-wise Management Colleges in India&nbsp;
                  </strong>
                </h2>
                <p>
                  <span>
                    Management colleges offer courses in multiple
                    specialisations like marketing management, human resource,
                    finance, accounting, supply chain, etc. Students have
                    numerous specialisations to choose from based on career
                    opportunities. Few of the specialisations offer the scope
                    of job opportunities in various fields with a decent
                    salary package. Listed below are some of the top
                    management colleges in India with specialisations that
                    offer a promising career in management:
                  </span>
                </p>
                <h3>
                  <strong>Top Finance Colleges in India&nbsp;</strong>
                </h3>
                <p>
                  <span>
                    Management degree in finance provides lucrative
                    opportunities and better career options to the students.
                    Finance sector is one of the most sought-after options
                    that gives high chances of recruitment by various NBFCs,
                    mutual fund investment firms, brokerage firms, etc. Listed
                    below are some of the top management colleges for finance
                    in India:&nbsp;
                  </span>
                </p>
                <ul>
                  <li aria-level={1}>
                    <span>Indian Institute of Management, Bangalore</span>
                  </li>
                  <li aria-level={1}>
                    <span>Indian Institute of Management, Calcutta</span>
                  </li>
                  <li aria-level={1}>
                    <span>XLRI, Jamshedpur</span>
                  </li>
                  <li aria-level={1}>
                    <span>
                      SP Jain Institute of Management Research, Mumbai
                    </span>
                  </li>
                </ul>
                <h3>
                  <strong>Top Marketing Colleges in India&nbsp;</strong>
                </h3>
                <p>
                  <span>
                    Marketing management involves the planning and
                    distribution of ideas, products, and services, along with
                    advertisement and promotion into the market. The marketing
                    field provides lucrative jobs and allows the students to
                    work in top MNCs, banks, or public enterprises. Below
                    mentioned are some of the top management colleges for
                    marketing in India:
                  </span>
                </p>
                <ul>
                  <li aria-level={1}>
                    <span>Indian Institute of Management, Indore</span>
                  </li>
                  <li aria-level={1}>
                    <span>Faculty of Management Studies, Delhi</span>
                  </li>
                  <li aria-level={1}>
                    <span>
                      Narsee Monjee Institute of Management Studies, Mumbai
                    </span>
                  </li>
                </ul>
                <h2 id="fee-structure-of-top-management-colleges-in-india">
                  <strong>
                    Fee Structure for Top Management Colleges in India&nbsp;
                  </strong>
                </h2>
                <p>
                  <span>
                    Various management colleges in India offer BBA, BMS, MBA
                    courses with a fee structure ranging from low to high
                    depending on the type of college and the facilities
                    provided to the students. Below listed is the fee
                    structure for the top public and private colleges for BBA
                    and MBA:
                  </span>
                </p>
                <p>
                  <strong>Public Management Colleges with BBA Fees</strong>
                </p>
                <p>
                  <span>
                    Below mentioned are some of the top public management
                    colleges with their BBA fees:
                  </span>
                </p>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <td>
                          <p>
                            <strong>Name of Public Colleges</strong>
                          </p>
                        </td>
                        <td>
                          <p>
                            <strong>
                              BBA Fees Structure (Total Tuition Fees INR)
                            </strong>
                          </p>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p>
                            <span>Government College, Bahadurgarh</span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>5,000</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>Government College for Women, Karnal</span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>6,700</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>
                              Deen Dayal Upadhyaya Gorakhpur University,
                              Gorakhpur
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>7,770</span>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  <strong>Private Management Colleges with BBA Fees</strong>
                </p>
                <p>
                  <span>
                    Listed below are some of the top private management
                    colleges with their BBA fees:
                  </span>
                </p>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <td>
                          <p>
                            <strong>Name of Private Colleges</strong>
                          </p>
                        </td>
                        <td>
                          <p>
                            <strong>
                              BBA Fees Structure (Total Tuition Fees INR)
                            </strong>
                          </p>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p>
                            <span>
                              Narsee Monjee Institute of Management Studies,
                              Mumbai
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>11,50,000</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>ICFAI Business School, Hyderabad</span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>7,80,000</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>
                              Kalinga Institute of Industrial Technology,
                              Bhubaneswar
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>8,40,000</span>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  <strong>Public Management Colleges with MBA Fees</strong>
                </p>
                <p>
                  <span>
                    Below mentioned are some of the top public management
                    colleges with their MBA fees:
                  </span>
                </p>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <td>
                          <p>
                            <strong>Name of Public Colleges</strong>
                          </p>
                        </td>
                        <td>
                          <p>
                            <strong>
                              MBA Fees Structure (Total Tuition Fees INR)
                            </strong>
                          </p>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p>
                            <span>
                              Indian Institute of Management, Ahmedabad
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>23,00,000</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>
                              Indian Institute of Management, Bangalore
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>23,15,000</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>
                              Indian Institute of Management, Calcutta
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>27,00,000</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>
                              Indian Institute of Management, Lucknow
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>21,00,000</span>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  <strong>Private Management Colleges with MBA Fees</strong>
                </p>
                <p>
                  <span>
                    Some of the top private management colleges with their MBA
                    fees are listed below:
                  </span>
                </p>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <td>
                          <p>
                            <strong>Name of Private Colleges</strong>
                          </p>
                        </td>
                        <td>
                          <p>
                            <strong>
                              MBA Fees Structure (Total Tuition Fees INR)
                            </strong>
                          </p>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p>
                            <span>
                              Management Development Institute (MDI), Gurugram
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>18,85,000</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>
                              Symbiosis Institute of Business Management, Pune
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>19,20,000</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>
                              Narsee Monjee Institute of Management Studies,
                              Mumbai
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>18,50,000</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>
                              SP Jain Institute of Management &amp; Research,
                              Mumbai
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>17,50,000</span>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="entrance-exams-accepted-for-management-colleges">
                  <strong>
                    Entrance Exams Accepted by Management Colleges in
                    India&nbsp;
                  </strong>
                </h2>
                <p>
                  <span>
                    Top management colleges in India offer admission to the
                    students based on the marks in various national or
                    state-level entrance examinations. Below mentioned are
                    some of the popular entrance exams for management courses:
                  </span>
                </p>
                <ul>
                  <li aria-level={1}>
                    <span>CAT</span>
                  </li>
                  <li aria-level={1}>
                    <span>MAT</span>
                  </li>
                  <li aria-level={1}>
                    <span>CMAT</span>
                  </li>
                  <li aria-level={1}>
                    <span>NMAT</span>
                  </li>
                  <li aria-level={1}>
                    <span>XAT</span>
                  </li>
                  <li aria-level={1}>
                    <span>AIMA UGAT</span>
                  </li>
                  <li aria-level={1}>
                    <span>JSAT</span>
                  </li>
                  <li aria-level={1}>
                    <span>IPU CET</span>
                  </li>
                  <li aria-level={1}>
                    <span>SNAP</span>
                  </li>
                  <li aria-level={1}>
                    <span>MHT CET</span>
                  </li>
                </ul>
                <h2 id="admission-and-eligibility-criteria-for-management-colleges">
                  <strong>
                    Admission and Eligibility Criteria for Management
                    Colleges&nbsp;
                  </strong>
                </h2>
                <p>
                  <span>
                    Management colleges offer admission to various courses at
                    the undergraduate, postgraduate, doctoral levels in
                    multiple specialisations. Students will be given admission
                    to the management courses based on the rank secured in the
                    national or state level entrance exams, a merit-based
                    admission. Many private colleges also accept management
                    quota with limited seats. Below mentioned are the
                    eligibility criteria for admission to management colleges
                    in India:
                  </span>
                </p>
                <h3>
                  <strong>
                    Eligibility Criteria for Management Colleges&nbsp;
                  </strong>
                </h3>
                <p>
                  <span>
                    Top management colleges set standard guidelines for all
                    the students to participate in the admission process, and
                    candidates must fulfill the minimum eligibility criteria
                    for management courses. Listed below are the general
                    eligibility criteria for management colleges in India:
                  </span>
                </p>
                <ul>
                  <li aria-level={1}>
                    <strong>UG:</strong>
                    <span>
                      Candidates must have passed 10+2 with a minimum of 50%
                      marks from a recognised board.
                    </span>
                  </li>
                  <li aria-level={1}>
                    <strong>PG: </strong>
                    <span>
                      The students must have completed graduation in any
                      stream or equivalent from a recognised university with a
                      good score in any national or state-level entrance
                      exams.
                    </span>
                  </li>
                  <li aria-level={1}>
                    <strong>PhD:</strong>
                    <span>
                      Aspirants need to complete a master’s degree with a
                      minimum of 60% marks from a recognised university.
                    </span>
                  </li>
                </ul>
                <h3>
                  <strong>Admission in Management Colleges&nbsp;</strong>
                </h3>
                <p>
                  <span>
                    There are 6231 management colleges in India, out of which
                    5142 colleges are private, and the rest are public
                    colleges. Management colleges offer UG, PG, PhD level
                    courses in various specialisations such as marketing
                    management, human resource, finance, supply chain
                    management, etc. Most of the top management colleges’
                    admissions are based on the CAT, MAT, XAT exam scores.
                    Following are the general admission criteria for
                    management colleges in India, and it varies from college
                    to college:
                  </span>
                </p>
                <ul>
                  <li aria-level={1}>
                    <span>
                      Admissions to management courses are made based on the
                      national and state-level entrance exam scores such as
                      CAT, MAT, SNAP, etc. After considering the entrance exam
                      scores, colleges conduct their Written Ability Test
                      (WAT) along with Group Discussion (GD) and Personal
                      Interview (PI) rounds.
                    </span>
                  </li>
                  <li aria-level={1}>
                    <span>
                      Top management colleges in India also consider the
                      overall academic performance of the candidate, including
                      the marks in Class 10th and 12th.
                    </span>
                  </li>
                </ul>
                <h2 id="cut-off-for-top-management-colleges-in-india">
                  <strong>
                    Cut Off for Top Management Colleges in India&nbsp;
                  </strong>
                </h2>
                <p>
                  <span>
                    Top management colleges in India release multiple cut-off
                    lists for admission in various courses based on scores or
                    merit in the entrance exams. The cut-off may vary every
                    year based on the factors set by the institutions. CAT,
                    MAT, NMAT, SNAP entrance exams are some of the popular
                    exams for admission to MBA courses.&nbsp;
                  </span>
                </p>
                <h3>
                  <strong>CAT Cut Off</strong>
                </h3>
                <p>
                  <span>
                    Common Admission Test (CAT) is a national-level aptitude
                    test for admission to 20 IIMs, and over 1200 business
                    schools in India. Top IIMs conduct CAT exam on a
                    rotational basis.
                  </span>
                </p>
                <p>
                  <span>
                    Below mentioned is the CAT cut off for some of the
                    colleges:
                  </span>
                </p>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <td>
                          <p>
                            <strong>Name of the Colleges</strong>
                          </p>
                        </td>
                        <td>
                          <p>
                            <strong>CAT Cut Off (%ile)</strong>
                          </p>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p>
                            <span>
                              Indian Institute of Management (IIM), Ahmedabad
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>90</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>
                              Indian Institute of Management (IIM), Bangalore
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>99</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>
                              Indian Institute of Management (IIM), Calcutta
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>99</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>
                              Indian Institute of Management (IIM), Lucknow
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>97</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>
                              Indian Institute of Management (IIM), Indore
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>97</span>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3>
                  <strong>MAT Cut Off&nbsp;</strong>
                </h3>
                <p>
                  <span>
                    Management Aptitude Test (MAT) is a national-level exam
                    conducted by the All India Management Association (AIMA)
                    for admission to MBA/PGDM courses. Listed below is the MAT
                    cut-off for some of the top management colleges in India:
                  </span>
                </p>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <td>
                          <p>
                            <strong>Name of the Colleges</strong>
                          </p>
                        </td>
                        <td>
                          <p>
                            <strong>MAT Cut Off (%ile)</strong>
                          </p>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p>
                            <span>
                              Jagan Institute of Management Studies (JIMS),
                              Delhi
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>63</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>SRM University, Chennai</span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>67</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>
                              Kalinga Institute of Industrial Technology,
                              Bhubaneswar
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>80</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>Alliance University, Bangalore</span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>67</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>
                              Vellore Institute of Technology (VIT), Vellore
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>80</span>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="scope-of-management">
                  <strong>Scope of Management&nbsp;</strong>
                </h2>
                <p>
                  <span>
                    Management is a popular and well-known discipline among
                    the students. It provides a vast area of specialisations
                    to choose from, such as marketing management, finance,
                    supply chain, human resource, etc. Many colleges offer
                    management programs as full-time and part-time or through
                    online or distance learning education. Below mentioned is
                    the scope of management:
                  </span>
                </p>
                <ul>
                  <li aria-level={1}>
                    <span>
                      Management is a job-oriented field that brings out the
                      students’ managerial and leadership skills and provides
                      them with ample opportunities in the industrial world.
                      Students can join top public or private firms that offer
                      high career opportunities and good salary packages.
                    </span>
                  </li>
                  <li aria-level={1}>
                    <span>
                      After completing BBA, BMS, MBA, students are hired by
                      the government and private companies on different job
                      profiles such as Marketing Manager, Business Consultant,
                      Account Manager, Marketing and Sales Executive, etc.
                    </span>
                  </li>
                  <li aria-level={1}>
                    <span>
                      Many students also prefer to pursue the doctoral degree
                      program or PhD provided by various universities in India
                      or abroad after completing their PGDM/MBA.
                    </span>
                  </li>
                </ul>
                <h2 id="management-placements">
                  <strong>Management Placements&nbsp;</strong>
                </h2>
                <p>
                  <span>
                    Top management colleges in India offer good placement
                    opportunities to students every year.&nbsp;
                  </span>
                </p>
                <p>
                  <span>
                    As per PayScale, the average entry-level package for
                    management students in India is 3-4 LPA. Average CTCs
                    offered by top management colleges in India range from
                  </span>
                  <strong>12-20 LPA</strong>
                  <span>.&nbsp;</span>
                </p>
                <h3>
                  <strong>&nbsp;Top Management Recruiters</strong>
                </h3>
                <p>
                  <span>
                    Listed below are some of the recruiters from the top
                    management colleges in India:
                  </span>
                </p>
                <div className="table-responsive">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <p>
                            <span>Amazon</span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>Gartner</span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>Morgan Stanley</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>Barclays Capital</span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>CISCO</span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>Bain &amp; Company</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>Boston Consulting Group</span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>Google</span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>TCS</span>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3>
                  <strong>
                    Average CTCs offered in Top Management Colleges in India
                  </strong>
                </h3>
                <p>
                  <span>
                    Below mentioned are the average salaries offered in
                    various top management colleges in India:
                  </span>
                </p>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <td>
                          <p>
                            <strong>Name of the Colleges</strong>
                          </p>
                        </td>
                        <td>
                          <p>
                            <strong>Average CTCs offered</strong>
                          </p>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p>
                            <span>
                              Indian Institute of Management (IIM), Ahmedabad
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>33 LPA</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>
                              Indian Institute of Management (IIM), Calcutta
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>27.9 LPA</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>
                              Indian Institute of Management (IIM), Bangalore
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>26.18 LPA</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>
                              Faculty of Management Studies (FMS), Delhi
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>25.6 LPA</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>
                              Management Development Institute (MDI), Gurugram
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>22.05 LPA</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>
                              Narsee Monjee Institute of Management Studies
                              (NMIMS), Mumbai
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>18.33 LPA</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <span>
                              Xavier Labour Relations Institute (XLRI),
                              Jamshedpur
                            </span>
                          </p>
                        </td>
                        <td>
                          <p>
                            <span>15 LPA</span>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="faqs">
                  <strong>FAQs&nbsp;</strong>
                </h2>
                <p>
                  <strong>Q.</strong> Which management colleges are best in
                  India?
                </p>
                <p>
                  <strong>A.</strong> IIM Ahmedabad, IIM Calcutta, IIM
                  Bangalore are some of the top public management colleges in
                  India. Apart from these, the best private management
                  institutes are NMIMS Mumbai, XLRI Jamshedpur, SPJIMR Mumbai,
                  etc.
                </p>
                <p>
                  <strong>Q.</strong> How many management colleges are there
                  in India?
                </p>
                <p>
                  <strong>A. </strong>
                  <span>
                    There are around 6231 management colleges in India that
                    offer UG, PG, and PhD level courses in various
                    specialisations like finance, marketing, operations, etc.
                  </span>
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

export default Management;
