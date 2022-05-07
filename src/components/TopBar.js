export default function TopBar() {

    function Logo() {
        return (
            <div className="logo">
                <ion-icon name="logo-instagram"></ion-icon>
                <div className="separador"></div>
                <img src="assets/img/logo.png" />
            </div>
        )
    }

    const icones = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];

    return (
        <div className="navbar">
            <div className="container">
                <Logo />

                <div className="logo-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>

                <div className="instagram-mobile">
                    <img src="assets/img/logo.png" />
                </div>
        
                <div className="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>
        
                <div className="icones">
                    {icones.map(icon => <ion-icon name={icon}></ion-icon>)}
                </div>

                <div className="icones-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}