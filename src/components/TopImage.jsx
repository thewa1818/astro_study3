import { useState, useEffect } from "react";
import Image from "../Images/Main.jpg";
import ImageSub from "../Images/Sub.jpg";

const TopImage = () => {
  const [topImage, setTopImage] = useState(Image.src);
  const [aa, setAa] = useState(false);

  const TopImage = {
    width: "1100px",
    margin: "auto auto 30px",
    height: "300px",
    backgroundImage: `url(${topImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  useEffect(() => {
    const url = window.location.search;
    if (url.includes("test")) {
      setTopImage(ImageSub.src);
    } else {
      topImage;
    }
    setTimeout(function () {
      setAa(true);
    }, 500);
  }, []);

  return !aa ? <div>読み込み中・・・</div> : <div style={TopImage}></div>;

  // return aa && <div style={TopImage}></div>;
};

export default TopImage;
