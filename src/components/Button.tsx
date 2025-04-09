import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  clicked?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ children, clicked, onClick }: Props) {
  return (
    <button
      className={`w-[160px] cursor-pointer rounded-md ${clicked ? "bg-slate-400" : "bg-cyan-600"} font-serif text-xl`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
