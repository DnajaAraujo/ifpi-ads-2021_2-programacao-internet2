import { IServicesRepository } from "../repositories/IServicesRepository";

export class DeleteServiceCommand {
    private deleteServiceRepository: IServicesRepository

    constructor(deleteServiceRepository: IServicesRepository) {
        this.deleteServiceRepository = deleteServiceRepository
    }

    public async execute(id: string): Promise <boolean> {
        return await this.deleteServiceRepository.delete(id)
    }

}