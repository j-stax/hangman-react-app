export default function Keyboard() {
    const keyboardLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    const keyboardElements = keyboardLetters.split("").map(letter => 
        <button 
            className="keyboard__btn"
            key={letter}
        >
            {letter}
        </button>
    )

    return (
        <section className="keyboard">
            {keyboardElements}
        </section>
    )
}