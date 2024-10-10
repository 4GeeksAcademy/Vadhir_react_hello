import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="container bg-light p-4">
        <h1 className="display-4">Una cálida bienvenida!</h1>
        <p className="lead">
          Tenía la intención de escribir un Loren Ipsum, pero después recordé que escribir no es algo que se me complique tanto, así que comencé a escribir lo primero que se me venía a la mente. Claro, se entiende que, cuando se aplique en una situación real, no se escribirá lo que te venga a la mente sino lo que sea solicitado.
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Call to action!
        </a>
      </div>
    </div>
  );
};

export default Jumbotron;
