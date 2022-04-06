import "./About.css"
import myFoto from "../../images/foto.jpeg"



function About() {
    return (
        <div className="mainAbout">
            <div className="tableContainer">
                <div class="tableOne">
                <h1 class="h1Table">Competências</h1>
                    <table className="table">
                        <tr>
                            <td className="tdRed"><b>Front End</b></td>
                            <td className="tdGray">JavaScript, React, CSS3, HTML5, Bootstrap</td>
                        </tr>
                        <tr>
                            <td className="tdRed"><b>Back End</b></td>
                            <td className="tdGray">NodeJS</td>
                        </tr>
                        <tr>
                            <td className="tdRed"><b>Data Storage</b></td>
                            <td className="tdGray">MongoDB, MySQL</td>
                        </tr>
                        <tr>
                            <td className="tdRed"><b>Tools</b></td>
                            <td className="tdGray">Git, Agile(Scrum)</td>
                        </tr>
                    </table>
                </div>
                <div class="tableTwo">
                <h1 class="h1Table">Tecnologias</h1>
                    <table className="table">
                        <tr>
                            <td className="tdRed"><b>Front End</b></td>
                            <td className="tdGray">JavaScript, React, CSS3, HTML5, Bootstrap</td>
                        </tr>
                        <tr>
                            <td className="tdRed"><b>Back End</b></td>
                            <td className="tdGray">NodeJS</td>
                        </tr>
                        <tr>
                            <td className="tdRed"><b>Data Storage</b></td>
                            <td className="tdGray">MongoDB, MySQL</td>
                        </tr>
                        <tr>
                            <td className="tdRed"><b>Tools</b></td>
                            <td className="tdGray">Git, Agile(Scrum)</td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <div className="aboutContainer">

                <div className="imgContainer">
                    <img className="img" src={myFoto} alt="foto"/>
                </div>

                <div className="textContainer">
                <h1 className="h1-about">Sobre mim </h1>
                    <p className="pContainer">
                        Tenho 24 anos e sou de Salvador-BA.
                        Estudante de Eng. de Software, apaixonado por tecnologia, me encontrei programando em
                        JavaScript. <br/>
                        Domino algumas das principais tecnologias do mercado, e estou ansioso para aprender
                        cada dia mais.
                    </p>  
                </div>

            </div>
        </div>

    )
}

export default About;