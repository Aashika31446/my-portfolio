import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./styles/Career.css";
import "./styles/Work.css"; // For carousel-action-link styling


gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    title: "Data Analytics Bootcamp",
    category: "Udemy",
    tools: "Certificate ID: UC-3f2006dc-5b8e-4e9d-a8b1e3570638ff93",
    description: "Completed comprehensive training in Data Analysis.",
    image: "/images/cert1-data-analytics.png",
    link: "/certificates/data analytics bootcamp certificate.pdf",
  },
  {
    title: "Full-Stack Generative AI & Agentic AI",
    category: "Udemy",
    tools: "Certificate ID: UC-32060d6e-56eb-4eb1-a8bfe85f70383933",
    description: "Completed full stack generative AI and agentic workflows training.",
    image: "/images/cert3-gen-ai.png",
    link: "/certificates/fullstack generative certificate ).pdf",
  },
  {
    title: "Master Excel for Data Analytics",
    category: "Microsoft",
    tools: "Microsoft Certification",
    description: "Mastered advanced Excel techniques for data analytics, reporting, and visualization.",
    image: "/images/cert2-excel.png",
    link: "/certificates/ecsel certicate mircosoft.pdf",
  }
];

const Certifications = () => {
  useEffect(() => {
    gsap.to("#certifications .career-timeline", {
      maxHeight: "100%",
      scrollTrigger: {
        trigger: "#certifications",
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="career-section section-container" id="certifications" style={{ paddingTop: "120px", marginBottom: "0px", paddingBottom: "100px" }}>
      <div className="career-container">
        <h2>
          My <span>Certifications</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          {certifications.map((cert, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{cert.title}</h4>
                  <h5>{cert.category}</h5>
                </div>
              </div>
              
              <div className="achievement-text-wrapper" style={{ width: "40%", display: "flex", flexDirection: "column", gap: "15px" }}>
                <p style={{ width: "100%" }}>{cert.description}</p>
                <p style={{ width: "100%", fontSize: "14px", color: "#a0a0a0", margin: 0 }}>{cert.tools}</p>
                
                {cert.image && (
                  cert.link ? (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", position: "relative", zIndex: 5, overflow: "visible" }}>
                      <img src={cert.image} alt={cert.title} className="achievement-badge" style={{ maxWidth: "300px" }} />
                    </a>
                  ) : (
                    <img src={cert.image} alt={cert.title} className="achievement-badge" style={{ maxWidth: "300px" }} />
                  )
                )}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Certifications;
