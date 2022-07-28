import "../App.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom" ;
import Navbar from './Navbar';
import Home from "./Home";
import About from "./About"
import Services from "./Services"
import Header from "./Header"
import Contact from "./Contact"
import Footer from "./Footer"
import Team from "./Team"

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
      <Route exact path = "/contact" component={Contact}></Route>
      <Route exact path = "/team" component={Team}></Route>
      </Routes>
      <Header/>
      <About/>
      <Services/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;