import ContainerCards from "../ContainerCards";
import ContainerForm from "../ContainerForm";
import "../HomeBody/index.css";

function HomeBody({
  addNewTransaction,
  listTransactions,
  removeCard,
  setFilter,
}) {
  return (
    <div className="main-container-body">
      <div className="main-body">
        <ContainerForm
          listTransactions={listTransactions}
          addNewTransaction={addNewTransaction}
        />
        <ContainerCards
          setFilter={setFilter}
          listTransactions={listTransactions}
          removeCard={removeCard}
        />
      </div>
    </div>
  );
}

export default HomeBody;
