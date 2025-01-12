import { useState } from "react"
import Status from "./components/Status"
import Languages from "./components/Languages"
import { languages } from "../languages"
import { words } from "../words"
import ReactConfetti from "react-confetti"

function App() {
  const [currentWord, setCurrentWord] = useState(() => chooseRandomWord())
  const [guessedLetters, setGuessedLetters] = useState([])
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const keyboardAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length
  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
  const isGameLost = wrongGuessCount >= languages.length-1
  const isGameOver = isGameWon || isGameLost
  const isLastGuessWrong = guessedLetters.length > 0 && !currentWord.includes(guessedLetters[guessedLetters.length-1])
  const guessesRemaining = languages.length-1 - wrongGuessCount

  const keyboardElements = keyboardAlphabets.split("").map(letter => 
      <button 
          className="keyboard__btn"
          key={letter}
          onClick={(event) => addGuessedLetter(letter.toLowerCase(), event.target)}
          disabled={isGameOver}
      >
          {letter}
      </button>
  )

  const letterElements = currentWord.split("").map((letter, index) =>
    <span 
      className={!guessedLetters.includes(letter) && isGameLost ? 
        "word__letter word__letter--missed" : "word__letter"
      }
      key={index}
    >
      {guessedLetters.includes(letter) || isGameLost ? letter.toUpperCase() : " "}
    </span>
  )

  function chooseRandomWord() {
    return words[Math.floor(Math.random() * words.length)]
  }

  function addGuessedLetter(letter, element) {
    setGuessedLetters(prevLetters => 
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    )
    if (currentWord.includes(letter)) {
      element.classList.add("correct")
    }
    else {
      element.classList.add("wrong")
    }
  }

  function resetGame() {
    setCurrentWord(chooseRandomWord())
    setGuessedLetters([])
    const keyboardBtns = document.getElementsByClassName("keyboard__btn")
    for (let btn of keyboardBtns) {
      if (btn.classList.contains("correct")) {
        btn.classList.remove("correct")
      }
      if (btn.classList.contains("wrong")) {
        btn.classList.remove("wrong")
      }
    }
  }

  window.addEventListener("resize", () => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })
  })

  return (
    <>
      {isGameWon && 
        <ReactConfetti 
          width={windowDimensions.width} 
          height={windowDimensions.height} 
          recycle={false}
          numberOfPieces={3000}
        />
      }
      <header className="header">
        <h1 className="header__title">Program Lang Hangman</h1>
        <p className="header__game-description">Guess the word in under 8 attempts to keep 
          the programming world safe from Assembly!</p>
      </header>
      <main>
        <Languages wrongGuessCount={wrongGuessCount} />
        <Status 
          isGameLost={isGameLost}
          isGameWon={isGameWon}
          isGameOver={isGameOver}
          isLastGuessWrong={isLastGuessWrong}
          wrongGuessCount={wrongGuessCount}
        />
        <section className="word">
          {letterElements}
        </section>
        <section className="keyboard">
          {keyboardElements}
        </section>
        {isGameOver && 
          <button 
            className="new-game-btn"
            onClick={resetGame}
          >New Game</button>
        }
        <p className="guess-count">Guesses remaining: {guessesRemaining}</p>
      </main>
    </>
  )
}

export default App
