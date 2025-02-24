import { useEffect } from "react";

function useShowAnimation(query: string, offset: number) {
  useEffect(() => {
    const elem = document.querySelectorAll(query);
    const addShow = () => {
      for(let i = 0; i < elem.length; i++){
          const top = elem.item(i).getBoundingClientRect().top;
          if (top < window.innerHeight - offset) elem.item(i).classList.add("show");
          else if (elem.item(i).classList.contains("show")) elem.item(i).classList.remove("show");
      }
    };
    window.addEventListener("scroll", addShow);
    return () => {
      window.removeEventListener("scroll", addShow);
    };
  }, []);
}

export default useShowAnimation;
