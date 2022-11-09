const Identite = (props) => {
  return (
    <div className="container-fluid mt-10">
      <div className="w-full bg-primary h-10 rounded-sm items-center justify-center flex">
        <h2 className="text-white">Identité</h2>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
        <div>
          <div className="w-full bg-white border-1 border-red-700 h-10 rounded items-center justify-center flex">
            <h2 className="text-primary">Information Personel</h2>
          </div>
          <h4 class="btn">
            <span class="bg-danger p-2 bg-opacity-10">Nom et Prénoms:</span>
            <span>Fabien AMOUSSOU </span>
          </h4>
          <h4 class="btn">
            <span class="bg-danger p-2 bg-opacity-10">Date de Naissance:</span>
            <span>2022-08-16</span>
          </h4>
          <h4 class="btn">
            <span class="bg-danger p-2 bg-opacity-10">Sexe:</span>
            <span>Masculin</span>
          </h4>
          <h4 class="btn">
            <span class="bg-danger p-2 bg-opacity-10">Ethnie:</span>
            <span>Goun</span>
          </h4>
          <h4 class="btn">
            <span class="bg-danger p-2 bg-opacity-10">Religion:</span>
            <span>Chrétien </span>
          </h4>
          <h4 class="btn">
            <span class="bg-danger p-2 bg-opacity-10">Telephone:</span>
            <span>99015705</span>
          </h4>
          <h4 class="btn">
            <span class="bg-danger p-2 bg-opacity-10">Statut Civile:</span>
            <span>Celibataire</span>
          </h4>
          <h4 class="btn">
            <span class="bg-danger p-2 bg-opacity-10">Profession:</span>
            <span>Dev</span>
          </h4>
          <h4 class="btn">
            <span class="bg-danger p-2 bg-opacity-10">Adresse Complète:</span>
            <span>Houeto Calavi </span>
          </h4>
          <h4 class="btn">
            <span class="bg-danger p-2 bg-opacity-10">Email:</span>
            <span>fabienamoussou20062001@gmail.com</span>
          </h4>
        </div>
        <div>
          <div className="w-full bg-white border-1 border-red-700 h-10 rounded items-center justify-center flex">
            <h2 className="text-primary">Personne a Contacter</h2>
          </div>
          <h4 class="btn">
            <span class="bg-danger p-2 bg-opacity-10">Nom et prénoms:</span>
            <span>John Doe </span>
          </h4>
          <h4 class="btn">
            <span class="bg-danger p-2 bg-opacity-10">Lien Parental:</span>
            <span>Padre </span>
          </h4>
          <h4 class="btn">
            <span class="bg-danger p-2 bg-opacity-10">Contact:</span>
            <span>61000000</span>
          </h4>
        </div>
        <div>
          <div className="w-full bg-white border-1 border-red-700 h-10 rounded items-center justify-center flex">
            <h2 className="text-primary">Autres Informations</h2>
          </div>
          <h4 class="btn">
            <span class="bg-danger p-2 bg-opacity-10"> Date de prise:</span>
            <span>2022-08-30 08:50:57</span>
          </h4>
          <h4 class="btn">
            <span class="bg-danger p-2 bg-opacity-10">Poids:</span>
            <span>65 Kg</span>
          </h4>
          <h4 class="btn">
            <span class="bg-danger p-2 bg-opacity-10">Taille:</span>
            <span>1.88 m</span>
          </h4>
          <h4 class="btn">
            <span class="bg-danger p-2 bg-opacity-10">IMC:</span>
            <span>18 (kg/m2)</span>
          </h4>
          <h4 class="btn">
            <span class="bg-danger p-2 bg-opacity-10">
              Statut nutritionnel:
            </span>
            <span>Dénutrition grade II </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Identite;
