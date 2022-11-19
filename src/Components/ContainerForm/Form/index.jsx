import React, { useState } from "react";
import "../Form/index.css";

function Form({ addNewTransaction }) {
  const [dataForm, setDataForm] = useState({
    description: "",
    type: "Entrada",
    value: "",
  });

  function submitForm(event) {
    event.preventDefault();
    addNewTransaction(dataForm);
    setDataForm({
      description: "",
      type: "Entrada",
      value: "",
    });
  }

  return (
    <form className="form-add-card" onSubmit={submitForm}>
      <label htmlFor="">Descrição</label>
      <input
        required
        type="text"
        value={dataForm.description}
        onChange={(event) =>
          setDataForm({ ...dataForm, description: event.target.value })
        }
        placeholder="Digite aqui sua descrição"
      />
      <p>Ex: Compra de roupas</p>
      <div>
        <div className="value">
          <label htmlFor="">Valor</label>
          <input
            required
            type="number"
            value={dataForm.value}
            onChange={(event) =>
              setDataForm({ ...dataForm, value: Number(event.target.value) })
            }
          />
        </div>
        <div className="type-value">
          <label htmlFor="">Tipo de valor</label>
          <select
            defaultValue={dataForm.value}
            required
            onChange={(event) =>
              setDataForm({ ...dataForm, type: event.target.value })
            }
          >
            <option key={"Entrada"} value="Entrada">
              Entrada
            </option>
            <option key={"Saída"} value="Saída">
              Saida
            </option>
          </select>
        </div>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
}

export default Form;
