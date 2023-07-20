import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ listaDeTareas, borrarTarea }) => {
  return (
    <ListGroup>
      {listaDeTareas.map((tarea, index) => (
        <ItemTarea tarea={tarea} key={index} borrarTarea={borrarTarea} />
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
