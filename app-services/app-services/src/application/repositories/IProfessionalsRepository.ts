import { Profissional } from "../../domain/entidades/Profissional";

export interface IProfessionalsRepository {
    all(): Promise <Profissional[]>
}