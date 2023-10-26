import { useState, useEffect } from "react";
import "../Info/Info.scss";
import { Icon } from "@iconify/react";

const Info = ({ title, text, link }) => {
  const [bgColor, setBgColor] = useState("#000");

  useEffect(() => {
    if (title === "お知らせ") {
      setBgColor("rgb(142, 135, 235)");
    } else if (title === "速報") {
      setBgColor("rgb(231, 189, 10)");
    } else if (title === "重要") {
      setBgColor("rgb(223, 95, 95)");
    } else {
      setBgColor("pink");
    }
  }, []);

  return (
    <div className="news__wrapper">
      <div className="news__wrapper-title" style={{ backgroundColor: bgColor }}>
        {title}
      </div>
      <div className="news__wrapper-text">
        <a href="../links" target="_blank">
          {text}
        </a>
        <Icon icon="nimbus:chevron-right" color="white" />
      </div>
    </div>
  );
};

export default Info;
