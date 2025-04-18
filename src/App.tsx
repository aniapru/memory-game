import { useState } from "react";
import SetupForm from "./SetupForm";
import MemoryBoard from "./MemoryBoard";
import { Setup } from "./types";
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

  return (
    <div className="mw-[600px]">
      <h1 className="mt-6 mb-6 text-center font-serif text-6xl font-bold">
        memory game
      </h1>
      {start ? (
        <MemoryBoard cards={selectTheme()} />
      ) : (
        <SetupForm setStart={setStart} setup={setup} setSetup={setSetup} />
      )}
    </div>
  );
}

export default App;
