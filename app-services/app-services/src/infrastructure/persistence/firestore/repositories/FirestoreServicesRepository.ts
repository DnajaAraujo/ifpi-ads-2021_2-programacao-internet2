import { db } from "..";
import { IUpdateServiceDTO } from "../../../../application/DTO/IUpdateServiceDTO";
import { IServicesRepository } from "../../../../application/repositories/IServicesRepository";
import { Comentario } from "../../../../domain/entidades/Comentario";
import { Servico } from "../../../../domain/entidades/Servico";
import { ServicoComentarios } from "../../../../domain/entidades/ServicoComentarios";

export class FirestoreServicesRepository implements IServicesRepository{
    
    public async all(): Promise <Servico[]> {
        const servicosRef = db.collection('servicos')
        const servicosDoc = await servicosRef.get()
        const servicos = servicosDoc.docs.map(doc=>({id: doc.id, ...doc.data()}))

        return servicos as Servico[]
    }

    public async one(id: string): Promise <ServicoComentarios> {
        const servicoDoc = await db.collection('servicos').doc(id).get()
        
        if (servicoDoc.exists) {
            const comentarioDoc = await db.collection('comentarios').where('idServico', '==', id).get()
            const comentarios = comentarioDoc.docs.map(doc=>({mensagem: doc.data().mensagem}))
            const servico = {id: servicoDoc.id, ...servicoDoc.data(), comentarios: comentarios}

            return servico as ServicoComentarios
        }
    }

    public async save(service: Servico): Promise <Servico> {
        const {titulo, descricao, orcamento, dataCadastro, dataLimite, situacao} = service
        const servico = {titulo, descricao, orcamento: Number(orcamento), dataCadastro, dataLimite, situacao}
        const resultado = await db.collection('servicos').add(servico)
        const servicoRetornado = {id: resultado.id, ...servico}

        return servicoRetornado as Servico
    }

    public async update(id: string, dados: IUpdateServiceDTO): Promise <boolean> {
        const servico = await db.collection('servicos').doc(id).get()
        
        if (!servico.exists) {
            return false
        }
        await db.collection('servicos').doc(id).update(dados)
        return true
    }

    public async mark(id: string, situacao: IUpdateServiceDTO): Promise <boolean> {
        const servico = await db.collection('servicos').doc(id).get()
        
        if (!servico.exists) {
            return false
        }
        await db.collection('servicos').doc(id).update(situacao)
        return true
    }

    public  async comment(id: string, dados: Comentario): Promise <boolean> {
        const servico = await db.collection('servicos').doc(id).get()

        if (!servico.exists) {
            return false
        } else {
            const servicoDados = servico.data()
            const situacaoServico = servicoDados.situacao
            const idServico = id

            if (situacaoServico != "aberto") {
                return false
            }
            const mensagem = dados
            const comentario = {idServico, mensagem}
            await db.collection('comentarios').add(comentario)
            
            return true
        }        
    }

    public async delete(id: string): Promise <boolean> {
        const servico = await db.collection('servicos').doc(id).get()
        
        if (!servico.exists) {
            return false
        }
        await db.collection('servicos').doc(id).delete()
        return true
    }

    public async filterOpen(): Promise <Servico[]> {
        const servicosRef = db.collection('servicos')
        const servicosDoc = await servicosRef.where('situacao', '==', 'aberto').get()
        const servicos = servicosDoc.docs.map(doc=>({id: doc.id, ...doc.data()}))

        return servicos as Servico[]
    }

    public async filterConcluded(): Promise <Servico[]> {
        const servicosRef = db.collection('servicos')
        const servicosDoc = await servicosRef.where('situacao', '==', 'concluído').get()
        const servicos = servicosDoc.docs.map(doc=>({id: doc.id, ...doc.data()}))

        return servicos as Servico[]
    }

    public async filterCanceled(): Promise <Servico[]> {
        const servicosRef = db.collection('servicos')
        const servicosDoc = await servicosRef.where('situacao', '==', 'cancelado').get()
        const servicos = servicosDoc.docs.map(doc=>({id: doc.id, ...doc.data()}))

        return servicos as Servico[]
    }
    
}