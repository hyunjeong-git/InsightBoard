import { Link } from "react-router-dom";

const SummaryCards = (props) => {
  const title = props.title;
  const url = `/b/${props.url}`;

  return (
    <Link to={url} className="hover:bg-gray-100">
      <div className="rounded shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #trello
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #practice
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #test
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SummaryCards;
