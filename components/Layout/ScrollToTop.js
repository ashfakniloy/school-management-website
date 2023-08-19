import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const buttonVisibility = () => {
    if (window.scrollY > 280) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", buttonVisibility);
    return () => {
      window.removeEventListener("scroll", buttonVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label="scroll to top"
      onClick={scrollToTop}
      className={
        isVisible
          ? "fixed bottom-5 right-5 lg:bottom-10 lg:right-10 p-3 opacity-100 text-2xl text-slate-100 bg-custom-green rounded transition-opacity duration-300 hover:bg-custom-green3 active:scale-90"
          : "hidden"
      }
    >
      <FaAngleUp />
    </button>
  );
}

export default ScrollToTop;
