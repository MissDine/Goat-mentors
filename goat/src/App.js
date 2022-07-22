import "./index.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom" ;
import Navbar from './components/Navbar';
import Home from "./components/Home";

// npx json-server --watch data/db.json --port 8000-to use the json server
function App() {
  return (
    <Router><div className="App">
    <Navbar/>
    <Routes>
    <Route exact path = "/" component={Home}>
    </Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App;