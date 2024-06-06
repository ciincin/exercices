import { LanguageContext } from "../../App"
import { useContext } from "react"
function HelloWord() {
    const language = useContext(LanguageContext)
  return (
    <div>{language === "en" ? "Hello Word" : "Ciao Mondo"}</div>
  )
}

export default HelloWord