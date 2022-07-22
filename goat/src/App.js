import "./App.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom" ;
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from "./components/About"


// npx json-server --watch data/db.json --port 8000-to use the json server
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <hr></hr>
      <Routes>
      <Route exact path = "/" component={Home}></Route>
      <Route exact path = "/about" component={About}></Route>
      </Routes>
      <About/>
    </div>
    </Router>
  );
}

export default App;