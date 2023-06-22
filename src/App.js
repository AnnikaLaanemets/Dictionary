import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
        <main>
          <Dictionary />
        </main>
        <footer>
          <a href="https://github.com/AnnikaLaanemets/Dictionary">
            https://github.com/AnnikaLaanemets/Dictionary
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
