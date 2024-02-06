import Logo from "../assets/ForgeRp.svg"

function Navbar (page) {
    return(
        <div className={`Navbar-${page}`}>
            <div className="Logo">
                <img src={Logo} alt="logo"/>
            </div>
        </div>
    )
}

export default Navbar