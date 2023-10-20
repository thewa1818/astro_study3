import React from "react";
import { useState, useEffect } from "react";

const Text = () => {
  const [text, setText] = useState(false);

  const handleDoubleClick = () => {
    setText((prevState) => !prevState);
  };

  const textStyle = {
    fontSize: "24px",
    margin: "0px",
    color: "#fff",
    cursor: "pointer",
    lineHeight: "150px",
  };

  return (
    <>
      <span onDoubleClick={handleDoubleClick} style={textStyle}>
        {text ? "ただいま問い合わせ中..." : "よくある質問・お問い合わせ"}
      </span>
    </>
  );
};

export default Text;
