import SummaryCards from "./SummaryCards";
import ControlPanel from "../../components/dashboard/ControlPanel";
import AddNewBoardCard from "./AddNewBoardCard";

const boards = [
  { title: 'My board', url: 'my-board'},
  { title: 'Practice board', url: 'practice-board'},
];

function DashboardPage() {
  const listItems = boards.map((board) => <SummaryCards title={board.title} url={board.url}></SummaryCards>);

  return (
    <>
      <ControlPanel />
      <div className="grid grid-cols-4 gap-4">
        {listItems}
        <AddNewBoardCard />
      </div>
    </>
  );
}

export default DashboardPage;
