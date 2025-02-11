import {useState} from 'react'

const useSidebarVisibility = () => {
  const [sidebarVisibility, setSidebarVisibility] = useState(false);
    const tabsButton = document.querySelector("#tabs");
    const tabsAnimation = () => {
      tabsButton?.classList.toggle("close");
      tabsButton?.classList.toggle("open");
      setSidebarVisibility(!sidebarVisibility);
    };
  return { tabsAnimation, sidebarVisibility}
}

export default useSidebarVisibility