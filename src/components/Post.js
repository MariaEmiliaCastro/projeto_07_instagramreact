import React, { useState } from 'react';


export default function Post () {

    const [liked, setLiked] = useState(true);
    const [color, setColor] = useState("");
    const [outline, setOutline] = useState('-outline');
    const postProps = [{account: 'meowed', postImg: 'gato-telefone', curtidas: 'respondeai', numberOfLikes: "100.009"}, {account: 'barked', postImg: 'dog', curtidas: 'adorable_animals', numberOfLikes: "1.000.009"}];
    const acoes = ["chatbubble-outline", "paper-plane-outline"];

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

    const LikeButton = () => {
        liked === false ? setLiked(true) : setLiked(false);
        
        if(liked === true){
            setOutline("");
            setColor("#ED4956");
        }else{
            setOutline("-outline");
            setColor("");
        }
    }

    const SinglePost = (props) => {
        return (
            <div className="post">
                <Top account={props.account} />
                <Content postImg={props.postImg} />
                <div class="fundo">
                    <div class="acoes">                       
                        <div>
                            <ion-icon name={"heart" + outline} style={{color:color}} onClick={LikeButton}></ion-icon>
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