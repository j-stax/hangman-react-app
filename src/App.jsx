import { useState } from "react"
import Status from "./components/Status"
import Languages from "./components/Languages"
import { languages } from "../languages"
import { words } from "../words"

function App() {
  const [currentWord, setCurrentWord] = useState("react")
  const [guessedLetters, setGuessedLetters] = useState([])

  const keyboardAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length
  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
  const isGameLost = wrongGuessCount >= languages.length-1
  const isGameOver = isGameWon || isGameLost

  const keyboardElements = keyboardAlphabets.split("").map(letter => 
      <button 
          className="keyboard__btn"
          key={letter}
          onClick={(event) => addGuessedLetter(letter.toLowerCase(), event.target)}
      >
          {letter}
      </button>
  )

  const letterElements = currentWord.split("").map(letter =>
    <span 
      className="word__letter"
      key={letter}
    >
      {guessedLetters.includes(letter) ? letter.toUpperCase() : " "}
    </span>
  )

  function addGuessedLetter(letter, element) {
    setGuessedLetters(prevLetters => 
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    )
    element.style.backgroundColor = currentWord.includes(letter) ? "#10A95B" : "#EC5D49"
  }

  return (
    <>
      <header className="header">
        <h1 className="header__title">Program Lang Hangman</h1>
        <p className="header__game-description">Guess the word in under 8 attempts to keep 
          the programming world safe from Assembly!</p>
      </header>
      <main>
        <Languages wrongGuessCount={wrongGuessCount} />
        <Status />
        <section className="word">
          {letterElements}
        </section>
        <section className="keyboard">
          {keyboardElements}
        </section>
        {isGameOver && 
          <button 
            className="new-game-btn"
          >New Game</button>
        }
      </main>
    </>
  )
}

export default App
