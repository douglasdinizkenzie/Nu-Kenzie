import Form from "./Form";
import Total from "./Total";
import "../ContainerForm/index.css";

function ContainerForm({ addNewTransaction, listTransactions }) {
  return (
    <div className="container-form">
      <Form addNewTransaction={addNewTransaction} />
      <Total listTransactions={listTransactions} />
    </div>
  );
}

export default ContainerForm;
