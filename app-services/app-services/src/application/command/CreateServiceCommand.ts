import { ICreateServiceDTO } from "../DTO/ICreateServiceDTO";
import { IServicesRepository } from "../repositories/IServicesRepository";
import { Servico } from "../../domain/entidades/Servico"; 

export class CreateServiceCommand {
    private createServiceRepository: IServicesRepository

    constructor(createServiceRepository: IServicesRepository) {
        this.createServiceRepository = createServiceRepository
    }

    public async execute(data: ICreateServiceDTO): Promise <Servico> {
        const service = new Servico(data)
        return await this.createServiceRepository.save(service)
    }

}