import presentation1 from '../image/presentation1.jpg';
import presentation2 from '../image/presentation2.jpg';
import presentation3 from '../image/presentation3.jpg';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Home = props => {
    return (
        <div>
            <div className="container-fluid header bg-primary p-0 mb-5">
                <div className="row g-0 items-center flex-column-reverse flex-lg-row">
                    <div className="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
                        <h1 className="display-4 text-white mb-5">Bonne santé et suivie médical</h1>
                        <div className="row g-4">
                            <div className="col-sm-4">
                                <div className="border-start border-light ps-4">
                                    <h2 className="text-white mb-1" data-toggle="counter-up">123</h2>
                                    <p className="text-light mb-0">Medecins</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="border-start border-light ps-4">
                                    <h2 className="text-white mb-1" data-toggle="counter-up">1234</h2>
                                    <p className="text-light mb-0">Services</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="border-start border-light ps-4">
                                    <h2 className="text-white mb-1" data-toggle="counter-up">12345</h2>
                                    <p className="text-light mb-0">Patients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn header-carousel" data-wow-delay="0.5s">
                        <OwlCarousel className="owl-theme" loop={true}
                            margin={10}
                            items={1}
                            dot={false}
                            dotsContainer={false}
                            autoplay={true}>
                            <div className="item position-relative">
                                <img className="img-fluid" src={presentation1} alt="" />
                                <div className="owl-carousel-text">
                                    <h1 className="display-1 text-white mb-0">Cardiology</h1>
                                </div>
                            </div>
                            <div className="item position-relative">
                                <img className="img-fluid" src={presentation2} alt="" />
                                <div className="owl-carousel-text">
                                    <h1 className="display-1 text-white mb-0">Neurology</h1>
                                </div>
                            </div>
                            <div className="item position-relative">
                                <img className="img-fluid" src={presentation3} alt="" />
                                <div className="owl-carousel-text">
                                    <h1 className="display-1 text-white mb-0">Pulmonary</h1>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>

            {/* About */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex flex-column">
                                <img className="img-fluid rounded w-75 align-self-end" src={presentation3} alt="" />
                                <img className="img-fluid rounded w-50 bg-white pt-3 pe-3" src={presentation1} alt="" style={{ marginTop: "-25%" }} />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <p className="d-inline-block border rounded-pill py-1 px-4">A Propos</p>
                            <h1 className="mb-4">Objectifs</h1>
                            <p>Nous assurons une connexion permanente et efficace entre les systèmes de santé et les médecins qui y travaillent avec les patients afin d'optimiser, d'accélérer et de permettre une poursuite adéquate de la prise en charge en tout temps et en tous lieux.</p>
                            <p><i className="fa fa-check-circle text-primary me-3"></i>Données médicales centralisé</p>
                            <p><i className="far fa-check-circle text-primary me-3"></i>Suivie du dossier d'un patient</p>
                            <p><i className="far fa-check-circle text-primary me-3"></i>Historique des interventions</p>
                            <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">En savoir plus</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                        <p className="d-inline-block border rounded-pill py-1 px-4">Services</p>
                        <h1>Nos Services</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item bg-light rounded p-5">
                                <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: 65, height: 65 }}>
                                    <i className="fa fa-heartbeat text-primary fs-4"></i>
                                </div>
                                <h4 className="mb-3">Cardiology</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item bg-light rounded p-5">
                                <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: 65, height: 65 }}>
                                    <i className="fa fa-x-ray text-primary fs-4"></i>
                                </div>
                                <h4 className="mb-3">Pulmonary</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item bg-light rounded p-5">
                                <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: 65, height: 65 }}>
                                    <i className="fa fa-brain text-primary fs-4"></i>
                                </div>
                                <h4 className="mb-3">Neurology</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item bg-light rounded p-5">
                                <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: 65, height: 65 }}>
                                    <i className="fa fa-wheelchair text-primary fs-4"></i>
                                </div>
                                <h4 className="mb-3">Orthopedics</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item bg-light rounded p-5">
                                <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: 65, height: 65 }}>
                                    <i className="fa fa-tooth text-primary fs-4"></i>
                                </div>
                                <h4 className="mb-3">Dental Surgery</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item bg-light rounded p-5">
                                <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: 65, height: 65 }}>
                                    <i className="fa fa-vials text-primary fs-4"></i>
                                </div>
                                <h4 className="mb-3">Laboratory</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Medecins */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                        <p className="d-inline-block border rounded-pill py-1 px-4">Docteurs</p>
                        <h1>Membres</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item position-relative rounded overflow-hidden">
                                <div className="overflow-hidden">
                                    {/* <img className="img-fluid" src="img/team-1.jpg" alt=""> */}
                                </div>
                                <div className="team-text bg-light text-center p-4">
                                    <h5>Doctor Name</h5>
                                    <p className="text-primary">Department</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item position-relative rounded overflow-hidden">
                                <div className="overflow-hidden">
                                    {/* <img className="img-fluid" src="img/team-2.jpg" alt=""> */}
                                </div>
                                <div className="team-text bg-light text-center p-4">
                                    <h5>Doctor Name</h5>
                                    <p className="text-primary">Department</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item position-relative rounded overflow-hidden">
                                <div className="overflow-hidden">
                                    {/* <img className="img-fluid" src="img/team-3.jpg" alt=""> */}
                                </div>
                                <div className="team-text bg-light text-center p-4">
                                    <h5>Doctor Name</h5>
                                    <p className="text-primary">Department</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item position-relative rounded overflow-hidden">
                                <div className="overflow-hidden">
                                    {/* <img className="img-fluid" src="img/team-4.jpg" alt=""> */}
                                </div>
                                <div className="team-text bg-light text-center p-4">
                                    <h5>Doctor Name</h5>
                                    <p className="text-primary">Department</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;