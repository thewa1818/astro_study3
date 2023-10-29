import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../Link/Scroll.scss";

const Scroll = () => {
  const [show, setShow] = useState(false); // ボタンの表示状態を管理

  const { ref } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll__wrapper">
      <div ref={ref}>
        {show && (
          <div
            className="toTop"
            onClick={scrollToTop}
            style={{ display: "block" }}
          >
            トップへ戻る
          </div>
        )}
      </div>
    </div>
  );
};

export default Scroll;
