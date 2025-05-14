import React, { useState } from "react";

export default function Heading() {
  const [show, setShow] = useState(false);
  return (
    <>
      {show && <h2 className={show ? "bounce" : ""}>Heading</h2>}
      {!show && <div></div>}

      <button
        onClick={() => setShow(!show)}
        className="btn"
      >
        Show
      </button>
    </>
  );
}
