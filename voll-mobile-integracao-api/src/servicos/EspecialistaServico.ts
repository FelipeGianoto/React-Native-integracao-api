import api from "./api";

export async function buscarEspecialistaPorEstado(estado: string, especialidade: string) {
    try {
        const resultado = await api.get('/especialista/busca',{
            params: {
                estado: estado,
                especialidade: especialidade
            }
        })
        return resultado.data;
    } catch (error) {
        console.log(error)
    }
}