import { ITarefas } from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';

interface Props {
  tarefas:ITarefas[],
  selecionaTarefas:(tarefaSelecionada:ITarefas) => void
}

function Lista({tarefas, selecionaTarefas}:Props) {
  
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item {...item} key={index} selecionaTarefas={selecionaTarefas}/>
        ))}
      </ul>
    </aside>
  )
}

export default Lista;