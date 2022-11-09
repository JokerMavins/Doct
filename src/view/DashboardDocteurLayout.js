import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import NavBar from "../Component/NavBar";
import "../css/Sante.css";
import "../lib/animate/animate.min.css";
import "../lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import { Link } from "react-router-dom";

const DashboardDocteurLayout = (props) => {
  return (
    <div>
      <NavBar />
      <div className="md:flex flex-row container">
        <div className="col-md-3 border-r-2 p-3">
          <p className="my-3 space-x-3 relative flex flex-row items-center ">
            <img
              src="https://motorizzazione.info/sante/forms/site/5b03c61fd0e8484810f3da1ffe108eb8.jpg"
              className="rounded-full w-10 h-10"
            />
            <span className="font-bold">Fabien AMOUSSOU </span>
          </p>
          <hr />
          <p className="text-primary my-3">Menu</p>
          <ul className="space-y-3 list-none tracking-wider mb-3">
            <li className="w-full h-10 flex">
              <Link to="identite" className="ml-5 w-full items-center flex h-10 focus:bg-[#a5000a] rounded focus:text-white p-3">
                <i className="fa fa-user me-2"></i>Identité Personnelle
              </Link>
            </li>
            <li className="w-full h-10 flex">
              <Link to="terrain" className="ml-5 w-full items-center flex h-10 focus:bg-[#a5000a] rounded focus:text-white p-3">
                <i className="fa fa-circle me-2"></i>
                Paramètres Terrain
              </Link>
            </li>
            <li className="w-full h-10 flex">
              <Link to="antecedent" className="ml-5 w-full items-center flex h-10 focus:bg-[#a5000a] ounded focus:text-white p-3">
                <i className="fa fa-hive me-2"></i>
                Paramètre Antécédents
              </Link>
            </li>
            <li className="w-full h-10 flex">
              <Link to="resumer" className="ml-5 w-full items-center flex h-10 focus:bg-[#a5000a] rounded focus:text-white p-3">
                <i className="fa fa-receipt me-2"></i>
                Paramètre RH
              </Link>
            </li>
            <li className="w-full h-10 flex">
              <Link to="dossier_paraclinique" className="ml-5 w-full items-center flex h-10 focus:bg-[#a5000a] rounded focus:text-white p-3">
                <i className="fa fa-folder-minus me-2"></i>
                Autre Paramètre RH
              </Link>
            </li>
            <li className="w-full h-10 flex">
              <Link to="dossier_chirurgical" className="ml-5 w-full items-center flex h-10 focus:bg-[#a5000a] rounded focus:text-white p-3">
                <i className="fa fa-folder-minus me-2"></i>
                Paramètre DC
              </Link>
            </li>
          </ul>
          <hr />
        </div>
        <div className="col-md-9 col-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardDocteurLayout;
