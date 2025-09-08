import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { getAllTodos } from "../../api/cardAPI";

const CardList = ({ title, userId }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getAllTodos,
    // staleTime: 1000 * 60 * 5, // (선택) 5분 동안 캐시 유지
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);
  const cards = data.filter((todo) => todo.userId === userId).slice(0, 5); // userId에 해당하는 카드만 필터링하고 최대 5개까지만 표시
  const cardItems = cards.map((todo) => (
    <Card key={todo.id} title={todo.title} />
  ));

  return (
    <div className="card-list flex flex-col justify-between rounded-xl p-4">
      <div className="card-list-header flex justify-between items-center mb-4">
        <div>
          <span className="text-sm/[20px] text-[#172B4D] font-semibold">
            {title}
          </span>
        </div>
        <div className="card-list-header-buttons">
          <button className="btn btn-primary">...</button>
        </div>
      </div>
      <div className="card-list-content">{cardItems}</div>
      <div className="card-list-footer">
        <button className="btn w-full pt-[6px] pr-3 pb-[6px] pl-2 rounded-lg text-left text-sm/[20px] text-[#44546F] font-medium hover:bg-[#091e4224] hover:text-[#172b4d]">
          + Add a card
        </button>
      </div>
    </div>
  );
};

export default CardList;
