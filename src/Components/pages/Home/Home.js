import "./Home.css"
import foto from "../../images/fotoHome.png"


function Home() {

    return (
        <div>
            <div className="mainHome">
                <div className="imgHome">
                    <img className="img" src={foto} alt="foto" />
                </div>
                <div className="textHome">
                    <h1 className="name">Felipe <span className="span">Araújo</span></h1>
                    <h2 className="job">Web developer</h2>
                </div>
              
            </div>
        </div>
    )
}

export default Home;