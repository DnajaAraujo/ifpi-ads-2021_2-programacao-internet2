import { Servico } from "../../domain/entidades/Servico";
import { IServicesRepository } from "../repositories/IServicesRepository";

export class GetCanceledServicesQuery {
    private serviceRepository: IServicesRepository

    constructor(serviceRepository: IServicesRepository) {
        this.serviceRepository = serviceRepository
    }

    public async execute(): Promise <Servico[]> {
        return this.serviceRepository.filterCanceled()
    }

}