import "./App.css";
import { Counter } from "./components/Counter";
import { Todos } from "./components/Todos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Redux & React-Redux</h1>

        {/* Counter Component */}
        <Counter />

        {/* Todos Component */}
        <Todos />
      </header>
    </div>
  );
}

export default App;
