import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import NavBar from "../Component/NavBar";
import '../css/Sante.css';
import '../lib/animate/animate.min.css';
import '../lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css';


const HomeLayout = props => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default HomeLayout;