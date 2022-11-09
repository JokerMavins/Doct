import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeLayout from './view/HomeLayout';
import Home from './view/Home';
import Connexion from './view/Connexion'
import Inscription from './view/Inscription';
import Identite from './view/doc_patient/Identite';
import DashboardPatientLayout from './view/DashboardPatientLayout';
import DashboardDocteurLayout from './view/DashboardDocteurLayout';
import Terrain from './view/doc_patient/Terrain';
import Antecedent from './view/doc_patient/Antecedent';
import Resumer from './view/doc_patient/Resumer';
import Dossier_Chir from './view/doc_patient/Dossier_Chir';
import Dossier_Para from './view/doc_patient/Dossier_Para';
import Param_dc from './view/doc_docteur/Param_dc';
import Param_rh from './view/doc_docteur/Param_rh';
import Param_antecedent from './view/doc_docteur/Param_antededent';
import Param_terrain from './view/doc_docteur/Param_terrain';
import Autre_Params_rh from "./view/doc_docteur/Autre_Params_rh";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomeLayout />}>
					<Route index element={<Home />} />
					<Route path='apropos' element={<Home />} />
					<Route path='contact' element={<Home />} />
					<Route path='connexion' element={<Connexion />} />
					<Route path='inscription' element={<Inscription />} />
				</Route>
				<Route path='/compte_patient' element={<DashboardPatientLayout />}>
					<Route path='identite' element={<Identite />} />
					<Route path='terrain' element={<Terrain />} />
					<Route path='antecedent' element={<Antecedent />} />
					<Route path='resumer' element={<Resumer />} />
					<Route path='dossier_paraclinique' element={<Dossier_Para />} />
					<Route path='dossier_chirurgical' element={<Dossier_Chir />} />
				</Route>
				<Route path='/compte_docteur' element={<DashboardDocteurLayout />}>
					<Route path='identite' element={<Identite />} />
					<Route path='terrain' element={<Param_terrain />} />
					<Route path='antecedent' element={<Param_antecedent />} />
					<Route path='resumer' element={<Param_rh />} />
					<Route path='dossier_paraclinique' element={<Autre_Params_rh />} />
					<Route path='dossier_chirurgical' element={<Param_dc />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
