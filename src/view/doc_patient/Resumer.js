const Resumer = (props) => {
  return (
    <div className="container-fluid mt-10">
      <div className="w-full bg-primary h-10 rounded-sm items-center justify-center flex">
        <h2 className="text-white">Resumé des hospitalisations</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Hospitalisations</th>
              <th scope="col">Motif de consultation/Admission </th>
              <th scope="col">Période</th>
              <th scope="col">Diagnostic retenu</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default Resumer;
