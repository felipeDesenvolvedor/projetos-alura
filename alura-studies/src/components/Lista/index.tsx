import { ITarefas } from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';



function Lista({tarefas}:{tarefas:ITarefas[]}) {
  
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item {...item} key={index}/>
        ))}
      </ul>
    </aside>
  )
}

export default Lista;