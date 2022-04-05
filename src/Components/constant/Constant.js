import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import "./components.css"
import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import Projects from "../pages/Projects/Projects"
import Contact from "../pages/Contact/Contact"

function Constant(){
    return (
    <div className='body'>
      <Router>
            <div className="animation-area">
                    <div className="hero">
                        <nav className="nav-hero">
                                <h2 className="logo">Felipe <span className="span">Aráujo</span></h2>
                                <ul>
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="/About">Sobre mim</Link></li>
                                <li><Link to="/Projects">Projetos</Link></li>
                                <li><Link to="/Contact">Contato</Link></li>
                                </ul>
                            </nav>
                    </div>
                    <div className="box-index">
                            <ul className="box-area">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                    </div>
                </div>
          <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/About">
                <About/>
            </Route>
            <Route path="/Contact">
                <Contact/>
            </Route>
            <Route path="/Projects">
                <Projects/>
            </Route>
        </Switch>
      </Router>
    </div>
    );
}

export default Constant;