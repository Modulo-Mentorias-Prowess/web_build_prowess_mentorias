import { Routes, Route, useNavigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from "./pages/Login";
import Register from './pages/Register';
import Products from './pages/Products';
import Contents from './pages/Contents';
import Mentorships from './pages/Mentorships';
import AddEntrepreneur from './pages/Entrepreneurs/AddEntrepreneur';
import Entrepreneurs from './pages/Entrepreneurs/Entrepreneurs';
import Managers from './pages/Managers/Managers';
import AddManager from './pages/Managers/AddManager';




function App() {
  return (
    
  
        <Routes>
          <Route exact path='/' element={<Dashboard/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/products' element={<Products/>}/>
          <Route exact path='/managers' element={<Managers/>}/>
          <Route exact path='/managers/add' element={<AddManager/>}/>
          <Route exact path='/mentorships' element={<Mentorships/>}/>
          <Route exact path='/contents' element={<Contents/>}/>
          <Route exact path='/entrepreneurs' element={<Entrepreneurs/>}/>
          <Route exact path='/entrepreneurs/add' element={<AddEntrepreneur/>}/>
        </Routes>
  );
}

export default App;
