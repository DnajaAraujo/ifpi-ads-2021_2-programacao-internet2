import { IUpdateServiceDTO } from "../DTO/IUpdateServiceDTO";
import { IServicesRepository } from "../repositories/IServicesRepository";

export class MarkServiceCommand {
    private markServiceRepository: IServicesRepository

    constructor(markServiceRepository: IServicesRepository) {
        this.markServiceRepository = markServiceRepository
    }

    public async execute(id: string, data: IUpdateServiceDTO): Promise <boolean> {
        return await this.markServiceRepository.mark(id, data)
    }

}