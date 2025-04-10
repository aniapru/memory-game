import { type ReactNode } from "react";

import { useState } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  const [clicked, setClicked] = useState<boolean>(false);

  function cardClickHandler() {
    setClicked(true);
  }

  return (
    <>
      <div className="mh-[100px] mw-[100px] flex aspect-square items-center justify-center bg-transparent perspective-[1000px]">
        <div
          className={`relative h-full w-full text-center shadow-md transition-transform duration-600 transform-3d hover:rotate-y-180 ${clicked ? "rotate-y-180" : null}`}
        >
          <div className="absolute inset-0 flex items-center justify-center rounded-md bg-linear-to-tl from-cyan-600 to-cyan-400 text-black backface-hidden"></div>
          <div
            onClick={cardClickHandler}
            className={`absolute inset-0 flex rotate-y-180 items-center justify-center rounded-md bg-linear-to-tl from-neutral-400 to-neutral-200 text-white backface-hidden`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
