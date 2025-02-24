import { useEffect } from "react";

function useMainSlideAnimation() {
  useEffect(() => {
    const animateElements = document.querySelectorAll(".slideAnimate");
    for (let i = 0; i < animateElements.length; i++) {
      setTimeout(() => {
        animateElements.item(i).classList.add("show");
      }, i * 500);
    }
    setTimeout(() => {
      document.querySelector("#title > h1 > span")?.classList.add("show");
    }, 5000);
  }, []);
}

export default useMainSlideAnimation;
