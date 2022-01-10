import "./Navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <div>Spacestagram</div>
            </div>
            <div className="navbar__left">
                <div className="navbar__item">Spacefeed</div>
                <div className="navbar__item">Profile</div>
            </div>
        </div>
    )
}

export default Navbar
