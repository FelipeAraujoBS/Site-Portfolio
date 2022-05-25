import "./About.css"
import jsCode from "../../images/jscode.jpeg"


function About() {
    return (
        <div className="mainAbout">
            <div className="tableContainer">
                <div className="tableOne">
                <h1 className="h1Table1">Competências</h1>
                    <table className="table1">
                        <tr>
                            <td className="tdRed"><b>Proatividade</b></td>
                            <td className="tdGray1">Sempre em busca de mudança, faço tudo para aperfeiçoar meu trabalho</td>
                        </tr>
                        <tr>
                            <td className="tdRed"><b>Linguagens</b></td>
                            <td className="tdGray1">Inglês Avançado, Espanhol Intermediario</td>
                        </tr>
                        <tr>
                            <td className="tdRed"><b>Boa Comunicação</b></td>
                            <td className="tdGray1">Transmissão de informações de forma clara, objetiva e precisa</td>
                        </tr>
                        <tr>
                            <td className="tdRed"><b>Perfil Empreendedor</b></td>
                            <td className="tdGray1">Sempre atento para oportunidades e pronto para tomar iniciativa</td>
                        </tr>
                    </table>
                </div>
                <div className="tableTwo">
                <h1 className="h1Table2">Tecnologias</h1>
                    <table className="table2">
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
                    <img className="img" src={jsCode} alt="foto"/>
                </div>

                <div className="textContainer">
                <h1 className="h1-about">Sobre mim </h1>
                        <p>
                        Tenho 24 anos e sou de Salvador-BA.
                        Estudante de Eng. de Software, apaixonado por tecnologia, me encontrei programando em JavaScript. 
                        <br/>
                        Sou um Desenvolvedor Web com uma grande paixão por aprender.
                        Domino algumas das principais tecnologias do mercado, e estou ansioso para aprender cada dia mais.
                         <br/>
                        Posso ajudar o seu negócio desenvolvendo websites, tornando-o bem sucedido a longo prazo. <br/> <br/> Focado, atualmente, no <span className="span">desenvolvimento front-end</span>.
                        </p>
                </div>

            </div>
        </div>

    )
}

export default About;