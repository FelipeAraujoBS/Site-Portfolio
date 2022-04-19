import "./Thanks.css"

function Thanks(){
    return(
        <div className="thanksContainer">
           <div className="messageContainer">
                <h1>Mensagem enviada com sucesso!!</h1>

                <a className="a" href="/Contact">Retornar</a>
           </div>
        </div>
    )
}

export default Thanks;