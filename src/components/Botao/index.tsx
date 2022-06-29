import React from "react";

class Botao extends React.Component {
  render() {
    const estaAtivo = true;

    const styles = {
      backgroundColor: estaAtivo ? "#662d91" : "#eeeeee",
      color: "white",
    };

    return <button style={styles}>Botão</button>;
  }
}

export default Botao;
