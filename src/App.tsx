import { useState } from "react";
import SetupForm from "./SetupForm";
import MemoryBoard from "./MemoryBoard";
import { Setup, Card } from "./types";
import { animalCards, foodCards, natureCards } from "./assets/themes";

function App() {
  const [start, setStart] = useState<boolean>(false);
  const [setup, setSetup] = useState<Setup>({ level: "", theme: "" });

  function selectTheme() {
    switch (setup.theme) {
      case "food":
        return foodCards;
      case "nature":
        return natureCards;
      case "animals":
        return animalCards;
      default:
        return [];
    }
  }

  function selectLevel(cards: Card[]) {
    switch (setup.level) {
      case "easy":
        return cards.filter((card) => card.id <= 16);
      case "medium":
        return cards.filter((card) => card.id <= 24);
      case "hard":
        return cards.filter((card) => card.id <= 30);
      default:
        return cards;
    }
  }

  function themeAndLevelSetup() {
    const cards: Card[] = selectTheme();
    return selectLevel(cards);
  }

  return (
    <div className="mw-[600px]">
      <h1 className="mt-6 mb-6 text-center font-serif text-6xl font-bold">
        memory game
      </h1>
      {start ? (
        <MemoryBoard
          setStart={setStart}
          setSetup={setSetup}
          cards={themeAndLevelSetup()}
        />
      ) : (
        <SetupForm setStart={setStart} setup={setup} setSetup={setSetup} />
      )}
    </div>
  );
}

export default App;
