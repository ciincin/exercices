import { useEffect, useState } from "react";
import classes from "./Clock.module.scss"

function Clock() {
const [time, setTime] = useState(new Date())


  useEffect(()=>{

    let id = setInterval(() => {
        setTime(new Date())
    }, 1000);

   return () =>{clearInterval(id)} // para que al cambiar de pagina, no continue ejecutandose y no consuma memoria

  })
  return (
    <h2 className={classes.clock}>
      The our is: {time.toLocaleTimeString()}
    </h2>
  );
}

export default Clock;
