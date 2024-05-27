function AlertClock() {
  function getTime() {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hour}:${minutes}:${seconds}`;
  }

  function alertMsg() {
    alert(getTime());
  }

  return <button onClick={alertMsg}>Click me!</button>;
}

export default AlertClock;
