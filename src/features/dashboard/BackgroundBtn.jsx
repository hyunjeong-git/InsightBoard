function BackgroundBtn({ onClick, isActive, url }) {
  return (
    <button
      className="w-[64px] h-[32px] bg-no-repeat bg-cover mb-1"
      style={{
        backgroundImage: `url("/public/images/${url}")`,
      }}
    ></button>
  );
}

export default BackgroundBtn;