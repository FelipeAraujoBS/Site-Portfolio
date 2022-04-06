import "./Home.css"
import praia from "../../images/praia.jpg"
import foto from "../../images/fotoHome.png"

function Home(){
    return (
       <div>
        <div className="mainHome">
            <div className="imgHome">
                <img className="img" src={foto} alt="praia"/>
            </div>
            <div className="textHome">
                <h1>Felipe <span className="span">Araújo</span></h1>
                <h2>Web developer</h2>
            </div>
        </div>
       </div>
    )
}

export default Home;