import "./header.css";
import { createElement } from "../utils/elements";
import antennaRick from "../assets/antennaRickNoBg.png";

function Header() {
  const siteTitle = createElement("h1", {
    innerText: "Rick & Morty",
  });
  const siteDescription = createElement("p", {
    innerText: "Check out Rick & Morty's characters ...",
  });
  const siteImage = createElement("img", {
    className: "header__image",
    src: antennaRick,
    alt: "Antenna Rick",
  });
  const horizontalLine = createElement("div", {
    className: "horizontalLine",
  });
  const headerText = createElement("div", {
    className: "header__text",
    children: [siteTitle, siteDescription],
  });

  const header = createElement("header", {
    className: "header",
    children: [siteImage, headerText, horizontalLine],
  });
  return header;
}

export default Header;
