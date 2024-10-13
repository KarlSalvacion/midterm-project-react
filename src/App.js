import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './Components/mainMenu';
import Dashboard from './Components/dashboard';
import AddItem from './Components/addItem';
import DisplayItems from './Components/displayItems';
import SortItems from './Components/sortItem';
import SearchItem from './Components/searchItem';
import UpdateItem from './Components/updateItem';
import RemoveItem from './Components/removeItem';

function App() {
  return (
    <Router>
      <div className="App">
        <MainMenu>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/add-item" element={<AddItem/>} />
            <Route path="/display-items" element={<DisplayItems/>}/>
            <Route path="/sort-items" element={<SortItems/>}/>
            <Route path="/search-item" element={<SearchItem/>}/>
            <Route path="/update-item" element={<UpdateItem/>}/>
            <Route path="/remove-item" element={<RemoveItem/>}/>
          </Routes>
        </MainMenu>   
      </div>
    </Router>
    
  );
}

export default App;
