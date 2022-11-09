const Terrain = (props) => {
  return (
    <div className="container-fluid mt-10">
      <div className="w-full bg-primary h-10 rounded-sm items-center justify-center flex">
        <h2 className="text-white">Terrain</h2>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
        <div>
          <div className="w-full bg-white border-1 border-red-700 h-10 rounded items-center justify-center flex">
            <h2 className="text-primary">Groupe Sanguin</h2>
          </div>
        </div>
        <div>
          <div className="w-full bg-white border-1 border-red-700 h-10 rounded items-center justify-center flex">
            <h2 className="text-primary">Electrophores de l'HB</h2>
          </div>
        </div>
        <div>
          <div className="w-full bg-white border-1 border-red-700 h-10 rounded items-center justify-center flex">
            <h2 className="text-primary">Allergie médicamenteuse</h2>
          </div>
        </div>
      </div>
      <div class="col-md-12 col-12 p-3">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Terrains</th>
              <th scope="col">Image</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default Terrain;
