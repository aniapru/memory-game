import { ReactNode, Dispatch, SetStateAction } from "react";

interface CardProps {
  children: ReactNode;
  name?: string;
  id: number;
  paired: boolean;
  clicked: boolean;
  chosenCards: string[];
  setClick: Dispatch<SetStateAction<number[]>>;
  setChosenCards: Dispatch<SetStateAction<string[]>>;
}

export default function Card({
  children,
  name,
  id,
  paired,
  chosenCards,
  setClick,
  clicked,
  setChosenCards,
}: CardProps) {
  function cardClickHandler() {
    setClick((prev) => [...prev, id]);
    setChosenCards((prevState) => {
      if (name) {
        return [...prevState, name];
      }
      return prevState;
    });

    setTimeout(() => {
      setChosenCards([]);
      setClick([]);
    }, 3500);
  }

  return (
    <>
      <div className="mh-[100px] mw-[100px] flex aspect-square items-center justify-center bg-transparent perspective-[1000px]">
        <div
          onClick={cardClickHandler}
          className={`relative h-full w-full text-center shadow-md transition-transform duration-400 transform-3d ${chosenCards.length === 2 ? "pointer-events-none" : null} ${paired ? "rotate-y-180" : null} ${clicked ? "pointer-events-none rotate-y-180" : null}`}
        >
          <div className="absolute inset-0 flex items-center justify-center rounded-md bg-linear-to-tl from-cyan-600 to-cyan-400 text-black backface-hidden"></div>
          <div
            className={`absolute inset-0 flex rotate-y-180 items-center justify-center rounded-md bg-linear-to-tl from-neutral-400 to-neutral-200 text-white backface-hidden`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
