import './App.css';
import { Routes, Route } from "react-router-dom";
import Greeting from './components/greeting';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Greetings App!</h1>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;
