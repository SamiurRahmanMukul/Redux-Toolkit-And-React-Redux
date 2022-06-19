import "./App.css";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Redux & React-Redux</h1>

        {/* Counter Component */}
        <Counter />
      </header>
    </div>
  );
}

export default App;
