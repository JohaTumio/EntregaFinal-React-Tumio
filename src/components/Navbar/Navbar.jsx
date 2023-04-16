import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import { NavLink, Link } from 'react-router-dom';
//import NavbarLink from './NavbarLink/NavbarLink';

const Navbar = () => {
    return (
        <header className='position-sticky top-0 headerNav'>
            <nav className="navbar navbar-expand-lg bg-nav p-1">
                <div className="container-fluid">
                    <div className='d-flex flex-column align-items-center'>
                        <Link to={"/"} className="navbar-brand p-0">
                            <img src="https://cdn-icons-png.flaticon.com/512/2121/2121917.png" alt="Logo" width={40} height={30} className="d-inline-block" />
                        </Link>

                        <h1 className="navbar-brand text-white mb-0 p-0">ElectroSale</h1>
                    </div>
                    <CartWidget />
                    <button className="navbar-toggler bg-white fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center p-1" id="navbarNav">
                        <ul className="navbar-nav fs-5 lista_nav">
{/*                             <li className="nav-item mx-5">
                                <a className="nav-link active text-center text-white fw-semibold fst-italic" aria-current="page" href=" "> Notebooks </a>
                            </li> */}
                            <li className="nav-item mx-5">
                                <NavLink className="nav-link active text-center text-white fw-semibold fst-italic" aria-current="page" to={`/categoria/1`}> Notebooks </NavLink>
                            </li>
                            <li className="nav-item mx-5">
                                <NavLink className="nav-link active text-center text-white fw-semibold fst-italic" aria-current="page" to={`/categoria/2`}> Tablets </NavLink>
                            </li>
                            <li className="nav-item mx-5">
                                <NavLink className="nav-link active text-center text-white fw-semibold fst-italic" aria-current="page" to={`/categoria/3`}> Celulares </NavLink>
                            </li>
                            <li className="nav-item mx-5">
                                <NavLink className="nav-link active text-center text-white fw-semibold fst-italic" aria-current="page" to={`/categoria/4`}> Pc Escritorio </NavLink>
                            </li>
                            <li className="nav-item mx-5">
                                <NavLink className="nav-link active text-center text-white fw-semibold fst-italic" aria-current="page" to={`/categoria/5`}> Monitores </NavLink>
                            </li>
                            
{/*                             <li className="nav-item mx-5">
                                <a className="nav-link active text-center text-white fw-semibold fst-italic" aria-current="page" href=" "> Tablets </a>
                            </li> */}
{/*                             <li className="nav-item mx-5">
                                <a className="nav-link active text-center text-white fw-semibold fst-italic" aria-current="page" href=" "> Celulares </a>
                            </li> */}
{/*                             <li className="nav-item mx-5">
                                <a className="nav-link active text-center text-white fw-semibold fst-italic" aria-current="page" href=" "> Pc Escritorio </a>
                            </li> */}
{/*                             <li className="nav-item mx-5">
                                <a className="nav-link active text-center text-white fw-semibold fst-italic" aria-current="page" href=" "> Monitores </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
