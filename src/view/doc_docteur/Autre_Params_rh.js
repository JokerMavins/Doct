const Autre_Params_rh = (props) => {
  return (
    <div className="container-fluid my-10">
      <div className="w-full bg-primary h-10 rounded-sm items-center justify-center flex">
        <h2 className="text-white">Résumé des hospitamisations Détails</h2>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
        <div>
          <div className="w-full bg-white border-1 border-red-700 h-10 rounded items-center justify-center flex">
            <h2 className="text-primary">Evolution</h2>
          </div>
          <form className="space-y-3 flex-col mt-2">
            <input
              type="text"
              name="mail"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="Identitifiant Hospitalisation"
            />
            <input
              type="text"
              name="mail"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="Jour d'Hospitalisation"
            />
            <input
              type="text"
              name="mail"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="TETA"
            />
            <input
              type="text"
              name="mail"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="TA"
            />
            <input
              type="text"
              name="mail"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="FR"
            />
            <input
              type="text"
              name="mail"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="PI"
            />
            <input
              type="text"
              name="mdp"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="SAO2"
            />
            <textArea
              type={"text"}
              name="mail"
              className="w-full border-2 p-1 h-20 rounded-sm"
              placeholder="Etat General"
            />
            <textArea
              type="text"
              name="mail"
              className="w-full border-2 p-1 h-20 rounded-sm"
              placeholder="Examen"
            />
            <input
              type="submit"
              className="h-10 w-40 bg-[#a5000a] rounded-md text-white"
              value="Envoyer"
            />
          </form>
        </div>
        <div>
          <div className="w-full bg-white border-1 border-red-700 h-10 rounded items-center justify-center flex">
            <h2 className="text-primary">Diagnostic</h2>
          </div>
          <form className="space-y-3 flex-col mt-2">
            <input
              type="text"
              name="mail"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="Identifiant Hospitalisation"
            />
            <input
              type="text"
              name="mdp"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="Jour d'hospitalisation"
            />
            <textArea
              type="text"
              name="mdp"
              className="w-full border-2 p-1 h-20 rounded-sm"
              placeholder="Diagnostic"
            />
            <input
              type="submit"
              className="h-10 w-40 bg-[#a5000a] rounded-md text-white"
              value="Envoyer"
            />
          </form>
        </div>
        <div>
          <div className="w-full bg-white border-1 border-red-700 h-10 rounded items-center justify-center flex">
            <h2 className="text-primary">Traitement</h2>
          </div>
          <form className="space-y-3 flex-col mt-2">
            <input
              type="text"
              name="mail"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="Identifiant Hospitalisation"
            />
            <input
              type="text"
              name="mdp"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="Jour d'hospitalisation"
            />
            <textArea
              type="text"
              name="mdp"
              className="w-full border-2 p-1 h-20 rounded-sm"
              placeholder="Traitement en cours"
            />
            <input
              type="submit"
              className="h-10 w-40 bg-[#a5000a] rounded-md text-white"
              value="Envoyer"
            />
          </form>
        </div>
        <div>
          <div className="w-full bg-white border-1 border-red-700 h-10 rounded items-center justify-center flex">
            <h2 className="text-primary">CAT</h2>
          </div>
          <form className="space-y-3 flex-col mt-2">
            <input
              type="text"
              name="mail"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="Identifiant Hospitalisation"
            />
            <input
              type="text"
              name="mdp"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="Jour d'hospitalisation"
            />
            <textArea
              type="text"
              name="mdp"
              className="w-full border-2 p-1 h-20 rounded-sm"
              placeholder="CAT"
            />
            <input
              type="submit"
              className="h-10 w-40 bg-[#a5000a] rounded-md text-white"
              value="Envoyer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Autre_Params_rh;
