import AlertClock from "./AlertClock";

function Time() {
  function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return  `${hours}:${minutes}:${seconds}`
   
  }

  function alertMsg() {
    alert(getTime());
  }

  return <AlertClock onButtonClick={alertMsg} />;
}

export default Time;
