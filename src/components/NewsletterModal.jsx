import { useRef, useEffect } from "react";
import { girlReading } from "../assets/images";
import NewsletterCard from "./NewsletterCard";
export default function NewsletterModal(props) {
  const { setShowNewsletterModal, showNewsletterModal } = props;
  const modalRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (modalRef.current === event.target) {
      setShowNewsletterModal();
    }
  };
  useEffect(() => {
    if (showNewsletterModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showNewsletterModal]);

  return (
    <>
      <div
        id="myModal"
        className={`${
          showNewsletterModal
            ? " opacity-100 translate-y-0 "
            : " opacity-0 -translate-y-full"
        } fixed inset-0 flex items-center transition-all  z-[99999999999] ease-in-out duration-300 justify-center backdrop-blur-sm bg-Opacityblack  `}
        ref={modalRef}
        onClick={handleOutsideClick}
      >
        <div className="w-auto max-lg:w-[90%] 2xl:scale-125 flex rounded-lg h-auto overflow-hidden bg-white shadow-xl">
          <div className="flex items-center w-[45%] h-full  bg-[#c182f5] max-lg:hidden">
            <img
              src="https://images.unsplash.com/photo-1516410529446-2c777cb7366d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="max-h-[500px]"
              alt="girl-reading-a-book"
            />
          </div>

          <div className="py-20 2xl: w-[55%] flex justify-center items-center">
            <NewsletterCard />
          </div>
        </div>
      </div>
    </>
  );
}
