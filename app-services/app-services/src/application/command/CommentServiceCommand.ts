import { Comentario } from "../../domain/entidades/Comentario";
import { IServicesRepository } from "../repositories/IServicesRepository";

export class CommentServiceCommand {
    private commentServiceRepository: IServicesRepository

    constructor(commentServiceRepository: IServicesRepository) {
        this.commentServiceRepository = commentServiceRepository
    }

    public async execute(id: string, data: Comentario): Promise <boolean> {
        return await this.commentServiceRepository.comment(id, data)
    }

}