import React, { useState } from "react";
import "../../Pages/Exams/Exams.css";

const Exams = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <div>
      <h2
        style={{
          marginTop: "-110px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Top Exams in India 2023
      </h2>
      <div className="container p-3 my-3 border border-dark ">
        <div className="row" style={{background: 'linear-gradient(45deg, #b9b5b5, transparent)'}}> {/**/}
          <div className="col-md-9">
            <div className="pageDescription" style={{ marginBottom: 0, marginLeft: '160px' }}>
              {/* ... content ... */}
              <h1>Top Exams </h1>

              {showContent ? (
                <>
                  {/* ... truncated for brevity ... */}
                  <div className="readMoreDiv">
                    <p
                      className="readMoreButton"
                      onClick={toggleContent}
                      style={{
                        backgroundColor: "blue",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Show Less
                    </p>
                  </div>
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
                    <table
                      style={{
                        borderCollapse: "collapse",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      border={1}
                    >
                      <thead>
                        <tr>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <strong>S.No.</strong>
                            </p>
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <strong>Exam Name</strong>
                            </p>
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <strong>Courses</strong>
                            </p>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>1</span>
                            </p>
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>JEE Main</span>
                            </p>
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>
                                B.Tech/B.E
                              </span>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>2</span>
                            </p>
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>CAT&nbsp;</span>
                            </p>
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>MBA, PGDM</span>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>3</span>
                            </p>
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>NEET</span>
                            </p>
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>
                                MBBS, BDS, B.V.SC, BAMS, BHMS, BUMS
                              </span>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>4</span>
                            </p>
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>BITSAT</span>
                            </p>
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>
                                B.E, B.Pharm, M.Sc
                              </span>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>5</span>
                            </p>
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>VITEEE</span>
                            </p>
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>B.Tech</span>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>6</span>
                            </p>
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>GATE</span>
                            </p>
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>
                                B.Tech/B.E, B.Pharm, B.Arch
                              </span>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>7</span>
                            </p>
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>NATA</span>
                            </p>
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>B.Arch</span>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>8</span>
                            </p>
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>CLAT</span>
                            </p>
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <h3>
                              <span style={{ fontWeight: 400 }}>
                                BA LLB (Hons), B.Com LLB (Hons), B.Sc LLB
                                (Hons),
                              </span>
                            </h3>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>9</span>
                            </p>
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>MAT</span>
                            </p>
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>MBA, PGDM</span>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>10</span>
                            </p>
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>SNAP</span>
                            </p>
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <p>
                              <span style={{ fontWeight: 400 }}>MBA</span>
                            </p>
                          </td>
                        </tr>
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
              ) : (
                <>
                  {/* ... condensed content ... */}
                  <div className="readMoreDiv">
                    <p
                      className="readMoreButton"
                      onClick={toggleContent}
                      style={{
                        backgroundColor: "blue",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Show More
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          <ul
            className="cards7"
            style={{ marginLeft: "116px", columnGap: "100px",overflowX: "hidden",whiteSpace: "nowrap"}}
          >
            <li className="card7">
              <div>
                <div className="jsx-485886256 ">
                  <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                    <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                      <img
                        data-src="https://images.collegedunia.com/public/college_data/images/appImage/25602_IIMB_New.jpg?h=145&w=342&mode=stretch"
                        src="https://img.freepik.com/free-photo/student-technology-fixing-computer-processing_23-2147883764.jpg?size=626&ext=jpg&ga=GA1.1.160447642.1693920547&semt=ais"
                        height="145px"
                        className="jsx-2283203247 snap-card-img ls-is-cached lazyloaded"
                      />
                      <a
                        className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="jsx-485886256 mb-auto snap-card-media">
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/11485/11485872.png"
                            height="40px"
                            className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo ls-is-cached lazyloaded"
                          />
                          <div className="jsx-485886256 snap-card-media-body">
                            <p
                              className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium"
                              style={{
                                textDecoration: "none",
                                marginTop: "11px",
                                fontSize: "20px",
                              }}
                            >
                              Engineering
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                      <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            JEE Main
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            TS EAMCET
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            JEE Advance
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            AP EAMCET
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
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="card7">
              <div>
                <div className="jsx-485886256 ">
                  <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                    <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                      <img
                        data-src="https://images.collegedunia.com/public/college_data/images/appImage/25602_IIMB_New.jpg?h=145&w=342&mode=stretch"
                        src="https://img.freepik.com/free-photo/management-coaching-business-dealing-mentor-concept_53876-133858.jpg?size=626&ext=jpg&ga=GA1.1.160447642.1693920547&semt=sph"
                        height="145px"
                        className="jsx-2283203247 snap-card-img ls-is-cached lazyloaded"
                      />
                      <a
                        className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="jsx-485886256 mb-auto snap-card-media">
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/11507/11507843.png"
                            height="40px"
                            className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo ls-is-cached lazyloaded"
                          />
                          <div className="jsx-485886256 snap-card-media-body">
                            <p
                              className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium"
                              style={{ textDecoration: "none", marginTop: '11px', fontSize: '20px' }}
                            >
                              Management
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                      <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="card7">
              <div>
                <div className="jsx-485886256 ">
                  <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                    <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                      <img
                        data-src="https://images.collegedunia.com/public/college_data/images/appImage/25602_IIMB_New.jpg?h=145&w=342&mode=stretch"
                        src="https://img.freepik.com/free-vector/colourful-science-work-concept_23-2148539571.jpg?size=626&ext=jpg&ga=GA1.1.160447642.1693920547&semt=sph"
                        height="145px"
                        className="jsx-2283203247 snap-card-img ls-is-cached lazyloaded"
                      />
                      <a
                        className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="jsx-485886256 mb-auto snap-card-media">
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/10804/10804176.png"
                            height="40px"
                            className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo ls-is-cached lazyloaded"
                          />
                          <div className="jsx-485886256 snap-card-media-body">
                            <p
                              className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium"
                              style={{ textDecoration: "none", marginTop: '11px', fontSize: '20px' }}
                            >
                              Science
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                      <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            JEE Advance
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            SET Exam
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            IIT JAM
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            IMU CET
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
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <br />

          <ul
            className="cards7"
            style={{ marginLeft: "116px", columnGap: "100px",overflowX: "hidden",whiteSpace: "nowrap" }}
          >
            <li className="card7">
              <div>
                <div className="jsx-485886256 ">
                  <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                    <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                      <img
                        data-src="https://images.collegedunia.com/public/college_data/images/appImage/25602_IIMB_New.jpg?h=145&w=342&mode=stretch"
                        src="https://img.freepik.com/free-photo/young-woman-pharmacist-pharmacy_1303-25532.jpg?size=626&ext=jpg&ga=GA1.1.160447642.1693920547&semt=sph"
                        height="145px"
                        className="jsx-2283203247 snap-card-img ls-is-cached lazyloaded"
                      />
                      <a
                        className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="jsx-485886256 mb-auto snap-card-media">
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/10306/10306427.png"
                            height="40px"
                            className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo ls-is-cached lazyloaded"
                          />
                          <div className="jsx-485886256 snap-card-media-body">
                            <p
                              className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium"
                              style={{ textDecoration: "none", marginTop: '11px', fontSize: '20px' }}
                            >
                              Pharmacy
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                      <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            GPAT
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            TS EAMCET
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            AP EAMCET
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="card7">
              <div>
                <div className="jsx-485886256 ">
                  <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                    <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                      <img
                        data-src="https://images.collegedunia.com/public/college_data/images/appImage/25602_IIMB_New.jpg?h=145&w=342&mode=stretch"
                        src="https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5918.jpg?size=626&ext=jpg&ga=GA1.2.160447642.1693920547&semt=sph"
                        height="145px"
                        className="jsx-2283203247 snap-card-img ls-is-cached lazyloaded"
                      />
                      <a
                        className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="jsx-485886256 mb-auto snap-card-media">
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/9909/9909771.png"
                            height="40px"
                            className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo ls-is-cached lazyloaded"
                          />
                          <div className="jsx-485886256 snap-card-media-body">
                            <p
                              className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium"
                              style={{ textDecoration: "none", marginTop: '11px', fontSize: '20px' }}
                            >
                              Law
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                      <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            TS LAWCET
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            AP LAWCET
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
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="card7">
              <div>
                <div className="jsx-485886256 ">
                  <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                    <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                      <img
                        data-src="https://images.collegedunia.com/public/college_data/images/appImage/25602_IIMB_New.jpg?h=145&w=342&mode=stretch"
                        src="https://img.freepik.com/free-vector/ethnic-floral-seamless-pattern-background_1035-25451.jpg?size=626&ext=jpg&ga=GA1.1.160447642.1693920547&semt=sph"
                        height="145px"
                        className="jsx-2283203247 snap-card-img ls-is-cached lazyloaded"
                      />
                      <a
                        className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="jsx-485886256 mb-auto snap-card-media">
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/11493/11493981.png"
                            height="40px"
                            className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo ls-is-cached lazyloaded"
                          />
                          <div className="jsx-485886256 snap-card-media-body">
                            <p
                              className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium"
                              style={{ textDecoration: "none", marginTop: '11px', fontSize: '20px' }}
                            >
                              Design
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                      <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            UPES DAT
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            UID DAT
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
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <br />

          <ul
            className="cards7"
            style={{ marginLeft: "116px", columnGap: "100px",overflowX: "hidden",whiteSpace: "nowrap" }}
          >
            <li className="card7">
              <div>
                <div className="jsx-485886256 ">
                  <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                    <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                      <img
                        data-src="https://images.collegedunia.com/public/college_data/images/appImage/25602_IIMB_New.jpg?h=145&w=342&mode=stretch"
                        src="https://img.freepik.com/free-photo/online-shopping-shipping-internet-commerce-concept_53876-124900.jpg?size=626&ext=jpg&ga=GA1.1.160447642.1693920547&semt=sph"
                        height="145px"
                        className="jsx-2283203247 snap-card-img ls-is-cached lazyloaded"
                      />
                      <a
                        className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="jsx-485886256 mb-auto snap-card-media">
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/4025/4025190.png"
                            height="40px"
                            className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo ls-is-cached lazyloaded"
                          />
                          <div className="jsx-485886256 snap-card-media-body">
                            <p
                              className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium"
                              style={{ textDecoration: "none", marginTop: '11px', fontSize: '20px' }}
                            >
                              Commerce
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                      <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            IPU CET
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            BHU UET
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="card7">
              <div>
                <div className="jsx-485886256 ">
                  <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                    <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                      <img
                        data-src="https://images.collegedunia.com/public/college_data/images/appImage/25602_IIMB_New.jpg?h=145&w=342&mode=stretch"
                        src="https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?size=626&ext=jpg&ga=GA1.1.160447642.1693920547&semt=sph"
                        height="145px"
                        className="jsx-2283203247 snap-card-img ls-is-cached lazyloaded"
                      />
                      <a
                        className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="jsx-485886256 mb-auto snap-card-media">
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/4022/4022659.png"
                            height="40px"
                            className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo ls-is-cached lazyloaded"
                          />
                          <div className="jsx-485886256 snap-card-media-body">
                            <p
                              className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium"
                              style={{ textDecoration: "none", marginTop: '11px', fontSize: '20px' }}
                            >
                              Medical
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                      <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            NEET PG
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            INI CET
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
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="card7">
              <div>
                <div className="jsx-485886256 ">
                  <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                    <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                      <img
                        data-src="https://images.collegedunia.com/public/college_data/images/appImage/25602_IIMB_New.jpg?h=145&w=342&mode=stretch"
                        src="https://img.freepik.com/free-photo/young-female-patient-visiting-dentist-office_496169-930.jpg?size=626&ext=jpg&ga=GA1.1.160447642.1693920547&semt=sph"
                        height="145px"
                        className="jsx-2283203247 snap-card-img ls-is-cached lazyloaded"
                      />
                      <a
                        className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="jsx-485886256 mb-auto snap-card-media">
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/5379/5379586.png"
                            height="40px"
                            className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo ls-is-cached lazyloaded"
                          />
                          <div className="jsx-485886256 snap-card-media-body">
                            <p
                              className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium"
                              style={{ textDecoration: "none", marginTop: '11px', fontSize: '20px' }}
                            >
                              Dental
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                      <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            NEET MDS
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            MP DMAT
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
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <br />

          <ul
            className="cards7"
            style={{ marginLeft: "116px", columnGap: "100px",overflowX: "hidden",whiteSpace: "nowrap" }}
          >
            <li className="card7">
              <div>
                <div className="jsx-485886256 ">
                  <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                    <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                      <img
                        data-src="https://images.collegedunia.com/public/college_data/images/appImage/25602_IIMB_New.jpg?h=145&w=342&mode=stretch"
                        src="https://img.freepik.com/free-photo/worker-drawing-blueprint_23-2147710946.jpg?size=626&ext=jpg&ga=GA1.1.160447642.1693920547&semt=sph"
                        height="145px"
                        className="jsx-2283203247 snap-card-img ls-is-cached lazyloaded"
                      />
                      <a
                        className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="jsx-485886256 mb-auto snap-card-media">
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/6423/6423141.png"
                            height="40px"
                            className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo ls-is-cached lazyloaded"
                          />
                          <div className="jsx-485886256 snap-card-media-body">
                            <p
                              className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium"
                              style={{ textDecoration: "none", marginTop: '11px', fontSize: '20px' }}
                            >
                              Architecture
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                      <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            JEE Main
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            JEE Advance
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            COMEDK UGET
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="card7">
              <div>
                <div className="jsx-485886256 ">
                  <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                    <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                      <img
                        data-src="https://images.collegedunia.com/public/college_data/images/appImage/25602_IIMB_New.jpg?h=145&w=342&mode=stretch"
                        src="https://img.freepik.com/free-photo/abstract-nature-illustration-tree-backdrop-watercolor-painted-image-generated-by-ai_188544-15564.jpg?size=626&ext=jpg&ga=GA1.1.160447642.1693920547&semt=sph"
                        height="145px"
                        className="jsx-2283203247 snap-card-img ls-is-cached lazyloaded"
                      />
                      <a
                        className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="jsx-485886256 mb-auto snap-card-media">
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/10737/10737024.png"
                            height="40px"
                            className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo ls-is-cached lazyloaded"
                          />
                          <div className="jsx-485886256 snap-card-media-body">
                            <p
                              className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium"
                              style={{ textDecoration: "none" }}
                            >
                              Arts
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                      <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            DAVV CET
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
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="card7">
              <div>
                <div className="jsx-485886256 ">
                  <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                    <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                      <img
                        data-src="https://images.collegedunia.com/public/college_data/images/appImage/25602_IIMB_New.jpg?h=145&w=342&mode=stretch"
                        src="https://img.freepik.com/free-photo/woman-picking-tea-leaves-by-hand-green-tea-farm_335224-771.jpg?size=626&ext=jpg&ga=GA1.1.160447642.1693920547&semt=sph"
                        height="145px"
                        className="jsx-2283203247 snap-card-img ls-is-cached lazyloaded"
                      />
                      <a
                        className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="jsx-485886256 mb-auto snap-card-media">
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/10112/10112412.png"
                            height="40px"
                            className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo ls-is-cached lazyloaded"
                          />
                          <div className="jsx-485886256 snap-card-media-body">
                            <p
                              className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium"
                              style={{ textDecoration: "none", marginTop: '11px', fontSize: '20px' }}
                            >
                              Agriculture
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                      <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            MHT CET
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            ICAR AIEEA
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <br />

          <ul
            className="cards7"
            style={{ marginLeft: "116px", columnGap: "100px",overflowX: "hidden",whiteSpace: "nowrap" }}
          >
            <li className="card7">
              <div>
                <div className="jsx-485886256 ">
                  <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                    <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                      <img
                        data-src="https://images.collegedunia.com/public/college_data/images/appImage/25602_IIMB_New.jpg?h=145&w=342&mode=stretch"
                        src="https://img.freepik.com/free-photo/doctor-checking-diagnosis-paralyzed-disabled-senior-woman-wheelchair-sitting-reception-room_482257-3449.jpg?size=626&ext=jpg&ga=GA1.1.160447642.1693920547&semt=ais"
                        height="145px"
                        className="jsx-2283203247 snap-card-img ls-is-cached lazyloaded"
                      />
                      <a
                        className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="jsx-485886256 mb-auto snap-card-media">
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/5851/5851403.png"
                            height="40px"
                            className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo ls-is-cached lazyloaded"
                          />
                          <div className="jsx-485886256 snap-card-media-body">
                            <p
                              className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium"
                              style={{ textDecoration: "none", marginTop: '11px', fontSize: '20px' }}
                            >
                              Para Medical
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                      <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            AIIMS Nursing
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            BHU BSc Nursing
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
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="card7">
              <div>
                <div className="jsx-485886256 ">
                  <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                    <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                      <img
                        data-src="https://images.collegedunia.com/public/college_data/images/appImage/25602_IIMB_New.jpg?h=145&w=342&mode=stretch"
                        src="https://img.freepik.com/free-photo/book-with-green-board-background_1150-3837.jpg?size=626&ext=jpg&ga=GA1.1.160447642.1693920547&semt=sph"
                        height="145px"
                        className="jsx-2283203247 snap-card-img ls-is-cached lazyloaded"
                      />
                      <a
                        className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="jsx-485886256 mb-auto snap-card-media">
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/4366/4366867.png"
                            height="40px"
                            className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo ls-is-cached lazyloaded"
                          />
                          <div className="jsx-485886256 snap-card-media-body">
                            <p
                              className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium"
                              style={{ textDecoration: "none", marginTop: '11px', fontSize: '20px' }}
                            >
                              Education
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                      <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            TS EDCET
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            IGNOU BEd
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            AP EDCET
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                            href="#"
                            style={{ textDecoration: "none" }}
                          >
                            MAH BEd CET
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
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="card7">
              <div>
                <div className="jsx-485886256 ">
                  <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                    <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                      <img
                        data-src="https://images.collegedunia.com/public/college_data/images/appImage/25602_IIMB_New.jpg?h=145&w=342&mode=stretch"
                        src="https://img.freepik.com/free-vector/developers-testing-software_74855-4782.jpg?size=626&ext=jpg&ga=GA1.1.160447642.1693920547&semt=ais"
                        height="145px"
                        className="jsx-2283203247 snap-card-img ls-is-cached lazyloaded"
                      />
                      <a
                        className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="jsx-485886256 mb-auto snap-card-media">
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/9980/9980334.png"
                            height="40px"
                            className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo ls-is-cached lazyloaded"
                          />
                          <div className="jsx-485886256 snap-card-media-body">
                            <p
                              className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium"
                              style={{ textDecoration: "none", marginTop: '11px', fontSize: '20px' }}
                            >
                              Computer Application
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                      <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                        <li className="jsx-485886256">
                          <a
                            data-csm-title="View All Courses and Fees"
                            data-event-type="link_click"
                            data-ga-track="true"
                            className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
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
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Exams;
