import './Contact.css'
import linkedin from "../../images/linkedin.png"
import github from "../../images/github.png"
import instagram from "../../images/instagram.png"

function Contact(){
    return(
       <div class="main">
            <div className="header">
           
            </div>
            <div class="Contact">
                <div className="contactContainer">
                    <h2 className="h2">Me contate</h2>
                    <p className="p">
                    Fala Valiriano? Não? <br/>
                    Tudo bem, pois falo Português e Inglês também.
                    </p>

                    <ul>
                       <li><a href="https://www.linkedin.com/in/felipe-ar%C3%A1ujo-b87386231/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin"/> Linkedin</a></li>
                       <li><a href="https://github.com/FelipeAraujoBS" target="_blank" rel="noreferrer"><img src={github} alt="github"/> Github</a></li>
                       <li><a href="https://www.instagram.com/felipeabsdev/" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram"/> Instagram</a></li>
                    </ul>
                </div>
                <div className="emailContainer">
                    <h2>Me mande um Email</h2>
                    <form action="https://formsubmit.co/2865255911cb22920d0a57571733c0a7 " method="POST">
                    <input type="hidden" name="_next" value="http://localhost:3000/Thanks"/>
                    <input type="hidden" name="_captcha" value="false"/>
                        <div className="inputContainer">
                            <input type="text" name="Name" placeholder='Nome' required/> <br/>
                            <input type="email" name="Email" placeholder='Email' required/> <br/>
                        </div>
                        <div className="textareaContainer">
                            <textarea name="Message" placeholder='Messagem' required/> <br/>
                            <button type='submit'> Enviar </button>
                        </div>
                    </form>
                </div>
            </div>
       </div>
    );
}

export default Contact;