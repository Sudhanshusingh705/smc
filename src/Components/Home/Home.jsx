import React, { useState, useEffect } from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import Banner1 from "../../assets/banner/BANNER1.jpg";
import Banner4 from "../../assets/banner/Banner4.jpg";
import Banner5 from "../../assets/banner/Banner5.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// select your study goal
import engineerig2 from "../../assets/icons/engineering2.png";
import arts1 from "../../assets/icons/arts1.png";
import management1 from "../../assets/icons/management1.png";
import commerce1 from "../../assets/icons/commerce1.png";
import medical1 from "../../assets/icons/medical1.png";
import design from "../../assets/icons/design.png";
import "./Home.css";

// Top Collections
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBBtn,
} from "mdb-react-ui-kit";
import BTechBangalore from "../../assets/topcollection/BTechBangalore.jpg";
import BTechChennai from "../../assets/topcollection/BTechChennai.jpg";
import BTechHyderabad from "../../assets/topcollection/BTechHyderabad.jpg";
import BTechIndia from "../../assets/topcollection/BTechIndia.jpg";
import BTechCoimbatore from "../../assets/topcollection/BTechCoimbatore.jpg";
import BTechJabalpur from "../../assets/topcollection/BTechJabalpur.jpg";
import BTechKarnataka from "../../assets/topcollection/BTechKarnataka.jpg";
import BTechMumbai from "../../assets/topcollection/BTechMumbai.jpg";
import BTechPune from "../../assets/topcollection/BTechPune.jpg";
import BTechTamilNadu from "../../assets/topcollection/BTechTamilNadu.jpg";
import PrivateBTechIndia from "../../assets/topcollection/PrivateBTechIndia.jpg";
import MBAAhmedabad from "../../assets/topcollection/MBAAhmedabad.jpg";
import MBAChennai from "../../assets/topcollection/MBAChennai.jpg";
import MBADelhi from "../../assets/topcollection/MBADelhi.jpg";
import MBAHyderabad from ".././../assets/topcollection/MBAHyderabad.jpg";
import MBAIndia from "../../assets/topcollection/MBAIndia.jpg";
import MBAKolkata from "../../assets/topcollection/MBAKolkata.jpg";
import MBAMumbai from "../../assets/topcollection/MBAMumbai.jpg";
import MBAPune from "../../assets/topcollection/MBAPune.jpg";
import MBABangalore from "../../assets/topcollection/MBABangalore.jpg";
// EXPLORE PROGRAM
import {
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { MDBCardLink, MDBListGroup, MDBListGroupItem,MDBTypography } from "mdb-react-ui-kit";
// LATEST NOTIFICATION
import comedklogo from "../../assets/notification/comedklogo.webp";
import gatelogo from "../../assets/notification/gatellogo.webp";
import IPULogo from "../../assets/notification/IPULogo.webp";
import logo from "../../assets/notification/logo.webp";
import ntalogo from "../../assets/notification/ntalogo.webp";
import { Container, Row, Col, Card } from "react-bootstrap";
// TOP UNIVERSITIES & COLLEGES
import asbm from "../../assets/top10college/asbm.jpg";
import chandigarh from "../../assets/top10college/chandigarh.jpg";
import IIMBanglore from "../../assets/top10college/IIMBangalore.jpg";
import iitmadras from "../../assets/top10college/iitmadras.jpg";
import kiit from "../../assets/top10college/kiit.jpg";
import lexicon from "../../assets/top10college/lexicon.jpg";
import lovely from "../../assets/top10college/lovely.jpg";
import parul from "../../assets/top10college/parul.jpg";
// AD Banners 1 
import adbanner1 from "../../assets/adbanner/adbanner1.jpg";
import adbanner2 from  "../../assets/adbanner/abbanner2.jpg";
// TOP STUDY PLACES
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// TESTIMONIALS
import MISHRA from "../../assets/testimonial/MISHRA.jpg";
import SINGH from "../../assets/testimonial/SINGH.jpg";
import Rajeev from "../../assets/testimonial/Rajeev.jpg";



const Home = () => {
  const [iconsActive, setIconsActive] = useState("pill1");

  const handleIconsClick = (value) => {
    if (value === iconsActive) {
      return;
    }

    setIconsActive(value);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1, // Scroll 1 card at a time
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
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

  // top study cards 
const cardsData = [
  { city: 'New Delhi', imageUrl: 'https://images.collegedunia.com/public/asset/icons/city-state-icons/New Delhi.svg?mode=stretch', redirectUrl: 'https://searchmycollege.com/new-delhi' },
  { city: 'Bangalore', imageUrl: 'https://images.collegedunia.com/public/asset/icons/city-state-icons/Bangalore.svg?mode=stretch', redirectUrl: 'https://searchmycollege.com/bangalore' },
  { city: 'Hyderabad', imageUrl: 'https://images.collegedunia.com/public/asset/icons/city-state-icons/Hyderabad.svg?mode=stretch', redirectUrl: 'https://searchmycollege.com/hyderabad' },
  { city: 'Pune', imageUrl: 'https://images.collegedunia.com/public/asset/icons/city-state-icons/Pune.svg?mode=stretch', redirectUrl: 'https://searchmycollege.com/pune' },
  { city: 'Mumbai', imageUrl: 'https://images.collegedunia.com/public/asset/icons/city-state-icons/Mumbai.svg?mode=stretch', redirectUrl: 'https://searchmycollege.com/mumbai' },
  { city: 'Chennai', imageUrl: 'https://images.collegedunia.com/public/asset/icons/city-state-icons/Chennai.svg?mode=stretch', redirectUrl: 'https://searchmycollege.com/chennai' },
  { city: 'Kolkata', imageUrl: 'https://images.collegedunia.com/public/asset/icons/city-state-icons/Kolkata.svg?mode=stretch', redirectUrl: 'https://searchmycollege.com/kolkata' },
  { city: 'Bhopal', imageUrl: 'https://images.collegedunia.com/public/asset/icons/city-state-icons/Bhopal.svg?mode=stretch', redirectUrl: 'https://searchmycollege.com/bhopal' },
  { city: 'Indore', imageUrl: 'https://images.collegedunia.com/public/asset/icons/city-state-icons/Indore.svg?mode=stretch', redirectUrl: 'https://searchmycollege.com/indore' },
  { city: 'Nagpur', imageUrl: 'https://images.collegedunia.com/public/asset/icons/city-state-icons/Nagpur.svg?mode=stretch', redirectUrl: 'https://searchmycollege.com/nagpur' },
];


  // Settings for the carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30
    }
  };

  return (
    <>
      {/*HERO SECTION BANNERS OPEN*/}
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Banner1} className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block">
              {/*<h3>Searchmycollege - Where Education Choice Made Easy</h3>*/}
              {/*<p>
                Some representative placeholder content for the first slide.
              </p>*/}
            </div>
          </div>
          <div className="carousel-item">
            <img src={Banner4} className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block">
              {/*<h3>Searchmycollege - Where Education Choice Made Easy</h3>*/}
              {/*<p>
                Some representative placeholder content for the second slide.
              </p>*/}
            </div>
          </div>
          <div className="carousel-item">
            <img src={Banner5} className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption d-none d-md-block">
              {/*<h3>Searchmycollege - Where Education Choice Made Easy</h3>*/}
              {/*<p>
                Some representative placeholder content for the third slide.
              </p>*/}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/*HERO SECTION BANNERS CLOSE*/}

      {/*SELECT YOUR STUDY GOAL OPEN*/}
      <div style={{ backgroundColor: "#BED7DC", height: "400px" }}>
        <div className="container">
          <h1 className="text-center mb-5">Select Your Study Goal</h1>
          <Slider {...settings}>
            <div className="px-2" style={{ backgroundColor: "#1c1678" }}>
              <div className="card mb-3 custom-background-color1">
                <div className="row g-0">
                  <div className="col-md-2">
                    <div className="circle-image-container">
                      <img
                        src={engineerig2}
                        className="card-img-top rounded-circle"
                        alt="Engineering Logo"
                      />
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">Engineering</h5>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">BE/B'Tech</a>
                        </li>
                        <li>
                          <a href="#">ME/M'Tech</a>
                        </li>
                        <li>
                          <a href="#">Diploma In Engineering</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2" style={{ backgroundColor: "#ffc100" }}>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-2">
                    <div className="circle-image-container">
                      <img
                        src={management1}
                        className="card-img-top rounded-circle"
                        alt="Management Logo"
                      />
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">Management</h5>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">MBA/PGDM</a>
                        </li>
                        <li>
                          <a href="#">BBA/BBM</a>
                        </li>
                        <li>
                          <a href="#">Executive MBA</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2" style={{ backgroundColor: "#1c1678" }}>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-2">
                    <div className="circle-image-container">
                      <img
                        src={commerce1}
                        className="card-img-top rounded-circle"
                        alt="Commerce Logo"
                      />
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">Commerce</h5>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">B.Com</a>
                        </li>
                        <li>
                          <a href="#">M.Com</a>
                        </li>
                        <li>
                          <a href="#">MBA</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2" style={{ backgroundColor: "#1c1678" }}>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-2">
                    <div className="circle-image-container">
                      <img
                        src={medical1}
                        className="card-img-top rounded-circle"
                        alt="Medical Logo"
                      />
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">Medical</h5>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">MBBS</a>
                        </li>
                        <li>
                          <a href="#">B.Pharma</a>
                        </li>
                        <li>
                          <a href="#">BSC.Nursing</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2" style={{ backgroundColor: "#ffc100" }}>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-2">
                    <div className="circle-image-container">
                      <img
                        src={design}
                        className="card-img-top rounded-circle"
                        alt="Design Logo"
                      />
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">Design</h5>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">B.Des</a>
                        </li>
                        <li>
                          <a href="#">M.Des</a>
                        </li>
                        <li>
                          <a href="#">BFA</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2" style={{ backgroundColor: "#1c1678" }}>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-2">
                    <div className="circle-image-container">
                      <img
                        src={arts1}
                        className="card-img-top rounded-circle"
                        alt="Arts Logo"
                      />
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">Arts</h5>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">BA</a>
                        </li>
                        <li>
                          <a href="#">MA</a>
                        </li>
                        <li>
                          <a href="#">BFA</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2" style={{ backgroundColor: "#1c1678" }}>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-2">
                    <div className="circle-image-container">
                      <img
                        src={arts1}
                        className="card-img-top rounded-circle"
                        alt="Arts Logo"
                      />
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">Science</h5>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">B.Sc</a>
                        </li>
                        <li>
                          <a href="#">M.Sc</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2" style={{ backgroundColor: "#1c1678" }}>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-2">
                    <div className="circle-image-container">
                      <img
                        src={arts1}
                        className="card-img-top rounded-circle"
                        alt="Arts Logo"
                      />
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">Pharmacy</h5>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">B.Pharma</a>
                        </li>
                        <li>
                          <a href="#">M.Pharma</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2" style={{ backgroundColor: "#1c1678" }}>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-2">
                    <div className="circle-image-container">
                      <img
                        src={arts1}
                        className="card-img-top rounded-circle"
                        alt="Arts Logo"
                      />
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">ParaMedical</h5>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">B.Sc (Nursing)</a>
                        </li>
                        <li>
                          <a href="#">M.Sc (Nursing)</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2" style={{ backgroundColor: "#1c1678" }}>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-2">
                    <div className="circle-image-container">
                      <img
                        src={arts1}
                        className="card-img-top rounded-circle"
                        alt="Arts Logo"
                      />
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">Computer Application</h5>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">BCA</a>
                        </li>
                        <li>
                          <a href="#">MCA</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2" style={{ backgroundColor: "#1c1678" }}>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-2">
                    <div className="circle-image-container">
                      <img
                        src={arts1}
                        className="card-img-top rounded-circle"
                        alt="Arts Logo"
                      />
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">Education</h5>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">B.Ed</a>
                        </li>
                        <li>
                          <a href="#">M.Ed</a>
                        </li>
                        <li>
                          <a href="#">B.P.Ed</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2" style={{ backgroundColor: "#1c1678" }}>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-2">
                    <div className="circle-image-container">
                      <img
                        src={arts1}
                        className="card-img-top rounded-circle"
                        alt="Arts Logo"
                      />
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">Agriculture</h5>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">B.Sc (Agriculture)</a>
                        </li>
                        <li>
                          <a href="#">M.Sc (Agriculture)</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2" style={{ backgroundColor: "#1c1678" }}>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-2">
                    <div className="circle-image-container">
                      <img
                        src={arts1}
                        className="card-img-top rounded-circle"
                        alt="Arts Logo"
                      />
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">Animation</h5>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">Bachelor of Animation</a>
                        </li>
                        <li>
                          <a href="#">Diploma in Animation</a>
                        </li>
                        <li>
                          <a href="#">Certificate in Animation</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2" style={{ backgroundColor: "#1c1678" }}>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-2">
                    <div className="circle-image-container">
                      <img
                        src={arts1}
                        className="card-img-top rounded-circle"
                        alt="Arts Logo"
                      />
                    </div>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">Architecture</h5>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">B.Arch</a>
                        </li>
                        <li>
                          <a href="#">M.Arch</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <br />
      {/*SELECT YOUR STUDY GOAL CLOSE*/}

      {/*TOP COLLECTION OPEN*/}
      <div className="container">
        <h2 className="text-center" style={{ fontWeight: "bold" }}>
          Top Collections
        </h2>
        {/* Row 1 */}
        <div className="row">
          {/* Card 1 */}
          <div className="col">
            <div style={cardContainerStyle}>
              <MDBCard style={cardStyle}>
                <MDBCardImage
                  position="top"
                  loading="lazy"
                  src={MBAIndia}
                  alt="Card 1"
                />
                <MDBCardBody
                  style={{ textAlign: "center", color: "rgb(43,45,66)" }}
                >
                  <MDBCardTitle
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Best MBA colleges in India
                  </MDBCardTitle>
                  <MDBCardText>With supporting text.</MDBCardText>
                  <MDBBtn
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    + 4997 More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
          {/* End Card 1 */}

          {/* Card 2 */}
          <div className="col">
            <div style={cardContainerStyle}>
              <MDBCard style={cardStyle}>
                <MDBCardImage
                  position="top"
                  loading="lazy"
                  src={BTechIndia}
                  alt="Card 2"
                />
                <MDBCardBody
                  style={{ textAlign: "center", color: "rgb(43,45,66)" }}
                >
                  <MDBCardTitle
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Best BTech colleges in India
                  </MDBCardTitle>
                  <MDBCardText>With supporting text.</MDBCardText>
                  <MDBBtn
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    + 4188 More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
          {/* End Card 2 */}

          {/* Card 3 */}
          <div className="col">
            <div style={cardContainerStyle}>
              <MDBCard style={cardStyle}>
                <MDBCardImage
                  position="top"
                  loading="lazy"
                  src={BTechPune}
                  alt="Card 3"
                />
                <MDBCardBody
                  style={{ textAlign: "center", color: "rgb(43,45,66)" }}
                >
                  <MDBCardTitle
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Best BTech colleges in Pune
                  </MDBCardTitle>
                  <MDBCardText>With supporting text.</MDBCardText>
                  <MDBBtn
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    + 111 More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
          {/* End Card 3 */}

          {/* Card 4 */}
          <div className="col">
            <div style={cardContainerStyle}>
              <MDBCard style={cardStyle}>
                <MDBCardImage
                  position="top"
                  loading="lazy"
                  src={BTechBangalore}
                  alt="Card 4"
                />
                <MDBCardBody
                  style={{ textAlign: "center", color: "rgb(43,45,66)" }}
                >
                  <MDBCardTitle
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Best BTech colleges in Bangalore
                  </MDBCardTitle>
                  <MDBCardText>With supporting text.</MDBCardText>
                  <MDBBtn
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    + 122 More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
          {/* End Card 4 */}

          {/* Card 5 */}
          <div className="col">
            <div style={cardContainerStyle}>
              <MDBCard style={cardStyle}>
                <MDBCardImage
                  position="top"
                  loading="lazy"
                  src={MBABangalore}
                  alt="Card 5"
                />
                <MDBCardBody
                  style={{ textAlign: "center", color: "rgb(43,45,66)" }}
                >
                  <MDBCardTitle
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Best MBA colleges in Bangalore
                  </MDBCardTitle>
                  <MDBCardText>With supporting text.</MDBCardText>
                  <MDBBtn
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    + 237 More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
          {/* End Card 5 */}
        </div>
        {/* End Row 1 */}

        {/* Row 2 */}
        <div className="row">
          {/* Card 1 */}
          <div className="col">
            <div style={cardContainerStyle}>
              <MDBCard style={cardStyle}>
                <MDBCardImage
                  position="top"
                  loading="lazy"
                  src={MBAPune}
                  alt="Card 1"
                />
                <MDBCardBody
                  style={{ textAlign: "center", color: "rgb(43,45,66)" }}
                >
                  <MDBCardTitle
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Best MBA colleges in Pune
                  </MDBCardTitle>
                  <MDBCardText>With supporting text.</MDBCardText>
                  <MDBBtn
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    + 239 More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
          {/* End Card 1 */}

          {/* Card 2 */}
          <div className="col">
            <div style={cardContainerStyle}>
              <MDBCard style={cardStyle}>
                <MDBCardImage
                  position="top"
                  loading="lazy"
                  src={BTechHyderabad}
                  alt="Card 2"
                />
                <MDBCardBody
                  style={{ textAlign: "center", color: "rgb(43,45,66)" }}
                >
                  <MDBCardTitle
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Best BTech colleges in Hyderabad
                  </MDBCardTitle>
                  <MDBCardText>With supporting text.</MDBCardText>
                  <MDBBtn
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    + 127 More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
          {/* End Card 2 */}

          {/* Card 3 */}
          <div className="col">
            <div style={cardContainerStyle}>
              <MDBCard style={cardStyle}>
                <MDBCardImage
                  position="top"
                  loading="lazy"
                  src={MBADelhi}
                  alt="Card 3"
                />
                <MDBCardBody
                  style={{ textAlign: "center", color: "rgb(43,45,66)" }}
                >
                  <MDBCardTitle
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Best MBA colleges in Delhi
                  </MDBCardTitle>
                  <MDBCardText>With supporting text.</MDBCardText>
                  <MDBBtn
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    + 546 More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
          {/* End Card 3 */}

          {/* Card 4 */}
          <div className="col">
            <div style={cardContainerStyle}>
              <MDBCard style={cardStyle}>
                <MDBCardImage
                  position="top"
                  loading="lazy"
                  src={MBAMumbai}
                  alt="Card 4"
                />
                <MDBCardBody
                  style={{ textAlign: "center", color: "rgb(43,45,66)" }}
                >
                  <MDBCardTitle
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Best MBA colleges in Mumbai
                  </MDBCardTitle>
                  <MDBCardText>With supporting text.</MDBCardText>
                  <MDBBtn
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    + 129 More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
          {/* End Card 4 */}

          {/* Card 5 */}
          <div className="col">
            <div style={cardContainerStyle}>
              <MDBCard style={cardStyle}>
                <MDBCardImage
                  position="top"
                  loading="lazy"
                  src={BTechMumbai}
                  alt="Card 5"
                />
                <MDBCardBody
                  style={{ textAlign: "center", color: "rgb(43,45,66)" }}
                >
                  <MDBCardTitle
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Best BTech colleges in Mumbai
                  </MDBCardTitle>
                  <MDBCardText>With supporting text.</MDBCardText>
                  <MDBBtn
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    + 43 More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
          {/* End Card 5 */}
        </div>
        {/*End Row 2*/}

        {/* Row 3 */}
        <div className="row">
          {/* Card 1 */}
          <div className="col">
            <div style={cardContainerStyle}>
              <MDBCard style={cardStyle}>
                <MDBCardImage
                  position="top"
                  loading="lazy"
                  src={BTechChennai}
                  alt="Card 1"
                />
                <MDBCardBody
                  style={{ textAlign: "center", color: "rgb(43,45,66)" }}
                >
                  <MDBCardTitle
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Best BTech colleges in Chennai
                  </MDBCardTitle>
                  <MDBCardText>With supporting text.</MDBCardText>
                  <MDBBtn
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    + 115 More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
          {/* End Card 1 */}

          {/* Card 2 */}
          <div className="col">
            <div style={cardContainerStyle}>
              <MDBCard style={cardStyle}>
                <MDBCardImage
                  position="top"
                  loading="lazy"
                  src={MBAHyderabad}
                  alt="Card 2"
                />
                <MDBCardBody
                  style={{ textAlign: "center", color: "rgb(43,45,66)" }}
                >
                  <MDBCardTitle
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Best MBA colleges in Hyderabad
                  </MDBCardTitle>
                  <MDBCardText>With supporting text.</MDBCardText>
                  <MDBBtn
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    + 193 More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
          {/* End Card 2 */}

          {/* Card 3 */}
          <div className="col">
            <div style={cardContainerStyle}>
              <MDBCard style={cardStyle}>
                <MDBCardImage
                  position="top"
                  loading="lazy"
                  src={BTechCoimbatore}
                  alt="Card 3"
                />
                <MDBCardBody
                  style={{ textAlign: "center", color: "rgb(43,45,66)" }}
                >
                  <MDBCardTitle
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Best BTech colleges in Coimbatore
                  </MDBCardTitle>
                  <MDBCardText>With supporting text.</MDBCardText>
                  <MDBBtn
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    + 70 More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
          {/* End Card 3 */}

          {/* Card 4 */}
          <div className="col">
            <div style={cardContainerStyle}>
              <MDBCard style={cardStyle}>
                <MDBCardImage
                  position="top"
                  loading="lazy"
                  src={PrivateBTechIndia}
                  alt="Card 4"
                />
                <MDBCardBody
                  style={{ textAlign: "center", color: "rgb(43,45,66)" }}
                >
                  <MDBCardTitle
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Best Private BTech colleges in India
                  </MDBCardTitle>
                  <MDBCardText>With supporting text.</MDBCardText>
                  <MDBBtn
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    +3490 More{" "}
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
          {/* End Card 4 */}

          {/* Card 5 */}
          <div className="col">
            <div style={cardContainerStyle}>
              <MDBCard style={cardStyle}>
                <MDBCardImage
                  position="top"
                  loading="lazy"
                  src={MBAKolkata}
                  alt="Card 5"
                />
                <MDBCardBody
                  style={{ textAlign: "center", color: "rgb(43,45,66)" }}
                >
                  <MDBCardTitle
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Best MBA colleges in Kolkata
                  </MDBCardTitle>
                  <MDBCardText>With supporting text.</MDBCardText>
                  <MDBBtn
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    + 93 More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
          {/* End Card 5 */}
        </div>
        {/* Row 3 End */}

        {/* Row 4 */}
        <div className="row">
          {/* Card 1 */}
          <div className="col">
            <div style={cardContainerStyle}>
              <MDBCard style={cardStyle}>
                <MDBCardImage
                  position="top"
                  loading="lazy"
                  src={BTechTamilNadu}
                  alt="Card 1"
                />
                <MDBCardBody
                  style={{ textAlign: "center", color: "rgb(43,45,66)" }}
                >
                  <MDBCardTitle
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Best BTech colleges in TamilNadu
                  </MDBCardTitle>
                  <MDBCardText>With supporting text.</MDBCardText>
                  <MDBBtn
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    + 614 More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
          {/* End Card 1 */}

          {/* Card 2 */}
          <div className="col">
            <div style={cardContainerStyle}>
              <MDBCard style={cardStyle}>
                <MDBCardImage
                  position="top"
                  loading="lazy"
                  src={BTechKarnataka}
                  alt="Card 2"
                />
                <MDBCardBody
                  style={{ textAlign: "center", color: "rgb(43,45,66)" }}
                >
                  <MDBCardTitle
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Best BTech colleges in Karnataka
                  </MDBCardTitle>
                  <MDBCardText>With supporting text.</MDBCardText>
                  <MDBBtn
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    + 270 More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
          {/* End Card 2 */}

          {/* Card 3 */}
          <div className="col">
            <div style={cardContainerStyle}>
              <MDBCard style={cardStyle}>
                <MDBCardImage
                  position="top"
                  loading="lazy"
                  src={BTechJabalpur}
                  alt="Card 3"
                />
                <MDBCardBody
                  style={{ textAlign: "center", color: "rgb(43,45,66)" }}
                >
                  <MDBCardTitle
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Best BTech colleges in Jabalpur
                  </MDBCardTitle>
                  <MDBCardText>With supporting text.</MDBCardText>
                  <MDBBtn
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    + 20 More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
          {/* End Card 3 */}

          {/* Card 4 */}
          <div className="col">
            <div style={cardContainerStyle}>
              <MDBCard style={cardStyle}>
                <MDBCardImage
                  position="top"
                  loading="lazy"
                  src={MBAChennai}
                  alt="Card 4"
                />
                <MDBCardBody
                  style={{ textAlign: "center", color: "rgb(43,45,66)" }}
                >
                  <MDBCardTitle
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Best MBA colleges in Chennai
                  </MDBCardTitle>
                  <MDBCardText>With supporting text.</MDBCardText>
                  <MDBBtn
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    + 152 More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
          {/* End Card 4 */}

          {/* Card 5 */}
          <div className="col">
            <div style={cardContainerStyle}>
              <MDBCard style={cardStyle}>
                <MDBCardImage
                  position="top"
                  loading="lazy"
                  src={MBAAhmedabad}
                  alt="Card 5"
                />
                <MDBCardBody
                  style={{ textAlign: "center", color: "rgb(43,45,66)" }}
                >
                  <MDBCardTitle
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    Best MBA colleges in Ahmedabad
                  </MDBCardTitle>
                  <MDBCardText>With supporting text.</MDBCardText>
                  <MDBBtn
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    + 64 More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
          {/* End Card 5 */}
        </div>
        {/* Row 4 End */}

        {/* Repeat the above structure for additional rows */}
      </div>
      <br />
      {/*TOP COLLECTION CLOSE*/}
      {/* EXPLORE PROGRAM OPEN*/}
      <div className="container text-center">
        <h2 className="text" style={{ fontWeight: "bold" }}>
          Explore Programs
        </h2>

        <MDBTabs pills className="mb-3">
          <MDBTabsItem style={{ marginRight: "10px" }}>
            <MDBTabsLink
              onClick={() => handleIconsClick("pill1")}
              active={iconsActive === "pill1"}
              style={{
                background: "#007BFF",
                borderRadius: "25px",
                color: "white",
              }}
            >
              <MDBIcon fas icon="chart-pie" className="me-2" /> BE/BTech
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem style={{ marginRight: "10px" }}>
            <MDBTabsLink
              onClick={() => handleIconsClick("pill2")}
              active={iconsActive === "pill2"}
              style={{
                background: "#007BFF",
                borderRadius: "25px",
                color: "white",
              }}
            >
              <MDBIcon fas icon="chart-line" className="me-2" /> MBA/PGDM
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem style={{ marginRight: "10px" }}>
            <MDBTabsLink
              onClick={() => handleIconsClick("pill3")}
              active={iconsActive === "pill3"}
              style={{
                background: "#007BFF",
                borderRadius: "25px",
                color: "white",
              }}
            >
              <MDBIcon fas icon="cogs" className="me-2" /> ME/MTech
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem style={{ marginRight: "10px" }}>
            <MDBTabsLink
              onClick={() => handleIconsClick("pill4")}
              active={iconsActive === "pill4"}
              style={{
                background: "#007BFF",
                borderRadius: "25px",
                color: "white",
              }}
            >
              <MDBIcon fas icon="cogs" className="me-2" /> Nursing
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem style={{ marginRight: "10px" }}>
            <MDBTabsLink
              onClick={() => handleIconsClick("pill5")}
              active={iconsActive === "pill5"}
              style={{
                background: "#007BFF",
                borderRadius: "25px",
                color: "white",
              }}
            >
              <MDBIcon fas icon="cogs" className="me-2" /> BBA/BBM
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem style={{ marginRight: "10px" }}>
            <MDBTabsLink
              onClick={() => handleIconsClick("pill6")}
              active={iconsActive === "pill6"}
              style={{
                background: "#007BFF",
                borderRadius: "25px",
                color: "white",
              }}
            >
              <MDBIcon fas icon="cogs" className="me-2" /> BCA
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem style={{ marginRight: "10px" }}>
            <MDBTabsLink
              onClick={() => handleIconsClick("pill7")}
              active={iconsActive === "pill7"}
              style={{
                background: "#007BFF",
                borderRadius: "25px",
                color: "white",
              }}
            >
              <MDBIcon fas icon="cogs" className="me-2" /> B.COM
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          {/* BE/BTECH */}
          <MDBTabsPane open={iconsActive === "pill1"}>
            <MDBContainer>
              <MDBRow className="gx-3">
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>Ranking</MDBCardTitle>
                      <MDBCardText>
                        College ranked based on real data
                      </MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Indiatoday
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Outlook
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        NIRF
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        The Week
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>FIND COLLEGES</MDBCardTitle>
                      <MDBCardText>Discover 19000+ colleges.</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        B'Tech
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        M'Tech
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        MBA/PGDM
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Best BTech Private College
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>COMPARE COLLEGES</MDBCardTitle>
                      <MDBCardText>
                        Compare on the basis of rank, fees.
                      </MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        IIT-Madras
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        IIT-Delhi
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        IIT-Madras
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        IIT-Bombay
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
              <br />
              <MDBRow className="gx-3">
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>EXAMS</MDBCardTitle>
                      <MDBCardText>Know more about your exams</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        B.Com
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        B.Sc
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Nursing
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        B'Tech/M'Tech
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>COLLEGE PREDICATOR</MDBCardTitle>
                      <MDBCardText>Know your college admission.</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        NEET
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        NMAT
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        GATE
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        JEE-Advance
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>COURSE FINDER</MDBCardTitle>
                      <MDBCardText>Discover top courses in Indian</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        NEET
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        NMAT
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        GATE
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        JEE-Advance
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBTabsPane>
          <MDBTabsPane open={iconsActive === "pill2"}>
            {" "}
            <MDBContainer>
              <MDBRow className="gx-3">
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>Ranking</MDBCardTitle>
                      <MDBCardText>
                        College ranked based on real data
                      </MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Indiatoday
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Outlook
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        NIRF
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        SMC
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>FIND COLLEGES</MDBCardTitle>
                      <MDBCardText>Discover 19000+ colleges.</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Best MBA College in India
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Best MBA College in OJEE
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Best MBA College in XAT
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Best MBA College in India CMAT
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>COMPARE COLLEGES</MDBCardTitle>
                      <MDBCardText>
                        Compare on the basis of rank, fees.
                      </MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        IIT-Calcutta
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        IIT-Ahemdabad
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        IIT-SJMSOM
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        DMS-IITD
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
              <br />
              <MDBRow className="gx-3">
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>EXAMS</MDBCardTitle>
                      <MDBCardText>Know more about your exams</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        CAT
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        MAT
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        NMAT
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        CMAT
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>COLLEGE PREDICATOR</MDBCardTitle>
                      <MDBCardText>Know your college admission.</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        CAT
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        NMAT
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        GATE
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        JEE-Advance
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>COURSE FINDER</MDBCardTitle>
                      <MDBCardText>Discover top courses in Indian</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Finance
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Operation Management
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Data Science
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Artificial Intelligence
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBTabsPane>
          <MDBTabsPane open={iconsActive === "pill3"}>
            {" "}
            <MDBContainer>
              <MDBRow className="gx-3">
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>Ranking</MDBCardTitle>
                      <MDBCardText>
                        College ranked based on real data
                      </MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        IIRF
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        IndiaToday
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        NIRF
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Outlook
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>FIND COLLEGES</MDBCardTitle>
                      <MDBCardText>Discover 19000+ colleges.</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Best MBA College in Kolkata
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Best MBA College in Lucknow
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Best MBA College in Ahemdabad
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Best MBA College in India Chennai
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>COMPARE COLLEGES</MDBCardTitle>
                      <MDBCardText>
                        Compare on the basis of rank, fees.
                      </MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        JIPMER
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        KGMU
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        JAMIA
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        MANIPAL
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
              <br />
              <MDBRow className="gx-3">
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>EXAMS</MDBCardTitle>
                      <MDBCardText>Know more about your exams</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        NEET
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        KEAM
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        JIPMER
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        MANIPAL
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>COLLEGE PREDICATOR</MDBCardTitle>
                      <MDBCardText>Know your college admission.</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        NEET
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        KEAM
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        UGNAC
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Punjabi NEET Conselling
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>COURSE FINDER</MDBCardTitle>
                      <MDBCardText>Discover top courses in Indian</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Finance
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Operation Management
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Data Science
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Artificial Intelligence
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBTabsPane>
          <MDBTabsPane open={iconsActive === "pill4"}>
            {" "}
            <MDBContainer>
              <MDBRow className="gx-3">
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>Ranking</MDBCardTitle>
                      <MDBCardText>
                        College ranked based on real data
                      </MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        NIRF
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        IIRF
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Indiatoday
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        SMC
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>FIND COLLEGES</MDBCardTitle>
                      <MDBCardText>Discover 19000+ colleges.</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Best IIT For M'Tech
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Best M'Tech College in Bangalore
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Best M'Tech College in Kanpur
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Best M'Tech College in Delhi
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>COMPARE COLLEGES</MDBCardTitle>
                      <MDBCardText>
                        Compare on the basis of rank, fees.
                      </MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Agriculture
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Mechanical
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Civil
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Electrical
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
              <br />
              <MDBRow className="gx-3">
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>EXAMS</MDBCardTitle>
                      <MDBCardText>Know more about your exams</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        GATE
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        OJEE
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Ts PGECET
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        AP-PGECET
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>COLLEGE PREDICATOR</MDBCardTitle>
                      <MDBCardText>Know your college admission.</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        GATE
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        IPU
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        CUSAT
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        MET
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>COURSE FINDER</MDBCardTitle>
                      <MDBCardText>Discover top courses in Indian</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Finance
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Operation Management
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Data Science
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Artificial Intelligence
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBTabsPane>
          <MDBTabsPane open={iconsActive === "pill5"}>
            {" "}
            <MDBContainer>
              <MDBRow className="gx-3">
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>Ranking</MDBCardTitle>
                      <MDBCardText>
                        College ranked based on real data
                      </MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        IndiaToday
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Outlook
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        The Week
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        SMC
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>FIND COLLEGES</MDBCardTitle>
                      <MDBCardText>Discover 19000+ colleges.</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Best B.Sc IT College
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Best B.Sc Forensic College
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Best B.Sc Science College
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Best B.Sc CS College
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>COMPARE COLLEGES</MDBCardTitle>
                      <MDBCardText>
                        Compare on the basis of rank, fees.
                      </MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Chandigarh
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Lovely Professional
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Pune
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Bangalore
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
              <br />
              <MDBRow className="gx-3">
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>EXAMS</MDBCardTitle>
                      <MDBCardText>Know more about your exams</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        TS|EAMCET
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        KCET
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        NPAT
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        NEST
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>COLLEGE PREDICATOR</MDBCardTitle>
                      <MDBCardText>Know your college admission.</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        JEE-Main
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        AP|EAPCET
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        OJEE
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        KCET
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>COURSE FINDER</MDBCardTitle>
                      <MDBCardText>Discover top courses in Indian</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Computer
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Media Studies
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Science
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Mathmatics
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBTabsPane>
          <MDBTabsPane open={iconsActive === "pill6"}>
            {" "}
            <MDBContainer>
              <MDBRow className="gx-3">
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>Ranking</MDBCardTitle>
                      <MDBCardText>
                        College ranked based on real data
                      </MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        IndiaToday
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Outlook
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        The Week
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        SMC
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>FIND COLLEGES</MDBCardTitle>
                      <MDBCardText>Discover 19000+ colleges.</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Best BA College in India
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Best BA College in Delhi
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Best BA College in Noida
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Best BA College in Bangalore
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>COMPARE COLLEGES</MDBCardTitle>
                      <MDBCardText>
                        Compare on the basis of rank, fees.
                      </MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Bhairab Ganguly College
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Lovely Brabourne College
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Bhairab Ganguly College
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Lovely Brabourne College
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
              <br />
              <MDBRow className="gx-3">
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>EXAMS</MDBCardTitle>
                      <MDBCardText>Know more about your exams</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        BHU|UET
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        DAVV|CET
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        CUET
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        GLAET
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>COLLEGE PREDICATOR</MDBCardTitle>
                      <MDBCardText>Know your college admission.</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        IPU|CET
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        DAVV|CET
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        CUET
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        DAVV|CET
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>COURSE FINDER</MDBCardTitle>
                      <MDBCardText>Discover top courses in Indian</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Computer
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Media Studies
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Science
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Mathmatics
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBTabsPane>
          <MDBTabsPane open={iconsActive === "pill7"}>
            {" "}
            <MDBContainer>
              <MDBRow className="gx-3">
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>Ranking</MDBCardTitle>
                      <MDBCardText>
                        College ranked based on real data
                      </MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        IndiaToday
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Outlook
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        The Week
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        SMC
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>FIND COLLEGES</MDBCardTitle>
                      <MDBCardText>Discover 19000+ colleges.</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Best B.Com College in India
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Best B.Com College in Bangalore
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Best B.Com College in Delhi
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Best B.Com College in Noida
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>COMPARE COLLEGES</MDBCardTitle>
                      <MDBCardText>
                        Compare on the basis of rank, fees.
                      </MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        KMC
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        B.Com
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        KMC
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        B.Com
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
              <br />
              <MDBRow className="gx-3">
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>EXAMS</MDBCardTitle>
                      <MDBCardText>Know more about your exams</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        NPAT
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        BHU|UET
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        CUSAT|CAT
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        DAVV|CET
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>COLLEGE PREDICATOR</MDBCardTitle>
                      <MDBCardText>Know your college admission.</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        IPU|CET
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        DAVV|CET
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        CUET
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        DAVV|CET
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard style={cardStyles}>
                    <MDBCardBody>
                      <MDBCardTitle>COURSE FINDER</MDBCardTitle>
                      <MDBCardText>Discover top courses in Indian</MDBCardText>
                    </MDBCardBody>
                    <MDBListGroup flush>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Computer
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Accounting
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Finance
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Banking
                      </a>
                    </MDBListGroup>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBTabsPane>
        </MDBTabsContent>
      </div>
      <br />
      <br />
      {/* EXPLORE PROGRAM CLOSE */}
      {/* LATEST NOTIFICATION OPEN */}
      <div className="container text-center">
        <h2 className="text" style={{ fontWeight: "bold" }}>
          Latest Notification{" "}
        </h2>
        <section className="featured-post">
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                  CUET UG 2024 Admit Card Soon, Check link here.
                  </Card.Title>
                  <img
                    src={ntalogo}
                    alt="Avatar"
                    className="card-avatar"
                    style={{ width: "30px", height: "30px" }}
                  />
                  <Card.Subtitle className="mb-2 text-muted">
                    Exam ⏰ May 09, 2024
                  </Card.Subtitle>
                  <Card.Text style={{ fontSize: "15px" }}>
                  NTA CUET UG 2024 admit card is expected 
                  soon at the official website 
                  exams.nta.ac.in/CUET-UG/.  Check CUET 2024 
                  city intimation slip link here.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                  IPU CET 2024 Result Released, Download Here!
                  </Card.Title>
                  <img
                    src={IPULogo}
                    alt="Avatar"
                    className="card-avatar"
                    style={{ width: "30px", height: "30px" }}
                  />
                  <Card.Subtitle className="mb-2 text-muted">
                   Exam ⏰ May 09, 2024
                  </Card.Subtitle>
                  <Card.Text style={{ fontSize: "15px" }}>
                  IPU CET 2024 result has been released 
                  on the official website. To download 
                  the result you need registration number 
                  and date of birth to login to your portal.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                  JEE Advanced Expected and Previous Years’ 
                  Cut off.
                  </Card.Title>
                  <img
                    src={gatelogo}
                    alt="Avatar"
                    className="card-avatar"
                    style={{ width: "30px", height: "30px" }}
                  />
                  <Card.Subtitle className="mb-2 text-muted">
                    Exam ⏰ May 09, 2024
                  </Card.Subtitle>
                  <Card.Text style={{ fontSize: "15px" }}>
                  JEE Advanced Cutoff 2024 by the candidates 
                  to qualify for the rank list.JEE Advanced 2024 is 35% for CRL, 
                  31.5% for OBC-NCL/ EWS and 17.5% for SC/ ST/ PwD.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                  GGSIPU has Released IPUCET 2024 Results; Check Here
                  </Card.Title>
                  <img
                    src={logo}
                    alt="Avatar"
                    className="card-avatar"
                    style={{ width: "30px", height: "30px" }}
                  />
                  <Card.Subtitle className="mb-2 text-muted">
                    Exam ⏰ May 09, 2024
                  </Card.Subtitle>
                  <Card.Text style={{ fontSize: "15px" }}>
                  Guru Gobind Singh Indraprastha University
                   (GGSIPU) has released the IPU CET 2024 
                   result on May 8, for some courses on the 
                   official website. Candidates can check the 
                   result of IPU CET 2024.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                  COMEDK UGET 2024 Admit Card Released, Link here.
                  </Card.Title>
                  <img
                    src={comedklogo}
                    alt="Avatar"
                    className="card-avatar"
                    style={{ width: "30px", height: "30px" }}
                  />
                  <Card.Subtitle className="mb-2 text-muted">
                    Admission ⏰ May 07, 2024
                  </Card.Subtitle>
                  <Card.Text style={{ fontSize: "15px" }}>
                  COMEDK UGET 2024 admit card is now available
                   online. Candidates can download from the 
                   official website- comedk.org.This significant milestone 
                   marks the next step in your journey towards.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                  CUET UG 2024 city intimation out, Check city slip.
                  </Card.Title>
                  <img
                    src={ntalogo}
                    alt="Avatar"
                    className="card-avatar"
                    style={{ width: "30px", height: "30px" }}
                  />
                  <Card.Subtitle className="mb-2 text-muted">
                    Admission ⏰ May 06, 2024
                  </Card.Subtitle>
                  <Card.Text style={{ fontSize: "15px" }}>
                  NTA has released CUET UG City Slip 2024 
                  for exams scheduled on May 15, 16, 17 and 18.
                   The city intimation slip for CBT mode exams 
                   will be released soon. Check CUET 2024 city 
                   intimation slip link here.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      </div>
      <br />
      <br />
      {/* LATEST NOTIFICATION CLOSE */}
      {/* TOP 10 COLLEGES OEPN */}
      <div className="container text-center">
        <h2 className="text" style={{ fontWeight: "bold" }}>
          Top 10 Colleges
        </h2>

        <MDBTabs pills className="mb-3">
          <MDBTabsItem style={{ marginRight: "10px" }}>
            <MDBTabsLink
              onClick={() => handleIconsClick("pill1")}
              active={iconsActive === "pill1"}
              style={{
                background: "#007BFF",
                borderRadius: "25px",
                color: "white",
              }}
            >
              <MDBIcon fas icon="chart-pie" className="me-2" /> BE/BTech
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem style={{ marginRight: "10px" }}>
            <MDBTabsLink
              onClick={() => handleIconsClick("pill2")}
              active={iconsActive === "pill2"}
              style={{
                background: "#007BFF",
                borderRadius: "25px",
                color: "white",
              }}
            >
              <MDBIcon fas icon="chart-line" className="me-2" /> MBA/PGDM
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem style={{ marginRight: "10px" }}>
            <MDBTabsLink
              onClick={() => handleIconsClick("pill3")}
              active={iconsActive === "pill3"}
              style={{
                background: "#007BFF",
                borderRadius: "25px",
                color: "white",
              }}
            >
              <MDBIcon fas icon="cogs" className="me-2" /> ME/MTech
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem style={{ marginRight: "10px" }}>
            <MDBTabsLink
              onClick={() => handleIconsClick("pill4")}
              active={iconsActive === "pill4"}
              style={{
                background: "#007BFF",
                borderRadius: "25px",
                color: "white",
              }}
            >
              <MDBIcon fas icon="cogs" className="me-2" /> Nursing
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem style={{ marginRight: "10px" }}>
            <MDBTabsLink
              onClick={() => handleIconsClick("pill5")}
              active={iconsActive === "pill5"}
              style={{
                background: "#007BFF",
                borderRadius: "25px",
                color: "white",
              }}
            >
              <MDBIcon fas icon="cogs" className="me-2" /> BBA/BBM
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem style={{ marginRight: "10px" }}>
            <MDBTabsLink
              onClick={() => handleIconsClick("pill6")}
              active={iconsActive === "pill6"}
              style={{
                background: "#007BFF",
                borderRadius: "25px",
                color: "white",
              }}
            >
              <MDBIcon fas icon="cogs" className="me-2" /> BCA
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem style={{ marginRight: "10px" }}>
            <MDBTabsLink
              onClick={() => handleIconsClick("pill7")}
              active={iconsActive === "pill7"}
              style={{
                background: "#007BFF",
                borderRadius: "25px",
                color: "white",
              }}
            >
              <MDBIcon fas icon="cogs" className="me-2" /> B.COM
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          {/* BE/BTECH */}
          <MDBTabsPane open={iconsActive === "pill1"}>
            <div>
              <table
                className="table align-middle mb-0 bg-white"
                style={{ border: "1px solid black" }}
              >
                <thead className="bg-light">
                  <tr>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Rank
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      College
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Ranking
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Cutoff
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Application
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Enquiry
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/*1*/}

                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #1
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/col30730.png?h=30&amp;w=30&amp;mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            IIM Bangalore - Indian Institute of Management
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Bangalore,Karnataka | ⭐10/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #1 out of 50 in india
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        CAT 2022 cut off 99
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*2*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #2
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=30&amp;w=30&amp;mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            IIT Madras - Indian Institute of Technology - [IITM]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Chennai,Tamil Nadu | ⭐10/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #15 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 144
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>14 Jan - 30 Jul 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*3*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #3
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/col30730.png?h=30&amp;w=30&amp;mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            IIT Kharagpur - Indian Institute of Technology -
                            [IITKGP]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Kharagpur,West Bengal | ⭐10/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #6 out of 50 in india 2019
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 261
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>19 May - 30 Jul 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*4*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #4
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/col27802.gif?h=30&amp;w=30&amp;mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            IIT Delhi - Indian Institute of Technology [IITD]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            New Delhi,Delhi NCR | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #9 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 115
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>3 Feb - 11 Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*5*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #5
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=30&amp;w=30&amp;mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            IIT Bombay - Indian Institute of Technology - [IITB]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Mumbai,Maharashtra | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #10 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 66
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*6*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #6
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1408554560logo.png?h=30&amp;w=30&amp;mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            IIT Kanpur - Indian Institute of Technology
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Kanpur,Uttar Pradesh | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #22 out of 50 in india
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 215
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*7*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #7
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1431775682rajiv.jpg?h=30&amp;w=30&amp;mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            IIT Roorkee - Indian Institute of Technology -
                            [IITR]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Roorkee,Uttarakhand | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #11 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 396
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*8*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #8
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1589790676112018648848892482726766654702028085722509n.jpg?h=30&amp;w=30&amp;mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            BITS Pilani (Pilani Campus)
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Pilani,Rajasthan | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/the_week1569844170.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #5 out of 34 in india
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2021
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        BITSAT 2022 Cut off 125
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*9*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #9
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1394864902Indian Institute of Technology - IIT Guwahati.png?h=30&amp;w=30&amp;mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            IIT Guwahati - Indian Institute of Technology -
                            [IITG]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Guwahati,Assam | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/the_week1569844170.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #7 out of 34 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2021
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 601
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*10*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #10
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/149154157555.jpg?h=30&amp;w=30&amp;mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            All India Institute of Medical Sciences - [AIIMS]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            New Delhi,Delhi NCR | ⭐9.8/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #6 out of 200 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2023
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        NEET 2022 Cut off 55
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </MDBTabsPane>
          <MDBTabsPane open={iconsActive === "pill2"}>
            {" "}
            <div>
              <table
                className="table align-middle mb-0 bg-white"
                style={{ border: "1px solid black" }}
              >
                <thead className="bg-light">
                  <tr>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Rank
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      College
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Ranking
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Cutoff
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Application
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Enquiry
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/*1*/}

                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #1
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1527235209article.png?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            IIT Roorkee - Indian Institute of Technology -
                            [IITR]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Ahemdabad,Gujrat | ⭐10/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #1 out of 50 in india
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        CAT 2022 cut off 99
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*2*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #2
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/col30730.png?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            IIM Bangalore - Indian Institute of Management
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Bangalore,Karnataka | ⭐10/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #15 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 144
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>14 Jan - 30 Jul 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*3*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #3
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1488950580d2.png?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Indian Institute of Management - [IIMC]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Kolkata,West Bengal | ⭐10/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #6 out of 50 in india 2019
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 261
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>19 May - 30 Jul 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*4*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #4
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/14812651193.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            XLRI - Xavier Labour Relations Institute
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Jamshedpur,Jharkhand | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #9 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 115
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>3 Feb - 11 Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*5*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #5
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1389689790logo.gif?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            FMS Delhi Faculty of Management Studies
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            New Delhi,Delhi NCR | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #10 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 66
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*6*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #6
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1667475461Untitled.png?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            SP Jain [SPJIMR]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Mumbai,Maharastra | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #22 out of 50 in india
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 215
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*7*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #7
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1408968357iiml.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Indian Institute of Management IIML
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Lucknow,Uttar Pradesh | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #11 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 396
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*8*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #8
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/15040011233170612211130512732232635840n.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Indian Institute of Management - [IIM]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Indore,Madhya Pradesh | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/the_week1569844170.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #5 out of 34 in india
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2021
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        BITSAT 2022 Cut off 125
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*9*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #9
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1408967753iim.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Indian Institute of Management - [IIMK]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Kozhikode,Kerala | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/the_week1569844170.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #7 out of 34 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2021
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 601
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*10*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #10
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1593019342Logo.png?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            JBIMS
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Mumbai,Maharastra | ⭐9.8/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #6 out of 200 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2023
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        NEET 2022 Cut off 55
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </MDBTabsPane>
          <MDBTabsPane open={iconsActive === "pill3"}>
            {" "}
            <div>
              <table
                className="table align-middle mb-0 bg-white"
                style={{ border: "1px solid black" }}
              >
                <thead className="bg-light">
                  <tr>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Rank
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      College
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Ranking
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Cutoff
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Application
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Enquiry
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/*1*/}

                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #1
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            IIT Madras - Indian Institute of Technology - [IITM]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Chennai,TamilNadu | ⭐10/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #1 out of 50 in india
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        CAT 2022 cut off 99
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*2*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #2
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/col27802.gif?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            IIT Delhi - Indian Institute of Technology [IITD]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            New Delhi,Delhi NCR | ⭐10/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #15 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 144
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>14 Jan - 30 Jul 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*3*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #3
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            IIT Bombay - Indian Institute of Technology - [IITB]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Mumbai,Maharastra | ⭐10/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #6 out of 50 in india 2019
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 261
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>19 May - 30 Jul 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*4*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #4
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1489041138e2.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            IIT Kharagpur - Indian Institute of Technology -
                            [IITKGP]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Kharagpur,West Bangal | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #9 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 115
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>3 Feb - 11 Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*5*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #5
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1408554560logo.png?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            IIT Kanpur - Indian Institute of Technology - [IITK]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Kanpur,Uttar Pradesh | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #10 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 66
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*6*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #6
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1431775682rajiv.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            IIT Roorkee - Indian Institute of Technology -
                            [IITR]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Roorkee,Uttarakhand | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #22 out of 50 in india
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 215
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*7*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #7
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1589790676112018648848892482726766654702028085722509n.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            BITS Pilani (Pilani Campus)
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Pilani,Rajasthan | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #11 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 396
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*8*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #8
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1394864902Indian Institute of Technology - IIT Guwahati.png?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            IIT Guwahati - Indian Institute of Technology -
                            [IITG]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Guwahati ,Assam | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/the_week1569844170.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #5 out of 34 in india
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2021
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        BITSAT 2022 Cut off 125
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*9*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #9
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/166089612015088476701200pxIndianInstituteofTechnologyHyderabadlogo.png?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            IIT Hyderabad - Indian Institute of Technology -
                            [IITH]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Hyderabad,Telangana | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/the_week1569844170.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #7 out of 34 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2021
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 601
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*10*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #10
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/13941065084.png?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            College of Engineering, Anna University - [CEG]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Chennai,TamilNadu | ⭐9.8/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #6 out of 200 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2023
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        NEET 2022 Cut off 55
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </MDBTabsPane>
          <MDBTabsPane open={iconsActive === "pill4"}>
            {" "}
            <div>
              <table
                className="table align-middle mb-0 bg-white"
                style={{ border: "1px solid black" }}
              >
                <thead className="bg-light">
                  <tr>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Rank
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      College
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Ranking
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Cutoff
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Application
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Enquiry
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/*1*/}

                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #1
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/149154157555.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            All India Institute of Medical Sciences - [AIIMS]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            New Delhi,Delhi NCR | ⭐10/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #1 out of 50 in india
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        CAT 2022 cut off 99
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*2*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #2
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1430545237PGIMER Chandigarh.jpeg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Post Graduate Institute of Medical Education &
                            Research - [PGIMER]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Chandigarh, Chandigarh | ⭐10/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #15 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 144
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>14 Jan - 30 Jul 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*3*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #3
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1458024878logo.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Christian Medical College - [CMC]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Vellore,TamilNadu | ⭐10/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #6 out of 50 in india 2019
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 261
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>19 May - 30 Jul 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*4*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #4
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/col10944.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Sanjay Gandhi Postgraduate Institute of Medical
                            Sciences - [SGPGIMS]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Lucknow,Uttar Pradesh | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #9 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 115
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>3 Feb - 11 Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*5*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #5
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/15577242161545129260LPUseal.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Lovely Professional University - [LPU]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Jalandar,Punjab | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #10 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 66
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*6*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #6
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1613996461logo1.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Chandigarh University - [CU]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Chandigarh,Chandigarh | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #22 out of 50 in india
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 215
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*7*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #7
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1434627772BHU.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Banaras Hindu University - [BHU]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            varanasi,Uttar Pradesh | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #11 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 396
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*8*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #8
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1568873405jipmerlogo.png?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Jawaharlal Institute of Post Graduate Medical
                            Education and Research - [JIPMER]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Pondicherry,Puducherry | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/the_week1569844170.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #5 out of 34 in india
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2021
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        BITSAT 2022 Cut off 125
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*9*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #9
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1498220102logo.png?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            King George's Medical University - [KGMU]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Lucknow,Uttar Pradesh | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/the_week1569844170.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #7 out of 34 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2021
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 601
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*10*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #10
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1464869465LOGO.png?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Guru Gobind Singh Indraprastha University - [GGSIPU]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            New Delhi,Delhi NCR | ⭐9.8/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #6 out of 200 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2023
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        NEET 2022 Cut off 55
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </MDBTabsPane>
          <MDBTabsPane open={iconsActive === "pill5"}>
            {" "}
            <div>
              <table
                className="table align-middle mb-0 bg-white"
                style={{ border: "1px solid black" }}
              >
                <thead className="bg-light">
                  <tr>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Rank
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      College
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Ranking
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Cutoff
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Application
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Enquiry
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/*1*/}

                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #1
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1473772577logo.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            TAPMI Manipal
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Manipal,Karnataka | ⭐10/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #1 out of 50 in india
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        CAT 2022 cut off 99
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*2*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #2
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1506323241Logo.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Narsee Monjee Institute of Management Studies -
                            [NMIMS University]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Bangalore,Karnataka | ⭐10/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #15 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 144
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>14 Jan - 30 Jul 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*3*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #3
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1696856312WoxsenlogoCD.png?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Woxsen School of Business - [WSB]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Hyderabad,Telangana | ⭐10/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #6 out of 50 in india 2019
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 261
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>19 May - 30 Jul 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*4*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #4
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1569389684IBSLogowithR1.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            ICFAI Business School - [IBS]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Hyderabad,Telanagana| ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #9 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 115
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>3 Feb - 11 Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*5*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #5
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1650620962Management01.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Institute of Management, Nirma university
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Ahemdabad,Gujrat | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #10 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 66
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*6*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #6
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/14973308071413537745logo.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Amity University
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Noida,Uttar Pradesh | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #22 out of 50 in india
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 215
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*7*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #7
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/15577242161545129260LPUseal.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Lovely Professional University - [LPU]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Jalandar,Punjab | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #11 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 396
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*8*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #8
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1491558776logo.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Jamia Millia Islamia University-[JMI]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            New Delhi,Delhi NCR | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/the_week1569844170.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #5 out of 34 in india
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2021
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        BITSAT 2022 Cut off 125
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*9*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #9
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1550567037UPESLogo1.png?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            University of Petroleum and Energy Studies - [UPES]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Dehradun,Uttrakhand | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/the_week1569844170.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #7 out of 34 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2021
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 601
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*10*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #10
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1613996461logo1.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Chandigarh University - [CU]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Chandigarh, Chandigarh | ⭐9.8/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #6 out of 200 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2023
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        NEET 2022 Cut off 55
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </MDBTabsPane>
          <MDBTabsPane open={iconsActive === "pill6"}>
            {" "}
            <div>
              <table
                className="table align-middle mb-0 bg-white"
                style={{ border: "1px solid black" }}
              >
                <thead className="bg-light">
                  <tr>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Rank
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      College
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Ranking
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Cutoff
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Application
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Enquiry
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/*1*/}

                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #1
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1505110433fvvvvvvvvvvvvvvvvvvvvvvvvvvvvv.png?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Christ University
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Bangalore,Karnataka | ⭐10/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #1 out of 50 in india
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        CAT 2022 cut off 99
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*2*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #2
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1475304257PUNI.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Presidency College
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Bangalore,Karnataka | ⭐10/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #15 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 144
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>14 Jan - 30 Jul 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*3*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #3
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/15807262501569304335phpHattQO.png?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            SRM Institute of Science and Technology - [SRMIST]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Chennai,TamilNadu | ⭐10/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #6 out of 50 in india 2019
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 261
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>19 May - 30 Jul 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*4*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #4
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1506604442download.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Symbiosis Institute of Computer Studies and Research
                            - [SICSR]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Pune ,Maharashtra | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #9 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 115
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>3 Feb - 11 Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*5*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #5
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1453696337logoooo.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Loyola College
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Chennai,TamilNadu | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #10 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 66
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*6*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #6
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/col32863.png?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            GLS Institute of Computer Application
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Ahemdabad,Gujrat | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #22 out of 50 in india
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 215
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*7*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #7
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1604923303Logo.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Vellore Institute of Technology - [VIT University]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Vellore,TamilNadu | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #11 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 396
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*8*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #8
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/15018524541472038707lgg.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Institute of Business Studies and Research - [IBSAR]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Navi Mumbai,Maharastra | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/the_week1569844170.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #5 out of 34 in india
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2021
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        BITSAT 2022 Cut off 125
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*9*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #9
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1426676899xica-logo1.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Xavier's Institute of Computer Application
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Ahemdabad,Gujrat | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/the_week1569844170.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #7 out of 34 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2021
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 601
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*10*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #10
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1605960024Logo.png?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            DAV College - [DAVC]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Chandigarh ,Chandigarh | ⭐9.8/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #6 out of 200 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2023
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        NEET 2022 Cut off 55
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </MDBTabsPane>
          <MDBTabsPane open={iconsActive === "pill7"}>
            {" "}
            <div>
              <table
                className="table align-middle mb-0 bg-white"
                style={{ border: "1px solid black" }}
              >
                <thead className="bg-light">
                  <tr>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Rank
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      College
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Ranking
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Cutoff
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Application
                    </th>
                    <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                      Enquiry
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/*1*/}

                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #1
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/14916429701410765919srcclogo.png?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Shri Ram College of Commerce - [SRCC]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            New Delhi,Delhi NCR | ⭐10/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #1 out of 50 in india
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        CAT 2022 cut off 99
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*2*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #2
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1559556886lsrlogo9.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Lady Shri Ram College for Women - [LSR]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            New Delhi,Delhi NCR | ⭐10/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #15 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 144
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>14 Jan - 30 Jul 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*3*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #3
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1453696337logoooo.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Loyola College
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Chennai,TamilNadu | ⭐10/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #6 out of 50 in india 2019
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 261
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>19 May - 30 Jul 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*4*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #4
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1504695740logo.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            St. Xavier's College
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Mumbai ,Maharastra | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #9 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 115
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>3 Feb - 11 Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*5*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #5
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/col1904.jpg?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Hindu College
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            New Delhi,Delhi NCR | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #10 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 66
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*6*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #6
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1491982583logo..png?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Hansraj College - [HRC]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            New Delhi,Delhi NCR | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #22 out of 50 in india
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 215
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*7*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #7
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1393668198Madras Christian College.png?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Madras Christian College - [MCC]
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Chennai,TamilNadu | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #11 out of 50 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2019
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 396
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*8*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #8
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1505110433fvvvvvvvvvvvvvvvvvvvvvvvvvvvvv.png?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Christ University
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Bangalore,Karnataka | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/the_week1569844170.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #5 out of 34 in india
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2021
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        BITSAT 2022 Cut off 125
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*9*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #9
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1565326661ezgif.comresize4.png?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Narsee Monjee College of Commerce and Economics
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Mumbai,Maharastra | ⭐9.9/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/the_week1569844170.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #7 out of 34 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2021
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        JEE-Advanced 2023 Cut off 601
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>

                  {/*10*/}
                  <tr>
                    <td>
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        #10
                      </p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/logos/1416307992naac.png?h=30&w=30&mode=stretch"
                          loading="lazy"
                          style={{ width: 45, height: 45 }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p
                            className="fw-bold mb-1"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            RA Podar College of Commerce and Economics
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px" }}
                          >
                            Mumbai ,Maharastra | ⭐9.8/10
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&amp;w=39.2&amp;mode=stretch"
                          loading="lazy"
                          style={{
                            width: "39.2px",
                            height: "20px",
                            maxHeight: "20px",
                            maxWidth: "39.2px",
                            overflow: "hidden",
                            borderradius: "50%",
                          }}
                        />
                        <div className="ms-3">
                          <p
                            className="fw-normal mb-1"
                            style={{ fontSize: "16px" }}
                          >
                            #6 out of 200 in India
                          </p>
                          <p
                            className="text-muted mb-0"
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            2023
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p
                        className="fe-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        NEET 2022 Cut off 55
                      </p>
                    </td>
                    <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                    <td>
                      <a
                        className="btn btn-primary"
                        href="/enqueryform"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Enquiry
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </MDBTabsPane>
        </MDBTabsContent>
      </div>
      <br />
      {/* TOP 10 COLLEGES CLOSE */}
      {/* TOP UNIVERSITIES / COLLEGES OPEN */}
      <div className="container text-center">
        <h2 className="text" style={{ fontWeight: "bold" }}>
          Top 10 Colleges
        </h2>
        <br />
        <MDBContainer>
          <MDBRow>
            <MDBCol size="3">
              <MDBCard>
                <MDBCardImage
                  src={asbm}
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>ASBM University</MDBCardTitle>
                  <MDBCardText>
                  Ranked 1 out of 50 Financial 
                  Express,Ranked 11 out of 312 
                  NIRF Innovation, Ranked 1001 
                  out of 1799 THE, Ranked 384 out 
                  of 1400 QS, Ranked 8 out of 15 
                  Outlook, Ranked 1106 out of 2000.
                  </MDBCardText>
                  <MDBBtn href="#">Enquiry</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol size="3">
              <MDBCard>
                <MDBCardImage
                  src={lovely}
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>Lovely Professional University</MDBCardTitle>
                  <MDBCardText>
                  Ranked 1 out of 50 Financial Express,Ranked 11 out
                  of 312 NIRF Innovation, Ranked 1001 out of 1799 THE,
                  Ranked 384 out of 1400 QS, Ranked 8 out of 15
                  Outlook.
                  </MDBCardText>
                  <MDBBtn href="#">Enquiry</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol size="3">
              <MDBCard>
                <MDBCardImage
                  src={parul}
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>Parul University</MDBCardTitle>
                  <MDBCardText>
                  Ranked 44 out of 146 Indiatoday, Ranked 40 out of
                  110 Outlook, Ranked 62 out of 101 TOI, Ranked 151
                  out of 200 NIRF, Ranked 80 out of 171 IIRF, Ranked
                  11 out of 312 NIRF Innovation .
                  </MDBCardText>
                  <MDBBtn href="#">Enquiry</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol size="3">
              <MDBCard>
                <MDBCardImage
                  src={kiit}
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>KIIT School of Management</MDBCardTitle>
                  <MDBCardText>
                  Ranked 15 out of 120 Indiatoday, Ranked 2 out of 101
                  TOI,Ranked 11 out of 312 NIRF Innovation, Ranked
                  1001 out of 1799 THE, Ranked 384 out of 1400 QS.
                  </MDBCardText>
                  <MDBBtn href="#">Enquiry</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <br />
          <MDBRow>
          <MDBCol size="3">
            <MDBCard>
              <MDBCardImage
                src={lexicon}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>Lexicon MILE</MDBCardTitle>
                <MDBCardText>
                Ranked 1 out of 50 Financial ,Ranked 11 out of 312
                NIRF Innovation, Ranked 1001 out of 1799 THE, Ranked
                384 out of 1400 QS, Ranked 8 out of 15 Outlook,
                Ranked 1106 out of 2000 US News, Ranked 937 out of
                2000 CWUR Ranked 8 out of 15.
                </MDBCardText>
                <MDBBtn href="#">Enquiry</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol size="3">
            <MDBCard>
              <MDBCardImage
                src={chandigarh}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>Chandigarh University</MDBCardTitle>
                <MDBCardText>
                Ranked 1 out of 50 Financial Express,Ranked 11 out
                of 312 NIRF Innovation, Ranked 1001 out of 1799 THE,
                Ranked 384 out of 1400 QS, Ranked 8 out of 15
                Outlook, Ranked 1106 out of 2000 US News, Ranked 937
                out of 2000 CWUR.
                </MDBCardText>
                <MDBBtn href="#">Enquiry</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol size="3">
            <MDBCard>
              <MDBCardImage
                src={iitmadras}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>IIT Madras</MDBCardTitle>
                <MDBCardText>
                Ranked 1 out of 50 Financial Express, Ranked 11 out
                of 312 NIRF Innovation, Ranked 1001 out of 1799 THE,
                Ranked 384 out of 1400 QS, Ranked 8 out of 15
                Outlook, Ranked 1106 out of 2000 US News, Ranked 937
                out of 2000 CWUR.
                </MDBCardText>
                <MDBBtn href="#">Enquiry</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol size="3">
            <MDBCard>
              <MDBCardImage
                src={IIMBanglore}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>IIM Bangalore</MDBCardTitle>
                <MDBCardText>
                Ranked 1 out of 50 Financial Express, Ranked 11 out
                of 312 NIRF Innovation, Ranked 1001 out of 1799 THE,
                Ranked 384 out of 1400 QS, Ranked 8 out of 15
                Outlook, Ranked 1106 out of 2000 US News, Ranked 937
                out of 2000 CWUR.
                </MDBCardText>
                <MDBBtn href="#">Enquiry</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <br />
      {/* TOP UNIVERSITIES / COLLEGES CLOSE */}
      {/* AD BANNER 1 KNOW YOUR CHANCE ADMISSION OPEN*/}
      <div className="ad-banner-container">
      <img
        src={adbanner1}
        alt="Advertisement"
        className="ad-banner-image"
      />
      </div>
      {/* AD BANNER 1 KNOW YOUR CHANCE ADMISSION CLOCE*/}
      {/* TOP STUDY PLACES OPEN */}
      <div className="container text-center">
      <h2 className="text" style={{fontWeight:'bold'}}>Top Study Places</h2>
      <Carousel responsive={responsive} partialVisbile>
        {cardsData.map((card, index) => (
          <div key={index} className="card4 card4size">
            <div className="card4-image-wrapper">
              <img
                src={card.imageUrl}
                alt={card.city}
                className="card4-image"
              />
              <p className="fw-normal mb-1" style={{ color: "red" }}>
                {card.city}
              </p>
            </div>
            <div className="card4-link-wrapper"></div>
          </div>
        ))}
      </Carousel>
      </div>
      <br />
      {/* TOP STUDY PLACES CLOSE */}
      {/* AD  2 BANNER 2 SUBSCRIBE FOR REGULAR ALEART OPEN */}
      {/*      <div className="ad-banner-container">
      <img
        src={adbanner2}
        alt="Advertisement"
        className="ad-banner-image"
      />
      </div> */}
      {/* AD  2 BANNER 2 SUBSCRIBE FOR REGULAR ALEART CLOSE */}

      {/* EXPLORE COURSES  OPEN*/}
      <div className="container text-center">
      <h2 className="text" style={{ fontWeight: "bold" }}>
        Explore Programs
      </h2>
      <br/>
      <MDBTabs pills className="mb-3">
      <MDBTabsItem style={{ marginRight: "10px" }}>
      <MDBTabsLink
      onClick={() => handleIconsClick("pill1")}
      active={iconsActive === "pill1"}
      style={{
        background: "#007BFF",
        borderRadius: "25px",
        color: "white",
      }}
    >
      <MDBIcon fas icon="chart-pie" className="me-2" /> Certification
    </MDBTabsLink>
  </MDBTabsItem>
  <MDBTabsItem style={{ marginRight: "10px" }}>
    <MDBTabsLink
      onClick={() => handleIconsClick("pill2")}
      active={iconsActive === "pill2"}
      style={{
        background: "#007BFF",
        borderRadius: "25px",
        color: "white",
      }}
    >
      <MDBIcon fas icon="chart-line" className="me-2" /> Diploma
    </MDBTabsLink>
  </MDBTabsItem>
  <MDBTabsItem style={{ marginRight: "10px" }}>
    <MDBTabsLink
      onClick={() => handleIconsClick("pill3")}
      active={iconsActive === "pill3"}
      style={{
        background: "#007BFF",
        borderRadius: "25px",
        color: "white",
      }}
    >
      <MDBIcon fas icon="cogs" className="me-2" /> Bachelor's
    </MDBTabsLink>
  </MDBTabsItem>
    <MDBTabsItem style={{ marginRight: "10px" }}>
    <MDBTabsLink
      onClick={() => handleIconsClick("pill4")}
      active={iconsActive === "pill4"}
      style={{
        background: "#007BFF",
        borderRadius: "25px",
        color: "white",
      }}
    >
      <MDBIcon fas icon="cogs" className="me-2" /> Master's
    </MDBTabsLink>
    </MDBTabsItem>
      <MDBTabsItem style={{ marginRight: "10px" }}>
    <MDBTabsLink
      onClick={() => handleIconsClick("pill5")}
      active={iconsActive === "pill5"}
      style={{
        background: "#007BFF",
        borderRadius: "25px",
        color: "white",
      }}
    >
      <MDBIcon fas icon="cogs" className="me-2" /> Doctorate
      </MDBTabsLink>
      </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
            <MDBTabsPane open={iconsActive === "pill1"}>
              <MDBContainer>
                <MDBRow className="gx-3">
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle>Certification Web Designing</MDBCardTitle>
                        <MDBCardText>
                        FULL TIME
                        </MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Duration: 1 Years 6 Months
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Duration: 1 Years 6 Months
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        college: 180
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Course Overview
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle>Certification Fashion Design</MDBCardTitle>
                        <MDBCardText> FULL TIME</MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Duration: 1 Years
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Total Avg.fees: 91.15k
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        college: 175
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Course Overview
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle>Certification French</MDBCardTitle>
                        <MDBCardText>
                        FULL TIME
                        </MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Certification French
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Duration: 1 Years
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Total Avg.fees: 8.75k
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Course Overview
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
                <br />
                <MDBRow className="gx-3">
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle>Certification Yoga</MDBCardTitle>
                        <MDBCardText>FULL TIME</MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Duration: 1 Years
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Total Avg.fees: 10.45k
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        college: 158
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Course Overview
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle>Certification Interior Design</MDBCardTitle>
                        <MDBCardText>FULL TIME</MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Duration: 6 Months
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Total Avg.fees: 85.38k
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        college: 147
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Course Overview
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle>Polytechnic Engineering</MDBCardTitle>
                        <MDBCardText>FULL TIME</MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Duration: 3 Years
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Total Avg.fees: 65.76k
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        college: 3691
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Course Overview
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBTabsPane>
            <MDBTabsPane open={iconsActive === "pill2"}>
              {" "}
              <MDBContainer>
                <MDBRow className="gx-3">
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle>Polytechnic Civil</MDBCardTitle>
                        <MDBCardText>
                        FULL TIME
                        </MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Duration: 3 Years
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Total Avg.fees: 94.31k
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        college: 3443
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Course Overview
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle>  Polytechnic Electrical</MDBCardTitle>
                        <MDBCardText>FULL TIME</MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Duration: 3 Years
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Total Avg.fees: 96.50k
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        college: 2094
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Course Overview
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle>Polytechnic Electronics</MDBCardTitle>
                        <MDBCardText>
                        FULL TIME
                        </MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Duration: 3 Years
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Total Avg.fees: 85.04k
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        college: 1851
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Course Overview
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
                <br />
                <MDBRow className="gx-3">
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle>D.Pharma Pharmacy</MDBCardTitle>
                        <MDBCardText> FULL TIME</MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Duration: 2 Years
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Total Avg.fees: 1.23L
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        college: 1809
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Course Overview
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle> B.COM GENERAL</MDBCardTitle>
                        <MDBCardText>FULL TIME</MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Duration: 3 Years
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Total Avg.fees: 62.07k
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        college: 6491
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Course Overview
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle> B.Ed GENERAL</MDBCardTitle>
                        <MDBCardText> FULL TIME</MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Duration: 2 Years
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Total Avg.fees: 81.79k
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        college: 5436
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Course Overview
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBTabsPane>
            <MDBTabsPane open={iconsActive === "pill3"}>
              {" "}
              <MDBContainer>
                <MDBRow className="gx-3">
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle>BCA GENERAL</MDBCardTitle>
                        <MDBCardText>
                        FULL TIME
                        </MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Duration: 3 Years
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Total Avg.fees: 1.34L
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        college: 4901
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Course Overview
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle>B.A GENERAL</MDBCardTitle>
                        <MDBCardText> FULL TIME</MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        B.A GENERAL
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Duration: 3 Years
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Total Avg.fees: 41.59k
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Course Overview
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle>B.TECH [ME]</MDBCardTitle>
                        <MDBCardText>
                        FULL TIME
                        </MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Duration: 4 Years
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Total Avg.fees: 3.50L
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        college: 3522
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Course Overview
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
                <br />
                <MDBRow className="gx-3">
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle>MBA General</MDBCardTitle>
                        <MDBCardText> FULL TIME</MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Duration: 2 Years
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Total Avg.fees: 2.34L
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        college: 5495
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Course Overview
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle>Master of Computer Applications</MDBCardTitle>
                        <MDBCardText>FULL TIME</MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Duration: 2 Years
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Total Avg.fees: 1.64L
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        college: 3649
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Course Overview
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle> M.Com General</MDBCardTitle>
                        <MDBCardText>FULL TIME</MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Duration: 2 Years
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Total Avg.fees: 47.62k
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        college: 3079
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Course Overview
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBTabsPane>
            <MDBTabsPane open={iconsActive === "pill4"}>
              {" "}
              <MDBContainer>
                <MDBRow className="gx-3">
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle>FULL TIME</MDBCardTitle>
                        <MDBCardText>
                        MBA Finance
                        </MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Duration: 2 Years
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Total Avg.fees: 2.38L
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        college: 2751
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Course Overview
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle>MBA Marketing</MDBCardTitle>
                        <MDBCardText>FULL TIME</MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Duration: 2 Years
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Total Avg.fees: 2.40L
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        college: 2637
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Course Overview
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle>Ph.D Chemistry</MDBCardTitle>
                        <MDBCardText>
                        FULL TIME
                        </MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Duration: 3 Years
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Total Avg.fees: 1.85L
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        college: 966
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Course Overview
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
                <br />
                <MDBRow className="gx-3">
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle>Ph.D Physics</MDBCardTitle>
                        <MDBCardText>FULL TIME</MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Duration: 3 Years
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Total Avg.fees: 1.86L
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        college: 899
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Course Overview
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle>Ph.D Mathematics</MDBCardTitle>
                        <MDBCardText>FULL TIME</MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Duration: 3 Years
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Total Avg.fees: 1.82L
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        college: 880
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Course Overview
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle> Ph.D</MDBCardTitle>
                        <MDBCardText>FULL TIME</MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Duration: 2 Years
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Total Avg.fees: 1.39L
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        college: 797
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Course Overview
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBTabsPane>
            <MDBTabsPane open={iconsActive === "pill5"}>
              {" "}
              <MDBContainer>
                <MDBRow className="gx-3">
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle>Ph.D Mechanical</MDBCardTitle>
                        <MDBCardText>
                          FULL TIME
                        </MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Duration: 3 Years
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Total Avg.fees: 2.20L
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        college: 736
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                        Course Overview
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle>FIND COLLEGES</MDBCardTitle>
                        <MDBCardText>Discover 19000+ colleges.</MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          Best B.Sc IT College
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          Best B.Sc Forensic College
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          Best B.Sc Science College
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          Best B.Sc CS College
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle>COMPARE COLLEGES</MDBCardTitle>
                        <MDBCardText>
                          Compare on the basis of rank, fees.
                        </MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          Chandigarh
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          Lovely Professional
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          Pune
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          Bangalore
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
                <br />
                <MDBRow className="gx-3">
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle>EXAMS</MDBCardTitle>
                        <MDBCardText>Know more about your exams</MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          TS|EAMCET
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          KCET
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          NPAT
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          NEST
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle>COLLEGE PREDICATOR</MDBCardTitle>
                        <MDBCardText>Know your college admission.</MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          JEE-Main
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          AP|EAPCET
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          OJEE
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          KCET
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol>
                    <MDBCard style={cardStyles}>
                      <MDBCardBody>
                        <MDBCardTitle>COURSE FINDER</MDBCardTitle>
                        <MDBCardText>Discover top courses in Indian</MDBCardText>
                      </MDBCardBody>
                      <MDBListGroup flush>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          Computer
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          Media Studies
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          Science
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          Mathmatics
                        </a>
                      </MDBListGroup>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBTabsPane>
      </MDBTabsContent>
      </div>
      <br />
      {/* EXPLORE COURSES  CLOSE*/}
      {/*TOP EXAMS OPEN*/}
      <div className="container text-center">
      <h2 className="text" style={{ fontWeight: "bold" }}>
        Top Exams
      </h2>
      <br />
 
      <MDBContainer>
      <MDBRow className="gx-3">
        <MDBCol>
          <MDBCard style={cardStyles}>
            <MDBCardBody>
              <MDBCardTitle>NEET</MDBCardTitle>
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
      </div>
      <br />
      {/*TOP EXAMS CLOSE*/}
      {/*STUDY ABROAD OPEN */}
      <div className="container text-center">
      <h2 className="text" style={{ fontWeight: "bold" }}>
       Study Abroad
      </h2>
      <br />
      
      <MDBContainer>
      <MDBRow>
        <MDBCol>
        <li className="card4">
        <div>
          <div className="jsx-1066289220 overflow-grid-item px-1">
            <div className="jsx-1066289220 selected0-box selected0-box-lg bg-white rounded-lg h-100">
              <div className="jsx-1066289220 d-flex align-items-center selected0-box-media-group">
                <div className="jsx-1066289220 selected0-box-img mb-0 d-block mr-4 rounded-circle">
                  <svg
                    width={56}
                    height={56}
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 28C0 12.536 12.536 0 28 0s28 12.536 28 28-12.536 28-28 28S0 43.464 0 28Z"
                      fill="#F5F8F9"
                    />
                    <path
                      d="M10.278 18.036c-.023-.124-.045-.248.079-.338.034.146.079.293.113.451-.057-.045-.125-.079-.192-.113Z"
                      fill="#688EC5"
                    />
                    <path
                      d="m19.16 11.265-.136.135c-.101-.079-.18-.158-.158-.305.136-.01.215.068.294.17Z"
                      fill="#B7C2E8"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M32.116 12.811c-.486-2.11-.971-4.164-1.456-6.218-.034 0-.068 0-.102.01-.22.921-.442 1.841-.665 2.767-.27 1.118-.542 2.243-.813 3.385a15.15 15.15 0 0 1 3.036.056Zm-1.795.993c4.548 0 8.092 2.89 9.04 7.336.079.372.034.451-.361.496-.948.113-1.501-.146-2.077-1.038-3.126-4.841-10.326-4.514-13.114.553-.18.327-.36.474-.733.44a11.793 11.793 0 0 0-1.411 0c-.372.023-.52-.022-.418-.485.96-4.413 4.526-7.302 9.074-7.302Zm15.292 8.77c-.288.084-.578.171-.869.259-.29.087-.58.175-.869.26-.328.1-.658.199-.988.297h-.004v.001c-.475.14-.951.282-1.423.435-.316.101-.44.034-.575-.282-.283-.711-.339-1.434-.271-2.246 1.646.383 3.315.767 4.984 1.15l.004.001c0 .045 0 .079.011.124ZM22.636 35.246a87.196 87.196 0 0 1-.303-.181c-.354-.213-.682-.41-1.018-.587-.214-.112-.214-.248-.18-.462.328-2.018.647-4.044.965-6.064l.13-.82.009-.067c.028-.201.058-.424.363-.374.207.034.183.183.16.323a.636.636 0 0 0-.014.14c.012 1.196.046 2.381.271 3.578.102.515.02 1.064-.063 1.614-.037.245-.074.49-.095.733-.055.679-.133 1.358-.222 2.134l-.003.033ZM20.05 33.7l-.015-.008c-1.34-.67-1.349-.674-.967-1.978.43-1.49.858-2.991 1.276-4.48l.009-.031c.063-.213.118-.398.42-.376.259.011.372.045.327.35a599.44 599.44 0 0 0-.846 5.236l-.204 1.287Zm5.395.756c-.53-.44-.96-.97-1.434-1.614l-.023.257c-.08.901-.154 1.715-.236 2.52-.023.191.045.315.203.417.225.135.442.284.664.436l.171.117c.17.113.282.18.35-.102.124-.541.27-1.083.418-1.625.033-.158.022-.293-.113-.406ZM18.482 48.09v.012c.035-.052.068-.106.1-.16.054-.087.108-.175.171-.258.226-.305.26-.598-.056-.835-.305-.226-.598-.158-.824.146a3.05 3.05 0 0 1-.09.102 2.841 2.841 0 0 0-.09.102.443.443 0 0 1-.03.002c-.153.225-.308.45-.464.676l-.001.001c-.286.414-.576.834-.871 1.273-.742-1.192-1.554-2.29-2.36-3.378v-.001c-.408-.55-.813-1.098-1.206-1.654-.124-.181-.147-.317-.012-.497.305-.42.597-.845.89-1.272l.33-.477.002.018.273-.415.001-.002c.326-.494.653-.991.987-1.475.237-.338.294-.654-.09-.914-.372-.237-.62-.045-.835.27-.229.34-.466.675-.703 1.01-.15.213-.3.425-.448.639l-.01-.003c-.198.303-.399.606-.606.917-.21.316-.425.64-.648.982-.32-.44-.635-.877-.949-1.311v-.001c-.651-.9-1.293-1.789-1.94-2.672-.146-.201-.059-.336.041-.491l.004-.006c.587-.865 1.176-1.73 1.764-2.593a878.855 878.855 0 0 0 2.806-4.133c.147-.226.26-.26.486-.124.354.231.709.446 1.067.664l.501.306c1.099.568 2.166 1.199 3.232 1.83h.001c.61.361 1.22.722 1.835 1.07.824.475.824.475.27 1.287-.438.642-.877 1.28-1.316 1.919l-.001.002-.002.002v.001c-.441.64-.881 1.281-1.321 1.925a5.34 5.34 0 0 1-.09.127c-.227.315-.469.651-.012.979.487.349.735-.036.96-.383l.025-.04.02-.029c.496-.728.995-1.453 1.495-2.178.5-.725.999-1.45 1.495-2.178.192-.282.327-.361.643-.158 1.095.689 2.167 1.4 3.059 2.37.892.97 1.512 2.088 1.76 3.397l.068.27c.09.35.316.498.666.43.339-.068.451-.305.418-.632-.09-.801-.395-1.546-.734-2.359 1.02.215 2 .415 2.967.612l.6.122c.167.032.333.072.498.112.292.07.583.141.878.17.504.06.378.265.233.5a4.584 4.584 0 0 0-.052.087c-.931 1.58-1.865 3.16-2.8 4.74-.933 1.58-1.867 3.16-2.798 4.74l-.486.822a240.81 240.81 0 0 0-.97 1.65c-.124.214-.248.327-.519.327-1.952-.023-3.893-.023-5.845-.023l-.007-.011h-1.867c.665-.632 1.252-1.174 1.84-1.716v.011c1.4-1.346 2.802-2.704 4.194-4.051l.128-.124c.124-.113.248-.226.36-.361.227-.26.204-.52-.022-.756-.237-.237-.508-.249-.756-.034-.22.194-.433.4-.644.606l-.214.206c-1.05.993-2.099 1.986-3.148 2.968H19.7a477.03 477.03 0 0 0-2.685 2.607c0-1.015 0-1.907-.214-2.765-.037-.14.033-.24.103-.342l.016-.022.012-.019.016-.023c.253-.355.51-.71.767-1.066.257-.356.514-.711.767-1.067Zm16.624-22.887a51.024 51.024 0 0 0-3.318-2.912 8.095 8.095 0 0 1-1.128-2.223c-.09.175-.17.341-.248.5-.137.282-.263.541-.407.786-.496.847-1.196 1.49-2.133 1.817-.282.09-.496.237-.688.452-.87.959-1.829 1.817-2.98 2.449-.26.135-.316.304-.316.575.006.361.006.725.006 1.09 0 .366 0 .733.006 1.1.079 3.701 3.385 6.68 7.087 6.41 2.528-.17 4.345-1.433 5.553-3.634.757-1.394.756-2.905.756-4.42v-.128c0-.384-.124-.565-.463-.711a5.573 5.573 0 0 1-1.727-1.151Zm4.458 2.234c-.102-.395-.214-.688-.643-.564-.508-.034-.508-.034-.52.406 0 .076 0 .15-.002.226-.002.15-.005.301.003.451.09 2.54-.723 4.718-2.619 6.445-.203.18-.203.36-.146.598l.164.617c.24.897.48 1.792.682 2.7.08.384.203.43.553.294a208.42 208.42 0 0 1 4.424-1.636c.373-.124.485-.237.373-.666a729.46 729.46 0 0 1-2.119-8.276l-.15-.595Zm-5.01 7.878c-1.58.925-3.251 1.196-5.012 1.05a.711.711 0 0 0-.239-.053c-.923-.207-1.834-.479-2.706-1.009-.18.734-.35 1.4-.53 2.066-.023.124-.012.214.078.304l.2.21c.591.625 1.174 1.24 2.16 1.19.394.084.786.172 1.178.26.393.087.785.174 1.18.259.978.208 1.964.411 2.965.618l2.08.431c-.463-1.805-.903-3.543-1.355-5.326Zm6.353 18.734c.62-1.783 1.22-3.487 1.829-5.203.384-1.109.776-2.211 1.17-3.317l.308-.87c.282-.801.451-1.625.339-2.483-.036-.266.054-.498.144-.727.024-.063.048-.124.07-.187a37.4 37.4 0 0 1 .361-1.032c.124-.345.248-.689.361-1.033.102-.305.226-.418.553-.35 2.38.508 4.762.993 7.142 1.478h.002c.305.068.316.192.226.463a596.93 596.93 0 0 0-2.1 5.801l-.01.032c-.063.18-.119.34-.396.34-1.67 0-3.126 1.58-3.374 3.5-.158 1.207.068 2.313.96 3.215a.827.827 0 0 0 .018.019l.02.017c.07.066.143.132.085.247-.053.098-.15.09-.238.082h-.001c-.015 0-.03-.002-.044-.003h-.021c-2.426.01-4.863.01-7.401.01h-.003Zm-12.79-1.333-.002.005-.784 1.328h1.347a365.55 365.55 0 0 1 6.575.034c.418 0 .576-.147.688-.52a717.583 717.583 0 0 1 2.093-6.646l.255-.802c.451-1.445.903-2.878 1.388-4.413-.813.282-1.546.35-2.302.328-.657-.03-1.288-.178-1.922-.328a77.047 77.047 0 0 0-.29-.067c-.361-.08-.52.01-.7.316-.804 1.371-1.611 2.739-2.419 4.105l-.001.003c-.507.858-1.014 1.715-1.519 2.573-.789 1.346-1.585 2.693-2.407 4.084Zm9.884-2.039.006-.02.003-.009c.521-1.647 1.038-3.28 1.554-4.917.142-.45.287-.897.432-1.345v-.001c.317-.977.633-1.952.911-2.942.17-.575.6-.824 1.03-1.073h.001c.17-.099.34-.197.493-.315.141-.106.206.03.26.142.016.032.03.061.044.083.712 1.14.949 2.382.508 3.668-.687 2.013-1.395 4.02-2.104 6.03a1004.34 1004.34 0 0 0-1.327 3.777c-.067.204-.146.305-.383.305-.596-.017-1.192-.015-1.826-.013H37.6l-.666.002 1.058-3.347.008-.025Zm11.867-2.215c-.858.632-1.208 1.535-1.264 2.619.01.073.016.15.023.23.018.212.038.442.112.673.43 1.331 1.66 1.692 2.72.778.937-.812 1.343-2.404.903-3.543-.44-1.129-1.523-1.468-2.494-.757ZM32.556 21.4c.575.802 1.365 1.197 2.415 1.208a3.864 3.864 0 0 0 1.287-.327c.191-.102.282-.192.157-.43-1.004-1.884-2.573-3.024-4.65-3.464-.214-.045-.293.011-.248.26.17.993.44 1.93 1.039 2.753Zm-6.162.858c-.452-.045-.926-.113-1.4-.27-.248-.091-.282-.193-.158-.407 1.061-1.794 2.63-2.867 4.684-3.228.293-.056.361.045.282.328-.214.835-.474 1.647-.982 2.358-.575.813-1.4 1.23-2.426 1.22Zm-5.954 2.635c-.085.253-.17.507-.253.762 2.11.282 4.48-.71 5.518-2.257-1.309-.553-2.686-.801-4.119-.666-.037.002-.073.002-.11.001-.174-.002-.336-.003-.42.259-.194.636-.405 1.267-.616 1.9v.001Zm14.734-1.168c.869-.113 1.523-.429 2.178-.79.42-.234.914-.208 1.405-.183.196.01.391.02.581.014.132 0 .162.124.187.231.006.022.01.043.017.062.208.607.408 1.22.608 1.829l.148.451.023.065c.055.143.102.268-.193.308-1.986.282-3.543-.508-4.954-1.987ZM22.168 13.098l2.194 1.338a10.107 10.107 0 0 0-2.223 2.11c-.52-.856-1.031-1.702-1.538-2.541l-.002-.003c-.528-.873-1.051-1.739-1.575-2.602-.022-.113.011-.169.136-.135 1 .608 1.998 1.217 3.002 1.83h.001l.005.003Zm17.864.893.001-.003.004-.006c.538-.885 1.07-1.763 1.604-2.638a1.2 1.2 0 0 1-.068-.056 1.162 1.162 0 0 0-.068-.057c-1.56.952-3.111 1.905-4.702 2.882l-.545.334c.891.599 1.568 1.298 2.234 2.077l1.54-2.533Zm-20.037 7.307c-1.67.384-3.33.767-4.977 1.151v.124c1.431.428 2.852.857 4.272 1.285h.001l.004.002c.192.067.293.011.372-.192.316-.768.452-1.535.328-2.37Zm21.68 17.865c-1.22.903-2.427 1.795-4.075 1.76-.485-.008-.54-.268-.6-.544-.016-.07-.031-.142-.054-.212-.12-.338.104-.395.306-.446.047-.012.094-.024.134-.039.313-.122.63-.232.948-.342.53-.183 1.056-.366 1.557-.606.745-.36 1.276-.124 1.784.43ZM5.368 19.515c.655-.756.847-1.682.858-2.314-.011-1.41-.338-2.404-.869-3.024-.688-.768-1.602-.768-2.29-.012-1.175 1.31-1.197 4.007-.046 5.338.734.847 1.625.858 2.347.012Zm6.862 4.463c-.584-1.947-1.168-3.894-1.749-5.84-.079-.136-.17-.215-.282-.012-.17.915-.316 1.817-.226 2.743.587 2.009 1.194 4.017 1.8 6.026.304 1.005.608 2.01.909 3.014.135.451.101.812-.17 1.207a286.74 286.74 0 0 1-1.129 1.651c-.6.874-1.2 1.746-1.782 2.627l-.037.06c-.146.242-.3.495-.539.662a.757.757 0 0 1-.166-.383l-.014-.069a528.628 528.628 0 0 1-1.112-4.153c-.367-1.385-.734-2.77-1.112-4.153a3.42 3.42 0 0 1-.033-.143c-.047-.221-.096-.45-.328-.58a1.338 1.338 0 0 0-.7-.044l-.06.01c-.17.027-.361.058-.3.34a3581.57 3581.57 0 0 1 2.786 10.457v.005l.014.046c.065.234.132.475-.07.687-.451.463-.304.87.046 1.332a728.483 728.483 0 0 1 3.482 4.768c1.021 1.406 2.043 2.813 3.075 4.215.947 1.287 1.41 2.709 1.376 4.3a27.49 27.49 0 0 0-.002.716c.002.32.004.643-.009.966-.011.327.09.575.35.767h32.988c.294-.655.813-.914 1.512-.835.012 0 .02-.003.029-.006a.084.084 0 0 1 .028-.005c1.444-.339 2.64-1.783 2.821-3.431.124-1.208-.045-2.359-.982-3.205-.35-.328-.338-.553-.191-.937a608.4 608.4 0 0 0 1.992-5.51l.298-.833c.226-.62.09-.869-.541-1.004-.28-.06-.557-.118-.833-.175-.348-.072-.694-.145-1.04-.22L49 38.345h-.005l-3.326-.694c-.644-.136-.813-.034-1.038.61-.215.597-.418 1.184-.655 1.873a6.371 6.371 0 0 0-1.873-2.1c1.105-.7 1.128-.767.812-2.02l-.128-.488c-.205-.782-.41-1.56-.605-2.344-.497-1.942-.994-3.883-1.479-5.824-.007-.031-.023-.07-.04-.112-.07-.166-.159-.378.266-.35.858.045 1.027-.204.756-1.039a2.127 2.127 0 0 1-.046-.148c-.022-.078-.044-.155-.078-.224-.203-.384-.045-.508.327-.61 1.009-.295 2.013-.6 3.019-.905l1.71-.517c.677-.203.97-.53.925-1.027-.056-.586-.462-.8-.982-.914l-1.464-.34c-1.464-.34-2.928-.681-4.393-1.003-.35-.067-.508-.226-.598-.553a6.678 6.678 0 0 0-.711-1.648c-.192-.304-.147-.53.034-.812.62-1.004 1.235-2.012 1.85-3.019.616-1.007 1.23-2.014 1.851-3.019.283-.451.395-.892 0-1.332-.35-.383-.767-.395-1.365-.022-.423.257-.848.512-1.272.767-1.312.787-2.624 1.574-3.886 2.427-.925.62-1.749.925-2.787.304-.294-.18-.486-.304-.565-.654-.541-2.37-1.105-4.739-1.67-7.108v-.002c-.158-.666-.598-.993-1.15-.87-.497.114-.667.497-.768.938-.155.652-.312 1.302-.47 1.952-.35 1.44-.698 2.88-1.009 4.334-.17.767-.406 1.309-1.286 1.377-.305.033-.621.18-.892.338-.384.226-.677.136-1.027-.079a420.026 420.026 0 0 0-3.45-2.128c-.88-.538-1.758-1.076-2.633-1.619-.395-.237-.779-.395-1.207-.113-.486.316-.565.835-.192 1.434a675.354 675.354 0 0 0 3.724 6.094c.18.293.226.508.034.813a6.867 6.867 0 0 0-.711 1.647c-.102.373-.305.486-.655.564-1.951.44-3.902.892-5.854 1.343h-.003c-.508.113-.892.35-.925.903-.034.587.338.858.857 1.016.67.194 1.34.397 2.01.6.89.268 1.78.537 2.674.788.474.136.598.305.406.768l-.06.137c-.175.39-.36.805.195 1.138.114.07.065.18.022.279a.76.76 0 0 0-.033.082l-.383 1.341c-.326 1.14-.652 2.278-.96 3.422-.09.372-.214.338-.485.18a140.602 140.602 0 0 0-2.821-1.636c-.305-.17-.452-.395-.553-.723-.582-1.946-1.166-3.893-1.75-5.84ZM4.404 21.23c.186-.02.372-.04.558-.056.644.01 1.027-.418 1.388-.847 1.106-1.332 1.31-2.9 1.061-4.548-.158-1.083-.61-2.043-1.456-2.776L5.952 13c-.281-.236-.574-.482-.99-.403-.835-.249-1.614-.08-2.336.383-.903.835-1.377 1.885-1.557 3.093-.361 2.426.722 4.469 2.776 5.213.186-.016.372-.036.559-.056Z"
                      fill="#48639E"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.881 26.688c.145.02.29.041.424.004.191.158.416.17.63.18h.002c.542.012 1.084.012 1.625 0 .813-.01 1.118-.281 1.174-1.105.041-.595.104-1.191.167-1.787.108-1.032.217-2.067.217-3.111a1.88 1.88 0 0 1-.045-.711c.052-.467.095-.933.138-1.4.02-.233.042-.466.065-.7.045-.044.042-.104.04-.164-.004-.06-.006-.123.039-.174.09-1.614.26-3.205.451-4.807.002-.03.002-.063.001-.095-.002-.122-.004-.245.157-.29.52-.146.553-.54.542-.981-.008-.324-.005-.653-.003-.98l.003-.487c0-1.174 0-1.174-1.14-1.32-.007 0-.014-.01-.024-.021a.295.295 0 0 0-.021-.025c-.015-.12.05-.21.115-.3.033-.046.065-.091.088-.14.508-1.072.7-2.178.35-3.33-.192-.609-.598-.733-1.027-.293-.271.271-.542.407-.903.283-.35-.125-.44-.407-.508-.745A19.683 19.683 0 0 0 7.366.532c-.248-.61-.62-.7-1.06-.248-1.152 1.174-2.123 2.471-2.788 3.984-.497 1.128-.644 2.29-.305 3.51.033.102.1.21.166.317.137.222.272.44.105.608-.144.144-.488.109-.799.077-.08-.008-.157-.016-.228-.02-.53-.034-.745.225-.745.733.011.722.011 1.433 0 2.144-.011.44.101.779.598.858.198.033.233.175.269.32.013.053.026.106.047.154l.128-.033c.747-.194 1.497-.387 2.287-.238a44.055 44.055 0 0 1 2.62-.027c.477.004.954.009 1.432.005.282 0 .395.146.36.428-.025.2-.036.403-.047.606-.008.152-.017.305-.031.455-.26 2.573-.508 5.146-.745 7.72a239.234 239.234 0 0 1-.293 2.968c-.034.383-.226.553-.621.541a29.357 29.357 0 0 0-1.41 0c-.385.012-.588-.157-.644-.541-.026-.18-.05-.362-.075-.542-.074-.542-.148-1.083-.241-1.625a9.7 9.7 0 0 1-.047-.365c-.047-.396-.094-.797-.292-1.159-.406-.169-.79-.079-1.162.125l.191 1.271c.12.79.24 1.58.35 2.374.018.123.03.248.043.373.06.608.12 1.216.748 1.59.194-.28.449-.244.704-.207ZM7.333 4.233c-.158-.858-.407-1.704-.734-2.652C5.46 2.89 4.511 4.2 4.207 5.859c-.136.756-.034 1.512.428 2.156l.055.076c.217.304.436.611.905.6.936-.01 1.873-.01 2.81 0 .226 0 .406-.044.553-.214.53-.61.88-1.298.97-2.11.023-.282.012-.418-.372-.384-1.31.113-1.975-.451-2.223-1.75Zm-1.535 7.063.812.002h2.856c.15-.002.276 0 .38.002.258.005.389.008.457-.057.07-.067.073-.206.078-.49.002-.105.004-.231.01-.38.023-.452-.147-.554-.575-.554-1.142.013-2.287.011-3.432.01-.859-.002-1.717-.003-2.572.002-.173.001-.314-.002-.43-.005-.257-.007-.392-.01-.463.055-.078.072-.08.227-.083.553 0 .107-.002.232-.006.378-.012.407.135.508.519.497.821-.017 1.636-.015 2.449-.013Z"
                      fill="#24A7D0"
                    />
                  </svg>
                </div>
                <div className="jsx-1066289220">
                  <h3 className="jsx-1066289220 selected0-box-title color-base ">
                    Study in USA
                  </h3>
                </div>
              </div>
              <div className="jsx-1066289220">
                <hr className="jsx-1066289220 mt-2 mb-2" />
                <a
                  data-csm-track="true"
                  data-csm-title="Why Study in the USA?"
                  data-event-type="link_click"
                  data-section_name="Study Abroad"
                  className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                  href="https://studyabroad.searchmycollege.com/"
                  style={{ textDecoration: "none" }}
                >
                  Why Study in the USA?
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
              <div className="jsx-1066289220">
                <hr className="jsx-1066289220 mt-2 mb-2" />
                <a
                  data-csm-track="true"
                  data-csm-title="SOP for USA"
                  data-event-type="link_click"
                  data-section_name="Study Abroad"
                  className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                  href="https://studyabroad.searchmycollege.com/"
                  style={{ textDecoration: "none" }}
                >
                  SOP for USA
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
              <div className="jsx-1066289220">
                <hr className="jsx-1066289220 mt-2 mb-2" />
                <a
                  data-csm-track="true"
                  data-csm-title="Exams for Studying in USA"
                  data-event-type="link_click"
                  data-section_name="Study Abroad"
                  className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                  href="https://studyabroad.searchmycollege.com/"
                  style={{ textDecoration: "none" }}
                >
                  Exams for Studying in USA
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
              <div className="jsx-1066289220">
                <hr className="jsx-1066289220 mt-2 mb-2" />
                <a
                  data-csm-track="true"
                  data-csm-title="Post Study Opportunities in USA"
                  data-event-type="link_click"
                  data-section_name="Study Abroad"
                  className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                  href="https://studyabroad.searchmycollege.com/"
                  style={{ textDecoration: "none" }}
                >
                  Post Study Opportunities in USA
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
            </div>
          </div>
        </div>
        </li>
        </MDBCol>
        <MDBCol>
        <li className="card4">
        <div>
          <div className="jsx-1066289220 overflow-grid-item px-1">
            <div className="jsx-1066289220 selected0-box selected0-box-lg bg-white rounded-lg h-100">
              <div className="jsx-1066289220 d-flex align-items-center selected0-box-media-group">
                <div className="jsx-1066289220 selected0-box-img mb-0 d-block mr-4 rounded-circle">
                  <svg
                    width={56}
                    height={56}
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 28C0 12.536 12.536 0 28 0s28 12.536 28 28-12.536 28-28 28S0 43.464 0 28Z"
                      fill="#F5F8F9"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.607 40.576c-.111-.05-.222-.1-.333-.148-.27-.119-.536-.236-.791-.376-.316-.174-.415-.12-.47.24-.163 1.037-.839 1.735-1.81 1.92a2.276 2.276 0 0 1-2.53-1.33c-.426-.982-.11-2.171.785-2.75.425-.272.338-.381.022-.643a17.756 17.756 0 0 1-3.742-4.352c-.425.578-.916 1.014-1.625 1.112-1.32.197-2.509-.698-2.65-1.974-.142-1.33.807-2.487 2.16-2.542.48-.021.468-.141.337-.512a18.4 18.4 0 0 1-.458-1.735c-.096-.414-.168-.828-.242-1.255l-.085-.479c-.884.48-1.745.524-2.585-.022-.498-.328-.729-.832-.961-1.34l-.021-.045v-.982c.36-.96.949-1.647 2.029-1.789.545-.065 1.036.11 1.538.36.207-1.8.622-3.512 1.32-5.16-.106-.018-.207-.032-.306-.046-.198-.029-.385-.055-.567-.106a2.22 2.22 0 0 1-1.647-2.062c-.044-1.025.524-1.909 1.45-2.269.917-.36 2.019-.098 2.586.699.324.453.434.297.669-.033l.007-.011c1.07-1.462 2.356-2.694 3.84-3.807-.666-.436-1.156-.96-1.276-1.745-.077-.502 0-.971.229-1.418.458-.884 1.472-1.375 2.41-1.19 1.146.24 1.79 1.048 1.887 2.466 1.691-.72 3.436-1.21 5.302-1.429-.338-.687-.48-1.353-.23-2.062.164-.458.448-.829.84-1.101a2.244 2.244 0 0 1 2.728.087c.883.698 1.047 1.647.512 3.065 1.571.196 3.087.545 4.57 1.124.219-1.55.863-2.335 2.03-2.51.981-.141 1.974.415 2.378 1.342.469 1.059.163 2.03-.96 2.967a18.294 18.294 0 0 1 4.81 4.756c.426-.676.982-1.101 1.735-1.221.48-.077.938.01 1.374.229a2.262 2.262 0 0 1 1.2 2.4c-.197 1.156-.916 1.745-2.465 1.963.305.796.589 1.603.796 2.422.207.807.338 1.625.458 2.508.578-.272 1.145-.458 1.778-.316.61.142 1.102.458 1.44.982.556.84.49 1.952-.153 2.727-.72.862-1.723 1.025-3.043.458-.041.231-.08.462-.118.692-.114.68-.226 1.353-.406 2.013-.175.67-.415 1.32-.656 1.97-.072.198-.145.395-.216.593 1.418.131 2.268.808 2.443 1.931a2.275 2.275 0 0 1-1.374 2.465c-1.08.459-2.084.11-2.978-1.09a19.149 19.149 0 0 1-3.567 3.708c1.843 1.08 1.549 3 .6 3.818-.676.578-1.44.742-2.28.447-.84-.294-1.364-.905-1.473-1.788-.054-.459-.196-.448-.523-.273-.174.094-.357.175-.54.257-.115.051-.23.103-.344.157-.212.258-.503.326-.796.395-.129.03-.258.06-.382.107a5.13 5.13 0 0 1-.17.053c-.072.021-.144.042-.212.067a7.305 7.305 0 0 1-.96.25c-.122.024-.245.05-.367.076-.337.07-.674.141-1.018.165-.294.022-.403.109-.294.447.349 1.047.01 2.149-.786 2.716-.861.611-2.007.655-2.792.098-.895-.621-1.265-1.636-.96-2.716.109-.37.044-.545-.36-.567a6.688 6.688 0 0 1-.866-.145c-.119-.025-.237-.05-.356-.073a9.54 9.54 0 0 1-1.15-.316h-.001a13.422 13.422 0 0 0-.19-.066 7.877 7.877 0 0 0-.202-.04c-.348-.066-.712-.135-.976-.418Zm6.392-34.84a1.174 1.174 0 0 1-1.167-1.222 1.192 1.192 0 0 1 1.178-1.167c.654-.011 1.21.545 1.21 1.2 0 .654-.556 1.2-1.221 1.189Zm3.992 1.581a13.868 13.868 0 0 0-6.348-.272c-.186-.026-.365.014-.543.054l-.156.033c-8.671 1.593-14.78 9.883-13.624 18.62.786 5.978 3.938 10.363 9.272 13.155 1.582.83 3.262 1.375 5.05 1.549a.251.251 0 0 1-.043-.03l.033.008c1.821.35 3.643.251 5.454-.076 9.032-1.658 15.238-10.483 13.526-19.46-1.353-7.09-5.65-11.65-12.62-13.58Zm-12.424 29.46.01-.008c.156-.017.278.055.403.129l.1.056c2.05 1.222 4.265 1.953 6.653 2.15 4.124.338 7.8-.786 10.963-3.393 3.305-2.716 5.214-6.228 5.629-10.537.327-3.447-.404-6.654-2.226-9.556-2.585-4.123-6.337-6.555-11.159-7.22-3.48-.48-6.73.272-9.762 2.028l-.045.027c-.171.101-.345.204-.555.224l-.012-.015c-.016.187-.153.276-.288.364-.044.028-.087.056-.126.087-3.512 2.607-5.694 6.032-6.348 10.374-.6 4.014.316 7.69 2.574 11.06.982 1.462 2.269 2.63 3.6 3.753.065.055.147.093.228.13.159.074.318.147.361.346Zm16.1-30.07c-.01.654.535 1.21 1.2 1.21.644 0 1.167-.523 1.189-1.178a1.192 1.192 0 0 0-1.2-1.21c-.644 0-1.178.534-1.189 1.178ZM8.91 25.032a1.176 1.176 0 0 1-1.211-1.189c0-.665.545-1.2 1.2-1.2.632 0 1.167.535 1.189 1.167a1.183 1.183 0 0 1-1.178 1.222Zm2.334-11.78a1.178 1.178 0 0 0-1.156 1.188c0 .655.512 1.178 1.156 1.2a1.199 1.199 0 0 0 1.222-1.189c0-.654-.567-1.21-1.222-1.2Zm15.577 29.626c.032-.666.6-1.167 1.265-1.124.633.044 1.145.6 1.113 1.233-.033.654-.611 1.189-1.255 1.156a1.197 1.197 0 0 1-1.123-1.265Zm20.343-17.955c.687.01 1.21-.502 1.21-1.178a1.188 1.188 0 0 0-1.21-1.21 1.22 1.22 0 0 0-1.189 1.22 1.21 1.21 0 0 0 1.19 1.168ZM17.767 38.787c.665 0 1.21.546 1.2 1.2-.011.654-.578 1.2-1.222 1.189a1.193 1.193 0 0 1-1.156-1.189c-.011-.676.49-1.2 1.178-1.2Zm-8.225-6.763c.011.644.535 1.156 1.19 1.156a1.176 1.176 0 0 0 1.188-1.145c.022-.654-.545-1.233-1.189-1.233-.654 0-1.2.557-1.189 1.222ZM19.687 7.067a1.185 1.185 0 0 1-1.167 1.178c-.655 0-1.211-.568-1.2-1.222a1.211 1.211 0 0 1 1.189-1.178c.654 0 1.178.545 1.178 1.222Zm24.968 27.379c.655.022 1.222-.535 1.222-1.2a1.17 1.17 0 0 0-1.156-1.19 1.193 1.193 0 0 0-1.233 1.179c0 .633.535 1.189 1.167 1.21Zm-7.744 5.65c0-.676.512-1.2 1.189-1.2.654 0 1.178.502 1.189 1.145a1.22 1.22 0 0 1-1.168 1.244c-.643.022-1.2-.523-1.21-1.189Zm6.73-25.514c.01.644.534 1.167 1.178 1.167.654.011 1.167-.49 1.178-1.156a1.184 1.184 0 0 0-1.167-1.233c-.655 0-1.2.557-1.19 1.222ZM28.064 25.556c-1.025.01-1.854-.786-1.865-1.79a1.82 1.82 0 0 1 1.822-1.832 1.83 1.83 0 0 1 1.843 1.822c0 .982-.818 1.789-1.8 1.8Zm3.304-1.28c-.146-.006-.305-.014-.5.102.033.02.062.042.09.062.042.031.081.06.128.08l2.912 1.307a1653.02 1653.02 0 0 1 7.123 3.208c.327.153.393-.01.48-.25.447-1.255.71-2.542.85-3.862.055-.49-.01-.654-.555-.654-2.608.016-5.21.014-7.814.012h-.005l-2.61-.002-.099-.003ZM26.45 21.28c-.168-.017-.258-.124-.345-.227a1.436 1.436 0 0 0-.08-.09c-.83-.829-1.657-1.659-2.485-2.489-1.655-1.66-3.311-3.32-4.977-4.972-.294-.294-.338-.447.011-.742 1.07-.883 2.204-1.647 3.458-2.225l.004-.002c.194-.086.335-.148.443.133l.855 2.256a2945.73 2945.73 0 0 0 3.116 8.194c.014.028.01.061.005.098a.513.513 0 0 0-.005.066Zm2.127-10.996v10.537c.169.011.195-.05.226-.123l.003-.007.69-1.55c1.264-2.846 2.532-5.697 3.815-8.54.13-.295.01-.371-.23-.458-1.123-.415-2.279-.71-3.468-.819-1.036-.087-1.036-.076-1.036.96Zm2.48 11.157h.001c.428-.411.858-.824 1.282-1.241 1.996-1.997 3.993-3.993 5.978-6 .283-.283.403-.25.643.033a16.698 16.698 0 0 1 2.226 3.458c.12.25.13.393-.186.513-2.284.865-4.567 1.74-6.851 2.616l-3.424 1.31c-.045.016-.09.02-.14.025a1.746 1.746 0 0 0-.067.008l-.087-.12c.205-.199.412-.397.62-.597h.001v-.001l.001-.001.001-.001h.001v-.001h.001v-.001Zm-13.74 12.133.035.086c.197-.185.273-.25.36-.305l7.592-7.625c.02-.019.045-.036.072-.055.08-.054.166-.114.092-.228-.08-.126-.192-.067-.283-.018a.852.852 0 0 1-.055.029c-1.68.637-3.358 1.28-5.037 1.924h-.003c-1.68.644-3.36 1.288-5.04 1.926-.25.098-.294.175-.184.425.6 1.32 1.396 2.531 2.345 3.633.047.055.077.132.106.208Zm7.933-10.418a7.239 7.239 0 0 0-.306.02 2.74 2.74 0 0 1-.229.013l-2.651-.002c-2.65-.002-5.298-.004-7.94.012-.426 0-.557-.098-.513-.545.142-1.352.414-2.683.873-3.97.098-.284.218-.35.501-.219 2.233 1.011 4.466 2.013 6.7 3.014l3.347 1.502c.03.03.068.06.18.145l.038.03ZM18.476 34.63c1.189 1.026 2.476 1.876 3.927 2.465.325.056.381-.164.43-.359.01-.034.018-.068.028-.099.783-2.661 1.54-5.332 2.293-7.995l.194-.688.005-.017.01-.033c.05-.18.102-.357-.048-.517-.132 0-.217.086-.299.168l-.017.018c-.723.722-1.445 1.446-2.168 2.17l-.001.001-.001.001-.002.002-.002.002-.001.001-.001.001-.002.002-.002.002-.001.001-.002.002-.002.002c-1.455 1.457-2.91 2.915-4.37 4.368-.219.218-.175.328.032.502Zm12.272-7.363 2.294 2.286c1.526 1.522 3.055 3.046 4.588 4.564.219.219.175.328-.032.502-1.19 1.026-2.476 1.876-3.927 2.465-.355.035-.4-.205-.443-.426-.01-.057-.021-.113-.037-.163-.301-.994-.583-1.996-.865-2.998l-.259-.918-.637-2.246v-.001l-.639-2.247a3.098 3.098 0 0 0-.045-.133c-.077-.216-.16-.45.002-.685Zm-6.219-2.758c.118-.033.243-.07.328-.23h-2.749c-.886 0-1.77 0-2.654.002H19.434c-1.776.002-3.549.005-5.321-.003h-.022c-.305 0-.533 0-.48.448.12 1.069.284 2.116.567 3.152.12.425.251.524.687.35 1.869-.73 3.741-1.449 5.613-2.167 1.319-.506 2.637-1.011 3.954-1.52.031-.013.064-.022.097-.032Zm5.455-3.765c1.429-3.218 2.858-6.436 4.287-9.664.12-.284.229-.328.512-.175a16.47 16.47 0 0 1 2.804 1.942c.229.196.25.316.022.545-1.881 1.865-3.75 3.735-5.62 5.608l-1.874 1.875c-.11.022-.164-.01-.131-.13ZM26.79 18.94l.609 1.609.098-.033-.002-3.642c-.003-2.426-.005-4.849.002-7.277 0-.283-.055-.393-.36-.36-1.134.11-2.247.295-3.349.622-.37.109-.36.25-.24.567.808 2.095 1.604 4.189 2.4 6.283.278.747.56 1.49.842 2.23ZM38.72 33.497a5170.707 5170.707 0 0 0-7.82-7.778c.07-.102.146-.052.22-.003.029.019.057.038.085.047 3.152 1.407 6.294 2.814 9.446 4.232.03.014.063.026.095.037.143.05.279.098.145.356-.622 1.156-1.353 2.225-2.17 3.109ZM20.848 19.91l4.13 1.838c.12.033.152-.033.141-.131l-.002-.002c-2.574-2.541-5.147-5.082-7.743-7.634-.785.818-1.45 1.822-2.061 2.869-.251.415-.153.578.261.72.248.09.488.2.726.312.14.065.28.13.42.19 1.374.61 2.751 1.224 4.128 1.838Zm10.489 3.158c.695-.264 1.39-.531 2.083-.798l1.276-.49.006-.002c2.191-.84 4.382-1.678 6.572-2.528.327-.131.48-.131.6.272.305 1.08.49 2.182.6 3.306.022.24-.022.37-.306.37-2.4-.007-4.8-.004-7.199-.002l-3.6.003a1.134 1.134 0 0 0-.032-.131Zm-5.359 11.917c-.295.977-.59 1.959-.783 2.961.43.131.875.175 1.32.219.222.021.445.043.666.076.305.043.316-.11.316-.338v-.029c-.011-2.663-.022-5.315-.022-7.967-.366 1.013-.649 2.054-.931 3.094-.114.417-.227.833-.345 1.247-.072.246-.147.491-.22.737Zm2.62-5.078c.367 1.013.65 2.054.932 3.094a70.902 70.902 0 0 0 .645 2.269c.265.886.53 1.77.703 2.676-.43.131-.874.175-1.32.219-.222.021-.444.043-.665.076-.305.043-.316-.12-.316-.338.005-1.335.008-2.667.01-3.997v-.002c.003-1.333.006-2.665.012-3.997Zm-1.872-1.347c.209-.662.417-1.324.487-2.024-.12-.043-.24-.087-.349-.13-.138.186-.191.403-.245.623a5.18 5.18 0 0 1-.06.227c-.49 1.706-.979 3.412-1.466 5.118l-.001.004c-.488 1.707-.977 3.414-1.468 5.12l.328.132c.217-.036.254-.193.291-.35l.025-.097.59-2.067v-.002a586.62 586.62 0 0 0 1.624-5.753c.075-.269.16-.535.244-.801Zm5.168 8.721c.04.161.081.323.293.36.12-.044.23-.088.339-.131-.32-1.111-.636-2.224-.952-3.336-.493-1.738-.987-3.476-1.492-5.205a19.43 19.43 0 0 1-.197-.75c-.154-.62-.307-1.24-.61-1.814l-.175.066-.174.065c0 .208.033.393.087.59.474 1.679.952 3.356 1.429 5.033v.001c.477 1.677.955 3.354 1.429 5.033l.023.088Z"
                      fill="#48639E"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.447 37.096c.198-.01.243-.164.282-.298l.012-.04.475-1.661c.714-2.498 1.427-4.99 2.132-7.49a.46.46 0 0 0 .012-.161l-.001-.058c.13-.352.4-.58.666-.806.113-.096.226-.191.327-.295.134-.135.274-.037.407.056.04.027.078.054.116.075a.48.48 0 0 1 .009.033c-.115.176-.165.376-.215.579-.018.076-.037.152-.06.227-.49 1.707-.978 3.415-1.467 5.122v.002c-.488 1.705-.975 3.41-1.466 5.116a.592.592 0 0 1-.04.025 5.307 5.307 0 0 1-1.19-.425Zm1.52.52-.004.015c.414.153.84.25 1.276.316.27-.373.367-.81.462-1.243.036-.162.072-.323.116-.48.185-.674.387-1.344.589-2.013.428-1.422.857-2.842 1.124-4.303.005-.492.008-.987.01-1.483.003-.494.006-.989.012-1.484 0-.23-.051-.381-.288-.402-.07.7-.279 1.36-.488 2.022a24.83 24.83 0 0 0-.243.802 589.456 589.456 0 0 1-1.623 5.752c-.198.69-.395 1.379-.591 2.069-.01.031-.017.064-.025.096-.037.158-.074.315-.291.35l-.036-.013Zm-2.317 2.96 1.211.393a.63.63 0 0 1-.002.007c-.187.042-.225.194-.263.345l-.022.084-.887 3.109c-.711 2.49-1.423 4.984-2.124 7.472a.762.762 0 0 1-.035.075c-.063.126-.15.299.1.361.251.066.382-.076.448-.338.381-1.407.785-2.814 1.189-4.221.525-1.842 1.057-3.677 1.59-5.516l.362-1.247a.203.203 0 0 0-.009-.01c.282.02.55.104.815.187l.169.052c.158.21.09.422.023.627-.016.05-.032.099-.045.147-.615 2.186-1.24 4.366-1.865 6.544v.004l-.001.001v.002c-.273.95-.546 1.901-.817 2.852-.208.72-.186.742.545.742H34.14c.73 0 .753-.022.545-.742l-1.337-4.687-.004-.014-.005-.015-1.337-4.687-.039-.117c-.073-.214-.149-.436.017-.657l.17-.052c.27-.085.545-.17.834-.188a.478.478 0 0 1 .048.024l.074.21c.041.113.081.223.114.333.982 3.458 1.963 6.916 2.934 10.374.076.261.164.469.458.392.234-.06.159-.224.101-.349-.015-.032-.029-.062-.035-.087-.69-2.459-1.392-4.912-2.093-7.364v-.003a3387.294 3387.294 0 0 1-.94-3.298c-.041-.162-.082-.324-.305-.352a.715.715 0 0 1-.035.01.745.745 0 0 1-.005-.021l1.21-.393 2.488 8.705v.002c.262.905.524 1.81.774 2.714.088.327.24.458.6.458.859-.016 1.711-.014 2.567-.012l.858.001c.699 0 .873.186.873.862l-.002.633c-.003.421-.005.843.002 1.265.011.305-.044.567-.24.807H13.72c-.174-.218-.24-.469-.24-.753.013-.38.01-.764.01-1.147-.002-.288-.004-.575.001-.86 0-.61.196-.807.818-.807l.482-.005c.963-.01 1.926-.021 2.889.016.447.011.622-.142.742-.556.755-2.692 1.522-5.384 2.288-8.071v-.003l.82-2.878c.033-.12.077-.24.12-.36Zm9.92-10.387c-.286-.97-.57-1.936-.779-2.92a9.977 9.977 0 0 0-.34-.349h-.001a8.536 8.536 0 0 1-.411-.426c-.24-.305-.48-.338-.764-.087a.473.473 0 0 0-.004.02l.055-.02c.302.574.456 1.193.61 1.812.062.251.125.502.197.751.506 1.73.999 3.467 1.492 5.205.315 1.11.63 2.218.948 3.326a4.548 4.548 0 0 0 1.13-.404c-.22-.043-.249-.217-.277-.379-.008-.047-.016-.093-.028-.134l-.329-1.136a250.309 250.309 0 0 1-1.067-3.751 75.45 75.45 0 0 0-.433-1.508Zm.625 7.443.003.01c-.212.049-.425.1-.638.153-.212.051-.425.103-.638.152-.17-.152-.22-.357-.27-.559l-.046-.172c-.38-1.416-.789-2.828-1.197-4.237-.154-.533-.309-1.066-.461-1.598-.1-.344-.161-.688-.223-1.031-.027-.147-.053-.295-.083-.442 0-.993-.01-1.985-.021-2.967 0-.229.054-.393.316-.403l.041.072c.007.179.038.343.086.517.474 1.678.951 3.355 1.428 5.03v.003c.478 1.678.955 3.355 1.43 5.035l.023.087c.038.15.075.3.25.35ZM15.255 54.92h12.87c4.288 0 8.575 0 12.872-.022.05 0 .105.007.161.013.166.019.339.038.396-.1.152-.37.12-.785.021-1.167-.05-.192-.246-.167-.423-.145-.055.007-.108.014-.155.014H15.254c-.109 0-.218 0-.327.01-.087.012-.229.045-.24.088-.109.393-.109.797-.01 1.178.05.192.246.167.423.145.055-.007.108-.014.154-.014Z"
                      fill="#24A7D0"
                    />
                  </svg>
                </div>
                <div className="jsx-1066289220">
                  <h3 className="jsx-1066289220 selected0-box-title color-base mb-1 font-weight-bold">
                    Study in UK
                  </h3>
                </div>
              </div>
              <div className="jsx-1066289220">
                <hr className="jsx-1066289220 mt-2 mb-2" />
                <a
                  data-csm-track="true"
                  data-csm-title="Why Study in UK?"
                  data-event-type="link_click"
                  data-section_name="Study Abroad"
                  className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                  href="https://studyabroad.searchmycollege.com/study-in-uk/"
                  style={{ textDecoration: "none" }}
                >
                  Why Study in UK?
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
              <div className="jsx-1066289220">
                <hr className="jsx-1066289220 mt-2 mb-2" />
                <a
                  data-csm-track="true"
                  data-csm-title="SOP for UK"
                  data-event-type="link_click"
                  data-section_name="Study Abroad"
                  className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                  href="https://studyabroad.searchmycollege.com/study-in-uk/"
                  style={{ textDecoration: "none" }}
                >
                  SOP for UK
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
              <div className="jsx-1066289220">
                <hr className="jsx-1066289220 mt-2 mb-2" />
                <a
                  data-csm-track="true"
                  data-csm-title="UK Student VISA"
                  data-event-type="link_click"
                  data-section_name="Study Abroad"
                  className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                  href="https://studyabroad.searchmycollege.com/study-in-uk/"
                  style={{ textDecoration: "none" }}
                >
                  UK Student VISA
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
              <div className="jsx-1066289220">
                <hr className="jsx-1066289220 mt-2 mb-2" />
                <a
                  data-csm-track="true"
                  data-csm-title="Cost to Study in UK"
                  data-event-type="link_click"
                  data-section_name="Study Abroad"
                  className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                  href="https://studyabroad.searchmycollege.com/study-in-uk/"
                  style={{ textDecoration: "none" }}
                >
                  Cost to Study in UK
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
            </div>
          </div>
        </div>
        </li>
        </MDBCol>
        <MDBCol>
        <li className="card4">
        <div>
          <div className="jsx-1066289220 overflow-grid-item px-1">
            <div className="jsx-1066289220 selected0-box selected0-box-lg bg-white rounded-lg h-100">
              <div className="jsx-1066289220 d-flex align-items-center selected0-box-media-group">
                <div className="jsx-1066289220 selected0-box-img mb-0 d-block mr-4 rounded-circle">
                  <svg
                    width={56}
                    height={56}
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 28C0 12.536 12.536 0 28 0s28 12.536 28 28-12.536 28-28 28S0 43.464 0 28Z"
                      fill="#F5F8F9"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.128 55.674c.162.335.45.328.72.322l.105-.001h22.029l.093.002c.065.003.132.006.193-.002.39-.023.642-.23.642-.642 0-.19.002-.38.004-.57.004-.474.009-.948-.016-1.423-.023-.55-.4-.916-.939-.974a3.14 3.14 0 0 0-.733-.011c-.344.034-.539-.103-.722-.401-.618-1.054-1.214-2.108-1.741-3.208a13.908 13.908 0 0 0-.114-.22c-.163-.313-.327-.627-.402-1.017.091 0 .177.003.26.006.156.005.3.01.45-.006.791-.069 1.34-.653 1.33-1.374 0-.757-.596-1.318-1.41-1.34-.123 0-.247-.004-.372-.007-.292-.007-.587-.014-.876.018-.424.045-.584-.126-.71-.516a39.578 39.578 0 0 1-1.89-10c-.287-5.041.423-9.944 2.061-14.71.126-.332.287-.412.619-.412.596.013 1.191.011 1.787.01.447-.002.894-.003 1.34.002.447.011.71-.184.837-.608.114-.372.237-.741.36-1.11.124-.37.247-.74.361-1.112.15-.481-.068-.779-.561-.813a2.042 2.042 0 0 0-.458 0c-.298.034-.401-.092-.378-.39.004-.057.004-.114.003-.17 0-.274 0-.52.455-.529.298 0 .39-.309.458-.584.16-.71.332-1.409.504-2.108.275-1.088.069-1.592-.905-2.188l-.801-.49a693.043 693.043 0 0 0-5.42-3.29c-.343-.206-.526-.412-.538-.87-.011-1.032-.859-1.856-1.878-1.96a3.047 3.047 0 0 0-.79-.022c-.448.057-.55-.138-.528-.55.025-.385.02-.763.016-1.144a36.984 36.984 0 0 1-.004-.46c-.012-.676-.115-.78-.802-.802-.264.172-.355.424-.344.733.008.244.005.483.003.724-.002.12-.003.242-.003.364 0 .54 0 .81-.134.95-.134.139-.4.15-.931.173-1.157.057-2.05.825-2.12 1.902-.034.412-.206.595-.515.79a989.605 989.605 0 0 0-5.415 3.392l-1 .629c-.78.493-1.02 1.1-.768 1.993.083.284.169.569.255.853.13.426.259.852.375 1.278.092.355.207.664.62.722.137.023.16.103.182.229.115.664.012.79-.653.802-.721.011-.916.286-.698.973.087.288.185.571.283.854.132.382.264.763.37 1.151.148.516.458.688.962.676.385-.005.771-.002 1.158.001.581.004 1.163.008 1.74-.012.424-.012.619.114.756.538 2.635 7.744 2.818 15.545.516 23.392a5.626 5.626 0 0 0-.119.497c-.092.444-.185.892-.5 1.107-.263.184-.67.15-1.08.117a5.275 5.275 0 0 0-.524-.025h-.057c-.86.023-1.466.584-1.466 1.352-.012.744.561 1.317 1.386 1.374.133.008.27.005.428.003.087-.001.18-.003.282-.003-.55 1.227-1.142 2.323-1.725 3.405-.109.202-.218.403-.325.605-.344.63-.722.939-1.455.836-.504-.069-.94.103-1.123.653.206.195.195.458.183.699-.019.215-.005.432.008.65.027.442.055.882-.191 1.297ZM27.2 5.173c-.501.001-1 .003-1.495.016-.378.012-.424-.171-.31-.458.16-.378.447-.618.871-.618.722 0 1.443.011 2.154.022l.007.02.004-.02c.375-.072.75-.05 1.125-.029l.112.007c.344.011.608.171.802.458.103.16.206.343.115.527-.07.139-.212.12-.341.102a.922.922 0 0 0-.117-.01c-.642 0-1.284-.012-1.925-.024a91.29 91.29 0 0 1-1.002.007Zm6.804 3.03 2.95 1.786-.002.012a.309.309 0 0 0 .014-.012c.08.035.126.115.034.15a.73.73 0 0 1-.293.025l-.097-.003c-2.88 0-5.76-.003-8.64-.006h-.003c-2.88-.002-5.762-.005-8.643-.005h-.39c.01-.195.132-.255.239-.307.025-.012.049-.024.07-.037.843-.533 1.685-1.063 2.527-1.592.842-.53 1.684-1.06 2.526-1.593.32-.206.63-.298 1.008-.298.863.006 1.723.003 2.583-.001a6.83 6.83 0 0 1 1.298-.007c.432-.002.864-.003 1.297-.003.048.003.099 0 .15-.004.145-.01.296-.02.422.107.985.595 1.966 1.19 2.948 1.786l.002.001Zm-7.6 11.008v25.076c0 .086-.003.172-.006.258-.003.086-.006.172-.006.258h-3.334c.527-1.661.986-3.276 1.318-4.938 1.329-6.747.893-13.391-1.226-19.92-.014-.038-.024-.074-.034-.11-.015-.056-.03-.11-.058-.166-.171-.355-.103-.504.333-.492a65.12 65.12 0 0 0 2.005.028c.336 0 .672.002 1.008.006Zm3.402 25.59v.002c.894 0 1.787 0 2.669.023.332.011.424-.035.31-.401a40.457 40.457 0 0 1-1.776-8.638 39.059 39.059 0 0 1 .217-9.107A38.673 38.673 0 0 1 32.9 19.59c.091-.286.091-.412-.264-.4-.634.014-1.264.02-1.895.025l-.946.009c.012 8.522.012 17.055.012 25.578Zm-9.167-33.497-.181.014a177.95 177.95 0 0 0-1.226-.011c-.406-.003-.814-.006-1.226-.012-.286-.011-.423.046-.297.378.149.39.263.802.355 1.203.091.367.24.504.653.504 4.14-.008 8.284-.005 12.427-.002H31.167l6.188.002c.041 0 .085.006.13.012.14.02.29.04.386-.127h-.012c.047-.17.089-.341.13-.513h.001v-.001c.071-.29.142-.58.236-.86.172-.504.034-.619-.493-.619-4.174.018-8.355.015-12.533.013H25.167l-4.149-.001c-.124 0-.253.01-.38.02Zm5.753 41.048h-6.839l.32-.577v-.003c.169-.303.331-.597.493-.886a32.308 32.308 0 0 0 1.455-2.967c.103-.252.218-.39.527-.39 1.352.023 2.692.023 4.043.023h.001c.16.183.172.413.172.642a180.83 180.83 0 0 1 0 3.517c0 .229-.012.458-.172.641Zm4.703-4.797-1.29.009c-.171.183-.183.412-.183.641a179.65 179.65 0 0 0 0 3.506c0 .217.012.446.184.63h6.61c-.882-1.513-1.673-2.99-2.326-4.525-.08-.195-.195-.287-.424-.287-.854.015-1.713.02-2.57.026h-.001Zm7.68 6.069v1.134c-.096.166-.245.145-.382.126a.906.906 0 0 0-.121-.012l-5.14-.001c-5.137-.002-10.274-.005-15.412.013-.543 0-.546-.244-.55-.536-.001-.072-.002-.146-.011-.22-.046-.447.069-.619.573-.619 3.425.006 6.85.006 10.275.006 3.425 0 6.85 0 10.276.005.03-.004.063-.012.097-.02.143-.033.303-.071.395.124ZM23.415 16.69c-.905 0-1.822.011-2.727.023h-.003c-.812-.012-1.625-.023-2.437-.023-.025 0-.053-.004-.08-.008-.1-.014-.208-.03-.252.122-.115.413.481 1.238.905 1.238 6.105.011 12.198.011 18.303.011h.003c.042 0 .087.006.132.013.131.018.267.037.37-.097l.013-.008c.184-.4.321-.802.413-1.271h-14.64Zm-1.467-2.154H21.991c2.563-.011 5.114-.023 7.677-.023h6.358c.434 0 .654 0 .76.11.111.114.1.346.076.818l-.01.006-.007.005c-.096.162-.24.139-.373.117a.825.825 0 0 0-.125-.013l-5.568-.003c-3.711-.002-7.423-.005-11.134.003-.39 0-.573-.046-.573-.516.011-.435.126-.55.55-.527a39.01 39.01 0 0 0 1.858.024h.467Zm.676 31.434c4.375-.011 8.75-.011 13.124-.011h.004c.023 0 .046 0 .07-.002.202-.005.444-.012.24.346a.283.283 0 0 1-.02.01h.02c-.133.142-.292.127-.447.113-.046-.005-.093-.009-.138-.009h-.005c-5.004 0-10.02 0-15.024-.011h-.344c-.138 0-.287-.046-.298-.195-.023-.206.149-.24.31-.24.566-.008 1.127-.006 1.683-.003h.002l.823.002Zm6.037-26.748-.003.668c-.005.555-.01 1.109.015 1.657.011.4-.195.435-.493.412-.053-.004-.108-.003-.163-.003-.242.002-.478.004-.478-.398.007-.52.005-1.04.002-1.557V20l-.002-.766a3.688 3.688 0 0 1 1.122-.012ZM27.541 51.8l-.003.54h1.122c0-.18-.002-.36-.003-.538-.005-.447-.01-.89.015-1.34.011-.413-.138-.516-.527-.504l-.058.003c-.328.02-.582.035-.56.5.024.442.019.89.014 1.339Zm-.003-7.009v-.905c0-.595.39-.847.95-.641.177.062.175.19.173.324v1.234c-.379-.012-.745-.012-1.123-.012Zm1.119 2.97.003-.197a4.604 4.604 0 0 0-1.122.011c0 .08.002.16.005.242.005.164.01.33-.005.491-.046.435.148.527.55.539.47.011.641-.138.584-.608a2.607 2.607 0 0 1-.015-.478Zm.003-20.199c0 .057-.002.115-.005.172-.005.114-.01.23.005.344.08.515-.126.664-.63.63-.355-.023-.527-.115-.504-.493.023-.435.023-.87 0-1.306-.032-.465.24-.472.552-.479l.078-.002c.344-.011.55.057.504.458-.015.145-.01.295-.005.446.003.076.005.153.005.23Zm-.005 6.932c.003-.05.005-.1.005-.15 0-.061-.002-.124-.005-.186-.005-.125-.01-.25.005-.364.103-.596-.229-.641-.687-.63-.355.011-.458.172-.447.492.012.436.012.871 0 1.306-.011.333.115.459.458.482.481.023.78-.07.676-.642-.015-.1-.01-.205-.005-.308Zm.005-10.277v.401c0 .642-.298.848-.916.665-.195-.058-.206-.195-.206-.344v-1.146c0-.733.034-.744.779-.698.274.022.366.126.343.389-.007.16-.005.319-.002.482l.002.251Zm0 7.137V30.14c0-.16-.023-.275-.229-.321-.664-.15-.893.023-.893.699v1.145c0 .16 0 .298.206.355.618.172.916-.034.916-.664Zm0 6.346v.401c0 .63-.298.837-.916.665-.206-.058-.206-.195-.206-.344v-1.145c0-.723.01-.722.69-.7h.031c.287.012.424.092.401.39-.007.16-.005.32-.002.482l.002.251Zm0 3.723V40.21c.012-.195-.069-.286-.286-.32-.733-.092-.836-.012-.836.698v1.146c0 .16.011.298.206.355.607.183.916-.035.916-.665Z"
                      fill="#48639E"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.652 19.89c.002-.222.004-.445.004-.667h1.134c.185.206.184.463.184.714V44.122c.002.24.004.484-.172.68h-1.146V43.57c.003-.134.005-.262-.172-.324-.561-.206-.95.046-.95.641v.905c-.195 0-.387.003-.58.006-.19.003-.383.006-.578.006-.187-.198-.185-.443-.183-.684V19.918c0-.252-.001-.51.206-.707.19 0 .378.003.567.006.19.003.378.006.567.006l.007.01-.006.001c0 .255 0 .511.002.768.003.517.005 1.037-.003 1.558 0 .401.237.4.479.397.055 0 .11 0 .163.003.298.023.504-.011.493-.412-.025-.548-.02-1.102-.016-1.657Zm.004 32.45h1.146v-4.776c-.39 0-.768 0-1.146-.012l-.01.01.01.002c0 .065-.002.131-.004.197-.004.162-.009.323.016.479.057.47-.115.618-.585.607-.4-.012-.595-.103-.55-.539.016-.16.01-.326.006-.49a7.637 7.637 0 0 1-.006-.243l.017-.002a.504.504 0 0 0-.017-.02c-.189 0-.38-.004-.572-.006a38.104 38.104 0 0 0-.573-.006v4.8c.189 0 .38-.003.572-.006h.001c.192-.003.384-.006.572-.006 0-.176.002-.353.004-.529.005-.449.01-.896-.015-1.338-.022-.466.233-.48.561-.5l.058-.004c.39-.012.538.092.527.504-.025.45-.02.893-.016 1.34.002.179.004.358.004.539Zm0-24.778c0 .057-.002.115-.005.172-.005.115-.01.23.005.344.08.515-.126.664-.63.63-.355-.023-.527-.115-.504-.493.023-.435.023-.87 0-1.306-.032-.465.24-.471.552-.479l.078-.002c.344-.011.55.057.504.458-.015.145-.01.295-.005.446.003.077.005.153.005.23Zm-.005 6.933c.003-.051.005-.102.005-.151 0-.061-.002-.123-.005-.186-.005-.125-.01-.25.005-.364.103-.596-.229-.641-.687-.63-.355.011-.458.172-.447.493.012.435.012.87 0 1.306-.011.332.115.458.458.48.481.024.78-.068.676-.64-.015-.1-.01-.205-.005-.308Zm.005-10.278v.401c0 .642-.298.848-.916.665-.195-.058-.206-.195-.206-.344v-1.146c0-.733.034-.744.779-.698.274.023.366.126.343.39-.007.159-.005.318-.002.481l.002.251Zm0 7.137V30.14c0-.16-.023-.275-.229-.321-.664-.149-.893.023-.893.699v1.145c0 .16 0 .298.206.356.618.171.916-.035.916-.665Zm0 6.346v.401c0 .63-.298.837-.916.665-.206-.057-.206-.195-.206-.344v-1.145c0-.723.01-.722.69-.7h.031c.287.012.424.092.401.39-.007.16-.005.32-.002.482l.002.251Zm0 3.723V40.21c.012-.195-.069-.286-.286-.32-.733-.092-.837-.012-.837.698v1.146c0 .16.012.298.207.355.607.183.916-.035.916-.665Z"
                      fill="#24A7D0"
                    />
                  </svg>
                </div>
                <div className="jsx-1066289220">
                  <h3 className="jsx-1066289220 selected0-box-title color-base mb-1 font-weight-bold">
                    Study in Canada
                  </h3>
                </div>
              </div>
              <div className="jsx-1066289220">
                <hr className="jsx-1066289220 mt-2 mb-2" />
                <a
                  data-csm-track="true"
                  data-csm-title="Why Study in Canada"
                  data-event-type="link_click"
                  data-section_name="Study Abroad"
                  className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                  href="https://studyabroad.searchmycollege.com/study-in-canada/"
                  style={{ textDecoration: "none" }}
                >
                  Why Study in Canada
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
              <div className="jsx-1066289220">
                <hr className="jsx-1066289220 mt-2 mb-2" />
                <a
                  data-csm-track="true"
                  data-csm-title="Top Universities to study"
                  data-event-type="link_click"
                  data-section_name="Study Abroad"
                  className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                  href="https://studyabroad.searchmycollege.com/study-in-canada/"
                  style={{ textDecoration: "none" }}
                >
                  Top Universities to study
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
              <div className="jsx-1066289220">
                <hr className="jsx-1066289220 mt-2 mb-2" />
                <a
                  data-csm-track="true"
                  data-csm-title="SOP for Canada"
                  data-event-type="link_click"
                  data-section_name="Study Abroad"
                  className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                  href="https://studyabroad.searchmycollege.com/study-in-canada/"
                  style={{ textDecoration: "none" }}
                >
                  SOP for Canada
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
              <div className="jsx-1066289220">
                <hr className="jsx-1066289220 mt-2 mb-2" />
                <a
                  data-csm-track="true"
                  data-csm-title="Work Study in Canada"
                  data-event-type="link_click"
                  data-section_name="Study Abroad"
                  className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                  href="https://studyabroad.searchmycollege.com/study-in-canada/"
                  style={{ textDecoration: "none" }}
                >
                  Work Study in Canada
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
            </div>
          </div>
        </div>
      </li>
        </MDBCol>
        <br/>
        <MDBCol>
        <li className="card4">
        <div>
          <div className="jsx-1066289220 overflow-grid-item px-1">
            <div className="jsx-1066289220 selected0-box selected0-box-lg bg-white rounded-lg h-100">
              <div className="jsx-1066289220 d-flex align-items-center selected0-box-media-group">
                <div className="jsx-1066289220 selected0-box-img mb-0 d-block mr-4 rounded-circle">
                  <svg
                    width={56}
                    height={56}
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 28C0 12.536 12.536 0 28 0s28 12.536 28 28-12.536 28-28 28S0 43.464 0 28Z"
                      fill="#F5F8F9"
                    />
                    <path
                      d="M21.808 55.751c.71-.272 1.35-.75 1.99-1.417 1.119-1.2 2.618-1.855 4.227-1.855 1.595 0 3.136.668 4.213 1.855.94 1.022 1.95 1.567 3.067 1.635h1.35c1.309-.081 2.386-.681 3.285-1.84a4.14 4.14 0 0 1 1.05-.954 4.388 4.388 0 0 1 2.372-.682c1.432 0 2.795.627 3.654 1.677.668.818 1.527 1.677 2.822 1.786h1.322c.123-.041.246-.068.368-.11.287-.081.573-.163.846-.272 1.2-.463 1.922-1.459 2.63-2.413l.028-.04c.354-.492.573-.778.545-.942-.027-.163-.313-.368-.804-.709l-.027-.027c-.096-.068-.137-.081-.15-.081 0 0-.028 0-.137.15-.463.654-.9 1.24-1.336 1.785a3.193 3.193 0 0 1-2.48 1.227c-.9 0-1.732-.422-2.332-1.186-1.2-1.527-3.054-2.44-4.976-2.44a5.953 5.953 0 0 0-4.772 2.386c-.613.818-1.5 1.254-2.55 1.254-.08 0-.176 0-.258-.014-.859-.054-1.622-.45-2.386-1.254-1.5-1.568-3.299-2.358-5.385-2.358h-.082c-2.058.013-3.817.818-5.385 2.426-.777.805-1.663 1.227-2.563 1.227-.995 0-1.936-.504-2.726-1.472a6.319 6.319 0 0 0-.846-.859 5.906 5.906 0 0 0-3.762-1.336c-1.922 0-3.736.9-4.99 2.481-.423.532-1.159 1.159-2.277 1.159a3.205 3.205 0 0 1-2.29-1.009 11.91 11.91 0 0 1-.75-.94 4.742 4.742 0 0 0-.204-.273c-.396-.518-.627-.832-.791-.832-.164 0-.477.26-.94.64l-.014.015c-.055.04-.082.068-.082.081 0 .014.014.041.054.082.219.273.423.545.614.818.327.436.654.873 1.009 1.282a4.244 4.244 0 0 0 2.645 1.472h.04l.041.027c.014.014.028.014.082.014h.177a.57.57 0 0 1 .273.068h.845c1.077-.04 1.963-.572 2.822-1.663.873-1.118 2.373-1.84 3.818-1.84.913 0 2.249.286 3.38 1.663.914 1.09 1.882 1.676 3.082 1.84h1.431c.19-.054.382-.068.559-.082.232-.04.45-.068.654-.15Z"
                      fill="#24A7D0"
                    />
                    <path
                      d="M56 25.881c-.232-.313-.545-.436-1.063-.436h-.041c-.94.014-1.977.014-3.245.014H48.093c-3.122 0-6.108.668-8.889 1.99-.163.082-.286.137-.422.137-.341 0-.41-.396-.437-.56-.831-4.894-3.408-9.42-7.28-12.719-3.83-3.313-8.698-5.167-13.66-5.235h-.068c-.423 0-.695.068-.873.395-.163.314-.068.56.191.941 1.255 1.827 2.318 3.708 3.15 5.617.654 1.486 1.104 2.7 1.458 3.967l.11.395-.383-.15c-2.794-1.077-5.684-1.158-8.166-1.158-.477 0-.968 0-1.445.013h-.6c-.368 0-.586.137-.722.437-.123.286-.068.545.19.817.137.15.287.3.478.478 1.663 1.608 2.972 3.149 3.994 4.703.014.027.041.054.069.082.109.122.272.34.163.668l-.082.218-.204-.11c-.041-.026-.096-.04-.136-.067-.096-.041-.178-.096-.273-.137a20.703 20.703 0 0 0-6.367-2.249c-1.54-.286-3.094-.3-4.553-.3H2.054c-.409 0-.75 0-1.05-.014H.937c-.504 0-.736.123-.872.437-.164.368 0 .627.34.968 1.105 1.09 2.237 2.208 3.218 3.476 3.068 3.94 4.867 8.48 5.358 13.47.014.204.027.436-.11.586-.136.15-.354.163-.517.163h-.055c-.613-.013-1.281-.013-2.086-.013H3.704c-.75 0-.968.218-.968.954v4.867l-.368-.45c-.055-.068-.096-.123-.136-.164-.055-.068-.096-.109-.123-.15-.11-.122-.205-.286-.3-.436-.123-.204-.286-.477-.395-.477-.178 0-.396.19-.614.382a3.421 3.421 0 0 1-.436.34c-.055.041-.082.069-.082.082 0 .014.027.055.095.15.26.328.505.655.75.982.218.286.437.586.655.872.845 1.091 2.235 1.759 3.626 1.759.913 0 2.236-.3 3.313-1.704.913-1.186 2.413-1.922 3.94-1.922 1.445 0 2.78.668 3.735 1.895a4.521 4.521 0 0 0 3.558 1.745c1.214 0 2.373-.477 3.286-1.336.109-.11.232-.218.34-.328.164-.163.342-.34.533-.504 1.145-.982 2.44-1.486 3.844-1.486.313 0 .627.027.94.068 1.364.205 2.536.845 3.586 1.963.927.995 2.018 1.527 3.245 1.582.095 0 .19.013.286.013 1.445 0 2.658-.572 3.6-1.69.504-.614 1.226-1.35 2.29-1.704a4.578 4.578 0 0 1 1.485-.232c1.486 0 2.918.723 3.913 1.977.859 1.077 2.032 1.663 3.327 1.663 1.2 0 2.385-.504 3.258-1.377.327-.327.627-.723.9-1.104.081-.11.163-.218.245-.341.355-.464.586-.763.559-.927-.027-.15-.327-.382-.804-.723l-.014-.013c-.123-.082-.164-.096-.177-.096 0 0-.041.014-.11.123-.163.26-.354.49-.53.736-.083.096-.15.205-.233.3l-.122.15-.164-.109c-.014-.014-.027-.014-.04-.027-.042-.028-.124-.082-.124-.205v-4.035c0-.832-.204-1.023-1.008-1.023H49.77c-.805 0-1.445 0-2.045.014h-.068c-.218 0-.45-.027-.6-.177-.164-.164-.164-.423-.164-.627.136-3.177.914-6.04 2.29-8.507 1.391-2.481 3.422-4.635 6.054-6.394.3-.205.545-.382.763-.614v-.559ZM18.81 11.076a.262.262 0 0 1-.055-.164c0-.027-.014-.054-.014-.081l-.082-.287.3.028c2.277.218 4.281.75 6.149 1.595 3.299 1.513 5.97 3.585 7.961 6.148 1.977 2.55 3.327 5.658 4.008 9.23.123.613.055 1.104-.627 1.5-1.022.585-1.895 1.376-2.535 2.003-.11.11-.246.232-.41.232-.245 0-.354-.245-.422-.368-2.072-4.308-5.303-7.58-9.611-9.72-.218-.11-.437-.246-.505-.56-.886-3.271-2.276-6.489-4.158-9.556Zm-6.054 9.748-.34-.341.476-.014h.491c3.722 0 7.049.75 9.884 2.209 2.89 1.5 5.385 3.803 7.403 6.843.49.75.94 1.595 1.418 2.686.163.355.123.614-.123.914-2.181 2.658-3.599 5.684-4.24 8.984-.068.313-.19.64-.681.64h-.123a9.228 9.228 0 0 0-.64-.027c-.219 0-.45.014-.696.027h-.096c-.463 0-.559-.313-.586-.613-.368-3.367-1.486-6.476-3.326-9.257a20.327 20.327 0 0 0-2.959-3.53l-.04-.042c-.178-.163-.355-.34-.464-.586-1.282-2.931-3.054-5.508-5.358-7.893ZM8.107 33.175c-1.254-2.767-3.04-5.385-5.303-7.77l-.313-.328.45-.014c.354-.013.695-.027 1.036-.027 2.753 0 5.33.477 7.648 1.404 2.358.955 4.54 2.413 6.462 4.336 3.053 3.067 4.894 6.884 5.453 11.356.027.164.027.34-.095.464-.11.122-.287.15-.45.15-1.936 0-3.94-.014-6.135-.014h-5.862c-.273 0-.546-.068-.587-.518-.259-3.204-1.036-6.258-2.304-9.039Zm42.985 10.961c.273 0 .49.027.627.177.15.164.164.396.164.614a88.562 88.562 0 0 0 0 4.253c0 .437-.164.641-.573.736-.259.055-.504.096-.75.096-.818 0-1.513-.355-2.085-1.063-1.364-1.691-3.109-2.563-5.195-2.563-1.785 0-3.285.708-4.458 2.099-.845 1.009-1.8 1.54-2.78 1.54-.9 0-1.773-.422-2.618-1.267-1.582-1.568-3.45-2.4-5.412-2.4-1.964 0-3.831.832-5.4 2.4-.844.845-1.73 1.267-2.63 1.267-.982 0-1.936-.531-2.781-1.54a5.878 5.878 0 0 0-4.54-2.113c-1.718 0-3.34.695-4.567 1.95a5.832 5.832 0 0 0-.382.436c-.095.109-.177.218-.273.327-.559.613-1.213.927-1.963.927-.259 0-.531-.041-.804-.11-.246-.067-.505-.19-.505-.613.014-1.39.028-3.013 0-4.594 0-.19.041-.327.137-.423a.46.46 0 0 1 .34-.122h31.861c4.362-.014 9.516-.014 14.587-.014Zm1.5-16.932c-1.364 1.172-2.427 2.304-3.327 3.544-2.413 3.34-3.68 7.117-3.749 11.207-.013.668-.3.79-.818.79h-.013c-2.55-.013-5.045-.013-7.403-.013-2.55 0-5.044 0-7.43.014h-.014c-.231 0-.477-.028-.6-.191-.136-.178-.095-.41-.04-.641.845-3.776 2.835-7.198 5.753-9.911 2.917-2.7 6.475-4.404 10.279-4.936 1.363-.19 2.74-.204 3.926-.204h1.514c.49 0 1.131 0 1.785-.027l.587-.014-.45.382Z"
                      fill="#48639E"
                    />
                  </svg>
                </div>
                <div className="jsx-1066289220">
                  <h3 className="jsx-1066289220 selected0-box-title color-base mb-1 font-weight-bold">
                    Study in Australia
                  </h3>
                </div>
              </div>
              <div className="jsx-1066289220">
                <hr className="jsx-1066289220 mt-2 mb-2" />
                <a
                  data-csm-track="true"
                  data-csm-title="Why Study in Australia?"
                  data-event-type="link_click"
                  data-section_name="Study Abroad"
                  className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                  href="https://studyabroad.searchmycollege.com/study-in-australia/"
                  style={{ textDecoration: "none" }}
                >
                  Why Study in Australia?
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
              <div className="jsx-1066289220">
                <hr className="jsx-1066289220 mt-2 mb-2" />
                <a
                  data-csm-track="true"
                  data-csm-title="Australian Student VISA"
                  data-event-type="link_click"
                  data-section_name="Study Abroad"
                  className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                  href="https://studyabroad.searchmycollege.com/study-in-australia/"
                  style={{ textDecoration: "none" }}
                >
                  Australian Student VISA
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
              <div className="jsx-1066289220">
                <hr className="jsx-1066289220 mt-2 mb-2" />
                <a
                  data-csm-track="true"
                  data-csm-title="SOP for Australia"
                  data-event-type="link_click"
                  data-section_name="Study Abroad"
                  className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                  href="https://studyabroad.searchmycollege.com/study-in-australia/"
                  style={{ textDecoration: "none" }}
                >
                  SOP for Australia
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
              <div className="jsx-1066289220">
                <hr className="jsx-1066289220 mt-2 mb-2" />
                <a
                  data-csm-track="true"
                  data-csm-title="Top Universities in Australia"
                  data-event-type="link_click"
                  data-section_name="Study Abroad"
                  className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                  href="https://studyabroad.searchmycollege.com/study-in-australia/"
                  style={{ textDecoration: "none" }}
                >
                  Top Universities in Australia
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
            </div>
          </div>
        </div>
        </li>
        </MDBCol>
        <MDBCol>
        <li className="card4">
        <div>
          <div className="jsx-1066289220 overflow-grid-item px-1">
            <div className="jsx-1066289220 selected0-box selected0-box-lg bg-white rounded-lg h-100">
              <div className="jsx-1066289220 d-flex align-items-center selected0-box-media-group">
                <div className="jsx-1066289220 selected0-box-img mb-0 d-block mr-4 rounded-circle">
                  <svg
                    width={56}
                    height={57}
                    viewBox="0 0 56 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 28C0 12.536 12.536 0 28 0s28 12.536 28 28-12.536 28-28 28S0 43.464 0 28Z"
                      fill="#F5F8F9"
                    />
                    <path
                      d="M30.79 7.227c-.724.118-.962.01-1.06-.53.876-.79 1.763-1.567 2.638-2.356.238-.216.476-.411.81-.249.303.151.303.454.303.746v3.005c-.324-.238-.713-.217-1.07-.325-.248-.55-.086-1.113-.097-1.534-.41.421-.843.962-1.524 1.243ZM26.37 6.578c-.174.486-.444.627-1.06.53-.378.01-.508-.346-.778-.508-.184-.108-.314-.292-.54-.379-.184.454.086.973-.195 1.395-.335.13-.746.075-.994.421-.022.054-.044.065-.076 0 0-1.07-.01-2.15-.01-3.22 0-.282.053-.53.345-.66.281-.119.476.022.68.184.876.756 1.752 1.502 2.627 2.237Z"
                      fill="#48639E"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M53.888 56.038c.302-.065.389-.292.432-.562 0-.79 0-1.578-.022-2.324-.205-.703-.464-.919-1.178-.93h-.01a15.77 15.77 0 0 0-1.233 0c-.302.011-.41-.086-.4-.4.022-.573.022-1.145 0-1.718-.01-.508-.324-.93-.789-.919-.53.01-.54-.238-.54-.648.01-7.058.01-14.105.01-21.163 0-1.06 0-1.07 1.06-1.06.475 0 .767-.151.93-.627a44.39 44.39 0 0 1 .637-1.715c.143-.368.286-.736.422-1.106.216-.572.021-.864-.584-.875l-.3-.006a20.63 20.63 0 0 0-1.527.006c-.378.022-.497-.087-.486-.476.016-1.053.014-2.1.012-3.151l-.001-1.053c0-.605-.151-.757-.767-.767h-1.027c-1.257 0-2.514-.002-3.77-.004-3.143-.004-6.285-.009-9.427.014-.563 0-.703-.162-.66-.691.03-.37.024-.747.017-1.124a27.245 27.245 0 0 1-.006-.487c0-.692-.097-.81-.767-.8-.357 0-.444-.119-.444-.464.008-.987.005-1.979.003-2.972l-.003-1.492c-.564.14-.95.48-1.157 1.006l.066-.055v3.87a2.658 2.658 0 0 1-.119-.13c.011.212.027.428.043.643.015.194.029.387.04.58.416.014.831.04 1.246.095.004.187.004.374.003.563 0 .314-.001.629.019.94.022.378-.097.486-.476.475-1.734-.016-3.469-.014-5.204-.012l-1.735.001c-.201 0-.403-.01-.605-.019-.097-.005-.195-.01-.292-.013v.01l-.032.001c-.778.01-1.546.021-2.324.021h-.02c-.137 0-.304.001-.293-.194.007-.194-.002-.388-.011-.583-.019-.404-.038-.81.086-1.212.362-.051.726-.048 1.09-.046h.086a.379.379 0 0 0 .067-.083l.008-.234c.01-.291.019-.583.006-.875a.168.168 0 0 1-.003.006c-.014.021-.05.033-.086.045-.02.006-.04.013-.055.02 0-1.286 0-2.583-.01-3.87.031.016.063.032.093.05-.13-.363-.429-.547-.732-.733-.094-.058-.19-.117-.28-.18a.152.152 0 0 0-.151.02c0 .483-.003.967-.005 1.45-.005.97-.01 1.94.005 2.907 0 .345-.098.454-.454.454-.606-.011-.735.15-.735.778 0 .169-.004.34-.008.51-.01.385-.019.772.018 1.154.044.53-.13.649-.648.649-3.502-.017-7.004-.015-10.506-.013l-3.502.002c-.778 0-.897.13-.897.908l-.003 1.158c-.005.964-.01 1.927.014 2.884 0 .41-.119.519-.519.497-.692-.032-1.394-.021-2.097-.01-.68 0-.875.302-.605.93.118.275.243.547.368.819.242.527.484 1.052.67 1.601.248.757.68 1.081 1.47.951.378-.054.518.054.518.487-.01 7.285-.01 14.57 0 21.854 0 .4-.097.52-.508.508-.713-.021-1.037.346-1.048 1.06v.81c0 .6 0 .898-.149 1.045-.146.144-.435.144-1.008.144l-.121-.001c-.122-.002-.243-.004-.365.012-.573.065-.919.422-.93.994-.016.56-.014 1.125-.012 1.692l.002.567c0 .303.108.53.421.606l.03-.002c.172-.01.337-.02.51-.02h50.703c.174 0 .339.01.512.02l.029.002Zm-4.67-34.188h.011c-.097.154-.23.132-.358.112-.044-.007-.087-.014-.128-.014-12.884.01-25.757.01-38.64 0-.282 0-.563-.003-.844-.005a49.362 49.362 0 0 0-1.686.005c-.356.01-.508-.065-.497-.465a73.352 73.352 0 0 0 0-3.448c0-.313.076-.443.41-.432a50.17 50.17 0 0 0 1.586-.016c.423-.008.846-.017 1.268-.017h38.262c.051 0 .104-.005.156-.01.16-.017.322-.033.46.097h-.01c.065 1.394.054 2.8.01 4.194ZM6.752 23.04c.194-.011.389-.022.594-.022h43.948l.108.002c.072.003.144.005.216-.002.26-.022.378.043.26.335-.157.36-.3.725-.445 1.091-.085.217-.17.433-.258.649a.462.462 0 0 1-.031.015c-.098.112-.23.096-.356.081a1.043 1.043 0 0 0-.121-.01H7.908c-.432 0-.861-.002-1.29-.005h-.002c-.43-.003-.859-.005-1.29-.005-.239 0-.4-.044-.498-.292-.198-.494-.41-.981-.644-1.516l-.145-.332c.951.01 1.827.01 2.713.01Zm17.034 16.028.001-2.342c.002-2.343.005-4.686-.012-7.029 0-.443.065-.616.573-.605 2.248.033 4.486.022 6.734 0 .41 0 .508.119.508.519-.011 6.312-.011 12.635 0 18.947 0 .41-.087.551-.53.551a353.88 353.88 0 0 0-6.788 0c-.41 0-.508-.118-.497-.508.011-3.177.011-6.355.011-9.533Zm13.166-2.343c.002-2.368.004-4.739-.012-7.103 0-.39.076-.53.497-.52 2.248.023 4.497.023 6.734 0 .421 0 .497.142.497.53-.01 6.323-.01 12.646 0 18.959 0 .389-.086.518-.508.518a349.874 349.874 0 0 0-6.734 0c-.432 0-.486-.15-.486-.53.01-3.154.01-6.31.01-9.475V39.1l.002-2.345v-.031Zm-18.54 4.732c.002-.786.002-1.571.002-2.356l-.001-2.36v-.004c-.002-2.354-.004-4.702.012-7.05 0-.422-.076-.584-.551-.573-2.065.021-4.129.021-6.193 0-.433-.011-.53.119-.53.54.01 6.312.01 12.635 0 18.947 0 .39.076.52.497.52 2.086-.022 4.161-.022 6.247 0 .433 0 .53-.13.53-.541a921.194 921.194 0 0 1-.012-7.11v-.013Zm-9.769 8.722c-.205 0-.4.011-.594.022l-.232-.007c-.314-.01-.632-.021-.935-.004a3.247 3.247 0 0 1-.511-.035c-.367-.044-.73-.087-.927.133-.201.223-.163.59-.125.96.02.185.039.372.028.542-.022.26.043.389.346.378a57.48 57.48 0 0 1 1.412-.015h.002c.313-.001.626-.002.94-.006.116 0 .229.005.342.01.117.006.233.011.352.011h40.37c.655 0 .977 0 1.141-.16.158-.156.17-.46.194-1.057l.005-.123c.021-.573-.163-.66-.681-.66-13.716.011-27.422.011-41.127.011Zm44.553 3.146c.043.53.043 1.07 0 1.6a.35.35 0 0 1-.022.013c-.102.104-.23.088-.351.073a1.025 1.025 0 0 0-.124-.01H5.876c-.328 0-.657-.005-.987-.01-.55-.008-1.102-.015-1.65-.002-.389.011-.475-.119-.475-.486v-.061c.005-.596.007-.9.16-1.054.16-.16.48-.16 1.137-.16 8.09 0 16.18-.003 24.27-.006s16.18-.005 24.27-.005c.058.006.119.002.18-.002.145-.01.293-.02.415.11ZM9.778 26.269c-.072.005-.144.01-.216.013-.767 0-1.535-.01-2.302-.022-.227-.01-.41.044-.357.314.035.17.012.35-.012.529-.042.32-.084.638.207.908.023.024.069.019.113.015a.491.491 0 0 1 .049-.004c.765 0 1.53-.01 2.294-.021.08.003.158.008.237.013.154.01.306.019.463.019H48.04c1.06 0 1.06 0 1.06-1.08-.002-.091-.002-.17-.001-.239 0-.24 0-.358-.059-.416-.058-.056-.172-.054-.398-.05l-.223.002H10.21c-.145 0-.289.01-.433.019ZM49.1 39.112l-.002 2.358c-.002 2.356-.004 4.708.012 7.067 0 .432-.086.605-.562.572a19.704 19.704 0 0 0-2.259 0c-.465.022-.55-.15-.55-.583.01-4.378.01-8.766.01-13.143l.001-1.443v-.003c.002-1.439.004-2.874-.012-4.315 0-.39.076-.54.497-.53.79.033 1.578.033 2.367 0 .422-.021.498.14.498.53-.008 2.11-.005 4.217-.003 6.324l.002 3.166Zm-26.396 2.401.001-2.358V37.26c-.002-2.527-.004-5.055.022-7.563 0-.497-.151-.605-.605-.583a30.02 30.02 0 0 1-2.205 0c-.335 0-.433.097-.433.432.011 6.388.011 12.776 0 19.163 0 .357.13.422.443.411a31.391 31.391 0 0 1 2.26 0c.421.011.53-.119.53-.54-.017-2.359-.015-4.711-.013-7.067Zm13.166-2.38-.001 2.358c-.002 2.356-.004 4.709.012 7.067 0 .454-.13.573-.573.551a23.81 23.81 0 0 0-2.15 0c-.422.022-.509-.13-.509-.518.01-4.021.01-8.042.01-12.063 0-.651.003-1.303.004-1.954.005-1.63.01-3.258-.014-4.887-.01-.498.162-.606.616-.584.66.032 1.33.032 1.989 0 .476-.022.638.086.627.605a906.796 906.796 0 0 0-.012 7.058v.008l.001 2.36Zm-25.78 2.324.002-2.367-.002-2.36v-.009c-.002-2.367-.004-4.735.012-7.11.011-.432-.108-.551-.54-.53-.735.044-1.47.033-2.205.011-.357 0-.475.108-.465.465.017.697.015 1.4.013 2.101v.003l-.002.695c0 1.346 0 2.692.002 4.037.002 4.037.004 8.074-.013 12.111 0 .476.108.638.595.605.68-.043 1.362-.043 2.043 0 .443.022.572-.097.572-.55-.016-2.368-.014-4.735-.012-7.102Z"
                      fill="#48639E"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.417 20.353c.197.003.394.006.589.006 4.701 0 9.414 0 14.105-.011.378 0 .443.14.443.476 0 .605.14.735.724.735.769.004 1.538.003 2.307.002 1.025-.002 2.05-.004 3.076.008.497 0 .789-.194.756-.68-.032-.498.206-.53.606-.53h15.142l.15.002c.392.01.823.022.823-.543 0-.568-.424-.555-.812-.543a5.23 5.23 0 0 1-.16.003c-5.07-.01-10.128-.01-15.197 0-.357 0-.563-.032-.552-.476.011-.55-.216-.713-.832-.713h-5.22c-.649 0-.8.13-.8.778 0 .346-.13.422-.443.422-4.702-.022-9.415-.022-14.116-.022-.195 0-.392.003-.59.006a43.24 43.24 0 0 1-.588.005c-.346 0-.54.151-.552.508-.01.367.173.562.552.562.194 0 .391.003.589.005Zm18.015.11c.18.002.358.004.537.004.188 0 .377-.003.566-.006.442-.007.887-.014 1.326.017.53.043.53-.26.508-.627-.004-.062-.002-.126 0-.19.011-.27.021-.53-.486-.513a87.847 87.847 0 0 1-3.773 0c-.378-.01-.53.108-.475.487.021.13.01.26 0 .378-.044.357.097.475.454.465.448-.023.895-.019 1.343-.015ZM32.38 9.486c.303-.39.681-.703 1.081-.984v-.66c-.161-.306-.442-.346-.723-.386a2.017 2.017 0 0 1-.336-.067c-.191-.032-.382-.06-.573-.087-.327-.047-.652-.094-.973-.162l-.083-.002c-.405-.008-.808-.016-1.04-.441-.29-.398-.473-.85-.657-1.303-.09-.223-.18-.447-.284-.664l-.04-.085c-.115-.25-.236-.51-.565-.52-.323 0-.469.239-.614.476a7.67 7.67 0 0 1-.046.075c-.142.227-.269.463-.395.698-.226.424-.452.846-.772 1.215-.281.378-.703.432-1.124.475-.4.192-.84.29-1.272.388l-.241.056c-.094.037-.197.058-.3.08-.287.062-.575.124-.662.514.007.056.004.115.001.175-.005.112-.01.227.053.333.133.163.304.283.475.403.191.134.382.268.52.462.142.257.375.42.608.582.118.083.236.166.342.26.227.206.281.38.14.65-.274.526-.508 1.074-.743 1.624-.107.251-.215.503-.326.753.038.124.008.254-.023.384-.047.2-.094.401.11.578.181.31.425.243.672.176.046-.013.092-.025.138-.035.144-.038.274-.101.404-.164.094-.046.188-.092.288-.128.169-.06.331-.144.493-.227.305-.157.61-.314.955-.314.238-.001.476-.01.715-.017 1.204-.04 2.407-.081 3.49.677.079.053.175.085.27.118.059.02.118.04.173.065l.056.019c.25.081.491.16.733-.051.288-.24.214-.511.139-.785-.026-.095-.053-.19-.064-.285-.19-.46-.43-.888-.671-1.315-.144-.255-.287-.51-.42-.771-.173-.324-.12-.54.13-.8.109-.117.237-.216.366-.315.238-.183.476-.366.595-.668Zm-1.195-.424c.175-.167.355-.339.547-.517-.8-.119-1.481-.227-2.151-.335-.346-.043-.53-.216-.67-.53-.07-.157-.135-.316-.2-.476-.178-.435-.359-.877-.643-1.296l-.245.402c-.235.383-.456.743-.642 1.122-.183.378-.454.551-.854.638-.427.085-.843.204-1.292.332-.175.05-.356.102-.545.154l.217.17c.408.319.775.605 1.134.9.638.519.66.616.314 1.394-.12.273-.244.545-.372.828-.136.302-.278.616-.428.956l.538-.246c.652-.297 1.24-.565 1.829-.846.292-.13.54-.13.821.01.36.181.73.352 1.1.522.185.085.37.17.554.257l.044.02c.085.042.176.086.259.012.085-.076.036-.153-.01-.224l-.034-.056-.151-.28c-.145-.268-.291-.537-.443-.801-.26-.444-.184-.779.227-1.114.37-.303.719-.636 1.096-.996Z"
                      fill="#24A7D0"
                    />
                  </svg>
                </div>
                <div className="jsx-1066289220">
                  <h3 className="jsx-1066289220 selected0-box-title color-base mb-1 font-weight-bold">
                    Study in Ireland
                  </h3>
                </div>
              </div>
              <div className="jsx-1066289220">
                <hr className="jsx-1066289220 mt-2 mb-2" />
                <a
                  data-csm-track="true"
                  data-csm-title="Why Study in Ireland?"
                  data-event-type="link_click"
                  data-section_name="Study Abroad"
                  className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                  href="https://studyabroad.searchmycollege.com/study-in-ireland/"
                  style={{ textDecoration: "none" }}
                >
                  Why Study in Ireland?
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
              <div className="jsx-1066289220">
                <hr className="jsx-1066289220 mt-2 mb-2" />
                <a
                  data-csm-track="true"
                  data-csm-title="Top Universities in Ireland?"
                  data-event-type="link_click"
                  data-section_name="Study Abroad"
                  className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                  href="https://studyabroad.searchmycollege.com/study-in-ireland/"
                  style={{ textDecoration: "none" }}
                >
                  Top Universities in Ireland
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
              <div className="jsx-1066289220">
                <hr className="jsx-1066289220 mt-2 mb-2" />
                <a
                  data-csm-track="true"
                  data-csm-title="SOP for Ireland"
                  data-event-type="link_click"
                  data-section_name="Study Abroad"
                  className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                  href="https://studyabroad.searchmycollege.com/study-in-ireland/"
                  style={{ textDecoration: "none" }}
                >
                  SOP for Germany
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
              <div className="jsx-1066289220">
                <hr className="jsx-1066289220 mt-2 mb-2" />
                <a
                  data-csm-track="true"
                  data-csm-title="Scholarships in Ireland"
                  data-event-type="link_click"
                  data-section_name="Study Abroad"
                  className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                  href="https://studyabroad.searchmycollege.com/study-in-ireland/"
                  style={{ textDecoration: "none" }}
                >
                  Scholarships in Ireland
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
            </div>
          </div>
        </div>
        </li>
        </MDBCol>
        <MDBCol>
        <li className="card4">
        <div>
          <div className="jsx-1066289220 overflow-grid-item px-1">
            <div className="jsx-1066289220 selected0-box selected0-box-lg bg-white rounded-lg h-100">
              <div className="jsx-1066289220 d-flex align-items-center selected0-box-media-group">
                <div className="jsx-1066289220 selected0-box-img mb-0 d-block mr-4 rounded-circle">
                  <svg
                    width={56}
                    height={57}
                    viewBox="0 0 56 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 28C0 12.536 12.536 0 28 0s28 12.536 28 28-12.536 28-28 28S0 43.464 0 28Z"
                      fill="#F5F8F9"
                    />
                    <path
                      d="M30.79 7.227c-.724.118-.962.01-1.06-.53.876-.79 1.763-1.567 2.638-2.356.238-.216.476-.411.81-.249.303.151.303.454.303.746v3.005c-.324-.238-.713-.217-1.07-.325-.248-.55-.086-1.113-.097-1.534-.41.421-.843.962-1.524 1.243ZM26.37 6.578c-.174.486-.444.627-1.06.53-.378.01-.508-.346-.778-.508-.184-.108-.314-.292-.54-.379-.184.454.086.973-.195 1.395-.335.13-.746.075-.994.421-.022.054-.044.065-.076 0 0-1.07-.01-2.15-.01-3.22 0-.282.053-.53.345-.66.281-.119.476.022.68.184.876.756 1.752 1.502 2.627 2.237Z"
                      fill="#48639E"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M53.888 56.038c.302-.065.389-.292.432-.562 0-.79 0-1.578-.022-2.324-.205-.703-.464-.919-1.178-.93h-.01a15.77 15.77 0 0 0-1.233 0c-.302.011-.41-.086-.4-.4.022-.573.022-1.145 0-1.718-.01-.508-.324-.93-.789-.919-.53.01-.54-.238-.54-.648.01-7.058.01-14.105.01-21.163 0-1.06 0-1.07 1.06-1.06.475 0 .767-.151.93-.627a44.39 44.39 0 0 1 .637-1.715c.143-.368.286-.736.422-1.106.216-.572.021-.864-.584-.875l-.3-.006a20.63 20.63 0 0 0-1.527.006c-.378.022-.497-.087-.486-.476.016-1.053.014-2.1.012-3.151l-.001-1.053c0-.605-.151-.757-.767-.767h-1.027c-1.257 0-2.514-.002-3.77-.004-3.143-.004-6.285-.009-9.427.014-.563 0-.703-.162-.66-.691.03-.37.024-.747.017-1.124a27.245 27.245 0 0 1-.006-.487c0-.692-.097-.81-.767-.8-.357 0-.444-.119-.444-.464.008-.987.005-1.979.003-2.972l-.003-1.492c-.564.14-.95.48-1.157 1.006l.066-.055v3.87a2.658 2.658 0 0 1-.119-.13c.011.212.027.428.043.643.015.194.029.387.04.58.416.014.831.04 1.246.095.004.187.004.374.003.563 0 .314-.001.629.019.94.022.378-.097.486-.476.475-1.734-.016-3.469-.014-5.204-.012l-1.735.001c-.201 0-.403-.01-.605-.019-.097-.005-.195-.01-.292-.013v.01l-.032.001c-.778.01-1.546.021-2.324.021h-.02c-.137 0-.304.001-.293-.194.007-.194-.002-.388-.011-.583-.019-.404-.038-.81.086-1.212.362-.051.726-.048 1.09-.046h.086a.379.379 0 0 0 .067-.083l.008-.234c.01-.291.019-.583.006-.875a.168.168 0 0 1-.003.006c-.014.021-.05.033-.086.045-.02.006-.04.013-.055.02 0-1.286 0-2.583-.01-3.87.031.016.063.032.093.05-.13-.363-.429-.547-.732-.733-.094-.058-.19-.117-.28-.18a.152.152 0 0 0-.151.02c0 .483-.003.967-.005 1.45-.005.97-.01 1.94.005 2.907 0 .345-.098.454-.454.454-.606-.011-.735.15-.735.778 0 .169-.004.34-.008.51-.01.385-.019.772.018 1.154.044.53-.13.649-.648.649-3.502-.017-7.004-.015-10.506-.013l-3.502.002c-.778 0-.897.13-.897.908l-.003 1.158c-.005.964-.01 1.927.014 2.884 0 .41-.119.519-.519.497-.692-.032-1.394-.021-2.097-.01-.68 0-.875.302-.605.93.118.275.243.547.368.819.242.527.484 1.052.67 1.601.248.757.68 1.081 1.47.951.378-.054.518.054.518.487-.01 7.285-.01 14.57 0 21.854 0 .4-.097.52-.508.508-.713-.021-1.037.346-1.048 1.06v.81c0 .6 0 .898-.149 1.045-.146.144-.435.144-1.008.144l-.121-.001c-.122-.002-.243-.004-.365.012-.573.065-.919.422-.93.994-.016.56-.014 1.125-.012 1.692l.002.567c0 .303.108.53.421.606l.03-.002c.172-.01.337-.02.51-.02h50.703c.174 0 .339.01.512.02l.029.002Zm-4.67-34.188h.011c-.097.154-.23.132-.358.112-.044-.007-.087-.014-.128-.014-12.884.01-25.757.01-38.64 0-.282 0-.563-.003-.844-.005a49.362 49.362 0 0 0-1.686.005c-.356.01-.508-.065-.497-.465a73.352 73.352 0 0 0 0-3.448c0-.313.076-.443.41-.432a50.17 50.17 0 0 0 1.586-.016c.423-.008.846-.017 1.268-.017h38.262c.051 0 .104-.005.156-.01.16-.017.322-.033.46.097h-.01c.065 1.394.054 2.8.01 4.194ZM6.752 23.04c.194-.011.389-.022.594-.022h43.948l.108.002c.072.003.144.005.216-.002.26-.022.378.043.26.335-.157.36-.3.725-.445 1.091-.085.217-.17.433-.258.649a.462.462 0 0 1-.031.015c-.098.112-.23.096-.356.081a1.043 1.043 0 0 0-.121-.01H7.908c-.432 0-.861-.002-1.29-.005h-.002c-.43-.003-.859-.005-1.29-.005-.239 0-.4-.044-.498-.292-.198-.494-.41-.981-.644-1.516l-.145-.332c.951.01 1.827.01 2.713.01Zm17.034 16.028.001-2.342c.002-2.343.005-4.686-.012-7.029 0-.443.065-.616.573-.605 2.248.033 4.486.022 6.734 0 .41 0 .508.119.508.519-.011 6.312-.011 12.635 0 18.947 0 .41-.087.551-.53.551a353.88 353.88 0 0 0-6.788 0c-.41 0-.508-.118-.497-.508.011-3.177.011-6.355.011-9.533Zm13.166-2.343c.002-2.368.004-4.739-.012-7.103 0-.39.076-.53.497-.52 2.248.023 4.497.023 6.734 0 .421 0 .497.142.497.53-.01 6.323-.01 12.646 0 18.959 0 .389-.086.518-.508.518a349.874 349.874 0 0 0-6.734 0c-.432 0-.486-.15-.486-.53.01-3.154.01-6.31.01-9.475V39.1l.002-2.345v-.031Zm-18.54 4.732c.002-.786.002-1.571.002-2.356l-.001-2.36v-.004c-.002-2.354-.004-4.702.012-7.05 0-.422-.076-.584-.551-.573-2.065.021-4.129.021-6.193 0-.433-.011-.53.119-.53.54.01 6.312.01 12.635 0 18.947 0 .39.076.52.497.52 2.086-.022 4.161-.022 6.247 0 .433 0 .53-.13.53-.541a921.194 921.194 0 0 1-.012-7.11v-.013Zm-9.769 8.722c-.205 0-.4.011-.594.022l-.232-.007c-.314-.01-.632-.021-.935-.004a3.247 3.247 0 0 1-.511-.035c-.367-.044-.73-.087-.927.133-.201.223-.163.59-.125.96.02.185.039.372.028.542-.022.26.043.389.346.378a57.48 57.48 0 0 1 1.412-.015h.002c.313-.001.626-.002.94-.006.116 0 .229.005.342.01.117.006.233.011.352.011h40.37c.655 0 .977 0 1.141-.16.158-.156.17-.46.194-1.057l.005-.123c.021-.573-.163-.66-.681-.66-13.716.011-27.422.011-41.127.011Zm44.553 3.146c.043.53.043 1.07 0 1.6a.35.35 0 0 1-.022.013c-.102.104-.23.088-.351.073a1.025 1.025 0 0 0-.124-.01H5.876c-.328 0-.657-.005-.987-.01-.55-.008-1.102-.015-1.65-.002-.389.011-.475-.119-.475-.486v-.061c.005-.596.007-.9.16-1.054.16-.16.48-.16 1.137-.16 8.09 0 16.18-.003 24.27-.006s16.18-.005 24.27-.005c.058.006.119.002.18-.002.145-.01.293-.02.415.11ZM9.778 26.269c-.072.005-.144.01-.216.013-.767 0-1.535-.01-2.302-.022-.227-.01-.41.044-.357.314.035.17.012.35-.012.529-.042.32-.084.638.207.908.023.024.069.019.113.015a.491.491 0 0 1 .049-.004c.765 0 1.53-.01 2.294-.021.08.003.158.008.237.013.154.01.306.019.463.019H48.04c1.06 0 1.06 0 1.06-1.08-.002-.091-.002-.17-.001-.239 0-.24 0-.358-.059-.416-.058-.056-.172-.054-.398-.05l-.223.002H10.21c-.145 0-.289.01-.433.019ZM49.1 39.112l-.002 2.358c-.002 2.356-.004 4.708.012 7.067 0 .432-.086.605-.562.572a19.704 19.704 0 0 0-2.259 0c-.465.022-.55-.15-.55-.583.01-4.378.01-8.766.01-13.143l.001-1.443v-.003c.002-1.439.004-2.874-.012-4.315 0-.39.076-.54.497-.53.79.033 1.578.033 2.367 0 .422-.021.498.14.498.53-.008 2.11-.005 4.217-.003 6.324l.002 3.166Zm-26.396 2.401.001-2.358V37.26c-.002-2.527-.004-5.055.022-7.563 0-.497-.151-.605-.605-.583a30.02 30.02 0 0 1-2.205 0c-.335 0-.433.097-.433.432.011 6.388.011 12.776 0 19.163 0 .357.13.422.443.411a31.391 31.391 0 0 1 2.26 0c.421.011.53-.119.53-.54-.017-2.359-.015-4.711-.013-7.067Zm13.166-2.38-.001 2.358c-.002 2.356-.004 4.709.012 7.067 0 .454-.13.573-.573.551a23.81 23.81 0 0 0-2.15 0c-.422.022-.509-.13-.509-.518.01-4.021.01-8.042.01-12.063 0-.651.003-1.303.004-1.954.005-1.63.01-3.258-.014-4.887-.01-.498.162-.606.616-.584.66.032 1.33.032 1.989 0 .476-.022.638.086.627.605a906.796 906.796 0 0 0-.012 7.058v.008l.001 2.36Zm-25.78 2.324.002-2.367-.002-2.36v-.009c-.002-2.367-.004-4.735.012-7.11.011-.432-.108-.551-.54-.53-.735.044-1.47.033-2.205.011-.357 0-.475.108-.465.465.017.697.015 1.4.013 2.101v.003l-.002.695c0 1.346 0 2.692.002 4.037.002 4.037.004 8.074-.013 12.111 0 .476.108.638.595.605.68-.043 1.362-.043 2.043 0 .443.022.572-.097.572-.55-.016-2.368-.014-4.735-.012-7.102Z"
                      fill="#48639E"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.417 20.353c.197.003.394.006.589.006 4.701 0 9.414 0 14.105-.011.378 0 .443.14.443.476 0 .605.14.735.724.735.769.004 1.538.003 2.307.002 1.025-.002 2.05-.004 3.076.008.497 0 .789-.194.756-.68-.032-.498.206-.53.606-.53h15.142l.15.002c.392.01.823.022.823-.543 0-.568-.424-.555-.812-.543a5.23 5.23 0 0 1-.16.003c-5.07-.01-10.128-.01-15.197 0-.357 0-.563-.032-.552-.476.011-.55-.216-.713-.832-.713h-5.22c-.649 0-.8.13-.8.778 0 .346-.13.422-.443.422-4.702-.022-9.415-.022-14.116-.022-.195 0-.392.003-.59.006a43.24 43.24 0 0 1-.588.005c-.346 0-.54.151-.552.508-.01.367.173.562.552.562.194 0 .391.003.589.005Zm18.015.11c.18.002.358.004.537.004.188 0 .377-.003.566-.006.442-.007.887-.014 1.326.017.53.043.53-.26.508-.627-.004-.062-.002-.126 0-.19.011-.27.021-.53-.486-.513a87.847 87.847 0 0 1-3.773 0c-.378-.01-.53.108-.475.487.021.13.01.26 0 .378-.044.357.097.475.454.465.448-.023.895-.019 1.343-.015ZM32.38 9.486c.303-.39.681-.703 1.081-.984v-.66c-.161-.306-.442-.346-.723-.386a2.017 2.017 0 0 1-.336-.067c-.191-.032-.382-.06-.573-.087-.327-.047-.652-.094-.973-.162l-.083-.002c-.405-.008-.808-.016-1.04-.441-.29-.398-.473-.85-.657-1.303-.09-.223-.18-.447-.284-.664l-.04-.085c-.115-.25-.236-.51-.565-.52-.323 0-.469.239-.614.476a7.67 7.67 0 0 1-.046.075c-.142.227-.269.463-.395.698-.226.424-.452.846-.772 1.215-.281.378-.703.432-1.124.475-.4.192-.84.29-1.272.388l-.241.056c-.094.037-.197.058-.3.08-.287.062-.575.124-.662.514.007.056.004.115.001.175-.005.112-.01.227.053.333.133.163.304.283.475.403.191.134.382.268.52.462.142.257.375.42.608.582.118.083.236.166.342.26.227.206.281.38.14.65-.274.526-.508 1.074-.743 1.624-.107.251-.215.503-.326.753.038.124.008.254-.023.384-.047.2-.094.401.11.578.181.31.425.243.672.176.046-.013.092-.025.138-.035.144-.038.274-.101.404-.164.094-.046.188-.092.288-.128.169-.06.331-.144.493-.227.305-.157.61-.314.955-.314.238-.001.476-.01.715-.017 1.204-.04 2.407-.081 3.49.677.079.053.175.085.27.118.059.02.118.04.173.065l.056.019c.25.081.491.16.733-.051.288-.24.214-.511.139-.785-.026-.095-.053-.19-.064-.285-.19-.46-.43-.888-.671-1.315-.144-.255-.287-.51-.42-.771-.173-.324-.12-.54.13-.8.109-.117.237-.216.366-.315.238-.183.476-.366.595-.668Zm-1.195-.424c.175-.167.355-.339.547-.517-.8-.119-1.481-.227-2.151-.335-.346-.043-.53-.216-.67-.53-.07-.157-.135-.316-.2-.476-.178-.435-.359-.877-.643-1.296l-.245.402c-.235.383-.456.743-.642 1.122-.183.378-.454.551-.854.638-.427.085-.843.204-1.292.332-.175.05-.356.102-.545.154l.217.17c.408.319.775.605 1.134.9.638.519.66.616.314 1.394-.12.273-.244.545-.372.828-.136.302-.278.616-.428.956l.538-.246c.652-.297 1.24-.565 1.829-.846.292-.13.54-.13.821.01.36.181.73.352 1.1.522.185.085.37.17.554.257l.044.02c.085.042.176.086.259.012.085-.076.036-.153-.01-.224l-.034-.056-.151-.28c-.145-.268-.291-.537-.443-.801-.26-.444-.184-.779.227-1.114.37-.303.719-.636 1.096-.996Z"
                      fill="#24A7D0"
                    />
                  </svg>
                </div>
                <div className="jsx-1066289220">
                  <h3 className="jsx-1066289220 selected0-box-title color-base mb-1 font-weight-bold">
                    Study in Nepal
                  </h3>
                </div>
              </div>
              <div className="jsx-1066289220">
                <hr className="jsx-1066289220 mt-2 mb-2" />
                <a
                  data-csm-track="true"
                  data-csm-title="Why Study in Ireland?"
                  data-event-type="link_click"
                  data-section_name="Study Abroad"
                  className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                  href="https://studyabroad.searchmycollege.com/study-in-ireland/"
                  style={{ textDecoration: "none" }}
                >
                  Why Study in Nepal?
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
              <div className="jsx-1066289220">
                <hr className="jsx-1066289220 mt-2 mb-2" />
                <a
                  data-csm-track="true"
                  data-csm-title="Top Universities in Ireland?"
                  data-event-type="link_click"
                  data-section_name="Study Abroad"
                  className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                  href="https://studyabroad.searchmycollege.com/study-in-ireland/"
                  style={{ textDecoration: "none" }}
                >
                  Top Universities in Nepal
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
              <div className="jsx-1066289220">
                <hr className="jsx-1066289220 mt-2 mb-2" />
                <a
                  data-csm-track="true"
                  data-csm-title="SOP for Ireland"
                  data-event-type="link_click"
                  data-section_name="Study Abroad"
                  className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                  href="https://studyabroad.searchmycollege.com/study-in-ireland/"
                  style={{ textDecoration: "none" }}
                >
                  SOP for Nepal
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
              <div className="jsx-1066289220">
                <hr className="jsx-1066289220 mt-2 mb-2" />
                <a
                  data-csm-track="true"
                  data-csm-title="Scholarships in Ireland"
                  data-event-type="link_click"
                  data-section_name="Study Abroad"
                  className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                  href="https://studyabroad.searchmycollege.com/study-in-ireland/"
                  style={{ textDecoration: "none" }}
                >
                  Scholarships in Nepal
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
            </div>
          </div>
        </div>
        </li>
        </MDBCol>
      </MDBRow>
      </MDBContainer>
      </div>
      <br />
      {/* STUDY ABROAD CLOSE */}
      {/* TOP COURSES OPEN */}
      <div className="container text-center">
      <h2 className="text" style={{ fontWeight: "bold" }}>
      Top Courses
      </h2>
      <br />

      <MDBContainer
      style={{
        background: "linear-gradient( 45deg, #71d4d2, transparent)",
      }}
    >
      <MDBRow
        className="row-cols-2 row-cols-lg-5 g-2 g-lg-3"
        style={{ margin: "-2px 17px" }}
      >
        <MDBCol>
          <div className="jsx-2656711077 pills-item">
            <a
              data-ga-title="BE/B.Tech"
              data-ga-href="courses/btech"
              className="jsx-2656711077 pill circular-button" // Add a class for styling
              href="/courses/btech"
              style={{ textDecoration: "none" }}
            >
              BE/B.Tech
              <svg
                width={20}
                height={20}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="ml-2 mt-1"
                viewBox="0 0 23 23"
                style={{
                  width: 23,
                  height: 23,
                  fill: "rgb(51, 51, 51)",
                }}
              >
                <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
              </svg>
            </a>
          </div>
        </MDBCol>

        <MDBCol>
          <div className="p-3" style={{ padding: "8px" }}>
            <div className="button-container">
              <a
                data-csm-track="true"
                data-csm-title="BA"
                data-event-type="link_click"
                data-section_name="Top Courses"
                data-ga-title="BA"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Top Courses"
                data-ga-href="courses/ba"
                className="jsx-2656711077 pill circular-button" // Add a class for styling
                href="/courses/ba"
                style={{ textDecoration: "none" }}
              >
                BA
                <svg
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="ml-2 mt-1"
                  viewBox="0 0 23 23"
                  style={{
                    width: 23,
                    height: 23,
                    fill: "rgb(51, 51, 51)",
                  }}
                >
                  <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                </svg>
              </a>
            </div>
          </div>
        </MDBCol>

        <MDBCol>
          <div className="p-3">
            <div className="jsx-2656711077 pills-item">
              <a
                data-csm-track="true"
                data-csm-title="B.Sc"
                data-event-type="link_click"
                data-section_name="Top Courses"
                data-csm-href="/courses/bsc"
                data-ga-title="B.Sc"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Top Courses"
                data-ga-href="courses/bsc"
                className="jsx-2656711077 pill circular-button" // Add a class for styling
                href="/courses/bsc"
                style={{ textDecoration: "none" }}
              >
                B.Sc
                <svg
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="ml-2 mt-1"
                  viewBox="0 0 23 23"
                  style={{
                    width: 23,
                    height: 23,
                    fill: "rgb(51, 51, 51)",
                  }}
                >
                  <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                </svg>
              </a>
            </div>
          </div>
        </MDBCol>

        <MDBCol>
          <div className="p-3">
            <div className="jsx-2656711077 pills-item">
              <a
                data-csm-track="true"
                data-csm-title="MBA/PGDM"
                data-event-type="link_click"
                data-section_name="Top Courses"
                data-ga-title="MBA/PGDM"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Top Courses"
                data-ga-href="courses/mba"
                className="jsx-2656711077 pill circular-button" // Add a class for styling
                href="/courses/mba"
                style={{ textDecoration: "none" }}
              >
                MBA/PGDM
                <svg
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="ml-2 mt-1"
                  viewBox="0 0 23 23"
                  style={{
                    width: 23,
                    height: 23,
                    fill: "rgb(51, 51, 51)",
                  }}
                >
                  <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                </svg>
              </a>
            </div>
          </div>
        </MDBCol>

        <MDBCol>
          <div className="p-3">
            <div className="jsx-2656711077 pills-item">
              <a
                data-csm-track="true"
                data-csm-title="M.Sc"
                data-event-type="link_click"
                data-section_name="Top Courses"
                data-ga-title="M.Sc"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Top Courses"
                data-ga-href="courses/msc"
                className="jsx-2656711077 pill circular-button" // Add a class for styling
                href="/courses/msc"
                style={{ textDecoration: "none" }}
              >
                M.Sc
                <svg
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="ml-2 mt-1"
                  viewBox="0 0 23 23"
                  style={{
                    width: 23,
                    height: 23,
                    fill: "rgb(51, 51, 51)",
                  }}
                >
                  <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                </svg>
              </a>
            </div>
          </div>
        </MDBCol>

        <MDBCol>
          <div className="p-3">
            <div className="jsx-2656711077 pills-item">
              <a
                data-csm-track="true"
                data-csm-title="ME/M.Tech"
                data-event-type="link_click"
                data-section_name="Top Courses"
                data-ga-title="ME/M.Tech"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Top Courses"
                data-ga-href="courses/mtech"
                className="jsx-2656711077 pill circular-button" // Add a class for styling
                href="/courses/mtech"
                style={{ textDecoration: "none" }}
              >
                ME/M.Tech
                <svg
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="ml-2 mt-1"
                  viewBox="0 0 23 23"
                  style={{
                    width: 23,
                    height: 23,
                    fill: "rgb(51, 51, 51)",
                  }}
                >
                  <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                </svg>
              </a>
            </div>
          </div>
        </MDBCol>

        <MDBCol>
          <div className="p-3">
            <div className="jsx-2656711077 pills-item">
              <a
                data-csm-track="true"
                data-csm-title="MA"
                data-event-type="link_click"
                data-section_name="Top Courses"
                data-ga-title="MA"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Top Courses"
                data-ga-href="courses/ma"
                className="jsx-2656711077 pill circular-button" // Add a class for styling
                href="/courses/ma"
                style={{ textDecoration: "none" }}
              >
                MA
                <svg
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="ml-2 mt-1"
                  viewBox="0 0 23 23"
                  style={{
                    width: 23,
                    height: 23,
                    fill: "rgb(51, 51, 51)",
                  }}
                >
                  <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                </svg>
              </a>
            </div>
          </div>
        </MDBCol>

        <MDBCol>
          <div className="p-3">
            <div className="jsx-2656711077 pills-item">
              <a
                data-csm-track="true"
                data-csm-title="Polytechnic"
                data-event-type="link_click"
                data-section_name="Top Courses"
                data-ga-title="Polytechnic"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Top Courses"
                data-ga-href="courses/polytechnic"
                className="jsx-2656711077 pill circular-button" // Add a class for styling
                href="/courses/polytechnic"
                style={{ textDecoration: "none" }}
              >
                Polytechnic
                <svg
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="ml-2 mt-1"
                  viewBox="0 0 23 23"
                  style={{
                    width: 23,
                    height: 23,
                    fill: "rgb(51, 51, 51)",
                  }}
                >
                  <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                </svg>
              </a>
            </div>
          </div>
        </MDBCol>

        <MDBCol>
          <div className="p-3">
            <div className="jsx-2656711077 pills-item">
              <a
                data-csm-track="true"
                data-csm-title="M.Phil/Ph.D in Science"
                data-event-type="link_click"
                data-section_name="Top Courses"
                data-ga-title="M.Phil/Ph.D in Science"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Top Courses"
                data-ga-href="courses/phd-sciences"
                className="jsx-2656711077 pill circular-button" // Add a class for styling
                href="/courses/phd-sciences"
                style={{ textDecoration: "none" }}
              >
                M.Phil/Ph.D in Science
                <svg
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="ml-2 mt-1"
                  viewBox="0 0 23 23"
                  style={{
                    width: 23,
                    height: 23,
                    fill: "rgb(51, 51, 51)",
                  }}
                >
                  <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                </svg>
              </a>
            </div>
          </div>
        </MDBCol>

        <MDBCol>
          <div className="p-3">
            <div className="jsx-2656711077 pills-item">
              <a
                data-csm-track="true"
                data-csm-title="B.Com"
                data-event-type="link_click"
                data-section_name="Top Courses"
                data-ga-title="B.Com"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Top Courses"
                data-ga-href="courses/bcom"
                className="jsx-2656711077 pill circular-button" // Add a class for styling
                href="/courses/bcom"
                style={{ textDecoration: "none" }}
              >
                B.Com
                <svg
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="ml-2 mt-1"
                  viewBox="0 0 23 23"
                  style={{
                    width: 23,
                    height: 23,
                    fill: "rgb(51, 51, 51)",
                  }}
                >
                  <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                </svg>
              </a>
            </div>
          </div>
        </MDBCol>

        <MDBCol>
          <div className="p-3">
            <div className="jsx-2656711077 pills-item">
              <a
                data-csm-track="true"
                data-csm-title="MD"
                data-event-type="link_click"
                data-section_name="Top Courses"
                data-ga-title="MD"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Top Courses"
                data-ga-href="courses/md"
                className="jsx-2656711077 pill circular-button" // Add a class for styling
                href="/courses/md"
                style={{ textDecoration: "none" }}
              >
                MD
                <svg
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="ml-2 mt-1"
                  viewBox="0 0 23 23"
                  style={{
                    width: 23,
                    height: 23,
                    fill: "rgb(51, 51, 51)",
                  }}
                >
                  <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                </svg>
              </a>
            </div>
          </div>
        </MDBCol>

        <MDBCol>
          <div className="p-3">
            <div className="jsx-2656711077 pills-item">
              <a
                data-csm-track="true"
                data-csm-title="M.Phil/Ph.D in Arts"
                data-event-type="link_click"
                data-section_name="Top Courses"
                data-ga-title="M.Phil/Ph.D in Arts"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Top Courses"
                data-ga-href="courses/phd-arts"
                className="jsx-2656711077 pill circular-button" // Add a class for styling
                href="/courses/phd-arts"
                style={{ textDecoration: "none" }}
              >
                M.Phil/Ph.D in Arts
                <svg
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="ml-2 mt-1"
                  viewBox="0 0 23 23"
                  style={{
                    width: 23,
                    height: 23,
                    fill: "rgb(51, 51, 51)",
                  }}
                >
                  <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                </svg>
              </a>
            </div>
          </div>
        </MDBCol>

        <MDBCol>
          <div className="p-3">
            <div className="jsx-2656711077 pills-item">
              <a
                data-csm-track="true"
                data-csm-title="BBA/BBM"
                data-event-type="link_click"
                data-section_name="Top Courses"
                data-ga-title="BBA/BBM"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Top Courses"
                data-ga-href="courses/bba"
                className="jsx-2656711077 pill circular-button" // Add a class for styling
                href="/courses/bba"
                style={{ textDecoration: "none" }}
              >
                BBA/BBM
                <svg
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="ml-2 mt-1"
                  viewBox="0 0 23 23"
                  style={{
                    width: 23,
                    height: 23,
                    fill: "rgb(51, 51, 51)",
                  }}
                >
                  <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                </svg>
              </a>
            </div>
          </div>
        </MDBCol>

        <MDBCol>
          <div className="p-3">
            <div className="jsx-2656711077 pills-item">
              <a
                data-csm-track="true"
                data-csm-title="B.Ed"
                data-event-type="link_click"
                data-section_name="Top Courses"
                data-ga-title="B.Ed"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Top Courses"
                data-ga-href="courses/bed"
                className="jsx-2656711077 pill circular-button" // Add a class for styling
                href="/courses/bed"
                style={{ textDecoration: "none" }}
              >
                B.Ed
                <svg
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="ml-2 mt-1"
                  viewBox="0 0 23 23"
                  style={{
                    width: 23,
                    height: 23,
                    fill: "rgb(51, 51, 51)",
                  }}
                >
                  <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                </svg>
              </a>
            </div>
          </div>
        </MDBCol>

        <MDBCol>
          <div className="p-3">
            <div className="jsx-2656711077 pills-item">
              <a
                data-csm-track="true"
                data-csm-title="M.Phil/Ph.D in Engineering"
                data-event-type="link_click"
                data-section_name="Top Courses"
                data-ga-title="M.Phil/Ph.D in Engineering"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Top Courses"
                data-ga-href="courses/phd-engineering"
                className="jsx-2656711077 pill circular-button" // Add a class for styling
                href="/courses/phd-engineering"
                style={{ textDecoration: "none" }}
              >
                M.Phil/Ph.D in Engineering
                <svg
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="ml-2 mt-1"
                  viewBox="0 0 23 23"
                  style={{
                    width: 23,
                    height: 23,
                    fill: "rgb(51, 51, 51)",
                  }}
                >
                  <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                </svg>
              </a>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
     </MDBContainer>
      </div>
      <br />
      {/* TOP COURSES CLOSE */}
      {/* TESTIMONIALS OPEN */}
      <div className="container text-center">
      <h2 className="text" style={{ fontWeight: "bold" }}>
      Testimonials
      </h2>
      <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
          Top Experts in India to help you with everything you need
          You can rely on our amazing features list, and also our customer 
          services will be a great experience for you without a doubt.
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center d-flex align-items-stretch">
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#9d789b" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src={Rajeev}
                className="rounded-circle img-fluid"
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">Raajeev Kumar</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                SearchMyCollege made my college search process effortless! 
                With their comprehensive database and user-friendly interface, 
                I could easily explore various colleges and compare their features. 
                Thanks to SearchMyCollege, I found the perfect institution that aligned 
                with my career goals.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#7a81a8" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src={SINGH}
                className="rounded-circle img-fluid"
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">Sudhanshu Singh</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                SearchMyCollege exceeded my expectations! From browsing 
                colleges to submitting applications, the platform provided 
                step-by-step guidance at every stage. The personalized recommendations 
                based on my preferences saved me hours of research. Thanks to SearchMyCollege.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#6d5b98" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src={MISHRA}
                className="rounded-circle img-fluid"
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">Garima Mishra</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                I cannot express how grateful I am for SearchMyCollege. 
                As an international student, finding the right college seemed 
                daunting, but SearchMyCollege simplified the entire process. 
                Their detailed information about each college, along with insights 
                from current students.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
      </div>
      {/* TESTIMONIALS CLOSE */}

    </> 
  );
};

export default Home;
