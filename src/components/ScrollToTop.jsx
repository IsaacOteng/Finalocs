import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    // keep button in DOM always; animate opacity & translate for smoothness
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed right-6 bottom-8 z-50
        w-12 h-12 rounded-xl shadow-lg
        bg-yellow-700 text-white flex items-center justify-center
        transform transition-all duration-2000 ease-in-out
        ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-6 pointer-events-none"}
      `}
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
