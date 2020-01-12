import React, { Component } from "react";
import Header from "./Components/Header";
import NuevaCita from "./Components/NuevaCita";
import ListaCitas from "./Components/ListaCitas"
import "./bootstrap.min.css";
class App extends Component {
  state = {
    citas: []
  };
    crearNuevaCita = datos => {
      // copiar el state actual
     const dcita=this.state.citas;
     dcita.push (
          datos
      );
     //const citas = {...this.state.citas, datos};
      // agregar el nuevo state
      this.setState({citas:dcita});
    }
  render() {
    return (
      <div className="container">
        <Header titulo="Administrador Pacientes Veterinaria" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita crearNuevaCita={this.crearNuevaCita} />
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas
              citas={this.state.citas}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
