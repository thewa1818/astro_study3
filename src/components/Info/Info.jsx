import React, { useState, useEffect } from "react";
import "../Info/Info.css";
import Icon from "@mui/icons-material/ArrowForwardIosRounded";

const Heading = ({ title, text }) => {
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    if (title === "お知らせ") {
      setBackgroundColor("rgb(142, 135, 235)");
    } else if (title === "速報") {
      setBackgroundColor("rgb(231, 189, 10)");
    } else if (title === "重要") {
      setBackgroundColor("rgb(223, 95, 95)");
    } else {
      setBackgroundColor("pink");
    }
  }, []);

  return (
    <div className="news_wrapper">
      <p className="news_title" style={{ backgroundColor }}>
        {title}
      </p>
      <p className="news_text">
        <a href="">{text}</a>
        <p>
          <Icon style={{ color: "#fff" }} />
        </p>
      </p>
    </div>
  );
};

export default Heading;
