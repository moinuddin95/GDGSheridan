import { useEffect } from "react";

function useBackgroundTransition() {
  useEffect(() => {
    /*
    color sequence:
rgb(80, 121, 139)
rgb(0, 139, 80);
rgb(162, 84, 84);


    */
    const handleScroll = () => {
      const parentElement = document.querySelector("#home");
      if (!parentElement) return;
      const childElements = parentElement.children;
      const colorList = [
        [80, 121, 139],
        [0, 139, 80],
        [162, 84, 84],
      ];
      let bgColor = "";
      if (!childElements) return;
      const elements = childElements.length
      for (let i = 0; i < elements; i++) {
        const currentElement = childElements.item(i);
        if (currentElement === null) return;
        if (
          currentElement.getBoundingClientRect().top <= 0 &&
          currentElement.getBoundingClientRect().bottom >= 0
        ) {
          const color1 =
            colorList[i][0] +
            ((colorList[i][0] - colorList[Math.min(i + 1, elements - 1)][0]) *
              currentElement.getBoundingClientRect().top) /
              currentElement.getBoundingClientRect().height;
          const color2 =
            colorList[i][1] +
            ((colorList[i][1] - colorList[Math.min(i + 1, elements - 1)][1]) *
              currentElement.getBoundingClientRect().top) /
              currentElement.getBoundingClientRect().height;
          const color3 =
            colorList[i][2] +
            ((colorList[i][2] - colorList[Math.min(i + 1, elements - 1)][2]) *
              currentElement.getBoundingClientRect().top) /
              currentElement.getBoundingClientRect().height;
          bgColor = `rgb(${color1}, ${color2}, ${color3})`;
        }
      }
      (parentElement as HTMLElement).style.backgroundColor = bgColor;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}

export default useBackgroundTransition;
