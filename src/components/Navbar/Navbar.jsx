import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
        const [categoria, setCategoria] = useState("");
    
        useEffect( () => {
            document.title = `Categoría ${categoria}`;
        }, [categoria])
    
        const handleClick = (categoria) => {
            setCategoria(categoria);
        }
    return (
        <header className='position-sticky top-0 headerNav'>
            <nav className="navbar navbar-expand-lg bg-nav p-1">
                <div className="container-fluid">
                    <div className='d-flex flex-column align-items-center'>
                        <Link onClick={ () => handleClick('Inicio')} to={"/"} className="navbar-brand p-0">
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
                            <li className="nav-item mx-5">
                                <NavLink onClick={ () => handleClick('Notebooks')} className="nav-link active text-center text-white fw-semibold fst-italic" aria-current="page" to={`/categoria/Notebook`}> Notebooks </NavLink>
                            </li>
                            <li className="nav-item mx-5">
                                <NavLink onClick={ () => handleClick('Tablets')} className="nav-link active text-center text-white fw-semibold fst-italic" aria-current="page" to={`/categoria/Tablets`}> Tablets </NavLink>
                            </li>
                            <li className="nav-item mx-5">
                                <NavLink onClick={ () => handleClick('Celulares')} className="nav-link active text-center text-white fw-semibold fst-italic" aria-current="page" to={`/categoria/Celulares`}> Celulares </NavLink>
                            </li>
                            <li className="nav-item mx-5">
                                <NavLink onClick={ () => handleClick('Pc Escritorio')} className="nav-link active text-center text-white fw-semibold fst-italic" aria-current="page" to={`/categoria/PcEscritorio`}> Pc Escritorio </NavLink>
                            </li>
                            <li className="nav-item mx-5">
                                <NavLink onClick={ () => handleClick('Monitores')} className="nav-link active text-center text-white fw-semibold fst-italic" aria-current="page" to={`/categoria/Monitores`}> Monitores </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
