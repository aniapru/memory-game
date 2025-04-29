import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  clicked?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ children, clicked, onClick }: Props) {
  return (
    <button
      className={`hover:-translate-y-2% flex max-h-[45px] w-full max-w-[160px] cursor-pointer items-center justify-center rounded-md p-[1%] hover:scale-95 hover:duration-300 ${clicked ? "bg-slate-400" : "bg-cyan-600"} text-l font-serif`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
