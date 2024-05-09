import React from "react";
import smcblack from "../../assets/logo/smcblack.png";
import "../../Components/PrivacyPolicy/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy">
        <div className="logo-container">
          <img src={smcblack} alt="Logo" className="logo" />
        </div>
        <div className="privacy-policy-content">
          <div>
            <h2>Privacy Policy</h2>
            <p>
              The privacy of our visitors at our website searchmycollege.com is
              our priority. This Policy contains the information that is
              collected and recorded and how we use it. Kindly contact us if you
              have any more inquiries about our privacy policy. This privacy
              statement only relates to our online operations and is applicable
              to data submitted by and/or collected by visitors to
              searchmycollege.comin.This policy is not applicable to any
              information collected in other ways.
            </p>

            <h3>Information we collect</h3>
            <p>
              When we ask you to provide personal information, we will make
              sure to define what that information covers as well as why we're
              asking you for it.
            </p>
            <p>
              We may receive information about you such as name, email address,
              contact number, the contents of the message and attachments you
              may send us, and any other information you may choose to provide.
              When you sign up for an account, we may ask for your contact
              information, including things such as name, address, email address
              and contact number.&nbsp;
            </p>
            <ul>
              <li>Contact information (such as name and email address)</li>
              <li>Usage data (such as web pages visited and access times)</li>
              <li>
                Any other information you voluntarily provide (such as feedback
                or inquiries)
              </li>
            </ul>

            <h3>Log data</h3>
            <p>
              Logging files is legal with our website. IP addresses, browser
              type, Internet Service Provider, date and time, referring/exit
              pages and the number of clicks can be included. The aim of the
              information is for analyzing trends, administering the site,
              tracking users' movement on the website and gathering demographic
              information.
            </p>

            <h3>Changes to our privacy policy</h3>
            <p>
              We may update our Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page.
            </p>
          </div>
          <div>
            <h3>How we use your information</h3>
            <p>We use the information we collect in various ways, including to:</p>
            <ul>
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>
                Communicate with you, either directly or through one of our
                partners
              </li>
            </ul>

            <h3>Cookies</h3>
            <p>
              We use "cookies" to collect information and improve our website.
              You have the option to either accept or refuse these cookies and
              know when a cookie is being sent to your computer. If you choose
              to refuse our cookies, you may not be able to use some portions
              of our website.
            </p>

            <h3>Contact us</h3>
            <p>
              You can connect with us if you have any concerns about the
              privacy policy at:
            </p>
            <p>
              Address: Address: SMC,519,B-Tower,Ithum-Building, Noida,
              Sector-62,Pin-201309
            </p>
            <p>Ring on: 0120-4838111, +91 9999244553</p>
            <p>
              Email:
              <a href="mailto:director@searchmycollege.com">
                director@searchmycollege.com
              </a>
              <br />
              <a href="mailto:counsellor@searchmycollege.com">
                counsellor@searchmycollege.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
