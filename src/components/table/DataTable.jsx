const DataTable = ({ data }) => {
  const renderHeader = () => {
    let headerElement = ["date", "price"];

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderBody = () => {
    return (
      data &&
      data.map(({ date, price }) => {
        return (
          <tr key={date}>
            <td>{date}</td>
            <td>{price}</td>
          </tr>
        );
      })
    );
  };

  return (
    <>
      <h1 id="title">BitCoin Table(30days)</h1>
      <table id="bitcoin-table">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </>
  );
};

export default DataTable;
