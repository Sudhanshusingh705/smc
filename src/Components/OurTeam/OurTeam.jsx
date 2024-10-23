import React from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
import "./OurTeam.css";
import female from "../../assets/avtar/female.png";
import male from '../../assets/avtar/male.png';



const OurTeam = () => {
  return (
    <div className="py-5 team4">
    <div className="container">
        <div className="row justify-content-center mb-4">
            <div className="col-md-7 text-center">
                <h3 className="mb-3" style={{color: "crimson"}}>Experienced & Professional Team</h3>
                <h6 className="subtitle">You can rely on our amazing features list and also our customer services will be a great experience for you without doubt and in no-time</h6>
            </div>
        </div>
        <div className="row">
            {/* Team member 1 */}
            <div className="col-lg-3 mb-4">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <img src={female} alt="wrapkit" className="img-fluid rounded-circle" />
                        <div className="pt-2">
                            <h5 className="mt-4 font-weight-medium mb-0">Monika Singh</h5>
                            <h6 className="subtitle mb-3" style={{color: "crimson"}}>Education Counselor</h6>
                            <ul className="list-inline">
                            <MDBIcon fab icon="facebook" />
                            <MDBIcon fab icon="twitter-square" />
                            <MDBIcon fab icon="instagram" />
                            <MDBIcon fab icon="youtube" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team member 2 */}
            <div className="col-lg-3 mb-4">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <img src={female} alt="wrapkit" className="img-fluid rounded-circle" />
                        <div className="pt-2">
                            <h5 className="mt-4 font-weight-medium mb-0">Pragati Bhargav</h5>
                            <h6 className="subtitle mb-3" style={{color: "crimson"}}>Education Counselor</h6>
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-facebook"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team member 3 */}
            <div className="col-lg-3 mb-4">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <img src={female} alt="wrapkit" className="img-fluid rounded-circle" />
                        <div className="pt-2">
                            <h5 className="mt-4 font-weight-medium mb-0">Anshurmi Mishra</h5>
                            <h6 className="subtitle mb-3" style={{color: "crimson"}}>Education Counselor</h6>
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-facebook"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team member 4 */}
            <div className="col-lg-3 mb-4">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <img src={male} alt="wrapkit" className="img-fluid rounded-circle" />
                        <div className="pt-2">
                            <h5 className="mt-4 font-weight-medium mb-0">Abhineet Singh</h5>
                            <h6 className="subtitle mb-3" style={{color: "crimson"}}>Education Counselor</h6>
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-facebook"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br/>
    <div className="container">
    <div className="row justify-content-center mb-4">
    </div>
    <div className="row">
        {/* Team member 1 */}
        <div className="col-lg-3 mb-4">
            <div className="row">
                <div className="col-md-12 text-center">
                    <img src={male} alt="wrapkit" className="img-fluid rounded-circle" />
                    <div className="pt-2">
                        <h5 className="mt-4 font-weight-medium mb-0">Sudhanshu Singh</h5>
                        <h6 className="subtitle mb-3" style={{color: "crimson"}}>Software Developer</h6>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-facebook"></i></a></li>
                            <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-instagram"></i></a></li>
                            <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-behance"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* Team member 2 */}
        <div className="col-lg-3 mb-4">
            <div className="row">
                <div className="col-md-12 text-center">
                    <img src={female} alt="wrapkit" className="img-fluid rounded-circle" />
                    <div className="pt-2">
                        <h5 className="mt-4 font-weight-medium mb-0">Anjali Gupta</h5>
                        <h6 className="subtitle mb-3" style={{color: "crimson"}}>Content Writer</h6>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-facebook"></i></a></li>
                            <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-instagram"></i></a></li>
                            <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-behance"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* Team member 3 */}
        <div className="col-lg-3 mb-4">
            <div className="row">
                <div className="col-md-12 text-center">
                    <img src={female} alt="wrapkit" className="img-fluid rounded-circle" />
                    <div className="pt-2">
                        <h5 className="mt-4 font-weight-medium mb-0">Anas Khan</h5>
                        <h6 className="subtitle mb-3" style={{color: "crimson"}}>Digital Marketing Excutive</h6>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-facebook"></i></a></li>
                            <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-instagram"></i></a></li>
                            <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-behance"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* Team member 4 */}
        <div className="col-lg-3 mb-4">
            <div className="row">
                <div className="col-md-12 text-center">
                    <img src={male} alt="wrapkit" className="img-fluid rounded-circle" />
                    <div className="pt-2">
                        <h5 className="mt-4 font-weight-medium mb-0">Krishnkant Bhaskar</h5>
                        <h6 className="subtitle mb-3" style={{color: "crimson"}}>Graphic Designer</h6>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-facebook"></i></a></li>
                            <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-instagram"></i></a></li>
                            <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-behance"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <br/>
    </div>
  )
}

export default OurTeam;
