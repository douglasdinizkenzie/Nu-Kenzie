import "./index.css";
import InitialImage from "../../imgs/illustration.svg";

function MainScreen({ setIsHome }) {
  return (
    <div className="main-container">
      <div className="container-text">
        <h2>
          <span>Nu</span> Kenzie
        </h2>
        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
        <button onClick={() => setIsHome(true)}>Iniciar</button>
      </div>

      <img src={InitialImage} alt="" />
    </div>
  );
}
export default MainScreen;
