import { useState, useEffect, useRef } from "react";
import "./styles/Chatbot.css";
import { FaRobot, FaUser, FaPaperPlane, FaMinus, FaTimes } from "react-icons/fa";
import { MdOutlineSmartToy } from "react-icons/md";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm Aashika Kumari. ??\nI'm a final year B.Tech student and an AI/ML enthusiast. I'm passionate about building intelligent, user-focused solutions, coding, and continuously learning new technologies."
    },
    {
      sender: "user",
      text: "What are your skills?"
    },
    {
      sender: "bot",
      text: "I work with technologies like HTML, CSS, JavaScript, React, Python, SQL, and I'm exploring AI/ML and Data Analytics. I'm good at problem solving, teamwork, and building responsive web applications."
    }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleToggle = () => setIsOpen((prev) => !prev);
    window.addEventListener("toggle-chatbot", handleToggle);
    return () => window.removeEventListener("toggle-chatbot", handleToggle);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    
    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "That's a great question! I am currently an AI prototype, so I'm learning to answer custom questions. Stay tuned!" }
      ]);
    }, 1000);
  };

  return (
    <>
      <div 
        className="chatbot-fab" 
        onClick={() => setIsOpen(!isOpen)}
        style={{ display: isOpen ? "none" : "flex" }}
      >
        <MdOutlineSmartToy />
      </div>

      {isOpen && (
        <div className="chatbot-overlay">
          <div className="chatbot-header">
            <div className="chatbot-header-left">
              <div className="chatbot-bot-icon">
                <FaRobot />
              </div>
              <div className="chatbot-header-info">
                <h3>AK Assistant</h3>
                <p>Ask me anything about me</p>
                <div className="chatbot-status">
                  <div className="status-dot"></div> Online
                </div>
              </div>
            </div>
            <div className="chatbot-header-right">
              <button onClick={() => setIsOpen(false)}><FaMinus /></button>
              <button onClick={() => setIsOpen(false)}><FaTimes /></button>
            </div>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message-row ${msg.sender}`}>
                <div className="message-icon">
                  {msg.sender === "bot" ? <FaRobot /> : <FaUser />}
                </div>
                <div className="message-bubble" style={{ whiteSpace: "pre-wrap" }}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input-area">
            <div className="chatbot-input-wrapper">
              <input 
                type="text" 
                placeholder="Type a message..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
              />
              <button className="chatbot-send-btn" onClick={handleSend}>
                <FaPaperPlane size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;

