import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import smcblack from "../../assets/logo/smcblack.png";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


function Footer() {
  return (
    <footer className='mt-5 container-fluid bg-primary bg-gradient text-black' style={{ backgroundColor: '#322C2B' }}>
      <div className='row pt-4 pb-2'>
        <div className='col-lg-2 col-md-4 col-sm-6'>
          <img src={smcblack} alt='Searchmycollege' className='mb-2' style={{ maxWidth: '100%', height: '40%' }} />
          <p style={{ color: 'black' }}>Search My College is a leading educational consultancy providing personalized guidance and support to students.</p>
        </div>
        <div className='col-lg-2 col-md-4 col-sm-6'>
          <h4 style={{ color: 'black' }}>Top Colleges</h4>
          <ul className='list-unstyled' style={{ color: 'black' }}>
            <li><Link to="#" style={{ color: 'black' }}>MBA</Link></li>
            <li><Link to="#" style={{ color: 'black' }}>B.Tech</Link></li>
            <li><Link to="#" style={{ color: 'black' }}>MCA</Link></li>
            <li><Link to="#" style={{ color: 'black' }}>BCA</Link></li>
            <li><Link to="#" style={{ color: 'black' }}>M.Tech</Link></li>
            <li><Link to="#" style={{ color: 'black' }}>MA</Link></li>
            <li><Link to="#" style={{ color: 'black' }}>BA</Link></li>
          </ul>
        </div>
        <div className='col-lg-2 col-md-4 col-sm-6'>
          <h4 style={{ color: 'black' }}>Top Universities</h4>
          <ul className='list-unstyled'>
            <li><Link to="#" style={{ color: 'black' }}>Engineering</Link></li>
            <li><Link to="#" style={{ color: 'black' }}>Management</Link></li>
            <li><Link to="#" style={{ color: 'black' }}>Medical</Link></li>
            <li><Link to="#" style={{ color: 'black' }}>Commerce</Link></li>
            <li>Arts</li>
          </ul>
        </div>
        <div className='col-lg-2 col-md-4 col-sm-6'>
          <h4 style={{ color: 'black' }}>Top Exams</h4>
          <ul className='list-unstyled'>
            <li><Link to="#" style={{ color: 'black' }}>CAT</Link></li>
            <li><Link to="#" style={{ color: 'black' }}>GATE</Link></li>
            <li><Link to="#" style={{ color: 'black' }}>JEE-MAIN</Link></li>
            <li><Link to="#" style={{ color: 'black' }}>NEET</Link></li>
            <li><Link to="#" style={{ color: 'black' }}>XAT</Link></li>
            <li><Link to="#" style={{ color: 'black' }}>CLAT</Link></li>
            <li><Link to="#" style={{ color: 'black' }}>MAT</Link></li>
          </ul>
        </div>
        <div className='col-lg-2 col-md-4 col-sm-6'>
          <h4 style={{ color: 'black' }}>Study Abroad</h4>
          <ul className='list-unstyled'>
            <li><Link to="https://studyabroad.searchmycollege.com/index.php/study-in-uk/" style={{ color: 'black' }}>UK</Link></li>
            <li><Link to="https://studyabroad.searchmycollege.com/index.php/study-in-usa/" style={{ color: 'black' }}>USA</Link></li>
            <li><Link to="https://studyabroad.searchmycollege.com/index.php/study-in-canada/" style={{ color: 'black' }}>CANADA</Link></li>
            <li><Link to="https://studyabroad.searchmycollege.com/index.php/study-in-australia/" style={{ color: 'black' }}>AUSTRALIA</Link></li>
            <li><Link to="https://studyabroad.searchmycollege.com/index.php/study-in-germany/" style={{ color: 'black' }}>GERMANY</Link></li>
          </ul>
        </div>
        <div className='col-lg-2 col-md-4 col-sm-6'>
          <h4 style={{ color: 'black' }}>Other Links</h4>
          <ul className='list-unstyled'>
            <li><Link to="/aboutus" style={{ color: 'black' }}>About us</Link></li>
            <li><Link to="/ourteam" style={{ color: 'black' }}>Our Team</Link></li>
            <li><Link to="https://topcolleges.searchmycollege.com/index.php/contact-us/" style={{ color: 'black' }}>Contact us</Link></li>
            <li><Link to="/termsandconditions" style={{ color: 'black' }}>Term & Conditions</Link></li>
            <li><Link to="/privacyandpolicy" style={{ color: 'black' }}>Privacy & Policy</Link></li>
          </ul>
          <div className='social-icons mt-4'>
            <a href='https://www.facebook.com/profile.php?id=61558773852316' style={{ marginRight: '20px' }}><FontAwesomeIcon icon={faFacebookF} size='lg' style={{ color: 'black' }} /></a>
            <a href='https://www.instagram.com/searchmycollege/?hl=en' style={{ marginRight: '20px' }}><FontAwesomeIcon icon={faInstagram} size='lg' style={{ color: 'black' }} /></a>
            <a href='https://www.linkedin.com/in/search-my-college-500a88281/' style={{ marginRight: '20px' }}><FontAwesomeIcon icon={faLinkedinIn} size='lg' style={{ color: 'black' }} /></a>
            <a href='https://www.youtube.com/@SearchMycollege' style={{ marginRight: '20px' }}><FontAwesomeIcon icon={faYoutube} size='lg' style={{ color: 'black' }} /></a>
            <a href='https://twitter.com/smc__global'><FontAwesomeIcon icon={faTwitter} size='lg' style={{ color: 'black' }} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
