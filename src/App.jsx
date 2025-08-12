import { useEffect, useState } from 'react';

function App(){
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/paises')
      .then(response => response.json())
      .then(data => setPaises(data.paises))
      .catch(error => console.error('Error fetching countries:', error));
  }, []);
  return (
<div>
  <div className="alert alert-info display-1 text-center"><strong>SUPER MUNDIAL</strong></div>
  <div className="container">
    <div className="row">
      <div className="col-6">
        <div className="alert alert-info d-flex justify-content-center">
          <table className="table-info w-auto">
          <thead>
            <tr>
              <th scope="col">Edicion</th>
              <th scope="col">Campeon</th>
            </tr>
          </thead>
          <tbody>
            {paises.map((pais, index) => (
              <tr key={pais.id || index}>
                <th scope="row">{index + 1}</th>
                <td>{pais.nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      <div className="col-6 d-flex justify-content-center">
        <a className="btn btn-danger display-2" href= {"/grupos"}>
        <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
        <span role="status"><h2>SORTEANDO...</h2></span>
        </a>
      </div>
    </div>
  </div>
  <footer className="text-center mt-5 text-muted">
        <hr />
        <p>creado por javier varas - @Mosala44</p>
  </footer>
</div>


  );
}

export default App;