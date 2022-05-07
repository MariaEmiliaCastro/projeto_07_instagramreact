export default function Post () {

    const postProps = [{account: 'meowed', postImg: 'gato-telefone', curtidas: 'respondeai', numberOfLikes: "100.009"}, {account: 'barked', postImg: 'dog', curtidas: 'adorable_animals', numberOfLikes: "1.000.009"}];
    const acoes = ["heart-outline", "chatbubble-outline", "paper-plane-outline"];

    const Top = (props) => {
        return (
            <div className="topo">
                <div className="usuario">
                    <img src={"assets/img/"+ props.account +".svg"} />
                    {props.account}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>  
        )
    }

    const Content = (props) => {
        return(
            <div className="conteudo">
                <img src={"assets/img/" + props.postImg + ".svg"} />
            </div>
        )
    }

    const Liked = (props) => {
        return (
            <div className="curtidas">
                <img src={"assets/img/" + props.curtida + ".svg"} />
                <div className="texto">
                    Curtido por <strong>{props.curtida}</strong> e <strong>outras {props.numLikes} pessoas</strong>
                </div>
            </div>
        )
    }

    const SinglePost = (props) => {
        return (
            <div className="post">
                <Top account={props.account} />
                <Content postImg={props.postImg} />
                <div class="fundo">
                    <div class="acoes">
                    <div>
                        {acoes.map(acao => <ion-icon name={acao}></ion-icon>)}
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                    </div>
                    <Liked curtida={props.curtida} numLikes={props.numLikes} />
                </div>
            </div>
        )
    }

    return (
        <div>
            {postProps.map(({account, postImg, curtidas, numberOfLikes}) => <SinglePost account={account} postImg={postImg} curtida={curtidas} numLikes={numberOfLikes}/>)}
        </div>
    )
}