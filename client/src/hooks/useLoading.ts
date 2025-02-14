import { useState, useEffect } from "react";
const useLoading = () => {
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        if (document.contains(document.querySelector('#loading'))) {
          setLoading(false);
        }
      }, 5000);
    }
  });

  return isLoading;
};

export default useLoading;