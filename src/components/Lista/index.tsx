import { ITarefa } from "../../types/tarefa";
import Item from "./Item";
import style from "./Lista.module.scss";

export default function Lista({ tarefas }: { tarefas: ITarefa[] }) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          /// ...item trás tudo dentro de item (tempo e tarefa)
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}
