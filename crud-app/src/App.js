import logo from './logo.svg';
import './App.css';
import Home from './views/Home'
import { Routes, Route, Link, useLocation } from "react-router-dom"
function App() {
  return (
    <div className="App h-screen relative flex">
      <div className='w-full flex-1 mx-2'>
        <Routes>
          <Route
          path='/'
          element= {<Home></Home>}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
