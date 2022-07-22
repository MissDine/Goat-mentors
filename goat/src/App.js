import "./App.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom" ;
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from "./components/About"
import Services from "./components/Services"
import Header from "./components/Header"

// npx json-server --watch data/db.json --port 8000-to use the json server
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <hr></hr>
      <Routes>
      <Route exact path = "/" component={Home}></Route>
      <Route exact path = "/header" component={Header}></Route>
      <Route exact path = "/about" component={About}></Route>
      <Route exact path = "/services" component={Services}></Route>
      </Routes>
      <About/>
      <Services/>
    </div>
    </Router>
  );
}

export default App;