import { Link } from "react-router-dom";
const Inscription = (props) => {

    const handleSubmit =()=> {
        return 0
    }

  return (
    <div>
      <div className="container-fluid py-10">
        <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center md:space-x-10">
          <div className="flex-1 w-full h-auto">
            <img
              src={require("../image/conseil.jpg")}
              className={"w-full h-auto"}
            />
          </div>
          <div className="flex-1 flex-col space-y-7 py-5">
            <span className="font-bold text-3xl text-secondary">
              Inscription Docteur
            </span>
            <form onsubmit={handleSubmit} className="space-y-5 text-center flex-col">
              <input
                type="text"
                name="nom"
                className="w-full border-2 p-1 rounded-sm"
                placeholder="Nom et Prénom"
              />
              <input
                type="text"
                name="mdp"
                className="w-full border-2 p-1 rounded-sm"
                placeholder="E-mail"
              />
              <input
                type={"tel"}
                name="tel"
                className="w-full border-2 p-1 rounded-sm"
                placeholder="Numero de Téléphone"
              />
              <hr />
              <input
                type={"text"}
                name="addresse"
                className="w-full border-2 p-1 rounded-sm"
                placeholder="Adresse Complete"
              />
              <input
                type={""}
                name="Sexe"
                className="w-full border-2 p-1 rounded-sm"
                placeholder="Sexe"
              />
              <input
                type={""}
                name="Grade"
                className="w-full border-2 p-1 rounded-sm"
                placeholder="Grade"
              />
              <hr />
              <input
                type={"text"}
                name="Specialité"
                className="w-full border-2 p-1 rounded-sm"
                placeholder="Spécialité"
              />
              <input
                type={"date"}
                name="date"
                className="w-full border-2 p-1 rounded-sm"
                placeholder="Date de naissance"
              />
              <input
                type={""}
                name="Pays"
                className="w-full border-2 p-1 rounded-sm"
                placeholder="Pays"
              />
              <hr />
              <input
                type={"file"}
                name="Image"
                className="w-full border-2 p-1 rounded-sm"
                placeholder="Image"
              />
              <input
                type={"password"}
                name="password"
                className="w-full border-2 p-1 rounded-sm"
                placeholder="Mot de Passe"
              />
              <input
                type={"password"}
                name="password"
                className="w-full border-2 p-1 rounded-sm"
                placeholder="Confirmer mot de passe"
              />
              <input
                type="submit"
                className="h-10 w-40 bg-[#a5000a] rounded-md text-white"
                value="Créer un compte"
              />
            </form>
            <div className="text-md text-primary">
              <i class="fa fa-fingerprint me-2"></i>
              <Link to="/connexion">Connexion</Link>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
