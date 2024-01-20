import './App.css';
import { Counter } from './components/counter/Counter';

function App() {
  return (
    <div>
      <Counter>
        {(count, increment, decrement) => (
          <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
          </div>
        )}
      </Counter>
    </div>
  );
}

export default App;
