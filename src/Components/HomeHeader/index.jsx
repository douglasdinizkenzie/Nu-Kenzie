import "../HomeHeader/index.css";

function HomeHeader({ setIsHome }) {
  return (
    <div className="divHeader">
      <header>
        <h2>
          <span>Nu</span> Kenzie
        </h2>
        <button onClick={() => setIsHome(false)} className="exit-button">
          Inicio
        </button>
      </header>
    </div>
  );
}

export default HomeHeader;
