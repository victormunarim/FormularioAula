import './App.css';
import Forms from './Components/Forms.jsx'
import { useState } from 'react'

function App() {

  const [colaboradores, setColaboradores] = useState([])

   const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  
  console.log(colaboradores);

  return (
    <div className="App">
      <Forms aoColaboradorCadastrado={aoNovoColaboradorAdicionado}></Forms>
    </div>
  );
}

export default App;