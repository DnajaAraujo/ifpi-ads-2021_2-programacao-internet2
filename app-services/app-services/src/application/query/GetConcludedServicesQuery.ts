import { Servico } from "../../domain/entidades/Servico";
import { IServicesRepository } from "../repositories/IServicesRepository";

export class GetConcludedServicesQuery {
    private serviceRepository: IServicesRepository

    constructor(serviceRepository: IServicesRepository) {
        this.serviceRepository = serviceRepository
    }

    public async execute(): Promise <Servico[]> {
        return this.serviceRepository.filterConcluded()
    }

}