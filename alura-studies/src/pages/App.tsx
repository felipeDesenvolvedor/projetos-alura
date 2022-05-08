import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { ITarefas } from '../types/tarefa';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefas[]>([])

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;