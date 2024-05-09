import React from "react";
import smcblack from "../../assets/logo/smcblack.png";
import "../../Components/TermAndCondition/Terms&Condition.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-and-conditions-container">
      <div className="terms-and-conditions">
        <div className="logo-container">
          <img src={smcblack} alt="Logo" className="logo" />
        </div>
        <div className="terms-and-conditions-content">
          <div>
            <h2>Terms and Conditions</h2>
            <p>
              Please read these Terms and Conditions carefully before using our
              website searchmycollege.com
            </p>
            <p>
              Your access to and use of the Service is conditioned on your
              acceptance of and compliance with these Terms. These Terms apply
              to all visitors, users and others who access or use the Service.
            </p>
            <p>
              By accessing or using the Service you agree to be bound by these
              Terms. If you disagree with any part of the terms then you may
              not access the Service.
            </p>
            <h3>Content</h3>
            <p>
              Our Service allows you to post, link, store, share and otherwise
              make available certain information, text, graphics, videos, or
              other material. You are responsible for the content that you
              post.
            </p>
            <h3>Links To Other Web Sites</h3>
            <p>
              Our Service may contain links to third-party web sites or services
              that are not owned or controlled by us. We have no control over,
              and assume no responsibility for, the content, privacy policies,
              or practices of any third party web sites or services.
            </p>
            <h3>Changes</h3>
            <p>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material we will try to
              provide at least 30 days notice prior to any new terms taking
              effect. What constitutes a material change will be determined at
              our sole discretion.
            </p>
          </div>
          <div>
            <h3>Termination</h3>
            <p>
              We may terminate or suspend access to our Service immediately,
              without prior notice or liability, for any reason whatsoever,
              including without limitation if you breach the Terms.
            </p>
            <h3>Contact Us</h3>
            <p>
              If you have any questions about these Terms, please contact us.
            </p>
            <p>
              Address: SMC, 519, B Tower, Ithum Building, Sector 62, Noida
              201309
            </p>
            <p>Phone: 0120-4838111, +91 7838186687</p>
            <p>
              Email:
              <a href="mailto:director@searchmycollege.com">
                director@searchmycollege.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
