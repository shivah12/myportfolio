import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.png";
import ImageTwo from "../../images/image2.png";
import ImageThree from "../../images/image3.png";
import ImageFour from "../../images/image4.png";
import ImageFive from "../../images/image5.png";
import ImageSix from "../../images/image6.png";
import ImageSeven from "../../images/image7.png";
import ImageEight from "../../images/image8.png";
import ImageNine from "../../images/image9.png";
import ImageTen from "../../images/image10.png";
import ImageEleven from "../../images/image11.png";
import ImageTwelve from "../../images/image12.png";

import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Yosher",
    image: ImageOne,
    link: "https://yosher.vercel.app/",
    description: 'A website created using ReactJs acting as a search engine with active API calls withe the logo being designed by myself in Figma',
  },
  {
    id: 2,
    name: "Tutoria",
    link: "https://tutoria-delta.vercel.app/",
    image: ImageTwo,
    description:"An E-learning website created using ReactJs, TailwindCSS and AOS library with being responsive on all screens.",
  },
  {
    id: 2,
    name: "Compani",
    image: ImageThree,
    link: "https://compani-theta.vercel.app/",
    description:"A company-based created using ReactJs, TailwindCSS, AOS library and Vite with being responsive on all screens.",
  },
  {
    id: 2,
    name: "Spacer",
    image: ImageFour,
    link: "https://spacer-five.vercel.app/",
    description:"A Space based website created using ReactJs, TailwindCSS and AOS librarywith being responsive on all screens.",
  },
  {
    id: 2,
    name: "Shinzo",
    image: ImageFive,
    link: "https://shinzo-three.vercel.app/",
    description:"A Study Space website created using ReactJs using Framer motion library with being responsive on larger screens.",
  },
  {
    id: 2,
    name: "Product Page",
    image: ImageTwelve,
    link: "https://product-page-six-nu.vercel.app/",
    description:"A product landing page created using ReactJs with being responsive on all screens.",
  },
  {
    id: 2,
    name: "DaanFlow",
    image: ImageSeven,
    link: "https://shivah12.github.io/DaanFlow/main.html",
    description:"A donation based website created using HTML, CSS, Javascript and Bootstrap5 with multiple pages to switch. ",
  },
  {
    id: 2,
    name: "FitnessFam",
    image: ImageSix,
    link: "https://shivah12.github.io/FitnessFam/",
    description:"A fitness academy based website created using HTML, CSS, Javascript, Bootstrap5 and AOS library. ",
  },
  {
    id: 3,
    name: "Solaris",
    image: ImageEight,
    link: "https://www.behance.net/gallery/187656337/Solar-system(App-Design)",
    description:"An app based design created using Figma, for a solar system enthusiast.  ",
  },
  {
    id: 3,
    name: "PlantSpace",
    image: ImageNine,
    link: "https://www.behance.net/gallery/189451451/Plant-Website",
    description:"An website based design created using Figma, for a Plants-business website.  ",
  },
  {
    id: 3,
    name: "Car ",
    image: ImageTen,
    link: "https://www.behance.net/gallery/187397987/Car-WebDesign-Project",
    description:"An website based design created using Figma, for a Car branding.  ",
  },
  {
    id: 3,
    name: "TravelConnect ",
    image: ImageEleven,
    link: "https://www.behance.net/gallery/190049231/Travel-Landing-Page",
    description:"An website based design created using Figma, for a Travel website.  ",
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

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

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
            .filter((item) => filteredValue === 1 || item.id === filteredValue)
            .map((item, index) => (
              <div
                className="portfolio__content__cards__item"
                key={`cardItem${item.name.trim()}`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
              >
                <div className="portfolio__content__cards__item__img-wrapper">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img alt="dummy data" src={item.image} />
                  </a>
                </div>
                <div className="overlay">
                  {index === hoveredValue && (
                    <div>
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
