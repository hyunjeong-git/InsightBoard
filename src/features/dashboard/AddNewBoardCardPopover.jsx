import React, { useState, useRef, useEffect } from "react";
import VisibilityDropdown from "./VisibilityDropdown";

function AddNewBoardCardPopover() {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={popoverRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="text-gray">
        Create new board
      </button>

      {isOpen && (
        <div className="absolute flex flex-col w-[304px] h-[540px] rounded-lg shadow-lg bg-white border border-gray-200 p-4">
          <div className="flex flex-col items-center mb-4">
            <p className="font-medium text-gray-600 mb-2">Create board</p>
            <div
              style={{
                backgroundImage: 'url("/public/images/background_img_1.svg")',
              }}
              className="flex justify-center w-[200px] h-[120px]"
            >
              <img src="/public/images/board_img.svg"></img>
            </div>
          </div>
          <form>
            <div className="background-wrap mb-4">
              <div className="text-[12px] leading-[16px] font-bold text-gray-700 text-left">
                Background
              </div>

              <div className="flex justify-between mb-2">
                <button
                  className="w-[64px] h-[32px] bg-no-repeat bg-cover"
                  style={{
                    backgroundImage:
                      'url("/public/images/background_img_2.jpeg")',
                  }}
                ></button>
                <button
                  className="w-[64px] h-[32px] bg-no-repeat bg-cover"
                  style={{
                    backgroundImage:
                      'url("/public/images/background_img_3.jpeg")',
                  }}
                ></button>
                <button
                  className="w-[64px] h-[32px] bg-no-repeat bg-cover"
                  style={{
                    backgroundImage:
                      'url("/public/images/background_img_4.jpeg")',
                  }}
                ></button>
                <button
                  className="w-[64px] h-[32px] bg-no-repeat bg-cover"
                  style={{
                    backgroundImage:
                      'url("/public/images/background_img_5.jpeg")',
                  }}
                ></button>
              </div>

              <div className="flex justify-between">
                <button
                  className="w-[64px] h-[32px] bg-no-repeat bg-cover"
                  style={{
                    backgroundImage:
                      'url("/public/images/background_img_6.svg")',
                  }}
                ></button>
                <button
                  className="w-[64px] h-[32px] bg-no-repeat bg-cover"
                  style={{
                    backgroundImage:
                      'url("/public/images/background_img_1.svg")',
                  }}
                ></button>
                <button
                  className="w-[64px] h-[32px] bg-no-repeat bg-cover"
                  style={{
                    backgroundImage:
                      'url("/public/images/background_img_7.svg")',
                  }}
                ></button>
                <button
                  className="w-[64px] h-[32px] bg-no-repeat bg-cover"
                  style={{
                    backgroundImage:
                      'url("/public/images/background_img_8.svg")',
                  }}
                ></button>
              </div>
            </div>

            <div className="board-title-wrap mb-4">
              <div className="text-[12px] leading-[16px] font-bold text-gray-700 text-left">
                board title
                <span className="text-red-500">*</span>
              </div>
              <input
                type="text"
                className="w-full p-1 border border-gray-200 rounded mt-1"
                required
              />
              <div className="mt-1 text-left">
                <p className="text-[14px] leading-[16px] font-normal">
                  <span className="mr-1">👋</span>Board title is required
                </p>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-[12px] leading-[16px] font-bold text-gray-700 text-left mb-1">
                Visibility
              </div>
              <VisibilityDropdown />
            </div>

            <div className="flex flex-col gap-2">
              <button class="bg-gray-100 hover:bg-gray-200 text-gray-800 text-[14px] font-medium py-1 px-4 rounded justify-center">
                Create
              </button>
              <button class="bg-gray-100 hover:bg-gray-200 text-gray-800 text-[14px] font-medium py-1 px-4 rounded justify-center">
                <span>Start with a template</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddNewBoardCardPopover;