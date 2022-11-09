import { useContext } from "react";
import AuthContext from "../Services/Contents/AuthProvider";
import { Link } from "react-router-dom";
import logo from '../image/logo.png'

const NavBar = props => {
    const { auth , setAuth} = useContext(AuthContext);
    console.log(auth)
    return (
        <nav className="container navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn justify-between" data-wow-delay="0.1s">
            <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <h1 className="m-0 text-primary"><img src={logo} /></h1>
            </Link>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            {!auth.accessToken ? <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <Link to="/" className="nav-item nav-link active">Accueil</Link>
                    <Link to="/apropos" className="nav-item nav-link">A Propos</Link>
                    <Link to="/contact" className="nav-item nav-link">Contact</Link>
                    <Link to="/connexion" className="nav-item nav-link">Connexion</Link>
                </div>
                <Link to="#" className="btn btn-primary rounded-0 py-4 px-lg-5">Rendez-vous<i className="fa fa-arrow-right ms-3"></i></Link>
            </div>
            :<Link to="#" className="rounded-full items-center justify-center flex h-11 text-white w-36 bg-primary">Deconnexion</Link>}
        </nav>
    )
}

export default NavBar;