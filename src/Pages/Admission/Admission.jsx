import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink
} from 'mdb-react-ui-kit';

// Importing images
import ACPM from "../../assets/admission/ACPM.webp";
import CDAC from "../../assets/admission/CDAC NOIDA.webp";
import Central from "../../assets/admission/CENTRAL UNIVERSITY.webp";
import GMC from "../../assets/admission/GMC JAMMU.webp";
import HPU from "../../assets/admission/HPU.webp";
import IIMJammu from "../../assets/admission/IIM JAMMU.webp";
import IIMKashipur from "../../assets/admission/IIM KASHIPUR.webp";
import IIMNagpur from "../../assets/admission/IIM NAGPUR.webp";
import IIMRaipur from "../../assets/admission/IIM RAIPUR.webp";
import IIMRanchi from "../../assets/admission/IIM RANCHI.webp";
import IIMTrichi from "../../assets/admission/IIM TRICHY.webp";
import IIMUdaypur from "../../assets/admission/IIM UDAYPUR.webp";
import IIMSambalpur from "../../assets/admission/IIM-Sambalpur.webp";
import IMTGaziyabad from "../../assets/admission/IMT GAZIYABAD.webp";
import IMTBusiness from "../../assets/admission/ITM BUSINESS.webp";
import Jigyasa from "../../assets/admission/JIGYASA.webp";
import JssMedical from "../../assets/admission/JSS MEDICAL.webp";
import PSITKanpur from "../../assets/admission/PSIT KANPUR.webp";
import THENeotia from "../../assets/admission/THE NEOTIA.webp";
import RMLAU from "../../assets/admission/RMLAU.webp";

const Admission = () => {
  const cards = [
    { id: 1, title: 'ACPM', content: 'ACPM College Admission', image: ACPM, link: '#' },
    { id: 2, title: 'CDAC NOIDA', content: 'CDAC NOIDA Admission', image: CDAC, link: '#' },
    { id: 3, title: 'Central University', content: 'Central University Admission', image: Central, link: '#' },
    { id: 4, title: 'GMC Jammu', content: 'GMC Jammu Admission', image: GMC, link: '#' },
    { id: 5, title: 'HPU', content: 'HPU Admission', image: HPU, link: '#' },
    { id: 6, title: 'IIM Jammu', content: 'IIM Jammu Admission', image: IIMJammu, link: '#' },
    { id: 7, title: 'IIM Kashipur', content: 'IIM Kashipur Admission', image: IIMKashipur, link: '#' },
    { id: 8, title: 'IIM Nagpur', content: 'IIM Nagpur Admission', image: IIMNagpur, link: '#' },
    { id: 9, title: 'IIM Raipur', content: 'IIM Raipur Admission', image: IIMRaipur, link: '#' },
    { id: 10, title: 'IIM Ranchi', content: 'IIM Ranchi Admission', image: IIMRanchi, link: '#' },
    { id: 11, title: 'IIM Trichy', content: 'IIM Trichy Admission', image: IIMTrichi, link: '#' },
    { id: 12, title: 'IIM Udaipur', content: 'IIM Udaipur Admission', image: IIMUdaypur, link: '#' },
    { id: 13, title: 'IIM Sambalpur', content: 'IIM Sambalpur Admission', image: IIMSambalpur, link: '#' },
    { id: 14, title: 'IMT Ghaziabad', content: 'IMT Ghaziabad Admission', image: IMTGaziyabad, link: '#' },
    { id: 15, title: 'IMT Business', content: 'IMT Business Admission', image: IMTBusiness, link: '#' },
    { id: 16, title: 'Jigyasa', content: 'Jigyasa Admission', image: Jigyasa, link: '#' },
    { id: 17, title: 'JSS Medical', content: 'JSS Medical Admission', image: JssMedical, link: '#' },
    { id: 18, title: 'PSIT Kanpur', content: 'PSIT Kanpur Admission', image: PSITKanpur, link: '#' },
    { id: 19, title: 'The Neotia', content: 'The Neotia Admission', image: THENeotia, link: '#' },
    { id: 20, title: 'RMLAU', content: 'RMLAU Admission', image: RMLAU, link: '#' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderCards = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return cards.slice(startIndex, endIndex).map(card => (
      <MDBCol key={card.id} md="6" lg="3" className="mb-4">
        <MDBCard>
          <MDBCardImage src={card.image} position='top' alt={card.title} />
          <MDBCardBody>
            <MDBCardTitle>{card.title}</MDBCardTitle>
            <MDBCardText>{card.content}</MDBCardText>
            <MDBBtn href={card.link}>Apply Now</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    ));
  };

  const renderPagination = () => {
    return (
      <MDBPagination className="mb-0">
        <MDBPaginationItem disabled={currentPage === 1}>
          <MDBPaginationLink first onClick={() => handlePageChange(1)} />
        </MDBPaginationItem>
        <MDBPaginationItem disabled={currentPage === 1}>
          <MDBPaginationLink onClick={() => handlePageChange(currentPage - 1)}>&laquo;</MDBPaginationLink>
        </MDBPaginationItem>
        {[...Array(totalPages)].map((_, i) => (
          <MDBPaginationItem key={i} active={i + 1 === currentPage}>
            <MDBPaginationLink onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </MDBPaginationLink>
          </MDBPaginationItem>
        ))}
        <MDBPaginationItem disabled={currentPage === totalPages}>
          <MDBPaginationLink onClick={() => handlePageChange(currentPage + 1)}>&raquo;</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem disabled={currentPage === totalPages}>
          <MDBPaginationLink last onClick={() => handlePageChange(totalPages)} />
        </MDBPaginationItem>
      </MDBPagination>
    );
  };

  return (
    <MDBContainer>
    <br />
    <br />
      <MDBRow>
        {renderCards()}
      </MDBRow>
      <MDBRow>
        <MDBCol>
          {renderPagination()}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Admission;

