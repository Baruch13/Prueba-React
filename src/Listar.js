import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import BtnAgg from "./BtnAgg";

export class Listar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { datosCargados: false, productos: [] };


  }
  
  cargarDatos() {
    fetch("http://localhost/productos/")
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        console.log(datosRespuesta);
        this.setState({ datosCargados: true, productos: datosRespuesta });
      })
      .catch(console.log);
  }
  componentDidMount() {
    this.cargarDatos();
  }

  render() {
    const { datosCargados, productos } = this.state;
    return (
        
      <div className="card">
      
          <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
         </head>
       
         

         
        <div className="card-header">
            <BtnAgg/>
          <div></div>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripcion</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr>
                  <td scope="row">{producto.id}</td>
                  <td>{producto.nombre}</td>
                  <td>{producto.descripcion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-footer text-muted"></div>
      </div>
    );
  }
}

export default Listar;
