import { Routes, Route, useNavigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from "./pages/Login";
import Register from './pages/Register';



function App() {
  return (
    
  
    <div className="w-full flex justify-center items-center min-h-screen">
        <Routes>
          <Route exact path='/' element={<Dashboard/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
        </Routes>
    </div>
  );
}

export default App;
