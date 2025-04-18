import { Dispatch, SetStateAction } from "react";
import Button from "./components/Button";
import { Setup } from "./types";

const themeButtons: string[] = ["food", "nature", "animals"];
const levelButtons: string[] = ["easy", "medium", "hard"];

interface Props {
  setup: Setup;
  setSetup: Dispatch<SetStateAction<Setup>>;
  setStart: Dispatch<SetStateAction<boolean>>;
}

export default function SetupForm({ setup, setSetup, setStart }: Props) {
  function selectLevelHandler(
    e: React.MouseEvent<HTMLButtonElement>,
    level: string,
  ) {
    e.preventDefault();
    setSetup({ ...setup, level });
  }

  function selectThemeHandler(
    e: React.MouseEvent<HTMLButtonElement>,
    theme: string,
  ) {
    e.preventDefault();
    setSetup({ ...setup, theme });
  }

  function clickStartHandler(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (setup.level && setup.theme) {
      setStart(true);
    }
  }

  return (
    <form className="mt-6">
      <h2 className="mb-2 text-center font-serif text-3xl">
        select difficulty
      </h2>
      <div className="mb-8 flex h-[50px] justify-between">
        {levelButtons.map((level) => (
          <Button
            key={level}
            clicked={setup.level === level}
            onClick={(e) => selectLevelHandler(e, level)}
          >
            {level}
          </Button>
        ))}
      </div>

      <h2 className="mb-2 text-center font-serif text-3xl">select theme</h2>
      <div className="mb-8 flex h-[50px] justify-between">
        {themeButtons.map((theme) => (
          <Button
            key={theme}
            clicked={setup.theme === theme}
            onClick={(e) => selectThemeHandler(e, theme)}
          >
            {theme}
          </Button>
        ))}
      </div>

      <div className="mt-10 flex h-[50px] justify-center">
        <Button onClick={clickStartHandler}>{"start"}</Button>
      </div>
    </form>
  );
}
