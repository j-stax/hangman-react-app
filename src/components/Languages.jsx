import { languages } from "../../languages"

export default function Languages({wrongGuessCount}) {

    const languageElements = languages.map((item, index) => {

        const styles = {
            color: item.color,
            backgroundColor: item.backgroundColor
        }

        if (index < wrongGuessCount) {
            return (
                <span
                    className="language-chips__chip language-chips__chip--eliminated"
                    style={styles}
                    key={item.name}
                >
                    {item.name}
                </span>
            )
        }

        return (
            <span
                className="language-chips__chip"
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