// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <div className=''>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <Navbar />
                <Register/>
              </>
            }
          ></Route>
          <Route
            exact
            path='/signup'
            element={
              <>
                <Navbar />
                <Register />
              </>
            }
          ></Route>
          <Route
            exact
            path='/login'
            element={
              <>
                <Navbar />
                <Login/>
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
