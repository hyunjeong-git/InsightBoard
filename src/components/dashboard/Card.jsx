const Card = ({title}) => {
  return (
    <div className="card mb-2">
      <div className="card-content border rounded-lg shadow-sm bg-white">
        <p className="text-sm text-[#172B4D] font-medium p-2">{title}</p>
      </div>
    </div>
  );
};

export default Card;
