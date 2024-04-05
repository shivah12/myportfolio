import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import GitHubIcon from "./Github.svg";
import LinkedInIcon from "./linkedin.svg";
import BehanceIcon from "./behance.svg";
import TwitterIcon from "./twitter.svg";
import Resume from "./resume.svg";
import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();
  const [showChatbot, setShowChatbot] = useState(false);
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState("");

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  const handleChatbotOpen = () => {
    setShowChatbot(true);
    setTyping(true);
    setTimeout(() => {
      setMessages([
        ...messages,
        "Hey, I'm SM, your portfolio guide. How can I help you?",
        "Tell me which section would you like to visit? (e.g., projects or skills)",
      ]);
      setTyping(false);
    }, 1500);
  };

  const handleChatbotClose = () => {
    setShowChatbot(false);
    setMessages([]); // Reset messages when closing the chatbot
  };

  const handleUserInput = () => {
    setMessages([...messages, query]);
    setQuery("");
    setTyping(true);
    setTimeout(() => {
      handleChatbotResponse(query);
      setTyping(false);
    }, 1500);
  };

  const handleChatbotResponse = (query) => {
    // Split the query into words
    const words = query.toLowerCase().split(" ");
    let response = "";

    // Check for keywords and navigate accordingly
    if (words.includes("resume")) {
      response = "Sure! Redirecting you to Shreeti's resume.";
      setMessages([...messages, response]);
      setTimeout(() => {
        navigate("/resume");
      }, 2000);
    } else if (words.includes("portfolio")) {
      response = "Alright! Taking you to Shreeti's portfolio.";
      setMessages([...messages, response]);
      setTimeout(() => {
        navigate("/portfolio");
      }, 2000);
    } else if (words.includes("home")) {
      response = "Got it! Redirecting you to the home page.";
      setMessages([...messages, response]);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else if (words.includes("contact")) {
      response = "Sure thing! Let's go to the contact page.";
      navigate("/contact");
    } else if (words.includes("skills")) {
      response = "Great! Heading to the skills section.";
      setMessages([...messages, response]);
      setTimeout(() => {
        navigate("/skills");
      }, 2000);
    } else if (words.includes("about")) {
      response = "Certainly! Redirecting you to the about me page.";
      setMessages([...messages, response]);
      setTimeout(() => {
        navigate("/about");
      }, 2000);
    } else {
      response = "I'm sorry, I'm not sure how to help with that.";
    }

    setMessages([...messages, response]);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleUserInput();
    }
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Shreeti!
          <br />
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(60px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
        </div>
      </Animate>
      <div className="home__social-icons">
        <a href="https://drive.google.com/drive/folders/1U_zbhk0eH3D1yGPQUp-TQR57mc2Rm2g-?usp=sharing">
          <img src={Resume} alt="Resume" />
        </a>
        <a href="https://github.com/shivah12" onClick={handleChatbotOpen}>
          <img src={GitHubIcon} alt="GitHub" />
        </a>
        <a href="https://www.behance.net/shreetimohapatra">
          <img src={BehanceIcon} alt="Behance" />
        </a>
        <a
          href="https://www.linkedin.com/in/shreeti-mohapatra-ba8715252/"
          onClick={() => setQuery("linkedin")}
        >
          <img src={LinkedInIcon} alt="LinkedIn" />
        </a>
        <a href="https://twitter.com/tsundokui">
          <img src={TwitterIcon} alt="Twitter" />
        </a>
      </div>
      {/* Add a container for the chatbot button */}
      <div className="chatbot-button-container">
        <button className="chatbot-button" onClick={handleChatbotOpen}>Chat</button>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(60px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        
      </Animate>
      {/* Existing chatbot component */}
      {showChatbot && (
        <div className="chatbot-container">
          <div className="chatbot">
            <button onClick={handleChatbotClose} className="close-btn">
              Close
            </button>
            <div className="messages">
              {messages.map((message, index) => (
                <div key={index} className="message">
                  {message}
                </div>
              ))}
              {typing && <div className="message">Typing...</div>}
            </div>
            <input
             className="text"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your query..."
            />
            <button onClick={handleUserInput} className="send" >Send</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
