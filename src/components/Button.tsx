import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  clicked?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ children, clicked, onClick }: Props) {
  return (
    <button
      className={`hover:-translate-y-2% m-1 w-[160px] cursor-pointer rounded-md hover:scale-95 hover:duration-300 ${clicked ? "bg-slate-400" : "bg-cyan-600"} font-serif text-xl`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
