import { Comentario } from "../../domain/entidades/Comentario";
import { Servico } from "../../domain/entidades/Servico";
import { ServicoComentarios } from "../../domain/entidades/ServicoComentarios";
import { IUpdateServiceDTO } from "../DTO/IUpdateServiceDTO";

export interface IServicesRepository {
    all(): Promise <Servico[]>
    one(id: string): Promise <ServicoComentarios>
    save(service: Servico): Promise <Servico>
    update(id: string, data: IUpdateServiceDTO): Promise <boolean>
    mark(id: string, data: IUpdateServiceDTO): Promise <boolean>
    comment(id: string, data: Comentario): Promise <boolean>
    delete(id: string): Promise <boolean>
    filterOpen(): Promise <Servico[]>
    filterConcluded(): Promise <Servico[]>
    filterCanceled(): Promise <Servico[]>
}