const Param_antecedent = (props) => {
  return (
    <div className="container-fluid mt-10">
      <div className="w-full bg-primary h-10 rounded-sm items-center justify-center flex">
        <h2 className="text-white">Antécédents</h2>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
        <div>
          <div className="w-full bg-white border-1 border-red-700 h-10 rounded items-center justify-center flex">
            <h2 className="text-primary">Personels</h2>
          </div>
          <form className="space-y-3 flex-col mt-2">
            <input
              type="text"
              name="mail"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="Antécédent médicaux"
            />
            <input
              type="text"
              name="mdp"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="Antécédent chirugicaux"
            />
            <input
              type="text"
              name="mdp"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="Antécédent Gynéco-obstétricaux"
            />
            <input
              type="text"
              name="mdp"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="ID du patient"
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
            <h2 className="text-primary">Familiaux</h2>
          </div>
          <form className="space-y-3 flex-col mt-2">
            <textarea
              type="text"
              name="AM"
              className="w-full border-2 p-1 h-28 rounded-sm"
              placeholder="Antécédent médicaux"
            />
            <input
              type="text"
              name="id"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="ID du patient"
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

export default Param_antecedent;
