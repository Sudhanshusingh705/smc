import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBListGroup,
  MDBListGroupItem,
  MDBBtn
} from "mdb-react-ui-kit";
import { MDBCarousel, MDBCarouselItem} from 'mdb-react-ui-kit';


import andhra from "../../assets/boards/andhra.png";
import Assam from "../../assets/boards/Assam.webp";
import Bihar from "../../assets/boards/Bihar.jpg";
import CBSE from "../../assets/boards/CBSE.jpg";
import Chhattisgarh from "../../assets/boards/Chhattisgarh.webp";
import CISCE from "../../assets/boards/CISCE.png";
import Delhi from "../../assets/boards/Delhi.png";
import goa from "../../assets/boards/goa.png";
import Gujrat from "../../assets/boards/Gujarat.png";
import harayana from "../../assets/boards/harayana.jpeg";
import Himanchal from "../../assets/boards/Himachal.png";
import IB from "../../assets/boards/IB.png";
import IGCSE from "../../assets/boards/IGCSE.jpg";
import Jammu from "../../assets/boards/Jammu.png";
import jharkhand from "../../assets/boards/jharkhand.jpeg";
import Karnataka from "../../assets/boards/Karnataka.png";
import kerala from "../../assets/boards/kerala.png";
import Madhya from "../../assets/boards/Madhya.jpg";
import maharashtra from "../../assets/boards/maharashtra.png";
import Manipur from "../../assets/boards/Manipur.png";
import Meghalaya from "../../assets/boards/Meghalaya.png";
import Mizoram from "../../assets/boards/Mizoram.webp";
import Nagaland from "../../assets/boards/Nagaland.png";
import NIOS from "../../assets/boards/NIOS.png";
import Odisha from "../../assets/boards/Odisha.jpg";
import Panjab from "../../assets/boards/Punjab.jpg";
import Rajasthan from "../../assets/boards/Rajasthan.webp";
import Tamilnadu from "../../assets/boards/Tamilnadu.png";
import telangana from "../../assets/boards/Telangana.webp";
import Tripura from "../../assets/boards/Tripura.webp";
import Uttarakhand from "../../assets/boards/Uttarakhand.jpg";
import Uttarpradesh from "../../assets/boards/Uttarpradesh.png";
import westbengal from "../../assets/boards/Westbengal.png"; 


