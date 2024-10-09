import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './Components/mainMenu';
import AddItem from './Components/addItem';
import Dashboard from './Components/dashboard';
function App() {
  return (
    <Router>
      <div className="App">
        <MainMenu>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/add-item" element={<AddItem/>} />
          </Routes>
        </MainMenu> 
              
      </div>
    </Router>
    
  );
}

export default App;
