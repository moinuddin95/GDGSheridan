import { useState, useEffect } from "react";

const useNavbarScroll = () => {
  const [menuVisibility, setMenuVisibility] = useState(true);
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    //if you scroll down, scrollY will be greater than the previous scrollY
    //if you scroll up, scrollY will be less than the previous scrollY
    const offset = 25;
    if(window.scrollY > scroll + offset)
      setMenuVisibility(false);
    else if(window.scrollY < scroll - offset)
      setMenuVisibility(true);
    if(menuVisibility == window.scrollY < scroll)
      setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return { menuVisibility };
};

export default useNavbarScroll;
