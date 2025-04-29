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
    <div
      className={`${start ? "m-auto max-w-[650px]" : null} flex w-full flex-col justify-center p-[3%]`}
    >
      {start ? (
        <MemoryBoard
          setStart={setStart}
          setSetup={setSetup}
          cards={themeAndLevelSetup()}
        />
      ) : (
        <>
          <h1 className="mt-[5%] mb-[10%] text-center font-serif text-4xl font-bold sm:text-5xl md:text-6xl">
            memory game
          </h1>
          <SetupForm setStart={setStart} setup={setup} setSetup={setSetup} />
        </>
      )}
    </div>
  );
}

export default App;
