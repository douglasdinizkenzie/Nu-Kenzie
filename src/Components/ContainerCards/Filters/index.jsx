import "../Filters/index.css";

function Filters({ setFilter }) {
  return (
    <div className="container-filters">
      <h3>Resumo financeiro</h3>
      <div>
        <button onClick={() => setFilter("todos")}>Todos</button>
        <button onClick={() => setFilter("Entrada")}>Entradas</button>
        <button onClick={() => setFilter("Saída")}>Despesas</button>
      </div>
    </div>
  );
}

export default Filters;
