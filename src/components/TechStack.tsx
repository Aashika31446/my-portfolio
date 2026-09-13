import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./styles/Career.css";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  useEffect(() => {
    gsap.to("#techstack .career-timeline", {
      maxHeight: "100%",
      scrollTrigger: {
        trigger: "#techstack",
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="career-section section-container" id="techstack" style={{ paddingBottom: "40px" }}>
      <div className="career-container">
        <h2>
          My Technical <span>&</span>
          <br /> Soft Skills
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Languages</h4>
                <h5>Core Programming</h5>
              </div>
            </div>
            <p>Python, C++, C</p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend</h4>
                <h5>UI & Web</h5>
              </div>
            </div>
            <p>HTML, CSS, React, Tailwindcss</p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend</h4>
                <h5>Server & API</h5>
              </div>
            </div>
            <p>FastAPI, Flask</p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Database</h4>
                <h5>Data Storage</h5>
              </div>
            </div>
            <p>MySQL, MongoDB</p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Visualization</h4>
                <h5>Analytics & Dashboards</h5>
              </div>
            </div>
            <p>Power BI, DataWrapper, Tableau</p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Tools</h4>
                <h5>Development & Version Control</h5>
              </div>
            </div>
            <p>Git, GitHub, Postman, VS Code, Docker, JupyterLab</p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Soft Skills</h4>
                <h5>Professional Traits</h5>
              </div>
            </div>
            <p>Problem Solving, Teamwork, Leadership, Deadline Management</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TechStack;
