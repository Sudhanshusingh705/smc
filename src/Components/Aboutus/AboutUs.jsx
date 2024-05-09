import React from "react";
import mission from "../../assets/vision&mission/mission.png";
import vision from "../../assets/vision&mission/vision.png";
import institute from "../../assets/vision&mission/institute.png";
import parents from "../../assets/vision&mission/parents.png";
import TeamBanner from "../../assets/vision&mission/TeamBanner.jpg";

const AboutUsPage = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "40px auto", padding: "20px", alignItems: "center", }}>
      <section style={{ marginBottom: "40px", textAlign: "center" }}>
        <p style={{ fontSize: "18px", marginBottom: "20px" }}>
          <h1
            style={{
              fontSize: "48px",
              color: "#ff7900",
              lineHeight: "62.4px",
              fontWeight: "900",
            }}
          >
            Searchmycollege.com
          </h1>
          is an extensive search engine for the students, parents, and education
          industry players who are seeking information on higher education
          sector in India and abroad. One can rely on Searchmycollege.com for
          getting most brief and relevant data on colleges and universities. OUR
          MISSION College Choosing decision, the second biggest decision of
          anyone's life should not go wrong. With the most interactive user
          interface and most validated content, we aspire to be the top
          education portals and help the students in every way in making his
          decision easier.
        </p>
      </section>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            width: "45%",
            margin: "20px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <img
            src={mission}
            alt="Mission Logo"
            style={{ width: "50px", height: "50px", marginBottom: "20px", alignItems: "center" }}
          />
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "10px",
              alignItems: "center",
            }}
          >
            Our Mission
          </h2>
          <p style={{ fontSize: "16px", marginBottom: "20px", textAlign: "justify" }}>
          SearchMyCollege, we envision a future where every student 
          finds their ideal educational path with ease. Our platform 
          strives to revolutionize the way students explore and choose 
          colleges, ensuring that no potential goes untapped due to lack 
          of information or guidance. We aspire to be the beacon guiding 
          students towards their academic and professional success, fostering 
          a world where education is accessible to all.
          </p>
        </div>
        <div
          style={{
            width: "45%",
            margin: "20px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <img
            src={vision}
            alt="Vision Logo"
            style={{ width: "50px", height: "50px", marginBottom: "20px", alignItems: "center" }}
          />
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "10px",
              alignItems: "center",
            }}
          >
            Our Vision
          </h2>
          <p style={{ fontSize: "16px", marginBottom: "20px", textAlign: "justify" }}>
          SearchMyCollege is to empower students and parents with 
          comprehensive, reliable, and user-friendly resources to 
          navigate the complex landscape of higher education. We are 
          committed to providing accurate, up-to-date information about 
          colleges and universities, enabling informed decisions that align 
          with individual aspirations and goals. By leveraging technology 
          and expertise, we aim to simplify the college search process.
          </p>
        </div>
      </section>
      <section style={{ marginBottom: "40px" }}>
      <img
        src={TeamBanner}
        alt="About Us Image"
        style={{
          maxWidth: "100%",
          width: "100%",
          height: "400px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
    </section>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            width: "45%",
            margin: "20px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <img
            src={institute}
            alt="Institute Logo"
            style={{ width: "50px", height: "50px", marginBottom: "20px", alignItems: "center" }}
          />
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "10px",
              alignItems: "center",
            }}
          >
          SMC For Institution
          </h2>
          <p style={{ fontSize: "16px", marginBottom: "20px", textAlign: "justify" }}>
          SearchMyCollege provides a non-conventional 
          platform which focuses on delivering quality 
          leads to enable them for collecting highly 
          motivated candidates. The algorithm for data 
          segregation on the website allows us to categorize 
          the data into multiple levels, providing an edge to 
          the clients looking for highly specific and active 
          databases.
          </p>
        </div>
        <div
          style={{
            width: "45%",
            margin: "20px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <img
            src={parents}
            alt="Parents Logo"
            style={{ width: "50px", height: "50px", marginBottom: "20px", alignItems: "center" }}
          />
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "10px",
              alignItems: "center",
            }}
          >
            SMC For Parents
          </h2>
          <p style={{ fontSize: "16px", marginBottom: "20px", textAlign: "justify" }}>
          SearchMyCollege is dedicated to addressing 
          the concerns of parents looking for an ideal 
          institute for their wards. It offers a multichannel 
          filter page that sorts data based on ranking, fees, 
          and cutoff. Our platform is supported by a highly 
          skilled team of data miners who excel in presenting 
          data interactively, empowering you to make well-informed 
          decisions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
