import Card from "./components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarrot,
  IconDefinition,
  faPizzaSlice,
  faEgg,
  faLemon,
  faAppleWhole,
  faIceCream,
  faBurger,
  faShrimp,
} from "@fortawesome/free-solid-svg-icons";

interface Card {
  id: number;
  icon: IconDefinition;
  style: { color: string };
}
const cards: Card[] = [
  { id: 1, icon: faCarrot, style: { color: "#dd732c" } },
  { id: 2, icon: faCarrot, style: { color: "#dd732c" } },
  { id: 3, icon: faPizzaSlice, style: { color: "#321b0c" } },
  { id: 4, icon: faPizzaSlice, style: { color: "#321b0c" } },
  { id: 5, icon: faEgg, style: { color: "#f6f4f3" } },
  { id: 6, icon: faEgg, style: { color: "#f6f4f3" } },
  { id: 7, icon: faLemon, style: { color: "#edea11" } },
  { id: 8, icon: faLemon, style: { color: "#edea11" } },
  { id: 9, icon: faAppleWhole, style: { color: "#cc1313" } },
  { id: 10, icon: faAppleWhole, style: { color: "#cc1313" } },
  { id: 11, icon: faIceCream, style: { color: "#135dcc" } },
  { id: 12, icon: faIceCream, style: { color: "#135dcc" } },
  { id: 13, icon: faBurger, style: { color: "#5e2f2f" } },
  { id: 14, icon: faBurger, style: { color: "#5e2f2f" } },
  { id: 15, icon: faShrimp, style: { color: "#e9609e" } },
  { id: 16, icon: faShrimp, style: { color: "#e9609e" } },
];

export default function MemoryBoard() {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-4 gap-[1.2vh] p-[5%]">
        {cards.map((card) => (
          <Card key={card.id}>
            <FontAwesomeIcon icon={card.icon} size="2xl" style={card.style} />
          </Card>
        ))}
      </div>
    </>
  );
}
