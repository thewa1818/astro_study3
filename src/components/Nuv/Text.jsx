import React from "react";
import { useState, useEffect } from "react";
import "../Nuv/Text.scss";

const Text = ({ headerTitle }) => {
  const [text, setText] = useState(false);

  const handleDoubleClick = () => {
    setText((title) => !title);
  };

  return (
    <>
      <span onDoubleClick={handleDoubleClick} className="topText">
        {text ? "ただいま問い合わせ中..." : "よくある質問・問い合わせ"}
      </span>
    </>
  );
};

export default Text;
