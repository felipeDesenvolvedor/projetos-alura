import { ITarefas } from "../../../types/tarefa"
import style from "../Lista.module.scss"

interface Props extends ITarefas{
    selecionaTarefas:(tarefaSelecionada:ITarefas) => void
}

export default function Item({
    tarefa, 
    tempo, 
    selecionado, 
    completado, 
    id, 
    selecionaTarefas
}:Props) {

    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} onClick={()=> selecionaTarefas(
            {tarefa, tempo, selecionado, completado, id}
        )}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
          </li>
    )
}