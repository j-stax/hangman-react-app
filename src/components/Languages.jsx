import { languages } from "../../languages"

export default function Languages() {

    const languageElements = languages.map(item => {
        const styles = {
            color: item.color,
            backgroundColor: item.backgroundColor
        }
        return (
            <span
                className="languages__language"
                style={styles}
                key={item.name}
            >
                {item.name}
            </span>
        )
    })

    return (
        <section className="languages">
            {languageElements}
        </section>
    )
}