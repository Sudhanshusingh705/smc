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

// admissioncolleges
import ABVMU from "../../assets/admission/admissioncolleges/ABVMU Admission.webp";
import ACS from "../../assets/admission/admissioncolleges/ACS College.webp";
import AIIMS from "../../assets/admission/admissioncolleges/AIIMS Delhi.webp";
import Akshaya from "../../assets/admission/admissioncolleges/Akshaya Institute.webp";
import Ambedkar from "../../assets/admission/admissioncolleges/Ambedkar University Delhi.webp";
import AMC from "../../assets/admission/admissioncolleges/AMC Engineering.webp";
import Annamali from "../../assets/admission/admissioncolleges/Annamalai University.webp";
import Ballari from "../../assets/admission/admissioncolleges/Ballari Institute.webp";
import Bapuji from "../../assets/admission/admissioncolleges/Bapuji Institute.webp";
import Basavakalyan from "../../assets/admission/admissioncolleges/Basavakalyan.webp";
import Basaveshwar from "../../assets/admission/admissioncolleges/Basaveshwar Engineering.webp";
import BFUHS from "../../assets/admission/admissioncolleges/BFUHS.webp";
import Bheemanna from "../../assets/admission/admissioncolleges/Bheemanna Khandre.webp";
import Brindavan from "../../assets/admission/admissioncolleges/Brindavan.webp";
import Calicut from "../../assets/admission/admissioncolleges/Calicut University.webp";
import Central from "../../assets/admission/admissioncolleges/Central University.webp";
import Christ from "../../assets/admission/admissioncolleges/Christ.webp";
import CMR from "../../assets/admission/admissioncolleges/CMR Engineering.webp";
import CMRInstitute from "../../assets/admission/admissioncolleges/CMR Institute.webp";
import DSATM from "../../assets/admission/admissioncolleges/DSATM Bangalore.webp";
import GGSIPU from "../../assets/admission/admissioncolleges/GGSIPU.webp";
import Goenka from "../../assets/admission/admissioncolleges/Goenka Research.webp";
import HR from "../../assets/admission/admissioncolleges/HR College.webp";
import IITAllahabad from "../../assets/admission/admissioncolleges/IIIT Allahabad.webp";
import IITBhagalpur from "../../assets/admission/admissioncolleges/IIIT Bhagalpur.webp";
import IITLucknow from "../../assets/admission/admissioncolleges/IIIT Lucknow.webp";
import IITNagpur from "../../assets/admission/admissioncolleges/IIIT Nagpur.webp";
import IITPune from "../../assets/admission/admissioncolleges/IIIT Pune.webp";
import IITVadodara from "../../assets/admission/admissioncolleges/IIIT Vadodara.webp";
import Jadavpur from "../../assets/admission/admissioncolleges/Jadavpur University.webp";
import JSSAcademy from "../../assets/admission/admissioncolleges/JSS Academy.webp";
import JSSScience from "../../assets/admission/admissioncolleges/JSS Science.webp";
import Jyothy from "../../assets/admission/admissioncolleges/Jyothy Institute.webp";
import KLETechnology from "../../assets/admission/admissioncolleges/KLE Technological University.webp";
import KLSGogte from "../../assets/admission/admissioncolleges/KLS Gogte.webp";
import KSSEM from "../../assets/admission/admissioncolleges/KSSEM Admission.webp";
import Malnad from "../../assets/admission/admissioncolleges/Malnad College.webp";
import Mizoramuniversity from "../../assets/admission/admissioncolleges/Mizoram University.webp";
import MSUBaroda from "../../assets/admission/admissioncolleges/MSU Baroda.webp";
import NITTrichy from "../../assets/admission/admissioncolleges/NIT Trichy.webp";
import NITEarangal from "../../assets/admission/admissioncolleges/NIT Warangal.webp";
import NIT from "../../assets/admission/admissioncolleges/NIT.webp";
import NITK from "../../assets/admission/admissioncolleges/NITK.webp";
import Parul from "../../assets/admission/admissioncolleges/Parul University.webp";
import PDA from "../../assets/admission/admissioncolleges/PDA College.webp";
import PES from "../../assets/admission/admissioncolleges/PES Institute.webp";
import Rajarajeshwari from "../../assets/admission/admissioncolleges/Rajarajeshwari College.webp";
import RNSIT from "../../assets/admission/admissioncolleges/RNSIT.webp";
import RVDental from "../../assets/admission/admissioncolleges/RV Dental.webp";
import SaiVidhya from "../../assets/admission/admissioncolleges/Sai Vidya Institute.webp";
import Sambhram from "../../assets/admission/admissioncolleges/Sambhram Institute.webp";
import SDM from "../../assets/admission/admissioncolleges/SDM College.webp";
import SECAB from "../../assets/admission/admissioncolleges/SECAB Institute.webp";
import SLN from "../../assets/admission/admissioncolleges/SLN College.webp";
import SPPU from "../../assets/admission/admissioncolleges/SPPU.webp";
import Srinivas from "../../assets/admission/admissioncolleges/Srinivas Institute.webp";
import Vidhtavardhaka from "../../assets/admission/admissioncolleges/Vidyavardhaka College.webp";
import Vivekananda from "../../assets/admission/admissioncolleges/Vivekananda.webp"; 

