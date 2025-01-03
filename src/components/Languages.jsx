import { languages } from "../../languages"

export default function Languages({wrongGuessCount}) {

    const languageElements = languages.map((item, index) => {

        const styles = {
            color: item.color,
            backgroundColor: item.backgroundColor
        }

        return (
            <span
                className={index < wrongGuessCount ? 
                    "language-chips__chip language-chips__chip--eliminated" : "language-chips__chip"
                }
                style={styles}
                key={item.name}
            >
                {item.name}
            </span>
        )
    })

    return (
        <section className="language-chips">
            {languageElements}
        </section>
    )
}