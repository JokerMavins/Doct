const Antecedent = (props) => {
  return (
    <div className="container-fluid mt-10">
      <div className="w-full bg-primary h-10 rounded-sm items-center justify-center flex">
        <h2 className="text-white">Antécédents</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4">
        <div>
          <div className="w-full bg-white border-1 border-red-700 h-10 rounded items-center justify-center flex">
            <h2 className="text-primary">Personels</h2>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Médicaux</th>
                <th scope="col">Chirugicaux</th>
                <th scope="col">Gynéco-obstétricaux</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <div>
          <div className="w-full bg-white border-1 border-red-700 h-10 rounded items-center justify-center flex">
            <h2 className="text-primary">Familiaux</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Antecedent;
