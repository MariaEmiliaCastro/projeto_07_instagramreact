export default function Sidebar (){

    const accounts = ["bad.vibes.memes", "chibirdart", "razoesparaacreditar", "adorable_animals", "smallcutecats"];
    const links =["Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma"]

    const FirstSugestion = (props) => {
        return (
            <div className="usuario">
                <img src={"assets/img/" + props.account + ".svg"} />
                <div class="texto">
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
                        <div className="razao">Segue você</div>
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
                {accounts.map(account => <Sugestion account={account}/>)}
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