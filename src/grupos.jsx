import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

function Grupos() {
  return (
    <div>
      <div className="alert alert-danger display-1 text-center"><h2><strong>FASE DE GRUPOS</strong></h2></div>
      <div className="container mt-5">
        <div className="row">
            <div className="col-4">
                <div class="card">
                  <div class="card-header">
                    Grupo A
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                  </ul>
                </div>
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

export default Grupos;