const Dossier_Chir = (props) => {
  return (
    <div className="container-fluid mt-10">
      <div className="w-full bg-primary h-10 rounded-sm items-center justify-center flex">
        <h2 className="text-white">Dossier Chirurgical</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Intervention Chrirugical</th>
              <th scope="col">Date de L'intervention</th>
              <th scope="col">Intervention</th>
              <th scope="col">CRO</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default Dossier_Chir;
