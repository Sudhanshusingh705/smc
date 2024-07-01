import  {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Navbar2 from './Components/Navbar/Navbar2';
import Home from './Components/Home/Home';
import Exam from "./Pages/Exams/Exams";
import Exams from './Pages/Exams/Exams';
import Login from './Pages/Login/Login';
import AboutUs from "./Components/Aboutus/AboutUs";
import OurTeam from './Components/OurTeam/OurTeam';
import Admission from './Pages/Admission/Admission';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './Components/TermAndCondition/Terms&Condition';
import Footer from './Components/Footer/Footer';
import './App.css';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';

// ALL COURSES LIST ROUTES
import Agriculture from './Pages2/Agriculture/Agriculture';
import Animation from './Pages2/Animation/Animation';
import Architecture from './Pages2/Architecture/Architecture';
import Arts from './Pages2/Arts/Arts';
import Aviation from './Pages2/Aviation/Aviation';
import Commerce from './Pages2/Commerce/Commerce';
import Computerapplication from './Pages2/Computer Application/Computerapplication';
import Dental from './Pages2/Dental/Dental';
import Design from './Pages2/Design/Design';
import Education from './Pages2/Education/Education';
import Engineering from './Pages2/Engineering/Engineering';
import HotelManagement from './Pages2/HotelManagement/HotelManagement';
import Law from './Pages2/Law/Law';
import Management from './Pages2/Management/Management';
import MassCommunication from './Pages2/MassCommunication/MassCommunication';
import Medical from './Pages2/Medical/Medical';
import More from './Pages2/More/More';
import ParaMedical from './Pages2/ParaMedical/ParaMedical';
import Pharmacy from './Pages2/Pharmacy/Pharmacy';
import Science from './Pages2/Science/Science';
import StudyAbroad from './Pages2/StudyAbroad/StudyAbroad';
import VeterinaryScience from './Pages2/Veterinary Science/VeterinaryScience';
import VocationalCourses from './Pages2/Vocational Courses/VocationalCourses';

function App() {
  return (
    <Router> 
    <div>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route excat path="/" element={<Home />} > </Route>
        <Route excat path="/exams" element={<Exams />}> </Route>
        <Route excat path="/login" element={<Login />}> </Route>
        <Route excat path="/exam" element={<Exam />}> </Route>
        <Route excat path="/privacyandpolicy" element={<PrivacyPolicy />}> </Route>
        <Route excat path="/termsandconditions" element={<TermsAndConditions />}> </Route>
        <Route excat path="/aboutus" element={<AboutUs />}> </Route>
        <Route excat path="/ourteam" element={<OurTeam />}> </Route>
        <Route excat path="/admission" element={<Admission />}> </Route>
        {/*PAGE 2 ALL COURSES ROUTES*/}
        <Route excat path="/engineering" element={<Engineering />}> </Route>
        <Route excat path="/management" element={<Management />}> </Route>
        <Route excat path="/medical" element={<Medical />}> </Route>
        <Route excat path="/science" element={<Science />}> </Route>
        <Route excat path="/commerce" element={<Commerce />}> </Route>
        <Route excat path="/studyabroad" element={<StudyAbroad />}> </Route>
        <Route excat path="/more" element={<More />}> </Route>
        {/*ALL COURSES LIST*/}
        <Route excat path="/agriculture" element={<Agriculture />}> </Route>
        <Route excat path="/animation" element={<Animation />}> </Route>
        <Route excat path="/architecture" element={<Architecture />}> </Route>
        <Route excat path="/arts" element={<Arts />}> </Route>
        <Route excat path="/aviation" element={<Aviation />}> </Route>
        <Route excat path="/computerapplication" element={<Computerapplication />}> </Route>
        <Route excat path="/dental" element={<Dental />}> </Route>
        <Route excat path="/design" element={<Design />}> </Route>
        <Route excat path="/education" element={<Education />}> </Route>
        <Route excat path="/engineering" element={<Engineering />}> </Route>
        <Route excat path="/hotelmanagement" element={<HotelManagement />}> </Route>
        <Route excat path="/law" element={<Law />}> </Route>
        <Route excat path="/management" element={<Management />}> </Route>
        <Route excat path="/masscommunication" element={<MassCommunication />}> </Route>
        <Route excat path="/medical" element={<Medical />}> </Route>
        <Route excat path="/more" element={<More />}> </Route>
        <Route excat path="/paramedical" element={<ParaMedical />}> </Route>
        <Route excat path="/pharmacy" element={<Pharmacy />}> </Route>
        <Route excat path="/science" element={<Science />}> </Route>
        <Route excat path="/studyabroad" element={<StudyAbroad />}> </Route>
        <Route excat path="/veterinaryscience" element={<VeterinaryScience />}> </Route>
        <Route excat path="/vocationalcourses" element={<VocationalCourses />}> </Route>
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
