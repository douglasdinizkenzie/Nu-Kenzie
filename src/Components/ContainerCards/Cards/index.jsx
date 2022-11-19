import trash from "../../../imgs/trash.svg";
import "../Cards/index.css";

function Cards({ elem, removeCard }) {
  return (
    <li className="li-cards">
      <div className="method"></div>
      <div>
        <div>
          <h3>{elem.description}</h3>
        </div>
        <div className="trash-div">
          <div>
            <p className="value">R$ {elem.value}</p>
          </div>
          <div>
            <img
              className="trash"
              onClick={() => removeCard(elem.description)}
              src={trash}
              alt=""
            />
          </div>
        </div>
      </div>
      <p className="type-li">{elem.type}</p>
    </li>
  );
}

export default Cards;
