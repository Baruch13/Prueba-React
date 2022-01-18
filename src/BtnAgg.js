import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Label } from "reactstrap";
import { Link } from 'react-router-dom';

function Example() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      Agregar Producto
      </Button>
  
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Agregar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Nombre</label>
              <input type="text" className="form-control" name="nombre" id="nombre" />
              <label>Descripcion</label>
              <input type="text" className="form-control" name="descripcion" id="descripcion" />
              </div>
              <div className="btn-group" role="group" aria-label="" >
              <button type="button" class="btn btn-success">Agregar Producto</button>
              </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
            
        </Modal.Footer>
      </Modal>
    </>
  );
}
  
export default Example;