import "./Thanks.css"

function Thanks(){
    return(
        <div className="thanksContainer">
            <div className="writteContainer">
                <h1>Mensagem enviada com sucesso!!</h1>
            </div>
            <div className="btnContainer">
               <a className="a" href="/Contact">Retornar</a>
            </div>
        </div>
    )
}

export default Thanks;