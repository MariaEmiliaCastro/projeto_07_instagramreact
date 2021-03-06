export default function Sidebar (){

    const accounts = [{username: "bad.vibes.memes", reason:"Segue você"}, {username: "chibirdart", reason:"Segue você"}, {username: "razoesparaacreditar", reason:"Novo no Instagram"}, {username: "adorable_animals", reason:"Segue você"}, {username: "smallcutecats", reason:"Segue você"}];
    const links =["Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma"]

    const FirstSugestion = (props) => {
        return (
            <div className="usuario">
                <img src={"assets/img/" + props.account + ".svg"} />
                <div className="texto">
                    <strong>{props.account}</strong>
                    {props.userName}
                </div>
            </div>
        )
    }

    const Sugestion = (props) => {
        return (
            <div className="sugestao">
                <div className="usuario">
                    <img src={"assets/img/" + props.account + ".svg"} />
                    <div className="texto">
                        <div className="nome">{props.account}</div>
                        <div className="razao">{props.reason}</div>
                    </div>
                </div>
                <div className="seguir">Seguir</div>
            </div>
        )
    }
    return (
        <div className="sidebar">
            <FirstSugestion account="catanacomics" userName="Catana" />
            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {accounts.map(({username, reason}) => <Sugestion account={username} reason={reason}/>)}
            </div>
            <div className="links">
                {links}
            </div>
            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>     
        </div>
    )
}