import SummaryCards from "./SummaryCards";
import ControlPanel from "../../components/dashboard/ControlPanel";

const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

function DashboardPage() {
  const listItems = people.map((person) => <SummaryCards></SummaryCards>);

  return (
    <>
      <ControlPanel />
      <div className="grid grid-cols-4 gap-4">{listItems}</div>
    </>
  );
}

export default DashboardPage;
