import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import "./components.css"
import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import Projects from "../pages/Projects/Projects"
import Contact from "../pages/Contact/Contact"
import Thanks from '../pages/Thanks/Thanks'
function Constant() {

    function toggleMenu() {
        const nav = document.querySelector(".nav-header")

        nav.classList.toggle("active")
    }

    return (
        <div className='body'>
            <Router>
                <div className="animation-area">
                    <div className="header">
                        <nav className="nav-header">
                            <h2 className="logo">Felipe <span className="span">Araújo</span></h2>

                            <div className="btn-mobile" onClick={toggleMenu}>
                                <p>Menu</p>
                                <div className="btn-hamburger"></div>
                            </div>
                            <div className="backdrop"/>

                            <ul className="ul" onClick={toggleMenu}>
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="/About">Sobre mim</Link></li>
                                <li><Link to="/Projects">Projetos</Link></li>
                                <li><Link to="/Contact">Contato</Link></li>
                                <li className="li"><Link to="/Thanks">Thanks</Link></li>
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
                        <Home />
                    </Route>
                    <Route path="/About">
                        <About />
                    </Route>
                    <Route path="/Contact">
                        <Contact />
                    </Route>
                    <Route path="/Projects">
                        <Projects />
                    </Route>
                    <Route path="/Thanks">
                        <Thanks />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Constant;