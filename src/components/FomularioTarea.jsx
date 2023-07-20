import { useEffect, useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import ListaTareas from "./ListaTareas";
let tareasIniciales = JSON.parse(localStorage.getItem("tareas")) || [];

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState(tareasIniciales);

  useEffect(() => {
    if (tareasIniciales) {
      localStorage.setItem("tareas", JSON.stringify(listaTareas));
    } else {
      localStorage.setItem("tareas", JSON.stringify([]));
    }
  }, [listaTareas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setListaTareas([...listaTareas, tarea]);
    setTarea("");
  };

  const handleChange = (e) => {
    setTarea(e.target.value);
  };

  const borrarTarea = (tareaBorrar) => {
    let listaTareasFiltrada = listaTareas.filter(
      (itemTarea) => itemTarea !== tareaBorrar
    );
    setListaTareas(listaTareasFiltrada);
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Ingrese una Tarea"
              value={tarea}
              onChange={handleChange}
              type="text"
            />
            <Button
              className="btn-agregar-tarea"
              variant="outline-primary"
              type="submit"
            >
              <FontAwesomeIcon className="fs-4" icon={faPlusCircle} />
            </Button>
          </InputGroup>
        </Form>
        <h1 className="container text-center text-white font-weight-bold  fs-0 mt-5">
          {listaTareas.length === 0
            ? " No hay Tareas por ahora"
            : " Administras tus Tareas"}
        </h1>
        <ListaTareas listaDeTareas={listaTareas} borrarTarea={borrarTarea} />
      </Container>
    </>
  );
};

export default FormularioTarea;
