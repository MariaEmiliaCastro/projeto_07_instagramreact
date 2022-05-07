export default function TopBar() {

    const icones = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];

    function Logo() {
        return (
            <div className="logo">
                <ion-icon name="logo-instagram"></ion-icon>
                <div className="separador"></div>
                <img src="assets/img/logo.png" />
            </div>
        )
    }

    const DivIcon = (props) => {
        return (
            <div className={props.class}>
                <ion-icon name={props.icon}></ion-icon>
            </div>
        )
    }

    return (
        <div className="navbar">
            <div className="container">
                <Logo />

                <DivIcon class="logo-mobile" icon="logo-instagram" />

                <div className="instagram-mobile">
                    <img src="assets/img/logo.png" />
                </div>
        
                <div className="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>
        
                <div className="icones">
                    {icones.map(icon => <ion-icon name={icon}></ion-icon>)}
                </div>

                <DivIcon class="icones-mobile" icon="paper-plane-outline" />
            </div>
        </div>
    )
}