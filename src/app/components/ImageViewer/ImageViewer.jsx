import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

function ImageViewer(props) {
  const [isImageOpen, setIsImageOpen] = useState(false);

  function handleImageClick(event) {
    event.stopPropagation();
    setIsImageOpen(!isImageOpen);
  }

  function handleCloseModal(event) {
    if (
      event.target.classList.contains("bg-modal") ||
      event.target.closest(".bg-modal") === null
    ) {
      setIsImageOpen(false);
    }
  }

  return (
    <>
      <div className="">
        <div onClick={handleImageClick}>{props.children}</div>
        {isImageOpen && (
          <CSSTransition
            in={isImageOpen}
            timeout={500}
            classNames={{
              enter: "image-enter",
              enterActive: "image-enter-active",
              exit: "image-exit",
              exitActive: "image-exit-active",
            }}
            unmountOnExit
          >
            <div
              className="fixed z-10 inset-0 overflow-y-auto bg-gray-900 bg-opacity-50"
              onClick={handleCloseModal}
            >
              <div className="flex items-center justify-center min-h-screen">
                <div
                  className="relative bg-modal"
                  onClick={(event) => event.stopPropagation()}
                >
                  {props.children}
                  <button
                    className="absolute top-0 right-0 mt-4 mr-4 text-white hover:text-gray-500 focus:outline-none"
                    onClick={handleImageClick}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </CSSTransition>
        )}
      </div>
    </>
  );
}
export default ImageViewer;
