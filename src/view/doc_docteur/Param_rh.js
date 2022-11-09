const Param_rh = (props) => {
    return (
      <div className="container-fluid my-10">
        <div className="w-full bg-primary h-10 rounded-sm items-center justify-center flex">
          <h2 className="text-white">Résumé des Hospitalisations</h2>
        </div>
        <div className="grid grid-cols-1 mt-3">
          <form className="space-y-3 flex-col">
            <input
              type="text"
              name="mail"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="Motif de consultation / Admission"
            />
            <input
              type="text"
              name="mdp"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="Date d'entrée"
            />
            <input
              type="text"
              name="mdp"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="Heure d'entrée"
            />
            <input
              type="text"
              name="mdp"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="Diagnostic retenu"
            />
            <textarea
              type="text"
              name="mdp"
              className="w-full border-2 p-1 h-20 rounded-sm"
              placeholder="Argument diagnostic"
            />
            <textarea
              type="text"
              name="mdp"
              className="w-full border-2 p-1 h-20 rounded-sm"
              placeholder="Conduite Tenue"
            />
            <textarea
              type="text"
              name="mdp"
              className="w-full border-2 p-1 h-20 rounded-sm"
              placeholder="Traitement a la sortie"
            />
            <input
              type="text"
              name="mdp"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="Date de sortie"
            />
            <input
              type="file"
              name="mdp"
              className="w-full border-2 p-1 h-11 rounded-sm"
            />
            <input
              type="text"
              name="mdp"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="ID du patient"
            />
            <input type="submit" className='h-10 w-40 bg-[#a5000a] rounded-md text-white' value="Envoyer" />
          </form>
        </div>
      </div>
    );
  };
  
  export default Param_rh;
  