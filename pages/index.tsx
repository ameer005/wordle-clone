import React from "react";
import { useState } from "react";
import Header from "../components/header";
import Keyboard from "../components/keyboard";
import Board from "../components/board";
import defaultBoard from "../utils/defaultBoard";
import GameOverModal from "../components/gameOverModal";
import _ from "lodash";
import wordBank from "../utils/wordBank";

type WordTupple = [string, string, string, string, string];
const emptyArr: WordTupple = ["", "", "", "", ""];

export default function Home() {
  const [word, setWord] = useState<WordTupple | string[]>(
    wordBank[Math.floor(Math.random() * wordBank.length)].split("")
  );
  const [board, setBoard] = useState<string[][]>(_.cloneDeep(defaultBoard));
  const [currentWord, setCurrentWord] = useState<string[]>([]);
  const [correctlyPlaced, setCorrectlyPlaced] = useState<WordTupple>([
    ...emptyArr,
  ]);
  const [incorrectlyPlaced, setIncorrectlyPlaced] = useState<string[][]>(
    _.cloneDeep(defaultBoard)
  );
  const [disabledKeys, setDisabledKeys] = useState<string[]>([]);
  const [row, setRow] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isWon, setIswon] = useState<boolean>(false);

  // rendering background colors
  const renderKeyColor = (value: string): string => {
    if (disabledKeys.includes(value)) return "bg-colorDisabled";
    else if (correctlyPlaced.includes(value)) return "bg-colorCorrect";
    else if (row !== 0 && incorrectlyPlaced[row - 1].includes(value))
      return "bg-colorPresent2";
    else return "bg-colorKeys";
  };

  const boardColumnColor = (
    value: string,
    pos: number,
    index: number
  ): string => {
    if (pos != row) {
      if (disabledKeys.includes(value)) return "bg-colorDisabled";
      else if (value && value === correctlyPlaced[index])
        return "bg-colorCorrect";
    }
    return "bg-transparent border-2 border-colorDisabled";
  };

  const submitWord = (): void => {
    if (word.join("") === currentWord.join("")) {
      setIswon(true);
      setShowModal(true);
      return;
    }
    if (row === 5) {
      setIswon(false);
      setShowModal(true);
      return;
    }

    // TODO have to fix this
    for (let i = 0; i < currentWord.length; i++) {
      const wordLetter = word[i];
      const currentLetter = currentWord[i];

      if (currentLetter === wordLetter) {
        setCorrectlyPlaced((prev) => {
          const temp: WordTupple = [...prev];
          temp[i] = currentLetter;
          return temp;
        });
      } else if (currentLetter != wordLetter && word.includes(currentLetter)) {
        setIncorrectlyPlaced((prev) => {
          const temp = [...prev];

          if (temp[row].includes(currentLetter)) {
            let countOriginalLetter = 0;

            // TODO temp fix
            for (let i = 0; i < word.length; i++) {
              word[i] === currentLetter && (countOriginalLetter += 1);
            }
            if (countOriginalLetter === 1) return temp;
          }

          temp[row][i] = currentLetter;
          return temp;
        });
      } else {
        setDisabledKeys((prev) => [...prev, currentLetter]);
      }
    }

    setCurrentWord([]);
    setRow((prev) => prev + 1);
  };

  const resetGame = (): void => {
    setBoard(_.cloneDeep(defaultBoard));
    setCurrentWord([]);
    setCorrectlyPlaced([...emptyArr]);
    setIncorrectlyPlaced(_.cloneDeep(defaultBoard));
    setDisabledKeys([]);
    setRow(0);
    setShowModal(false);
    setIswon(false);
    setWord(wordBank[Math.floor(Math.random() * wordBank.length)].split(""));
  };

  return (
    <main className=" flex flex-col min-h-screen px-10 xl:px-4 pb-6 text-xs ">
      <section>
        <Header />
      </section>
      <section className="flex items-center justify-center py-6 flex-1">
        <Board
          incorrectlyPlaced={incorrectlyPlaced}
          board={board}
          boardColumnColor={boardColumnColor}
        />
      </section>
      <section className="flex justify-center">
        <Keyboard
          setCurrentWord={setCurrentWord}
          currentWord={currentWord}
          renderKeyColor={renderKeyColor}
          submitWord={submitWord}
          row={row}
          setBoard={setBoard}
        />
      </section>

      {showModal && (
        <GameOverModal
          setShowModal={setShowModal}
          isWon={isWon}
          correctWord={word.join("").toUpperCase()}
          resetGame={resetGame}
        />
      )}
    </main>
  );
}
