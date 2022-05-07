export default function Post () {

    const postProps = [{account: 'meowed', postImg: 'gato-telefone', curtidas: 'respondeai'}, {account: 'barked', postImg: 'dog', curtidas: 'adorable_animals'}];
    const acoes = ["heart-outline", "chatbubble-outline", "paper-plane-outline"];

    const Topo = (props) => {
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

    const Conteudo = (props) => {
        return(
            <div className="conteudo">
                <img src={"assets/img/" + props.postImg + ".svg"} />
            </div>
        )
    }

    const Curtidas = (props) => {
        return (
            <div class="curtidas">
                <img src={"assets/img/" + props.curtida + ".svg"} />
                <div class="texto">
                    Curtido por <strong>{props.curtida}</strong> e <strong>outras 101.523 pessoas</strong>
                </div>
            </div>
        )
    }

    const SinglePost = (props) => {
        return (
            <div className="post">
                <Topo account={props.account} />
                <Conteudo postImg={props.postImg} />
                <div class="fundo">
                    <div class="acoes">
                    <div>
                        {acoes.map(acao => <ion-icon name={acao}></ion-icon>)}
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                    </div>
                    <Curtidas curtida={props.curtida} />
                </div>
            </div>
        )
    }

    return (
        <div>
            {postProps.map(({account, postImg, curtidas}) => <SinglePost account={account} postImg={postImg} curtida={curtidas}/>)}
        </div>
    )
}