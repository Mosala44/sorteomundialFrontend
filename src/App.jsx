import { useEffect, useState } from 'react';
import pesstadium from './assets/img/pesstadium.jpg';
import sorteo from './assets/img/sorteo.jpg';
import './assets/css/App.css';


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
      <div className="container-fluid">
        <div className="row">
          {/* Botón casa */}
          <div className="btnhome col-2">
            <a href="#">
              <i className="bi bi-house-fill"></i>
            </a>
          </div>

          {/* Contenedor blanco con contenido */}
          <div className="alertblanco col-10">
            <div className="row row-top d-none d-lg-flex">
              <span>
                <i className="bi bi-envelope-at-fill"></i> javiervarasbolados@gmail.com
              </span>
              <a href="#">
                <i className="bi bi-github"></i>
              </a>
            </div>

            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Bombos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Campeones
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Paises
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="carrusel" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={pesstadium} className="d-block w-100" alt="PES Stadium" />
            <h1 className='carrusel-texto-boton'>HAZ CLICK EN EL BOTON "VER +" PARA VER EL HISTORIAL DE SORTEOS</h1> 
            <div className='position-absolute top-50 start-50 translate-middle'>
              <a href="" className='btn btn-warning'><h2><strong>VER +</strong></h2></a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={sorteo} className="d-block w-100" alt="Sorteo" />
            <div className='position-absolute top-50 start-50 translate-middle'>
              <a href="" className='btn btn-danger'><h2><strong>SORTEO</strong></h2></a>
            </div>
          </div>
        </div>
      
        <button className="carousel-control-prev" type="button" data-bs-target="#carrusel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
      
        <button className="carousel-control-next" type="button" data-bs-target="#carrusel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default App;