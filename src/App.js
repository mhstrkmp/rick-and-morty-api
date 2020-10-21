import "./app.css";
import Character from "./components/Character";
import { getCharacterById } from "./utils/api";
import Header from "./components/Header";
import { createElement } from "./utils/elements";

function App() {
  const header = Header();
  const main = createElement("main");

  async function getCharacters() {
    const character1 = await getCharacterById(1);
    main.append(
      Character({
        name: character1.name,
        imgSrc: character1.image,
      })
    );
  }

  getCharacters();
  const container = createElement("div", { children: [header, main] });
  return container;
}

export default App;
