function MouseClicker() {
  function logBtnName(event) {
    console.log(event.target.name);
  }

  function logImgSrc(event) {
    event.stopPropagation();
    console.log(event.target.src);
  }

  return (
    <>
      <button name="one" onClick={logBtnName}>
        Click me!
        <img
          name="picture"
          src="https://picsum.photos/200"
          alt="a randon picture"
          onClick={logImgSrc}
        />
      </button>
    </>
  );
}

export default MouseClicker;
