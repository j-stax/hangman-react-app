import { languages } from "../../languages"

export default function Languages() {

    const languageElements = languages.map(item => {
        const styles = {
            color: item.color,
            backgroundColor: item.backgroundColor
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