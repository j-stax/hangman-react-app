import { getFarewellText } from "../../utils"
import { languages } from "../../languages"

export default function Status(props) {

    function getModClass() {
        if (!props.isGameOver && props.isLastGuessWrong) {
            return "status--farewell" 
        } 
        else if (props.isGameWon) {
            return "status--won"
        } 
        else if (props.isGameLost) {
            return "status--lost"
        }
        else {
            return
        }
    }

    function getGameStatus() {
        if (!props.isGameOver && props.isLastGuessWrong) {
            return (
                <>
                    <p className="status__text status__text--farewell">
                        "{getFarewellText(languages[props.wrongGuessCount-1].name)}"
                    </p>
                    <span>🫡</span>
                </>
            )
        }
        else if (props.isGameWon) {
            return (
                <>
                    <p className="status__text status__text--top">You win!</p>
                    <p className="status__text status__text--bottom">Well done! 🎉</p>
                </>
            )
        }
        else if (props.isGameLost) {
            return (
                <>
                    <p className="status__text status__text--top">Game over!</p>
                    <p className="status__text status__text--bottom">You lose! Better start learning Assembly 😭</p>
                </>
            )
        }
        else {
            return
        }
    }

    return (
        <section className={`status ${getModClass()}`}>
            {getGameStatus()}
        </section>
    )
}