import HomeBody from "../../Components/HomeBody";
import HomeHeader from "../../Components/HomeHeader";
import { useState } from "react";
import data from "../../data/data";

function HomePage({ setIsHome }) {
  const [listTransactions, setListTransactions] = useState(data);
  const [filter, setFilter] = useState("todos");

  const filtredCards = listTransactions.filter((cards) =>
    filter === "todos" ? true : cards.type === filter
  );

  function addNewTransaction(transaction) {
    setListTransactions([...listTransactions, transaction]);
  }

  function removeCard(cardName) {
    let newCards = listTransactions.filter(
      (elem) => elem.description !== cardName
    );
    setListTransactions(newCards);
  }

  return (
    <>
      <HomeHeader setIsHome={setIsHome} />
      <HomeBody
        setFilter={setFilter}
        listTransactions={filtredCards}
        addNewTransaction={addNewTransaction}
        removeCard={removeCard}
      />
    </>
  );
}

export default HomePage;
