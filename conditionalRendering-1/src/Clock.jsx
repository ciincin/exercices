import { useEffect, useState } from "react";

function Clock() {
const [time, setTime] = useState(new Date())


  useEffect(()=>{

    let id = setInterval(() => {
        setTime(new Date())
    }, 1000);

   return () =>{clearInterval(id)} // para que al cambiar de pagina, no continue ejecutandose y no consuma memoria

  })
  return (
    <h2>
      The our is: {time.toLocaleTimeString()}
    </h2>
  );
}

export default Clock;
