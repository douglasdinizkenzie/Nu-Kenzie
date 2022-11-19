import "../Total/index.css";

function Total({ listTransactions }) {
  let totalValue = listTransactions.reduce((previous, current) => {
    return current.value + previous;
  }, 0);

  return (
    <div className="container-total">
      <div>
        <h4>Valor Total:</h4>
        <h4 className="total-value"> $ {totalValue}</h4>
      </div>
      <div>
        <p className="p-total">O valor se refere ao saldo</p>
      </div>
    </div>
  );
}

export default Total;
