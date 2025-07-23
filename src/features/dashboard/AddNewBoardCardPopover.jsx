import React, { useState, useRef, useEffect } from "react";


function AddNewBoardCardPopover() {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={popoverRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray"
      >
        Create new board
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-white border border-gray-200 p-4 z-10">
          <p className="text-sm text-gray-800">Popover</p>
        </div>
      )}
    </div>
  );
}


export default AddNewBoardCardPopover;