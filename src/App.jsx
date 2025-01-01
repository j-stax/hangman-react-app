import { useState } from "react"
import Languages from "./components/Languages"
import { words } from "../words"

function App() {
  const [currentWord, setCurrentWord] = useState("react")

  const letterElements = currentWord.split("").map(letter => 
    <span className="word__letter">{letter.toUpperCase()}</span>
  )

  return (
    <>
      <header className="header">
        <h1 className="header__title">Program Lang Hangman</h1>
        <p className="header__game-description">Guess the word in under 8 attempts to keep 
          the programming world safe from Assembly!</p>
      </header>
      <main>
        <Languages />
        <section className="word">
          {letterElements}
        </section>
      </main>
    </>
  )
}

export default App
