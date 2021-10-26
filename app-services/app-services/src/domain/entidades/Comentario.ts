export class Comentario {
    id: String
    idServico: String
    mensagem: String

    constructor(props: Omit<Comentario, 'id'>, id?: String) {
        Object.assign(this, props)
    }
}