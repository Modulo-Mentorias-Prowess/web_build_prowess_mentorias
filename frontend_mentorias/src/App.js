import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login";
import Register from './pages/Register';



function App() {
  return (
    

    <div className="w-full flex justify-center items-center min-h-screen">
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
        </Routes>
    </div>
  );
}

export default App;