const Admission = () => {
  const cards = [
    { id: 1, title: 'ABVMU', content: 'ACPM College Admission', image: ABVMU, link: '#' },
    { id: 2, title: 'ACS', content: 'CDAC NOIDA Admission', image: ACS, link: '#' },
    { id: 3, title: 'AIIMS', content: 'Central University Admission', image: AIIMS, link: '#' },
    { id: 4, title: 'Akshaya', content: 'GMC Jammu Admission', image: Akshaya, link: '#' },
    { id: 5, title: 'Ambedkar', content: 'HPU Admission', image: Ambedkar, link: '#' },
    { id: 6, title: 'AMC', content: 'IIM Jammu Admission', image: AMC, link: '#' },
    { id: 7, title: 'Annamali', content: 'IIM Kashipur Admission', image: Annamali, link: '#' },
    { id: 8, title: 'Ballari', content: 'IIM Nagpur Admission', image: Ballari, link: '#' },
    { id: 9, title: 'Bapuji', content: 'IIM Raipur Admission', image: Bapuji, link: '#' },
    { id: 10, title: 'Basavakalyan', content: 'IIM Ranchi Admission', image: Basavakalyan, link: '#' },
    { id: 11, title: 'Basaveshwar', content: 'IIM Trichy Admission', image: Basaveshwar, link: '#' },
    { id: 12, title: 'BFUHS', content: 'IIM Udaipur Admission', image: BFUHS, link: '#' },
    { id: 13, title: 'Bheemanna', content: 'IIM Sambalpur Admission', image: Bheemanna, link: '#' },
    { id: 14, title: 'Brindavan', content: 'IMT Ghaziabad Admission', image: Brindavan, link: '#' },
    { id: 15, title: 'Calicut', content: 'IMT Business Admission', image: Calicut, link: '#' },
    { id: 16, title: 'Central', content: 'Jigyasa Admission', image: Central, link: '#' },
    { id: 17, title: 'Christ', content: 'JSS Medical Admission', image: Christ, link: '#' },
    { id: 18, title: 'CMR', content: 'PSIT Kanpur Admission', image: CMR, link: '#' },
    { id: 19, title: 'CMRInstitute', content: 'The Neotia Admission', image: CMRInstitute, link: '#' },
    { id: 20, title: 'DSATM', content: 'RMLAU Admission', image: DSATM, link: '#' },
    { id: 21, title: 'GGSIPU', content: 'RMLAU Admission', image: GGSIPU, link: '#' },
    { id: 22, title: 'Goenka', content: 'RMLAU Admission', image: Goenka, link: '#' },
    { id: 23, title: 'HR', content: 'RMLAU Admission', image: HR, link: '#' },
    { id: 24, title: 'IITAllahabad', content: 'RMLAU Admission', image: IITAllahabad, link: '#' },
    { id: 25, title: 'IITBhagalpur', content: 'RMLAU Admission', image: IITBhagalpur, link: '#' },
    { id: 26, title: 'IITLucknow', content: 'RMLAU Admission', image: IITLucknow, link: '#' },
    { id: 27, title: 'IITNagpur', content: 'RMLAU Admission', image: IITNagpur, link: '#' },
    { id: 28, title: 'IITPune', content: 'RMLAU Admission', image: IITPune, link: '#' },
    { id: 29, title: 'IITVadodara', content: 'RMLAU Admission', image: IITVadodara, link: '#' },
    { id: 30, title: 'Jadavpur', content: 'RMLAU Admission', image: Jadavpur, link: '#' },
    { id: 31, title: 'JSSAcademy', content: 'RMLAU Admission', image: JSSAcademy, link: '#' },
    { id: 32, title: 'JSSScience', content: 'RMLAU Admission', image: JSSScience, link: '#' },
    { id: 33, title: 'Jyothy', content: 'RMLAU Admission', image: Jyothy, link: '#' },
    { id: 34, title: 'KLETechnology', content: 'RMLAU Admission', image: KLETechnology, link: '#' },
    { id: 35, title: 'KSSEM', content: 'RMLAU Admission', image: KSSEM, link: '#' },
    { id: 36, title: 'Malnad', content: 'RMLAU Admission', image: Malnad, link: '#' },
    { id: 37, title: 'Mizoramuniversity', content: 'RMLAU Admission', image: Mizoramuniversity, link: '#' },
    { id: 38, title: 'MSUBaroda', content: 'RMLAU Admission', image:MSUBaroda, link: '#' },
    { id: 39, title: 'NITTrichy', content: 'RMLAU Admission', image: NITTrichy, link: '#' },
    { id: 40, title: 'NITEarangal', content: 'RMLAU Admission', image: NITEarangal, link: '#' },
    { id: 41, title: 'NIT', content: 'RMLAU Admission', image: NIT, link: '#' },
    { id: 42, title: 'NITK', content: 'RMLAU Admission', image: NITK, link: '#' },
    { id: 43, title: 'Parul', content: 'RMLAU Admission', image: Parul, link: '#' },
    { id: 44, title: 'PDA', content: 'RMLAU Admission', image: PDA, link: '#' },
    { id: 45, title: 'PES', content: 'RMLAU Admission', image: PES, link: '#' },
    { id: 46, title: 'Rajarajeshwari', content: 'RMLAU Admission', image: Rajarajeshwari, link: '#' },
    { id: 47, title: 'RNSIT', content: 'RMLAU Admission', image: RNSIT, link: '#' },
    { id: 48, title: 'RVDental', content: 'RMLAU Admission', image: RVDental, link: '#' },
    { id: 49, title: 'SaiVidhya', content: 'RMLAU Admission', image: SaiVidhya, link: '#' },
    { id: 50, title: 'Sambhram', content: 'RMLAU Admission', image: Sambhram, link: '#' },
    { id: 51, title: 'SDM', content: 'RMLAU Admission', image: SDM, link: '#' },
    { id: 52, title: 'SECAB', content: 'RMLAU Admission', image: SECAB, link: '#' },
    { id: 53, title: 'SLN', content: 'RMLAU Admission', image: SLN, link: '#' },
    { id: 54, title: 'SPPU', content: 'RMLAU Admission', image: SPPU, link: '#' },
    { id: 55, title: 'Srinivas', content: 'RMLAU Admission', image: Srinivas, link: '#' },
    { id: 56, title: 'Vidhtavardhaka', content: 'RMLAU Admission', image: Vidhtavardhaka, link: '#' },
    { id: 57, title: 'Vivekananda', content: 'RMLAU Admission', image: Vivekananda, link: '#' },
    { id: 57, title: 'KLSGogte', content: 'RMLAU Admission', image: KLSGogte, link: '#' },
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

