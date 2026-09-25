import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              AASHIKA
              <br />
              <span>KUMARI</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>I build</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">IDEAS</div>
              <div className="landing-h2-2">Smart</div>
            </h2>
            <h2>
              <div className="landing-h2-info">into REALITY</div>
              <div className="landing-h2-info-1">AUTOMATIONS</div>
            </h2>
            <div style={{ marginTop: "1rem", maxWidth: "400px", color: "#a0a0a0", fontSize: "16px", lineHeight: "1.5", fontWeight: "300" }}>
              <p style={{ margin: 0 }}>A Computer Science student combining modern web technologies, AI/ML, and problem-solving to transform ideas into practical digital solutions. I focus on learning continuously and creating solutions that are simple, useful, and reliable.</p>
            </div>
          </div>
        </div>
        <div className="landing-profile-container">
          <img src="/images/aashika-profile.png" alt="Aashika Kumari" className="landing-profile-image" />
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
