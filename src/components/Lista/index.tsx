import React, { useState } from "react";
import Item from "./Item";
import style from "./Lista.module.scss";

export default function Lista() {
  const [tarefas, setTarefas] = useState([
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
  ]);
  return (
    <aside className={style.listaTarefas}>
      <h2
        onClick={() => {
          //console.log("salve", tarefas);
          setTarefas([
            ...tarefas,
            { tarefa: "Estudar estado", tempo: "05:00:00" },
          ]);
        }}
      >
        Estudos do dia
      </h2>
      <ul>
        {tarefas.map((item, index) => (
          /// ...item trás tudo dentro de item (tempo e tarefa)
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}
