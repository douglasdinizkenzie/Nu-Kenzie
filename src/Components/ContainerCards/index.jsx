import Filters from "./Filters";
import "../ContainerCards/index.css";
// import UlCards from "./UlCards";
import Cards from "./Cards";

function ContainerCards({ listTransactions, removeCard, setFilter }) {
  return (
    <div className="container-cards">
      <Filters setFilter={setFilter} />
      <ul>
        {listTransactions.map((elem, index) => (
          <Cards elem={elem} key={index} removeCard={removeCard} />
        ))}
      </ul>
    </div>
  );
}

export default ContainerCards;
