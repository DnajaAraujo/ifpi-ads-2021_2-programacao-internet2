import { IUpdateServiceDTO } from "../DTO/IUpdateServiceDTO";
import { IServicesRepository } from "../repositories/IServicesRepository";

export class UpdateServiceCommand {
    private updateServiceRepository: IServicesRepository

    constructor(updateServiceRepository: IServicesRepository) {
        this.updateServiceRepository = updateServiceRepository
    }

    public async execute(id: string, data: IUpdateServiceDTO): Promise <boolean> {
        return await this.updateServiceRepository.update(id, data)
    }

}