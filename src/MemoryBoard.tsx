import { Dispatch, useEffect, useState, SetStateAction } from "react";
import Card from "./components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card as CardInterface, Setup } from "./types";
import { faFaceSmileBeam } from "@fortawesome/free-solid-svg-icons/faFaceSmileBeam";
import Button from "./components/Button";

function shuffleArray(array: CardInterface[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

interface Props {
  cards: CardInterface[];
  setStart: Dispatch<SetStateAction<boolean>>;
  setSetup: Dispatch<SetStateAction<Setup>>;
}

export default function MemoryBoard({ cards, setStart, setSetup }: Props) {
  const [memoryCards, setMemoryCards] = useState<CardInterface[]>([]);
  const [chosenCards, setChosenCards] = useState<string[]>([]);
  const [pairs, setPairs] = useState<string[]>([]);
  const [click, setClick] = useState<number[]>([]);

  useEffect(() => {
    const arr: CardInterface[] = shuffleArray(cards);
    setMemoryCards(arr);
  }, [cards]);

  useEffect(() => {
    if (chosenCards[0] === chosenCards[1]) {
      if (chosenCards.length !== 0) {
        setPairs((prevState) => [...prevState, chosenCards[0]]);
      }
    }
  }, [chosenCards, setPairs]);

  function gridLayout(cards: CardInterface[]) {
    switch (cards.length) {
      case 16:
        return "grid-cols-4 grid-rows-4";
      case 24:
        return "grid-cols-4 grid-rows-6";
      case 30:
        return "grid-cols-5 grid-rows-6";
    }
  }

  function backToMenuHandler() {
    setStart(false);
    setSetup({ level: "", theme: "" });
  }

  function resetGameHandler() {
    setPairs([]);
  }

  return (
    <>
      <div className={`grid ${gridLayout(cards)} gap-[1.2vh] p-[5%]`}>
        {memoryCards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.icon.iconName}
            paired={pairs.includes(card.icon.iconName)}
            clicked={click.includes(card.id)}
            setClick={setClick}
            chosenCards={chosenCards}
            setChosenCards={setChosenCards}
          >
            <FontAwesomeIcon icon={card.icon} size="2xl" style={card.style} />
          </Card>
        ))}
      </div>

      {pairs.length === cards.length / 2 && (
        <div>
          <h2 className="mb-2 text-center font-serif text-3xl">
            You WON! Congratulations <FontAwesomeIcon icon={faFaceSmileBeam} />
          </h2>
        </div>
      )}

      <div className="mt-8 flex h-[50px] justify-between">
        <Button onClick={backToMenuHandler}>{"Back to menu"}</Button>
        <Button onClick={resetGameHandler}>{"Reset"}</Button>
      </div>
    </>
  );
}
