import { useContext } from "react";
import { useEffect, useState } from "react";
import { LanguageContext } from "../../App";

function Clock() {
const [time, setTime] = useState(new Date())

const language =useContext(LanguageContext)

  useEffect(()=>{

    let id = setInterval(() => {
        setTime(new Date())
    }, 1000);

   return () =>{clearInterval(id)} // para que al cambiar de pagina, no continue ejecutandose y no consuma memoria

  })
  return (
    <h2>
      {language === "en" ? "The hour is: " :"l'ora è: "}{time.toLocaleTimeString()} 
      {/* The hour is: {time.toLocaleTimeString()} */}
    </h2>
  );
}

export default Clock;