const Boards = () => {

  const cards = [
    { title: 'What To Do After NEET Exam 2024? Essential Steps To Secure Your Medical Career', 
      href: "https://blogs.searchmycolleges.com/what-to-do-after-neet-exam-2024-essential-steps-to-secure-your-medical-career/", 
      imgSrc: 'https://blogs.searchmycolleges.com/wp-content/uploads/2024/07/medics-looking-cardiogram-hall-scaled.jpg' },
    { title: 'Top Medical Courses After 12th Without NEET: Courses, Duration, Colleges, Fees', 
      href: "https://blogs.searchmycolleges.com/top-medical-courses-after-12th-without-neet-courses-duration-colleges-fees/", 
      imgSrc: 'https://blogs.searchmycolleges.com/wp-content/uploads/2024/06/medical-staff-in-clinic-waiting-area-2023-11-27-04-50-44-utc-scaled.jpg' },
    { title: 'Why Indian Students Should Choose Russia for MBBS 2024-25? Fees, Eligibility', 
      href: "https://blogs.searchmycolleges.com/why-indian-students-should-choose-russia-for-mbbs-2024-25-fees-eligibility-universities-and-more/", 
      imgSrc: 'https://blogs.searchmycolleges.com/wp-content/uploads/2024/06/group-of-doctors-with-face-masks-looking-at-camera-2023-11-27-05-12-39-utc-scaled.jpg' },
    { title: 'Why Studying MBBS in Nepal is a Smart Choice for Indian Students? Admission, Fee Structure, Universities and more', 
      href: "https://blogs.searchmycolleges.com/why-studying-mbbs-in-nepal-is-a-smart-choice-for-indian-students-admission-fee-structure-universities-and-more/", 
      imgSrc: 'https://blogs.searchmycolleges.com/wp-content/uploads/2024/06/doctor-team-and-hospital-at-work-smile-together-f-2023-11-27-05-30-28-utc-scaled.jpg' },
    { title: 'How To Get Admission In MBBS In India? Benefits, Career Opportunities, Top Colleges and More', 
      href: "https://blogs.searchmycolleges.com/how-to-get-admission-in-mbbs-in-india-benefits-career-opportunities-top-colleges-and-more/", 
      imgSrc: 'https://blogs.searchmycolleges.com/wp-content/uploads/2024/06/para-2.png' },
    { title: 'Why Study MBBS in Georgia 2024-25? Affordable, High-Quality Education in a Vibrant, Welcoming Environment', 
      href: "https://blogs.searchmycolleges.com/why-study-mbbs-in-georgia-2024-25-affordable-high-quality-education-in-a-vibrant-welcoming-environment/", 
      imgSrc: 'https://blogs.searchmycolleges.com/wp-content/uploads/2024/06/paramedical-featured.jpg' },
  ];

  const cards1 = [
    { title: 'NEET UG 2024 counselling postponed amid paper leak controversy, new dates yet to be announced', 
      href: "https://blogs.searchmycolleges.com/neet-ug-2024-counselling-postponed-amid-paper-leak-controversy-new-dates-yet-to-be-announced/", 
      imgSrc: 'https://blogs.searchmycolleges.com/wp-content/uploads/2024/07/pexels-karolina-grabowska-4021775-1-1-scaled.jpg' },
    { title: 'NEET PG 2024: Revised Exam Date Announced; Exam to Be Held on August 11', 
      href: "https://blogs.searchmycolleges.com/neet-pg-2024-revised-exam-date-announced-exam-to-be-held-on-august-11/", 
      imgSrc: 'https://blogs.searchmycolleges.com/wp-content/uploads/2024/07/pexels-pixabay-40568-scaled.jpg' },
    { title: 'MCC Releases Tentative Schedule for NEET MDS Online Counseling 2024, Registration Begins from July 1st', 
      href: "https://blogs.searchmycolleges.com/mcc-releases-tentative-schedule-for-neet-mds-online-counseling-2024-registration-begins-from-july-1st/", 
      imgSrc: 'https://blogs.searchmycolleges.com/wp-content/uploads/2024/06/woman-patient-dentist_1303-9355.jpg' },
    { title: 'NEET PG 2024: क्यों स्थगित हुई NEET PG परीक्षा? जानें अब कब होगा एग्जाम', 
      href: "https://blogs.searchmycolleges.com/neet-pg-2024-%e0%a4%95%e0%a5%8d%e0%a4%af%e0%a5%8b%e0%a4%82-%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a4%97%e0%a4%bf%e0%a4%a4-%e0%a4%b9%e0%a5%81%e0%a4%88-neet-pg-%e0%a4%aa%e0%a4%b0%e0%a5%80%e0%a4%95%e0%a5%8d/", 
      imgSrc: 'https://blogs.searchmycolleges.com/wp-content/uploads/2024/06/tqms9tno_neet-exam-scam-_625x300_23_June_24.webp' },
    {/*{ title: 'How To Get Admission In MBBS In India? Benefits, Career Opportunities, Top Colleges and More', 
      href: "https://blogs.searchmycolleges.com/how-to-get-admission-in-mbbs-in-india-benefits-career-opportunities-top-colleges-and-more/", 
      imgSrc: 'https://blogs.searchmycolleges.com/wp-content/uploads/2024/06/para-2.png' },
    { title: 'Why Study MBBS in Georgia 2024-25? Affordable, High-Quality Education in a Vibrant, Welcoming Environment', 
      href: "https://blogs.searchmycolleges.com/why-study-mbbs-in-georgia-2024-25-affordable-high-quality-education-in-a-vibrant-welcoming-environment/", 
      imgSrc: 'https://blogs.searchmycolleges.com/wp-content/uploads/2024/06/paramedical-featured.jpg' },
*/}
    ];

  return (
    <>
      <MDBContainer
        fluid
        className="full-width-section"
        style={{ background: "#E0E0E0" }}
      >
        <br />
        <h2 className="text-center" style={{ color: "DarkSlateBlue" }}>National Boards</h2>
        <br />
        <br />
        <MDBRow>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={IGCSE}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">International General Certificate of Secondary Education (IGCSE)</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              IGCSE Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={IB}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">International Baccalaureate (IB)</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              International Baccalaureate (IB) Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={NIOS}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">National Institute of Open Schooling (NIOS)</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              NIOS Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={CISCE}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">Council for the Indian School Certificate Examinations (CISCE)</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              ISC Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              ICSE Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={CBSE}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">Central Board of Secondary Education (CBSE)</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              CBSE 10th Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              CBSE 12th Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <br />
      <br />
      <MDBContainer fluid className="full-width-section" style={{ background: "#E0E0E0" }}>
        <h3 className="text-center"  style={{ color: "DarkSlateBlue" }}>State Boards</h3>
        <br />
        <br />
        <MDBRow>
        <MDBCol md="4" className="mb-4">
        <MDBCard>
        <div className="d-flex align-items-center p-3">
          <div className="image-container">
            <MDBCardImage
              src={Tripura}
              alt='...'
              className="img-fluid rounded-circle"
              style={{ width: '80px', height: '80px' }}
            />
          </div>
          <div className="d-flex flex-column ms-3 justify-content-center" style={{ height: '80px' }}>
            <h3 className="mb-0">Tripura Board</h3>
          </div>
        </div>
        <MDBListGroup flush className="text-center">
        <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
        Tripura Board
        </MDBListGroupItem>
        <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
        TBSE 10th Board
        </MDBListGroupItem>
        <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
        TBSE 12th Board
        </MDBListGroupItem>
      </MDBListGroup>
        </MDBCard>
        </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={Uttarakhand}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">Uttarakhand Board</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Uttarakhand Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Uttarakhand 10th Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Uttarakhand 12th Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={telangana}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">Telangana Board</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              TS SSC Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              TS Intermediate Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Telangana Open School Society Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={Tamilnadu}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">Tamil Nadu Board</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Tamil Nadu Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Tamil Nadu 10th Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Tamil Nadu 12th Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={Rajasthan}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">Rajasthan Board</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              RSOS Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              RBSE 10th Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              RBSE 12th Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={Panjab}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">Punjab Board</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              PSEB 10th Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              PSEB 12th Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Punjab Open School Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={Odisha}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">
                  Odisha Board</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Odisha BSE Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Odisha CHSE Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Odisha State Open School Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={Nagaland}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">Nagaland Board</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Nagaland Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              NBSE HSLC Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              NBSE HSSLC Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={Mizoram}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">Mizoram Board</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Mizoram Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              MBSE HSSLC Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              MBSE HSLC Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={Uttarpradesh}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">Uttar Pradesh Board</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              UP Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              UP 10th Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              UP 12th Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={westbengal}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">West Bengal Board</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              WB Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              WBCHSE Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              West Bengal Madhyamik Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={Delhi}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">
                  Delhi Board</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Delhi Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Delhi 10th Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Delhi 12th Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={Madhya}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">Madhya Pradesh Board</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              MPSOS Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              MPBSE 10th Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              MPBSE 12th Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={harayana}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">Haryana Board</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              HOS Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              HBSE 10th Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              HBSE 12th Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
          <MDBCard>
          <div className="d-flex align-items-center p-3">
            <div className="image-container">
              <MDBCardImage
                src={Himanchal}
                alt='...'
                className="img-fluid rounded-circle"
                style={{ width: '80px', height: '80px' }}
              />
            </div>
            <div className="d-flex flex-column ms-3 justify-content-center" style={{ height: '80px' }}>
              <h3 className="mb-0">Himachal Pradesh Board</h3>
            </div>
          </div>
          <MDBListGroup flush className="text-center">
          <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
          HPSOS Board
          </MDBListGroupItem>
          <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
          HPBOSE 10th Board
          </MDBListGroupItem>
          <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
          HPBOSE 12th Board
          </MDBListGroupItem>
        </MDBListGroup>
          </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={maharashtra}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">
                  Maharashtra Board</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Maharashtra HSC Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Maharashtra SSC Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Maharashtra State Open Schooling Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={Chhattisgarh}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">Chhattisgarh Board</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              CGSOS Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              CGBSE 10th Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              CGBSE 12th Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={Gujrat}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">Gujarat Board</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Gujarat Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              GSEB 10th Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              GSEB 12th Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={goa}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">Goa Board</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Goa Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Goa SSC Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Goa HSSC Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={Bihar}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">
                  Bihar Board</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              BBOSE Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              BSEB 10th Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              BSEB 12th Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={Assam}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">Assam Board</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Assam Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              AHSEC HS Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Assam HSLC Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={andhra}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">Andhra Pradesh Board</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              AP SSC Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              APOSS SSC Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              APOSS Inter Exam Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={kerala}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">Kerala Board</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Kerala Plus Two Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              SCOLE Kerala Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Kerala SSLC Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={Meghalaya}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">Meghalaya Board</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Meghalaya Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              MBOSE SSLC Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              MBOSE HSSLC Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={Manipur}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">Manipur Board</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Manipur HSLC Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Manipur 10th Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Manipur 12th Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={Karnataka}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">Karnataka Board</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Karnataka Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Karnataka SSLC Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Karnataka 2nd PUC Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={jharkhand}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">Jharkhand Board</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              Jharkhand Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              JAC 10th Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              JAC 12th Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <div className="d-flex align-items-center p-3">
                <div className="image-container">
                  <MDBCardImage
                    src={Jammu}
                    alt="..."
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="d-flex flex-column ms-3 justify-content-center"
                  style={{ height: "80px" }}
                >
                  <h3 className="mb-0">Jammu And Kashmir Board</h3>
                </div>
              </div>
              <MDBListGroup flush className="text-center">
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              JKSOS Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              JKBOSE 10th Board
              </MDBListGroupItem>
              <MDBListGroupItem tag="a" href="#" className="list-group-item-action">
              JKBOSE 12th Board
              </MDBListGroupItem>
            </MDBListGroup>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <br />
      <br />
      <br />
      {/*EXPLORE ARTICLES ON BOARDS EXAMS */}
      <MDBContainer>
      <h3 className="text-center my-4"  style={{ color: "DarkSlateBlue" }}>Explore articles on Board Exams</h3>
      <MDBRow className='row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
      {cards.map((card, index) => (
        <MDBCol key={index}>
          <MDBCard>
            <MDBCardImage src={card.imgSrc} alt={card.title} position='top' />
            <MDBCardBody>
              <h5 className='card-title'>{card.title}</h5>
              <MDBCardText>
                {card.content}
              </MDBCardText>
              {card.href && (
                <MDBBtn href={card.href} target="_blank" color="primary">
                  Read More
                </MDBBtn>
              )}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      ))}
    </MDBRow>
      </MDBContainer>
      <br />
      <br />
      {/* LATEST NEWS ON BOARDS EXAMS */}
      <MDBContainer>
      <h3 className="text-center my-4"  style={{ color: "DarkSlateBlue" }}>Latest NEWS on Board Exams</h3>
      <MDBRow className='row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
      {cards1.map((card, index) => (
        <MDBCol key={index}>
          <MDBCard>
            <MDBCardImage src={card.imgSrc} alt={card.title} position='top' />
            <MDBCardBody>
              <h5 className='card-title'>{card.title}</h5>
              <MDBCardText>
                {card.content}
              </MDBCardText>
              {card.href && (
                <MDBBtn href={card.href} target="_blank" color="primary">
                  Read More
                </MDBBtn>
              )}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      ))}
    </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Boards;
