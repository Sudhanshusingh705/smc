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
// import "./Law.css";

const Law = () => {
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
      Top Law Colleges in India 2023-2024
      </h2>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="9" className="mx-auto">
            <div className="pageDescription text-center">
              <h1>Law Colleges</h1>

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
                  <h1>Law Colleges </h1>
              <h2>Law College: Eligibility, Admission, Syllabus, Placements</h2>
                  <p>
                    <div className="mb-2">
                      <span>
                      Top law colleges in India cover the National Law School
                      of India University, Bengaluru, National Law University,
                      Delhi, and NALSAR University of Law, Hyderabad. Law is a
                      systematic set of rules and regulations enforced by
                      government institutes to control the behaviour of the
                      people living in society. Law universities and
                      institutions in India provide all the facilities to
                      improve the overall personality of the students by
                      conducting several workshops. Top law colleges in India
                      also try to induce all the necessary skills required
                      while practicing.
                      </span>
                      <strong>
                      <span data-preserver-spaces="true">&nbsp;</span>
                    </strong>
                    <span data-preserver-spaces="true">Law</span>
                    <strong>
                      <span data-preserver-spaces="true">.</span>
                    </strong>
                    <span data-preserver-spaces="true">
                      &nbsp;Eligibility criteria for admission in top law
                      colleges in India are candidates should pass graduation
                      10+2+3 in any discipline from a recognized college and
                      university with 45% marks. Students can get many job
                      opportunities in the law domain. After getting a Law
                      degree, the most common and traditional Law Career
                      Option available is to enter litigation. Students can
                      start a Career in Law as an Advocate or lawyer wherein
                      the candidates job is to represent clients in courts
                      District courts, high courts, etc., anywhere in India.
                    </span>
                    </div>
                  </p>
                  <h2>
                      <strong>Top Law Colleges in India: Highlights</strong>
                    </h2>
                    <p>
                    Law colleges in India include highly reputed law career
                    options in India. Law stream provides various
                    specializations Admiralty Law, Business Law,
                    Constitutional Law, Criminal Law, Environmental Law, etc.
                    Students get the opportunity to work as legal advisors,
                    corporate lawyers, judge advocate general, etc.
                  </p>
                  <div className="table-responsive">
                    <table border="1">
                      <tbody>
                        <tr>
                          <td>
                            <span>College Type</span>
                          </td>
                          <td>860 Private, 365 Government college</td>
                        </tr>
                        <tr>
                          <td>
                            <span>Colleges Affiliated To</span>
                          </td>
                          <td>BCI, UGC, AICTE etc.</td>
                        </tr>
                        <tr>
                          <td>
                            <span>Entrance Exams Accepted</span>
                          </td>
                          <td>AIBE, CLAT, CLAT PG etc.</td>
                        </tr>
                        <tr>
                          <td>
                            <span>Specializations</span>
                          </td>
                          <td>
                            Admiralty Law, Business Law, Constitutional Law,
                            Criminal Law etc
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>Approximate Fees</span>
                          </td>
                          <td>60,000 to 12,00,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <h2>
                      <strong>Top Law Colleges in India by NIRF Ranking</strong>
                    </h2>
                    <p>
                      Law colleges in India are ranked by NIRF based on
                      different factors like Placements, course infrastructure,
                      etc. The ranking of law colleges in India also includes
                      teaching, research &amp; professional practice. The below
                      table carries the best law colleges in India by NIRF
                      ranking.
                    </p>
                    <div className="table-responsive">
                      <table border="1">
                        <tbody>
                          <tr>
                            <td>
                              <strong>Ranking</strong>
                            </td>
                            <td>
                              <strong>College Name</strong>
                            </td>
                            <td>
                              <strong>NIRF Score</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span>1</span>
                            </td>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                NLU Kolkata
                              </a>
                            </td>
                            <td>
                              <span>70.72</span>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                IIT Kharagpur
                              </a>
                            </td>
                            <td>67.27</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                NLSIU
                              </a>
                            </td>
                            <td>78.00</td>
                          </tr>

                          <tr>
                            <td>4</td>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                NLU Delhi
                              </a>
                            </td>
                            <td>73.96</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                Symbiosis Law School Pune
                              </a>
                            </td>
                            <td>73.73</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                NALSAR University of Law Hyderabad
                              </a>
                            </td>
                            <td>73.05</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                Siksha O Anusandhan University
                              </a>
                            </td>
                            <td>63.47</td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                Jamia Millia Islamia University
                              </a>
                            </td>
                            <td>63.62</td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                GNLU Gandhinagar
                              </a>
                            </td>
                            <td>63.52</td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                NLUJ
                              </a>
                            </td>
                            <td>62.35</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div>
                    <h2>
                      <strong>
                        Top Law Colleges in India by Outlook Ranking
                      </strong>
                    </h2>
                    <p>
                      The following table provides the top 10 law colleges in
                      India by Outlook.
                    </p>
                    <div className="table-responsive">
                      <table border="1">
                        <tbody>
                          <tr>
                            <td>
                              <strong>Ranking</strong>
                            </td>
                            <td>
                              <strong>College Name</strong>
                            </td>
                            <td>
                              <strong>NIRF Score</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span>1</span>
                            </td>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                Jindal Global Law School
                              </a>
                            </td>
                            <td>753</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                NLU Delhi
                              </a>
                            </td>
                            <td>758.33</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                NALSAR University of Law Hyderabad
                              </a>
                            </td>
                            <td>757.1</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                GNLU Gandhinagar
                              </a>
                            </td>
                            <td>721.66</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                Lloyd Business School
                              </a>
                            </td>
                            <td>639.55</td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                NLSIU
                              </a>
                            </td>
                            <td>803.16</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                Symbiosis Law School Pune
                              </a>
                            </td>
                            <td>678.09</td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                Bharati Vidyapeeths New Law College Pune
                              </a>
                            </td>
                            <td>601.43</td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                NLUJ
                              </a>
                            </td>
                            <td>677.75</td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                Amity University Noida
                              </a>
                            </td>
                            <td>642.17</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div>
                    <h2>
                      <strong>Top 10 Law Universities in India</strong>
                    </h2>
                    <p>
                      <strong>
                        Below mentioned are the top Law Universities in India.
                      </strong>
                    </p>
                    <ul>
                      <li>
                        <a
                          className="in-cell-link"
                          href="#"
                        >
                          NLSIU
                        </a>
                      </li>
                      <li>
                        <a
                          className="in-cell-link"
                          href="#"
                        >
                          NLU Delhi
                        </a>
                      </li>
                      <li>
                        <a
                          className="in-cell-link"
                          href="#"
                        >
                          NALSAR University of Law Hyderabad
                        </a>
                      </li>
                      <li>
                        <a
                          className="in-cell-link"
                          href="#"
                        >
                          NLU Kolkata
                        </a>
                      </li>
                      <li>
                        <a
                          className="in-cell-link"
                          href="#"
                        >
                          GNLU Gandhinagar
                        </a>
                      </li>
                      <li>
                        <a
                          className="in-cell-link"
                          href="#"
                        >
                          Symbiosis Law School Pune
                        </a>
                      </li>
                      <li>
                        <a
                          className="in-cell-link"
                          href="#"
                        >
                          NLUJ
                        </a>
                      </li>
                      <li>
                        <a
                          className="in-cell-link"
                          href="#"
                        >
                          AMU
                        </a>
                      </li>
                      <li>
                        <a
                          className="in-cell-link"
                          href="#"
                        >
                          NLIU Bhopal
                        </a>
                      </li>
                      <li>
                        <a
                          className="in-cell-link"
                          href="#"
                        >
                          RMLNLU
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2>
                      <strong>Fees Structure Top Law Colleges in India</strong>
                    </h2>
                    <p>
                      While looking for the best law colleges in India, it is
                      important to check various facilities available for
                      students like faculty, infrastructure etc. The facilities
                      provided by every college should go together with the fees
                      so that the students get the maximum benefit from the
                      college.
                    </p>
                    <h3>
                      <strong>
                        Top Law Government Colleges in India with Fees
                      </strong>
                    </h3>
                    <p>
                      Tabulated below are the government law colleges in India
                      with their total fees.
                    </p>
                    <div className="table-responsive">
                      <table border="1">
                        <tbody>
                          <tr>
                            <td>
                              <strong>College Name</strong>
                            </td>
                            <td>
                              <strong>Total Tuition Fees (INR)</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                NLSIU
                              </a>
                            </td>
                            <td>3,79,000</td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                NLU Delhi
                              </a>
                            </td>
                            <td>1,95,000</td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                NALSAR University of Law Hyderabad
                              </a>
                            </td>
                            <td>1,95,000</td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                NLU Kolkata
                              </a>
                            </td>
                            <td>5,25,000</td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                IIT Kharagpur
                              </a>
                            </td>
                            <td>3,00,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div>
                    <h3>
                      <strong>
                        Top Law Private Colleges in India with Fees
                      </strong>
                    </h3>
                    <p>
                      Below mentioned are the best private law colleges in
                      India.
                    </p>
                    <div className="table-responsive">
                      <table border="1">
                        <tbody>
                          <tr>
                            <td>
                              <strong>College Name</strong>
                            </td>
                            <td>
                              <strong>Total Tuition Fees (INR)</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                Symbiosis Law School Pune
                              </a>
                            </td>
                            <td>3,96,000</td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                KIIT University
                              </a>
                            </td>
                            <td>6,00,000</td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                Saveetha Medical college
                              </a>
                            </td>
                            <td>8,82,000</td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                SASTRA University
                              </a>
                            </td>
                            <td>7,20,000</td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                Christ University
                              </a>
                            </td>
                            <td>9,80,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div>
                    <h2>
                      <strong>Top Law Colleges in India Admission</strong>
                    </h2>
                    <p>
                      Law colleges admission is based on the national and
                      state-level entrance exam. Some law colleges in India
                      provide admission on the basis of 12th marks. Candidates
                      should appear in the entrance exam to get admission to
                      national law colleges in India. Below mentioned are the
                      top law colleges in India and their admission.
                    </p>
                    <h3>
                      <strong>Top Law Colleges in India Eligibility</strong>
                    </h3>
                    <p>
                      Eligibility criteria for law colleges admission are
                      candidates must have completed a bachelor from a
                      recognised university with a duration of 3 years.
                      Universities and colleges also accept candidates with
                      prior experience for LLM along with an LLB degree.
                    </p>
                    <p>
                      <strong>LLB</strong>
                    </p>
                    <ul>
                      <li>
                        Candidates passed graduation (10+2+3) in any discipline
                        from a recognised college or university.
                      </li>
                      <li>
                        Candidates should secure a minimum of 45% in any general
                        category and 40% marks in aggregate for SC/ST category.
                      </li>
                    </ul>
                    <p>
                      <strong>LLM</strong>
                    </p>
                    <ul>
                      <li>
                        Bachelors degree in the stream of law or social science
                        with minimum aggregate as per the institutes
                        requirement.
                      </li>
                      <li>
                        LLM eligibility criteria for students to complete LLB
                        with a minimum of 50-60% aggregate from a recognized
                        university.
                      </li>
                    </ul>
                    <p>
                      The following table contains top 10 law colleges in India
                      with admission.
                    </p>
                    <div className="table-responsive">
                      <table border="1">
                        <tbody>
                          <tr>
                            <td>
                              <strong>S.No</strong>
                            </td>
                            <td>
                              <strong>College Name</strong>
                            </td>
                            <td>
                              <strong>Admission Link</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>
                              National Law School of India University, Bengaluru
                            </td>
                            <td>
                              <a className="in-cell-link" href="link_here">
                                National Law School of India University,
                                Bengaluru Admission
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>National Law University, Delhi</td>
                            <td>
                              <a className="in-cell-link" href="link_here">
                                National Law University, Delhi Admission
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>NALSAR University of Law, Hyderabad</td>
                            <td>
                              <a className="in-cell-link" href="link_here">
                                NALSAR University of Law, Hyderabad Admission
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>
                              Rajiv Gandhi School of Intellectual Property Law,
                              IIT-Kharagpur
                            </td>
                            <td>
                              <a className="in-cell-link" href="link_here">
                                Rajiv Gandhi School of Intellectual Property
                                Law, IIT-Kharagpur Admission
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>National Law University, Jodhpur</td>
                            <td>
                              <a className="in-cell-link" href="link_here">
                                National Law University, Jodhpur Admission
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>
                              The West Bengal National University of Juridical
                              Sciences, West Bengal
                            </td>
                            <td>
                              <a className="in-cell-link" href="link_here">
                                The West Bengal National University of Juridical
                                Sciences, West Bengal Admission
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>
                              Gujarat National Law University, Gandhinagar
                            </td>
                            <td>
                              <a className="in-cell-link" href="link_here">
                                Gujarat National Law University, Gandhinagar
                                Admission
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>Symbiosis Law School, Pune</td>
                            <td>
                              <a className="in-cell-link" href="link_here">
                                Symbiosis Law School, Pune Admission
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td>Jamia Millia Islamia, New Delhi</td>
                            <td>
                              <a className="in-cell-link" href="link_here">
                                Jamia Millia Islamia, New Delhi Admission
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td>
                              The Rajiv Gandhi National University of Law,
                              Patiala
                            </td>
                            <td>
                              <a className="in-cell-link" href="link_here">
                                The Rajiv Gandhi National University of Law,
                                Patiala Admission
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
                        Entrance Exams for Top Law Colleges in India
                      </strong>
                    </h2>
                    <p>
                      A good score in the entrance exam leads to admission to
                      national law colleges. Entrance exam eligibility criteria
                      for different institutes and universities may differ.
                      However, the following are the Law Entrance exams in top
                      institutes:
                    </p>
                    <ul>
                      <li>CLAT</li>
                      <li>AILET</li>
                      <li>MHT CET</li>
                    </ul>

                    <h3>
                      <strong>Top Law Colleges Accepting CLAT</strong>
                    </h3>
                    <p>
                      Common Law Admission Test (CLAT) is an all-India
                      centralized examination that allows students to get
                      admission to the 21 National Law Universities in India to
                      pursue law courses, such as LLB and LLM. CLAT is an exam
                      attempted by more than 50,000 students annually, as it is
                      a sought-after exam for Law school aspirants. Below listed
                      are the best colleges for law accepting CLAT.
                    </p>
                    <ul>
                      <li>
                        <a className="in-cell-link" href="link_here">
                          Asian School of Cyber Laws
                        </a>
                      </li>
                      <li>
                        <a className="in-cell-link" href="link_here">
                          Nirma University
                        </a>
                      </li>
                      <li>
                        <a className="in-cell-link" href="link_here">
                          UPES
                        </a>
                      </li>
                      <li>
                        <a className="in-cell-link" href="link_here">
                          IFIM Law School
                        </a>
                      </li>
                      <li>
                        <a className="in-cell-link" href="link_here">
                          SRM IST Chennai
                        </a>
                      </li>
                    </ul>

                    <h3>
                      <strong>Top Law Colleges Accepting AILET</strong>
                    </h3>
                    <p>
                      AILET is the entrance exam for those candidates who want
                      to pursue their education in the top Law colleges in
                      India. AILET is conducted by the National Law University,
                      Delhi. (AILET) is a national-level law entrance exam
                      conducted by NLU, Delhi for admission to its
                      undergraduate, postgraduate and PhD programmes.
                    </p>
                    <ul>
                      <li>
                        <a className="in-cell-link" href="link_here">
                          NLU Delhi
                        </a>
                      </li>
                      <li>
                        <a className="in-cell-link" href="link_here">
                          Vishwakarma University
                        </a>
                      </li>
                      <li>
                        <a className="in-cell-link" href="link_here">
                          The NorthCap University
                        </a>
                      </li>
                      <li>
                        <a className="in-cell-link" href="link_here">
                          SAGE University
                        </a>
                      </li>
                      <li>
                        <a className="in-cell-link" href="link_here">
                          XIM University
                        </a>
                      </li>
                    </ul>

                    {/* ... (similarly for "Top Law Colleges Accepting MHT CET") ... */}

                    <h2>
                      <strong>
                        Specialisations Wise Top Law Colleges in India
                      </strong>
                    </h2>
                    <p>
                      National law colleges include specialisation in Civil Law,
                      Criminal Law, Human Rights Law, etc., which in turn
                      results in better job opportunities in the public and
                      private sector with good in-hand salaries. Law
                      specialisations are as follows:
                    </p>
                    <ul>
                      <li>Civil Law</li>
                      <li>Criminal Law</li>
                      <li>Human Rights Law</li>
                      <li>Contract Laws</li>
                    </ul>

                    <h3>
                      <strong>Top Civil Law Colleges in India</strong>
                    </h3>
                    <p>
                      Civil Law is the branch of Law that has concern with
                      private relations between members of society. Civil law
                      contracts with the cases of divorce, child custody,
                      personal and property damage, etc.
                    </p>
                    <ul>
                      <li>
                        <a className="in-cell-link" href="link_here">
                          NLSIU
                        </a>
                      </li>
                      <li>
                        <a className="in-cell-link" href="link_here">
                          NALSAR University of Law Hyderabad
                        </a>
                      </li>
                      <li>
                        <a className="in-cell-link" href="link_here">
                          IIT Kharagpur
                        </a>
                      </li>
                      <li>
                        <a className="in-cell-link" href="link_here">
                          Symbiosis Law School Pune
                        </a>
                      </li>
                      <li>
                        <a className="in-cell-link" href="link_here">
                          RGNUL
                        </a>
                      </li>
                    </ul>

                    {/* ... (similarly for "Top Criminal Colleges in India" and "Top Human Rights Law Colleges in India") ... */}
                  </div>
                  <div>
                    <p>
                      <strong>Read More:</strong> Top Human Rights Law Colleges
                      in India
                    </p>
                    <h2>
                      <strong>Placements Wise Top Law Colleges in India</strong>
                    </h2>
                    <p>
                      <span>
                        Best colleges for law provide a placement opportunity to
                        candidates who fulfill the required criteria during the
                        placement drive. Enclosed below is the list of top law
                        colleges in India along with the names of top
                        recruiters.
                      </span>
                    </p>
                    <div className="table-responsive">
                      <table border="1">
                        <tbody>
                          <tr>
                            <td>
                              <strong>College Name</strong>
                            </td>
                            <td>
                              <strong>Top Recruiters</strong>
                            </td>
                            <td>
                              <strong>Placements</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              National Law School of India University, Bengaluru
                            </td>
                            <td>
                              Dua Associates, Bhasin &amp; Co., HAL Bangalore
                              etc.
                            </td>
                            <td>
                              National Law School of India University, Bengaluru
                              placement
                            </td>
                          </tr>
                          <tr>
                            <td>National Law University, Delhi</td>
                            <td>L&amp;L Partners, Khaitan &amp; Co, etc.</td>
                            <td>National Law University, Delhi placement</td>
                          </tr>
                          {/* ... (other rows) ... */}
                        </tbody>
                      </table>
                    </div>
                    <h2>
                      <strong>
                        Average Salary Package in Top Law Colleges in India
                      </strong>
                    </h2>
                    <p>
                      Mentioned below table contains law colleges in India with
                      their salary package.
                    </p>
                    <div className="table-responsive">
                      <table border="1">
                        <tbody>
                          <tr>
                            <td>
                              <strong>College Name</strong>
                            </td>
                            <td>
                              <strong>Average Package</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                NLSIU
                              </a>
                            </td>
                            <td>15,00,000</td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                IIT Kharagpur
                              </a>
                            </td>
                            <td>8,00,000</td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                Symbiosis Law School Pune
                              </a>
                            </td>
                            <td>8,00,000</td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                NALSAR University of Law Hyderabad
                              </a>
                            </td>
                            <td>9,00,000</td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                NLUJ
                              </a>
                            </td>
                            <td>5,00,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div>
                    <h2>
                      <strong>Top Law Colleges in India Cut Off 2022</strong>
                    </h2>
                    <p>
                      There are some law colleges in India that offer direct
                      admission on merit basis and most of the best law colleges
                      provide admission basis of the entrance exam cutoff. Below
                      are the cut off scores for some of the best law colleges
                      in India.
                    </p>
                    <div className="table-responsive">
                      <table border="1">
                        <tbody>
                          <tr>
                            <td>
                              <strong>College Name</strong>
                            </td>
                            <td>
                              <strong>Opening CutOff</strong>
                            </td>
                            <td>
                              <strong>Closing CutOff</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                NALSAR University of Law Hyderabad
                              </a>
                            </td>
                            <td>50</td>
                            <td>119</td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                NLU Kolkata
                              </a>
                            </td>
                            <td>82</td>
                            <td>201</td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                NLIU Bhopal
                              </a>
                            </td>
                            <td>256</td>
                            <td>316</td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                GNLU Gandhinagar
                              </a>
                            </td>
                            <td>147</td>
                            <td>417</td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                className="in-cell-link"
                                href="#"
                              >
                                NLUJ
                              </a>
                            </td>
                            <td>181</td>
                            <td>292</td>
                          </tr>
                        </tbody>
                      </table>
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

export default Law;
