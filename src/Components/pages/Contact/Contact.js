import './Contact.css'
import linkedin from "../../images/linkedin.png"
import github from "../../images/github.png"
import instagram from "../../images/instagram.png"
import resume from "../../images/Resume.png"
import fResume from "./fResume.pdf"
import whatsapp from "../../images/whatsapp.svg.png"

function Contact() {

    return (
        <div className="main">
            <div className="Contact">
               <div className="contactContainer">
                    <div>
                        <h2 className="h2"> Me Contate</h2>
                        <p className="p">
                        Fala Valiriano? Não? <br />
                        Tudo bem, pois falo Português e Inglês também.
                        </p>
                    </div>
                    <div>
                        <ul>
                            <div className='upperDiv'>
                                <li><a href="https://www.linkedin.com/in/felipe-ar%C3%A1ujo-b87386231/" target="_blank" rel="noreferrer"><img src={linkedin} alt="teste"/>Linkedin</a></li>
                                <li><a href="https://github.com/FelipeAraujoBS" target="_blank" rel="noreferrer"><img src={github} alt="github"/>Github</a></li>
                            </div>
                            <div className="underDiv">
                                <li><a href="https://wa.me/557192390048" target="_blank" rel="noreferrer"><img src={whatsapp} alt="whatsapp"/>Wathsapp</a></li>
                                <li><a href="https://www.instagram.com/felipeabsdev/" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram"/>Instagram</a></li>
                            </div>
                        </ul>
                    </div>
               </div>

                <div className="cContainer">
                    <h3>Baixe meu Curriculo</h3>
                    <p className="p">Se sentindo old-school? <br />basta um click para baixar meu currículo. </p>

                    <div className="hoverble">
                        <img src={resume} alt="resume" /> 
                        <a href={fResume} target="_blank" rel="noreferrer"><button className="button">Baixar</button></a>
                    </div>
                </div>
            </div>

            <div className="emailContainer">
                <h2>Me mande um Email</h2>
                <form className="form" action="https://formsubmit.co/2865255911cb22920d0a57571733c0a7 " method="POST">
                <input type="hidden" name="_next" value="https://felipeadevweb.web.app/Thanks"/>
                    <input className="input" type="hidden" name="_captcha" value="false" />
                    <div className="inputContainer">
                        <input className="input" type="text" name="Name" placeholder='Nome' required /> <br />
                        <input className="input" type="email" name="Email" placeholder='Email' required /> <br />
                    </div>
                    <div className="textareaContainer">
                        <textarea className="textarea" name="Message" placeholder='Mensagem' required /> <br />
                        <button className="button" type='submit'>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;