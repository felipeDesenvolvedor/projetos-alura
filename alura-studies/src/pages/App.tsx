import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { ITarefas } from '../types/tarefa';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefas[]>([])
  const [selecionado, setSelecionado] = useState<ITarefas>()

  function selecionaTarefas(tarefaSelecionada:ITarefas) {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefas => ({
      ...tarefas,
      selecionado: tarefas.id === tarefaSelecionada.id ? true : false
    })))
    console.log(tarefaSelecionada)
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas} selecionaTarefas={selecionaTarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;