import React from "react";
import { useState } from "react";
import Header from "../components/header";
import Keyboard from "../components/keyboard";
import Board from "../components/board";
import defaultBoard from "../utils/defaultBoard";

type WordTupple = [string, string, string, string, string];

export default function Home() {
  const [word, setWord] = useState<WordTupple>(["h", "a", "s", "t", "e"]);
  const [board, setBoard] = useState<string[][]>(defaultBoard);
  const [currentWord, setCurrentWord] = useState<string[]>([]);
  const [correctlyPlaced, setCorrectlyPlaced] = useState<string[]>([]);
  const [inCorrectlyPlaced, setinCorrectlyPlaced] = useState<string[]>([]);
  const [disabledKeys, setDisabledKeys] = useState<string[]>([]);
  const [row, setRow] = useState<number>(0);

  // rendering background colors
  const renderKeyColor = (value: string): string => {
    if (disabledKeys.includes(value)) return "bg-colorDisabled";
    else if (correctlyPlaced.includes(value)) return "bg-colorCorrect";
    else if (inCorrectlyPlaced.includes(value)) return "bg-colorPresent2";
    else return "bg-colorKeys";
  };

  const boardColumnColor = (value: string): string => {
    if (disabledKeys.includes(value)) return "bg-colorDisabled";
    else if (correctlyPlaced.includes(value)) return "bg-colorCorrect";
    else if (inCorrectlyPlaced.includes(value)) return "bg-colorPresent2";
    else return "bg-transparent border-2 border-colorDisabled";
  };

  const submitWord = (): void => {
    if (row > 6) alert("you lost dumbass");
    if (word.join("") === currentWord.join("")) alert("they are same");

    currentWord.forEach((letter, index) => {
      if (letter === word[index]) {
        console.log(letter);
        setCorrectlyPlaced((prev) => [...prev, letter]);
      } else if (letter != word[index] && word.includes(letter)) {
        setinCorrectlyPlaced((prev) => [...prev, letter]);
      } else {
        setDisabledKeys((prev) => [...prev, letter]);
      }
    });

    setCurrentWord([]);
    setRow((prev) => prev + 1);
  };

  return (
    <main className=" flex flex-col min-h-screen px-10 pb-6 text-xs ">
      <section className="mb-4">
        <Header />
      </section>
      <section className="flex-1 flex justify-center">
        <Board board={board} boardColumnColor={boardColumnColor} />
      </section>
      <section className="flex justify-center">
        <Keyboard
          setCurrentWord={setCurrentWord}
          currentWord={currentWord}
          renderKeyColor={renderKeyColor}
          submitWord={submitWord}
        />
      </section>
    </main>
  );
}
