import { useEffect } from "react";

const useAnimate = () => {
  useEffect(() => {
    const handleScrollForAnimation = () => {
      const pages: NodeListOf<HTMLElement> =
        document.querySelectorAll<HTMLElement>(".page");
      const cover: HTMLElement =
        document.querySelectorAll<HTMLElement>(".cover")[1];

      if (!pages && !cover) return;
      const rectTop = cover.getBoundingClientRect().top;
      const rectBottom = cover.getBoundingClientRect().bottom;
      // getBoudingClientRect().top returns the distance between the top of the element
      // and the top of the viewport.
      // viewport refers to the browser window user is currently on.
      // getBoundingClientRect().bottom returns the distance between the BOTTOM of the
      // element and the top of the viewport.
      const topOffset = 500;
      const bottomOffset = 100;
      if (rectTop - bottomOffset < window.innerHeight && rectBottom > 0) {
        const angle =
          (Math.max(window.innerHeight - rectTop - bottomOffset, 0) /
            (window.innerHeight - topOffset)) *
          180;
        pages[0].style.transform = `rotateY(${Math.min(angle, 180)}deg)`;
        pages[1].style.transform = `rotateY(${Math.min(angle * 1.25, 180)}deg)`;
        pages[2].style.transform = `rotateY(${Math.min(angle * 1.35, 180)}deg)`;
        pages[3].style.transform = `rotateY(${Math.min(angle * 1.4, 180)}deg)`;
        pages[4].style.transform = `rotateY(${Math.min(angle * 1.45, 180)}deg)`;
        pages[5].style.transform = `rotateY(${Math.min(angle * 1.6, 180)}deg)`;
        pages[6].style.transform = `rotateY(${Math.min(angle * 1.75, 180)}deg)`;
        pages[7].style.transform = `rotateY(${Math.min(angle * 1.95, 180)}deg)`;
        cover.style.transform = `rotateY(${Math.min(angle * 2, 180)}deg)`;
        cover.style.zIndex = "2";
        if (angle * 2 > 90) cover.style.zIndex = "-1";
      }
    };
    window.addEventListener("scroll", handleScrollForAnimation);
    return () => {
      window.removeEventListener("scroll", handleScrollForAnimation);
    };
  }, []);
};

export default useAnimate;
