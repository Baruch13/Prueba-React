import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import BtnAgg from "./BtnAgg";
import './App.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url="http://localhost/productos/";
export class Listar extends React.Component {
state={
  data:[],
  modalInsertar: false,
  modalEliminar: false,
  form:{
    nombre: '',
    descripcion: '',
  }
}

peticionGet=()=>{
axios.get(url).then(response=>{
  this.setState({data: response.data});
}).catch(error=>{
  console.log(error.message);
})
}

peticionPost=async()=>{

 await axios.post(url,this.state.form).then(response=>{
    this.modalInsertar();
    this.peticionGet();
  }).catch(error=>{
    console.log(error.message);
  })
}

peticionPut=()=>{
  axios.put(url+this.state.form.id, this.state.form).then(response=>{
    this.modalInsertar();
    this.peticionGet();
  })
}

peticionDelete=()=>{
  axios.delete(url+this.state.form.id).then(response=>{
    this.setState({modalEliminar: false});
    this.peticionGet();
  })
}

modalInsertar=()=>{
  this.setState({modalInsertar: !this.state.modalInsertar});
}

seleccionarProducto=(producto)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      id: producto.id,
      nombre: producto.nombre,
      descripcion: producto.descripcion,
    }
  })
}

handleChange = (e) => {
  const state=this.state;
  state[e.target.name]=e.target.value;
  this.setState(state);
}

  componentDidMount() {
    this.peticionGet();
  }
  enviarDatos = (e) =>{
  e.preventDefault();
  console.log("Enviando datos");
  const{nombre,descripcion}=this.state;
  console.log(nombre);
  console.log(descripcion);

  var datosEnviar = {nombre:nombre, descripcion:descripcion};
  fetch("http://localhost/productos/?insertar=1",{
    method:'POST',
    body:JSON.stringify(datosEnviar)
  })
  .then(respuesta => respuesta.json())
  .then((datosRespuesta) => {

    console.log(datosRespuesta);
    
  })
  .catch(console.log);

  }

  render(){
    const{nombre,descripcion}=this.state;
    const {form}=this.state;
   

  return (
    <div className="App">
    <br /><br /><br />
  <button className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar Producto</button>
  <br /><br />
    <table className="table ">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripcion</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(producto=>{
          
          return(
            <tr>
          <td>{producto.id}</td>
          <td>{producto.nombre}</td>
          <td>{producto.descripcion}</td>                     
          </tr>
          )
        })}
      </tbody>
    </table>



    <Modal isOpen={this.state.modalInsertar}>
              <form onSubmit={this.enviarDatos}>
              <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
                    <br />
                    <label htmlFor="nombre">Nombre</label>
                    <input className="form-control" type="text" value={nombre} name="nombre" id="nombre" onChange={this.handleChange} value={nombre}/>
                    <br />
                    <label htmlFor="nombre">Descripcion</label>
                    <input className="form-control" type="text" value={descripcion} name="descripcion" id="descripcion" onChange={this.handleChange} value={descripcion}/>
                    <br />
                  </div>
                </ModalBody>

                <ModalFooter>
                  {this.state.tipoModal=='insertar'?
                      <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                    Insertar
                  </button>: <button className="btn btn-primary" onClick={()=>this.peticionPut()}>
                    Actualizar
                  </button>
  }
                    <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                </ModalFooter>
              </form>
          </Modal>


          <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
               Estás seguro que deseas eliminar a la producto {form && form.nombre}
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Sí</button>
              <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
            </ModalFooter>
          </Modal>
  </div>



  );
}
}
