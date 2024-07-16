export interface Paciente{
    cpf: string,
    nome: string,
    email:string,
    endereco: Endereco;
    senha: string,
    telefone: string;
    possuiPlanoSaude: boolean;
    planosSaude?: number[];
    imagem?: string;
}

export interface Endereco{
    cep: string;
    rua: string;
    numero: number;
    complemento?: string;
    estado: string;
}