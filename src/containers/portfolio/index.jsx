import React, { useEffect, useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill, BsGithub } from "react-icons/bs"; 
import "./styles.scss"; 
import ImageOne from "../../images/image1.png";
import ImageTwo from "../../images/image2.png";
import ImageThree from "../../images/image3.png";
import ImageFour from "../../images/image4.png";
import ImageFive from "../../images/image5.png";
import ImageSix from "../../images/image6.png";
import ImageSeven from "../../images/image7.png";
import ImageEight from "../../images/image8.jpeg";
import ImageNine from "../../images/image9.png";
import ImageTen from "../../images/image10.png";
import ImageEleven from "../../images/image11.png";
import ImageTwelve from "../../images/image12.png";
import ImageFifteen from "../../images/image15.png"
import ImageFourteen from "../../images/image14.png"
import ImageSixteen from "../../images/image16.png"
import ImageSeventeen from "../../images/image17.png"
import ImageEighteen from "../../images/image18.png"
import ImageNineteen from "../../images/image19.png"
import ImageTwenty from "../../images/image20.png"
import ImageTwentyOne from "../../images/image21.png"
import ImageTwentyTwo from "../../images/image22.png"
import ImageTwentyThree from "../../images/image23.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const portfolioData = [
  {
    id: 2,
    name: "Yosher",
    image: ImageOne,
    link: "https://yosher.vercel.app/",
    description:
      "A website created using ReactJs acting as a search engine with active API calls with the logo being designed by myself using Figma",
    github: "https://github.com/shivah12/Yosher",
  },
  {
    id: 2,
    name: "Tutoria",
    link: "https://tutoria-delta.vercel.app/",
    image: ImageTwo,
    description:
      "An E-learning website created using ReactJs, TailwindCSS and AOS library with being responsive on all screens.",
    github:"https://github.com/shivah12/Tutoria",
  },
  {
    id: 2,
    name: "Compani",
    image: ImageThree,
    link: "https://compani-theta.vercel.app/",
    description:
      "A company-based created using ReactJs, TailwindCSS, AOS library and Vite with being responsive on all screens.",
      github:"https://github.com/shivah12/Compani",
  },
  {
    id: 2,
    name: "Spacer",
    image: ImageFour,
    link: "https://spacer-five.vercel.app/",
    description:
      "A Space based website created using ReactJs, TailwindCSS and AOS librarywith being responsive on all screens.",
    github:"https://github.com/shivah12/Spacer",
  },
  {
    id: 2,
    name: "Shinzo",
    image: ImageFive,
    link: "https://shinzo-three.vercel.app/",
    description:
      "A Study Space website created using ReactJs using Framer motion library with being responsive on larger screens.",
    github:"https://github.com/shivah12/Shinzo",
  },
  
  {
    id: 2,
    name: "Watch",
    image: ImageTwelve,
    link: "https://product-page-six-nu.vercel.app/",
    description:
      "A product landing page for a smart watch created using ReactJs with being responsive on all screens.",
    github:"https://github.com/shivah12/Product-Page",
  },
  {
    id: 2,
    name: "DaanFlow",
    image: ImageSeven,
    link: "https://shivah12.github.io/DaanFlow/main.html",
    description:
      "A donation based website created using HTML, CSS, Javascript and Bootstrap5 with multiple pages to switch. ",
    github:"https://github.com/shivah12/DaanFlow",
  },

  {
    id: 2,
    name: "FitnessFam",
    image: ImageSix,
    link: "https://shivah12.github.io/FitnessFam/",
    description:
      "A fitness academy based website created using HTML, CSS, Javascript, Bootstrap5 and AOS library. ",
    github:"https://github.com/shivah12/FitnessFam",
  },
  {
    id: 3,
    name: "Apple Airpods MAX",
    image: ImageSixteen,
    link: "https://www.behance.net/gallery/194599571/Apple-Airpods-MAX-website-design-UIUX-Design",
    description:
      "A website based design created using Figma, for Apple Airpods MAX advertising providing a good user experience.  ",
  },
  {
    id: 3,
    name: "Dash",
    image: ImageTwentyTwo,
    link: "https://www.behance.net/gallery/195522337/Dash-Dashboard-UI-Glassmorphism-UI-UIUX-Design",
    description:
      "A dashboard UI for a website aiming for effective subscription management for the user using Figma prototyping.  ",
  },
  {
    id: 3,
    name: "Green Oasis",
    image: ImageSeventeen,
    link: "https://www.behance.net/gallery/194664783/Green-Oasis-Plant-Selling-Website-Design-UIUX",
    description:
      "A website based design created using Figma, for a Plant business company.  ",
  },
  {
    id: 3,
    name: "Solaris",
    image: ImageEight,
    link: "https://www.behance.net/gallery/195977263/Solar-System-UIUX-Design-App-Design",
    description:
      "A app based design created using Figma, for a solar system enthusiast.  ",
  },
  {
    id: 3,
    name: "Museum",
    image: ImageFifteen,
    link: "https://www.behance.net/gallery/194533829/Museum-website-design-UI-design",
    description:
      "A website based design created using Figma, for a Museum.  ",
  },
  {
    id: 3,
    name: "MetaQuest 3",
    image: ImageTwentyThree,
    link: "https://www.behance.net/gallery/196443853/Meta-Quest-3-UIUX-Design-Web-Design",
    description:
      "A website based scroll design created using Figma, for a product called Metaquest 3 ",
  },
  {
    id: 3,
    name: "Movie Page",
    image: ImageEighteen,
    link: "https://www.behance.net/gallery/194714079/Movie-Page-Concept-UIUX-Design-WebDesign",
    description:
      "A website based design created using Figma, for a Movie Page Concept.  ",
  },
  {
    id: 3,
    name: "Renaissance",
    image: ImageNineteen,
    link: "https://www.behance.net/gallery/194791743/Renaissance-Project-UIUX-Design-Web-Design",
    description:
      "A website based design created using Figma, for Renaissance Concept.  ",
  },
  {
    id: 3,
    name: "Japaneese Shrine ",
    image: ImageTwenty,
    link: "https://www.behance.net/gallery/194742399/Japan-Shrine-tourism-UIUX-Web-Design",
    description:
      "A website based design created using Figma, for Japanese Shrine Concept.  ",
  },
  {
    id: 3,
    name: "Metaverse VR",
    image: ImageTwentyOne,
    link: "https://www.behance.net/gallery/195055409/Metaverse-VR-business-UIUX-Design-Web-Design",
    description:
      "A website based design created using Figma, for a Metaverse VR business company.  ",
  },
  {
    id: 3,
    name: "Robox ",
    image: ImageFourteen,
    link: "https://www.behance.net/gallery/194459335/Robox",
    description:
      "A website based design created using Figma, for a Robots based company.  ",
  },
  {
    id: 3,
    name: "PlantSpace",
    image: ImageNine,
    link: "https://www.behance.net/gallery/189451451/Plant-Website",
    description:
      "A one page website based design created using Figma, for a Plants-business website.  ",
  },
  {
    id: 3,
    name: "Car ",
    image: ImageTen,
    link: "https://www.behance.net/gallery/187397987/Car-WebDesign-Project",
    description:
      "A website based design created using Figma, for a Car branding.  ",
  },
  {
    id: 3,
    name: "TravelSite ",
    image: ImageEleven,
    link: "https://www.behance.net/gallery/190049231/Travel-Landing-Page",
    description:
      "A website based design created using Figma, for a Travel website.  ",
  },
  
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 3000 
    });
  }, []);

  const handleFilter = (currentId) => {
    setFilteredValue(currentId);
  };

  const handleHover = (index) => {
    setHoveredValue(index);
  };

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="Projects"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {portfolioData
            .filter(
              (item) =>
                filteredValue === 1 || item.id === filteredValue
            )
            .map((item, index) => (
              <div
                className="portfolio__content__cards__item"
                key={`cardItem${item.name.trim()}`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
                data-aos="fade-up" // Define AOS animation here
                data-aos-duration="1000" // Define duration here (in milliseconds)
              >
                <div className="portfolio__content__cards__item__img-wrapper">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="dummy data" src={item.image} />
                  </a>
                </div>
                <div className="overlay">
                  {index === hoveredValue && (
                    <div>
                      {item.github && ( // Check if github link exists
                        <BsGithub
                          size={30}
                          className="github-icon"
                          onClick={() =>
                            window.open(item.github, "_blank")
                          }
                        />
                      )}
                      <h1>{item.name}</h1>
                      <p>{item.description}</p>
                      <button onClick={() => window.open(item.link, "_blank")}>
                        Visit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
