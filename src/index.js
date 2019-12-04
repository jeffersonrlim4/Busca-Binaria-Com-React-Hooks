import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";


function App() {
  //ENTRADA, RODANDO, FIM
  const [estado, setEstado] = useState('ENTRADA')

  // 0 <> 300
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(300)

  // PALPITES QUE A MÁQUINA DEU
  const [palpite, setPalpite] = useState(150)
  const [numPalpites, setNumPalpites] = useState(1)

  const iniciarJogo = () => {
    setEstado('RODANDO')
    setPalpite(150)
    setNumPalpites(1)
    setMin(0)
    setMax(300)
  }

  if(estado==='ENTRADA'){
    return <button onClick={iniciarJogo}>Começar a Jogar</button>
  }

  if(estado==='FIM'){
    return (
      <div>
        <h2>Acertou o número {palpite} com {numPalpites} tentativas</h2>
        <button onClick={iniciarJogo}>Jogar Novamente</button>
      </div>
    )
  }

  const menor = () =>{
    setNumPalpites(numPalpites + 1)
    setMax(palpite)
    const proxPalpite = parseInt((palpite - min) / 2) + min
    setPalpite(proxPalpite)
  }

  const maior = () =>{
    setNumPalpites(numPalpites + 1)
    setMin(palpite)
    const proxPalpite = parseInt((max - palpite) / 2) + palpite
    setPalpite(proxPalpite)
  }

  const acertou = () =>{
    setEstado('FIM')
  }

  return (
    <div className="App">
      <h3>O seu número é {palpite}?</h3>
      <p>Min: {min} | Max: {max} </p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
