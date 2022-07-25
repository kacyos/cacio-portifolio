import { useEffect, useState } from "react";

const useAnimatedLetters = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout();
    };
  }, []);

  return letterClass;
};

export default useAnimatedLetters;
