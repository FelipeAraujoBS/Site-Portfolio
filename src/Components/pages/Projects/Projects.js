import React, { useState } from "react"
import "./Projects.css"
import MoveT1 from "../../images/MoveT1.jpeg"
import MoveT2 from "../../images/MoveT2.jpeg"
import MoveT3 from "../../images/MoveT3.jpeg"
import Flappy1 from "../../images/Flappy1.jpeg"
import Flappy2 from "../../images/Flappy2.jpeg"
import Flappy3 from "../../images/Flappy3.jpeg"
import Bounce1 from "../../images/Bounce1.jpeg"
import Bounce2 from "../../images/Bounce2.jpeg"
import Bounce3 from "../../images/Bounce3.jpeg"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Projects(){
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + (window.innerWidth)
        if(x > 0){
            x = 0;
        }
        setScrollX(x);
    }
    const handleRightArrow = () => {
        let x = scrollX - (window.innerWidth);
        let listW = (window.innerWidth * 4) + (window.innerWidth / 2)
        if ((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) -10
        }
        setScrollX(x);
    }

    return(
        <div class="mainProjects">
            <div className="ProjectRow">
            <div className="ProjectRow--listarea">
                <div className="ProjectRow--left" onClick={handleLeftArrow}>
                    <NavigateBeforeIcon className="Arrow--left" style={{fontSize: 80}}/>
                </div>
                <div className="ProjectRow--right" onClick={handleRightArrow}>
                    <NavigateNextIcon className="Arrow--right" style={{fontSize: 80}}/>
                </div>
                
                <div className="ProjectRow--list" style={{
                    marginLeft: scrollX,
                    width: (window.innerWidth * 4) + (window.innerWidth / 2)
                }}>
                    <div className="ProjectRow--item">
                        <div>
                            <a href="https://github.com/FelipeAraujoBS/MoveT--NetflixClone/tree/master" 
                            target="__blank"><img src={MoveT1} alt="praia"/></a>
                            <p>MoveT</p>
                        </div>
                        <div>
                            <a href="https://github.com/FelipeAraujoBS/MoveT--NetflixClone/tree/master" 
                            target="__blank"><img src={MoveT2} alt="praia"/></a>
                            <p>MoveT</p>
                        </div>
                        <div>
                            <a href="https://github.com/FelipeAraujoBS/MoveT--NetflixClone/tree/master" 
                            target="__blank"><img src={MoveT3} alt="praia"/></a>
                            <p>MoveT</p>
                        </div>
                        <div>
                            <a href="https://github.com/FelipeAraujoBS/FlappyBirdClone/tree/master"
                            target="__blank"><img src={Flappy1} alt="praia"/></a>
                            <p>FlappyBird</p>
                        </div>
                        <div>
                            <a href="https://github.com/FelipeAraujoBS/FlappyBirdClone/tree/master"
                            target="__blank"><img src={Flappy2} alt="praia"/></a>
                            <p>FlappyBird</p>
                        </div>
                        <div>
                            <a href="https://github.com/FelipeAraujoBS/FlappyBirdClone/tree/master"
                            target="__blank"><img src={Flappy3} alt="praia"/></a>
                            <p>FlappyBird</p>
                        </div>
                        <div>
                            <a href="https://github.com/FelipeAraujoBS/Bounce-Balls/tree/master" 
                            target="__blank"><img src={Bounce1} alt="praia"/></a>
                            <p>Bounce-Balls</p>
                        </div>
                        <div>
                            <a href="https://github.com/FelipeAraujoBS/Bounce-Balls/tree/master" 
                            target="__blank"><img src={Bounce2} alt="praia"/></a>
                            <p>Bounce-Balls</p>
                        </div>
                        <div>
                            <a href="https://github.com/FelipeAraujoBS/Bounce-Balls/tree/master" 
                            target="__blank"><img src={Bounce3} alt="praia"/></a>
                            <p>Bounce-Balls</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Projects;