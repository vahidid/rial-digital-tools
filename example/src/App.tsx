import './App.css';
import { example } from 'rial-digital-tools';
const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <button
        type="button"
        onClick={() => {
          example();
        }}
      >
        Test
      </button>
    </div>
  );
};

export default App;
