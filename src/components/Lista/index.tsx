import React from "react";
import Item from "./Item";
import style from "./Lista.module.scss";

export default function Lista() {
  const tarefas = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Node",
      tempo: "01:30:30",
    },
    {
      tarefa: "Typescript",
      tempo: "01:00:30",
    },
  ];
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
