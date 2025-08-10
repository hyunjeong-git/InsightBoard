import SummaryCards from "./SummaryCards";
import ControlPanel from "../../components/dashboard/ControlPanel";
import AddNewBoardCard from "./AddNewBoardCard";
import Navbar from "../../components/Navbar";

const boards = [
  { title: 'My board', url: 'my-board'},
  { title: 'Practice board', url: 'practice-board'},
];

function DashboardPage() {
  const listItems = boards.map((board) => <SummaryCards title={board.title} url={board.url}></SummaryCards>);

  return (
    <>
      <ControlPanel />
      <div className="flex container mx-auto">
        <Navbar />
        <div className="ml-8">
          <div className="title p-8">
            <h1 className="text-[#172b4d] text-2xl font-medium">
              Trello Workspace
            </h1>
          </div>
          <hr />
          <div className="grid grid-cols-4 gap-4 mt-8">
            {listItems}
            <AddNewBoardCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
