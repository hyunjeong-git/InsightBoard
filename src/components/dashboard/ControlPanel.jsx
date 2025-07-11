const ControlPanel = () => {
  return (
    <div className="control-panel mb-4">
      <span className="block text-lg font-bold text-gray-900">
        Search
      </span>
      <div className="w-80 mt-2">
        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
          <input
            type="text"
            name="search"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            placeholder="Search by name, email, or role"
          />
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
