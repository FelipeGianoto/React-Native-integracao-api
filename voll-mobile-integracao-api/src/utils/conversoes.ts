export function converterStringParaData(dateString: string) {
    const [dia, mes, anoEHora] = dateString.split("/");
    const [ano, hora] = anoEHora.split(" ");
    const [horas, minutos] = hora.split(":");
  
    const dataConvertida = new Date(Number(ano), Number(mes) - 1, Number(dia), Number(horas), Number(minutos));
  
    return dataConvertida;
  }