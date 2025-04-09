import Button from "./components/Button";

const themeButtons: string[] = ["food", "nature", "animals"];
const levelButtons: string[] = ["easy", "medium", "hard"];

export default function SetupForm() {
  return (
    <form className="mt-6">
      <h2 className="mb-2 text-center font-serif text-3xl">
        select difficulty
      </h2>
      <div className="mb-8 flex h-[50px] justify-between">
        {levelButtons.map((button) => (
          <Button>{button}</Button>
        ))}
      </div>

      <h2 className="mb-2 text-center font-serif text-3xl">select theme</h2>
      <div className="mb-8 flex h-[50px] justify-between">
        {themeButtons.map((button) => (
          <Button key={button}>{button}</Button>
        ))}
      </div>

      <div className="mt-10 flex h-[50px] justify-center">
        <Button>{"start"}</Button>
      </div>
    </form>
  );
}
