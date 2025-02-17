import { useEffect, useState } from "react";

const useAnimate = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const handleScrollForAnimation = () => {
      const pages:NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>(".page");
      const cover:HTMLElement = document.querySelectorAll<HTMLElement>(".cover")[1];

      //triggering the animation
      const animationTriggerY = pages[0]?.getBoundingClientRect().top;
      if (pages && animationTriggerY - 200 < window.innerHeight && pages[0]?.getBoundingClientRect().bottom > 0) {
        const angle = Math.max((window.innerHeight - animationTriggerY - 200), 0) / window.innerHeight * 180;  
        pages[0].style.transform = `rotateY(${Math.min(angle, 180)}deg)`
        pages[1].style.transform = `rotateY(${Math.min(angle , 180)}deg)`
        pages[2].style.transform = `rotateY(${Math.min(angle * 1.15, 180)}deg)`
        pages[3].style.transform = `rotateY(${Math.min(angle * 1.2, 180)}deg)`
        pages[4].style.transform = `rotateY(${Math.min(angle * 1.32, 180)}deg)`
        pages[5].style.transform = `rotateY(${Math.min(angle * 1.64, 180)}deg)`
        pages[6].style.transform = `rotateY(${Math.min(angle * 1.75, 180)}deg)`
        pages[7].style.transform = `rotateY(${Math.min(angle * 1.95, 180)}deg)`
        cover.style.transform = `rotateY(${Math.min(angle * 2, 180)}deg)`
        cover.style.zIndex = "2";
        if(angle * 2 > 90)
          cover.style.zIndex = "-1";
      }
    };
    window.addEventListener("scroll", handleScrollForAnimation);
    return () => {
      window.removeEventListener("scroll", handleScrollForAnimation);
    };
  }, []);
};

export default useAnimate;
