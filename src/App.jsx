import "./App.css";
import FormularioTarea from "./components/FomularioTarea";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 color-gradiente-bg">
      <section className="container">
        <h1 className="display-5 text-center pt-5 pb-2 text-white">
          Lista de tareas
        </h1>
        <hr className="text-white" />
      </section>
      <FormularioTarea />
      <footer className="py-5 mt-auto bg-dark">
        <h5 className="text-center text-white">
          {" "}
          © Todos los derechos reservados
        </h5>
      </footer>
    </div>
  );
}

export default App;
