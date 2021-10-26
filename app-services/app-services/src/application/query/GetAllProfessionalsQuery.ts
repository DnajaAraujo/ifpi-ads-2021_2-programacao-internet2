import { Profissional } from "../../domain/entidades/Profissional";
import { IProfessionalsRepository } from "../repositories/IProfessionalsRepository";

export class GetAllProfessionalsQuery {
    private serviceRepository: IProfessionalsRepository

    constructor(serviceRepository: IProfessionalsRepository) {
        this.serviceRepository = serviceRepository
    }

    public async execute(): Promise <Profissional[]> {
        return this.serviceRepository.all()
    }

}