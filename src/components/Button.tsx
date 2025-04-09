import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Button({ children }: Props) {
  return (
    <button className="w-[160px] cursor-pointer rounded-md bg-cyan-600 font-serif text-xl">
      {children}
    </button>
  );
}
