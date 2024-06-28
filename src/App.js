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

//PAGE 2 ALL COURSES ROUTES
import Engineering from "./Pages2/Engineering/Engineering";
import Management from "./Pages2/Management/Management";
import Medical from "./Pages2/Medical/Medical";
import Science from "./Pages2/Science/Science";
import Commerce from "./Pages2/Commerce/Commerce";
import StudyAbroad from "./Pages2/StudyAbroad/StudyAbroad";
import More from "./Pages2/More/More";

function App() {
  return (
    <Router> 
    <div>
      <Navbar></Navbar>
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
        
        
      </Routes>
      <Footer></Footer>
    </div>
  </Router>
  
  );
}

export default App;
