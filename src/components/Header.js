import "./header.css";
import { createElement } from "../utils/elements";

function Header() {
  const siteTitle = createElement("h1", {
    innerText: "Rick & Morty",
  });

  const header = createElement("header", {
    className: "header",
    children: [siteTitle],
  });
  return header;
}

export default Header;
