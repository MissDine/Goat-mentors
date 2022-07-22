import "./index.css"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom" ;
import Navbar from './components/Navbar';
import Home from "./Home"

// npx json-server --watch data/db.json --port 8000-to use the json server
function App() {
  return (
    <Router><div className="App">
    <Navbar/>
    <Switch>
    <Route exact path = "/">
        <Home/>
    </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;