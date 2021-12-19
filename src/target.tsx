import { useEffect, useState } from "react";
import Santa from "./assets/santa.png";

export function Target() {
  const [show, setShowTarget] = useState(false);

  useEffect(() => {
    function handleKeypress(e: KeyboardEvent) {
      if (e.key === "s") {
        setShowTarget((show) => !show);
      }
    }
    window.addEventListener("keypress", handleKeypress);

    return () => {
      window.removeEventListener("keypress", handleKeypress);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="absolute w-[50vw] h-[75vh]">
      <img src={Santa} className="w-full h-full object-contain" />
    </div>
  );
}
