const Dossier_Para = (props) => {
  return (
    <div className="container-fluid mt-10">
      <div className="w-full bg-primary h-10 rounded-sm items-center justify-center flex">
        <h2 className="text-white">Dossier Paraclinique</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Hospitalisation</th>
              <th scope="col">Imagerie</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default Dossier_Para;
