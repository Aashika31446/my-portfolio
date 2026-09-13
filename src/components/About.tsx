import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-photo-wrapper">
        <div className="about-photo-container">
          <div className="about-photo-glow"></div>
          <img 
            src="/images/aashika-profile.png" 
            alt="Aashika Kumari" 
            className="about-photo"
          />
        </div>
      </div>
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Aspiring Software Developer pursuing B.Tech in Computer Science (AI & ML) with hands-on experience in Python, Java, C++, React, Flask, SQL, and Machine Learning. Strong foundation in Data Structures, Algorithms, and Object-Oriented Programming. Passionate about building scalable software solutions and continuously learning modern technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
