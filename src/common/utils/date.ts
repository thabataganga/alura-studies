export function tempoParaSegundos(tempo: string) {
  const [horas = "0", minutos = "0", segundos = "0"] = tempo.split(":");

  const horasEmSegundos = Number(horas) * 3600; //segundos
  const minutosEmSegundos = Number(minutos) * 60; //segundos

  return horasEmSegundos + minutosEmSegundos + Number(segundos);
}
