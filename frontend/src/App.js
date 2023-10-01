import './App.css';
import Home from './components/Home';
import Edit from './components/Edit';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/edit" element={ <Edit/> }/>
        </Routes>
    </BrowserRouter>

  );
}

export default App;
