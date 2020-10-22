import "./app.css";
import Header from "./components/Header";
import Character from "./components/Character";
import Characters from "./components/Characters";
import Search from "./components/Search";
import { getCharacters } from "./utils/api";
import { createElement } from "./utils/elements";

function App() {
  const header = Header();
  const characterContainer = Characters();
  const main = createElement("main", {
    className: "main",
    children: [characterContainer],
  });

  async function loadCharacters(name) {
    const characters = await getCharacters(name);
    const characterElements = characters.map((character) =>
      Character({
        name: character.name,
        imgSrc: character.image,
      })
    );
    characterContainer.innerHTML = "";
    characterContainer.append(...characterElements);
  }
  /* 
  const searchBar = createElement("input", {
    onchange: (event) => loadCharacters(event.target.value),
  }); */
  const search = Search({
    onchange: (value) => loadCharacters(value),
  });

  loadCharacters();
  const container = createElement("div", {
    children: [header, search, main],
  });
  return container;
}

export default App;
