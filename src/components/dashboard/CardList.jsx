import Card from './Card';


const CardList = ({title}) => {
  return (
    <div className="card-list flex flex-col justify-between rounded-xl p-4">
      <div className="card-list-header flex justify-between items-center mb-4">
        <div>
          <span className="text-sm/[20px] text-[#172B4D] font-semibold">{title}</span>
        </div>
        <div className="card-list-header-buttons">
          <button className="btn btn-primary">...</button>
        </div>
      </div>
      <div className="card-list-content">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="card-list-footer">
        <button className="btn w-full pt-[6px] pr-3 pb-[6px] pl-2 rounded-lg text-left text-sm/[20px] text-[#44546F] font-medium hover:bg-[#091e4224] hover:text-[#172b4d]">+ Add a card</button>
      </div>
    </div>
  );
}

export default CardList;