import { useEffect } from "react";

function useShowAnimation(query: string, offset: number) {
  useEffect(() => {
    const elem = document.querySelector(query);
    const addShow = () => {
      if (elem) {
        const top = elem.getBoundingClientRect().top;
        if (top < window.innerHeight - offset) elem.classList.add("show");
        else if (elem.classList.contains("show")) elem.classList.remove("show");
      }
    };
    window.addEventListener("scroll", addShow);
    return () => {
      window.removeEventListener("scroll", addShow);
    };
  }, []);
}

export default useShowAnimation;
