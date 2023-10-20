import { useState, useEffect } from "react";
import firstImage from "../Images/Main.jpg";

const TopImage = () => {
  const [paraImage, setParaImage] = useState(firstImage);

  return (
    <div>
      TopImage
      <img src={paraImage} />
    </div>
  );
};

export default TopImage;
