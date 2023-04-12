import './NavbarLink.css'

const NavbarLink = (props) => {
    return (
<div className="collapse navbar-collapse justify-content-center p-1" id="navbarNav">
                        <ul className="navbar-nav fs-5 lista_nav">
                            <li className="nav-item">
                                <a className="nav-link active text-center text-white fw-semibold fst-italic" aria-current="page" href=" "> {props.linkNav} </a>
                            </li>
                        </ul>
                    </div>
    )
}

export default NavbarLink
