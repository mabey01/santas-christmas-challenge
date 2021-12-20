import { useEffect, useState } from "react";
import Santa from "./assets/santa.png";

const OPACITY = 0.4;

export function Target() {
  const [show, setShowTarget] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    function handleKeypress(e: KeyboardEvent) {
      if (e.key === "s" && !e.ctrlKey) {
        setOpacity(OPACITY);
        setShowTarget((show) => !show);
      }

      if (e.key === "s" && e.ctrlKey) {
        setOpacity(1);
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
      <img
        src={Santa}
        className="w-full h-full object-contain"
        style={{ opacity: opacity }}
      />
    </div>
  );
}
