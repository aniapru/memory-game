import { useState } from "react";
import SetupForm from "./SetUpForm";
import MemoryBoard from "./MemoryBoard";

function App() {
  const [start, setStart] = useState<boolean>(false);

  return (
    <div className="mw-[600px]">
      <h1 className="mt-6 mb-6 text-center font-serif text-6xl font-bold">
        memory game
      </h1>
      {start ? <MemoryBoard /> : <SetupForm setStart={setStart} />}
    </div>
  );
}

export default App;
