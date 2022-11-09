import { Link } from "react-router-dom";

const Footer = props => {
    return (
        <div className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-md-6">
                        <h2 className="text-light mb-4">SANTE D'OR</h2>
                        <p className="mb-2">Santé d'or est une plateforme médicale qui permet une coordination entre vous et votre clinique ainsi que les docteurs. et assure également une suivie personnelle des patients à distance en sécurité.</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+229 534 453 44</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>contact@santedor.com</p>
                    </div>
                    <div className="col-md-6">
                        <h5 className="text-light mb-4 text-md-center">Autres</h5>
                        <Link className="btn btn-link text-md-center" href="">Accueil</Link>
                        <Link className="btn btn-link text-md-center" href="">A Propos</Link>
                        <Link className="btn btn-link text-md-center" href="">Contact</Link>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            &copy; Copyright <Link className="border-bottom" href="/">Santé d'or</Link>, Tout droit réservé
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;