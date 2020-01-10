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
    //Copiar el state actual
    const citas = { ...this.state.citas, datos };
    //Agregar el nuevo state
    this.setState({
      citas
    });
  };
  //Elimnas las citas del state
  eliminarCita = id => {
    console.log(id);
    console.log('Diste click');
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
            <ListaCitas citas={this.state.citas} eliminarCita={this.eliminarCita} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
