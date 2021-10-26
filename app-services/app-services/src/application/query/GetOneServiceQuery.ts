import { ServicoComentarios } from "../../domain/entidades/ServicoComentarios";
import { IServicesRepository } from "../repositories/IServicesRepository";

export class GetOneServicesQuery {
    private oneService: IServicesRepository

    constructor(oneService: IServicesRepository) {
        this.oneService = oneService
    }

    public async execute(id: string): Promise <ServicoComentarios> {
        return this.oneService.one(id)
    }

}