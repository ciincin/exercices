import { useRef, useEffect, StrictMode } from "react";
function FocusableImput() {
  const inputRef = useRef(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("Mounting for the first time");
    } else {
      console.log("Mounting again for debug purposes");
    }

    inputRef.current?.focus();
  }, []);
  return (
    <>
      {/* <input type="text" ref={inputRef} /> */}
      <StrictMode>
        <input type="text" ref={inputRef} />
      </StrictMode>
    </>
  );
}

export default FocusableImput;
