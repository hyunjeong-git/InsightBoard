function BackgroundBtn({ onClick, isActive, url }) {
  return (
    <button
      className="flex justify-center items-center w-[64px] h-[32px] bg-no-repeat bg-cover mb-1"
      style={{
        backgroundImage: `url("/public/images/${url}")`,
      }}
    >
      <svg /* check icon */
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5"
        style={{ visibility: isActive ? "visible" : "hidden" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 12.75 6 6 9-13.5"
        />
      </svg>
    </button>
  );
}

export default BackgroundBtn;