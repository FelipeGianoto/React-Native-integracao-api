import api from "./api";

export async function fazerLogin(email : string, senha : string) {
    if(!email || !senha) return null;
    try{
        const resultado = await api.post('/auth/login', {
            email,
            senha
        });
        console.log(resultado)
        return resultado.data;
    }catch(error){
        console.log(error)
        return null;
    }
}