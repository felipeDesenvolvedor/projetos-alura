import style from "../Lista.module.scss"

export default function Item({tarefa, tempo}:{tarefa:string, tempo:string}) { 
    console.log(tarefa, tempo)
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
          </li>
    )
}