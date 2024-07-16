import api from "./api";

export async function agendarConsulta(data: Date, especialistaId: string, pacienteId: string){
    try {
        const resultado = await api.post('/consulta', {
            especialistaId: especialistaId,
            pacienteId: pacienteId,
            data: data,
        })

        return resultado.data
    } catch (error) {
        console.log(error)
        return null;
    }
}