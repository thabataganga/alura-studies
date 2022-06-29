import React from "react";

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
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <li key={index}>
            <h3>{item.tarefa}</h3>
            <span>{item.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
