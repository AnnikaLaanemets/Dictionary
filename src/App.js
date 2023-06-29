import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Words meanings and definitions</h1>
        <main>
          <Dictionary />
        </main>
        <footer>
          Open&nbsp;
          <a href="https://github.com/AnnikaLaanemets/Dictionary">source</a>
          &nbsp;code by Annika Laanemets
        </footer>
      </div>
    </div>
  );
}

export default App;
