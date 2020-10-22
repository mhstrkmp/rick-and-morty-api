import "./header.css";
import { createElement } from "../utils/elements";
import antennaRick from "../assets/antennaRickNoBg.png";

function Header() {
  const siteTitle = createElement("h1", {
    innerText: "Rick & Morty",
  });
  const siteDescription = createElement("h2", {
    innerText: "What the API?",
  });
  const siteImage = createElement("img", {
    className: "header__image",
    src: antennaRick,
    alt: "Antenna Rick",
  });

  const header = createElement("header", {
    className: "header",
    children: [siteTitle, siteDescription, siteImage],
  });
  return header;
}

export default Header;
