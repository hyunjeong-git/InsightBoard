import SummaryCards from './SummaryCards';


const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

function DashboardPage() {
  const listItems = people.map(person => <SummaryCards></SummaryCards>);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">{listItems}</div>
  );
}

export default DashboardPage;