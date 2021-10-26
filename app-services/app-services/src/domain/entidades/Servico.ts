export class Servico {
    id: String
    titulo: String
    descricao: String
    orcamento: Number
    dataCadastro: String
    dataLimite: String
    situacao: String

    constructor(props: Omit<Servico, 'id'>, id?: String) {
        Object.assign(this, props)
    }

}