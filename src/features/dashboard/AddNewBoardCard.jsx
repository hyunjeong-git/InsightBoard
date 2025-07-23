import AddNewBoardCardPopover from "./AddNewBoardCardPopover";

const AddNewBoardCard = () => {
  return (
    <div className="rounded shadow-lg bg-gray-200 hover:bg-gray-300">
      <p className="h-full text-black-700 text-center content-center">
        <AddNewBoardCardPopover />
      </p>
    </div>
  );
};

export default AddNewBoardCard;