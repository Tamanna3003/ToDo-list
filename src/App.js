import './App.css';
import Todo from './Components/Todo';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Todo />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
