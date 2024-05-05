import  {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Navbar2 from './Components/Navbar/Navbar2';
import Home from './Components/Home/Home';
import Exam from "./Pages/Exams/Exams";
import Login from './Pages/Login/Login';
import Footer from './Components/Footer/Footer';
import './App.css';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';



function App() {
  return (
    <Router>
    <div>
      <Navbar></Navbar>
      <Navbar2 />
      <Routes>
        <Route excat path="/" element={<Home />} > </Route>
        <Route excat path="/login" element={<Login />}> </Route>
        <Route excat path="/exam" element={<Exam />}> </Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  </Router>
  
  );
}

export default App;
