import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import './index.css'

function Grupos() {
  const [grupos, setGrupos] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/grupos/obtener/4')
      .then(response => response.json())
      .then(data => setGrupos(data.grupos))
      .catch(error => console.error('Error fetching groups:', error));
  }, []);

  return (
    <div>
      <div className="alert alert-danger display-1 text-center">
        <h2><strong>FASE DE GRUPOS</strong></h2>
      </div>
      <div className="container mt-5">
        <div className="row">
          {grupos && grupos.map((grupo, index) => (
            <div key={index} className="col-md-3 mb-4"> 
              <div className="card h-100"> 
                <div className="card-header">
                  Grupo {String.fromCharCode(65 + index)}
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{grupo.bombo1.nombre}</li>
                  <li className="list-group-item">{grupo.bombo2.nombre}</li>
                  <li className="list-group-item">{grupo.bombo3.nombre}</li>
                  <li className="list-group-item">{grupo.bombo4.nombre}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="text-center mt-5 text-muted">
        <hr />
        <p>creado por javier varas - @Mosala44</p>
      </footer>
    </div>
  );
}


export default Grupos;