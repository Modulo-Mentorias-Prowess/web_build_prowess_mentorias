import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login";



function App() {
  return (
    

    <div className="w-full flex justify-center items-center min-h-screen">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
