import { useState, useEffect } from "react";

const useScroll = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    //if you scroll down, scrollY will be greater than the previous scrollY
    //if you scroll up, scrollY will be less than the previous scrollY
    setMenuVisibility(window.scrollY > scroll);
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return {menuVisibility};
};

export default useScroll;