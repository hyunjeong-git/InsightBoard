import React, { useState } from "react";

const CheckIcon = (checked) => {
  if (checked) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-[24px] h-[24px] text-[#5BA4CF]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    );
  }
};

const Card = (props) => {
  console.log(props);
  const todo = props.todo;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card mb-2"
      onMouseOver={() => {
        setIsHovered(true);
      }}
      onMouseOut={() => setIsHovered(false)}
    >
      <div className="card-content flex items-center p-2 border rounded-lg shadow-sm bg-white">
        {CheckIcon(todo.completed)}
        {isHovered && !todo.completed ? (
          <img src="/public/images/icons8-circle-21.png" />
        ) : null}
        <div className="w-[calc(100%-24px)]">
          <p className="text-sm text-[#172B4D] font-medium p-2">{todo.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
