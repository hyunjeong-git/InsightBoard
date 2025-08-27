import React, { useState } from "react";
import SummaryCards from "./SummaryCards";
import ControlPanel from "../../components/dashboard/ControlPanel";
import AddNewBoardCard from "./AddNewBoardCard";
import Navbar from "../../components/Navbar";

const boards = [
  { id: 0, title: 'My board', url: 'my-board'},
  { id: 1, title: 'Practice board', url: 'practice-board'},
];

function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const listItems = boards.filter((b) => b.title.toLowerCase().includes(searchQuery.toLowerCase())).map((board) => (
    <SummaryCards key={board.id} title={board.title} url={board.url}></SummaryCards>)
  );

  return (
    <>
      <ControlPanel searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <div className="flex container mx-auto">
        <Navbar />
        <div className="ml-8">
          <div className="flex items-center title py-8">
            <img src="/public/images/icons8-trello-48.png" className="mr-2"></img>
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
