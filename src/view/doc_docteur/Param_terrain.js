const Param_terrain = (props) => {
  return (
    <div className="container-fluid mt-10">
      <div className="w-full bg-primary h-10 rounded-sm items-center justify-center flex">
        <h2 className="text-white">Terrain</h2>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
        <div>
          <div className="w-full bg-white border-1 border-red-700 h-10 rounded items-center justify-center flex">
            <h2 className="text-primary">Electrophores de l'HB</h2>
          </div>
          <form className="space-y-3 flex-col mt-2">
            <input
              type="text"
              name="mail"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="Electrophores de l'HB"
            />
            <input
              type="text"
              name="mdp"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="ID du patient"
            />
            <input
              type="file"
              name="mdp"
              className="w-full border-2 p-1 h-11 rounded-sm"
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
            <h2 className="text-primary">Groupe Sanguin</h2>
          </div>
          <form className="space-y-3 flex-col mt-2">
            <input
              type="text"
              name="mail"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="Groupe Sanguin"
            />
            <input
              type="text"
              name="mdp"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="ID du patient"
            />
            <input
              type="file"
              name="mdp"
              className="w-full border-2 p-1 h-11 rounded-sm"
            />
            <input
              type="submit"
              className="h-10 w-40 bg-[#a5000a] rounded-md text-white"
              value="Envoyer"
            />
          </form>
        </div>
        <div className="col-span-2">
          <div className="w-full bg-white border-1 border-red-700 h-10 rounded items-center justify-center flex">
            <h2 className="text-primary">Allergie Médicamenteuse</h2>
          </div>
          <form className="space-y-3 flex-col mt-2">
            <input
              type="text"
              name="mail"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="Médicament"
            />
            <input
              type="text"
              name="mdp"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="ID du patient"
            />
            <input
              type="text"
              name="mdp"
              className="w-full border-2 p-1 h-11 rounded-sm"
              placeholder="Drepano"
            />
            <input
              type="file"
              name="mdp"
              className="w-full border-2 p-1 h-11 rounded-sm"
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

export default Param_terrain;
