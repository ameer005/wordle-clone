import Header from "../components/header";
import Keyboard from "../components/keyboard";
import Board from "../components/board";

export default function Home() {
  return (
    <main className="bg-red-400">
      <Header />
      <Board />
      <Keyboard />
    </main>
  );
}
