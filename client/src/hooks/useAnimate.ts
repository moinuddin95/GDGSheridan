import { useEffect, useState } from "react";

const useAnimate = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const handleScrollForAnimation = () => {
      const bookDiv = document.querySelector("#book");
      if (bookDiv)
        if (window.scrollY > bookDiv.getBoundingClientRect().top)
          bookDiv.classList.add("turn");
    };
    window.addEventListener("scroll", handleScrollForAnimation);
    return () => {
      window.removeEventListener("scroll", handleScrollForAnimation);
    };
  }, []);
};

export default useAnimate;
