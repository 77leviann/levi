import ScrollToTop from "react-scroll-up";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTopButton = () => {
  return (
    <ScrollToTop showUnder={160}>
      <button
        className="fixed bottom-4 right-4 p-3 rounded-full bg-blue-500 text-white shadow-md hover:bg-blue-600 focus:outline-none"
        aria-label="Scroll to top"
      >
        <AiOutlineArrowUp className="text-2xl" />
      </button>
    </ScrollToTop>
  );
};

export default ScrollToTopButton;
