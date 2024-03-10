import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import GitHubIcon from "./Github.svg";
import LinkedInIcon from "./linkedin.svg";
import BehanceIcon from "./behance.svg";
import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
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
        <a href="https://github.com/shivah12"><img src={GitHubIcon} alt="GitHub" /></a>
        <a href="https://www.behance.net/shreetimohapatra"><img src={BehanceIcon} alt="Behance" /></a>
        <a href="https://www.linkedin.com/in/shreeti-mohapatra-ba8715252/"><img src={LinkedInIcon} alt="LinkedIn" /></a>
      </div>
    </section>
  );
};

export default Home;
