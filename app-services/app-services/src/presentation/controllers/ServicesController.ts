import { Request, Response } from 'express'
import { CommentServiceCommand } from '../../application/command/CommentServiceCommand'
import { CreateServiceCommand } from '../../application/command/CreateServiceCommand'
import { DeleteServiceCommand } from '../../application/command/DeleteServiceCommand'
import { MarkServiceCommand } from '../../application/command/MarkServiceCommand'
import { UpdateServiceCommand } from '../../application/command/UpdateServiceCommand'
import { GetAllServicesQuery } from '../../application/query/GetAllServicesQuery'
import { GetCanceledServicesQuery } from '../../application/query/GetCanceledServicesQuery'
import { GetConcludedServicesQuery } from '../../application/query/GetConcludedServicesQuery'
import { GetOneServicesQuery } from '../../application/query/GetOneServiceQuery'
import { GetOpenServicesQuery } from '../../application/query/GetOpenServicesQuery'
import { FirestoreServicesRepository } from '../../infrastructure/persistence/firestore/repositories/FirestoreServicesRepository'

export class ServicesController {
    
    public async getAll(req: Request, res: Response): Promise <Response> {
        const repoService = new FirestoreServicesRepository()
        const query = new GetAllServicesQuery(repoService)
        const services = await query.execute()
        
        return res.status(200).json(services)
    }

    public async getOne(req: Request, res: Response): Promise <Response> {
        const {id} = req.params
        const data = new FirestoreServicesRepository()
        const service = new GetOneServicesQuery(data)
        const result = await service.execute(id)

        if (!result) {
            return res.status(404).json({msg: "O id digitado não existe"})
        }
        return res.status(200).json(result)
    }

    public async createService(req: Request, res: Response): Promise <Response> {
        const data = new FirestoreServicesRepository()
        const creationService = new CreateServiceCommand(data)
        const service = await creationService.execute(req.body)

        return res.status(201).json(service)
    }

    public async updateService(req: Request, res: Response): Promise <Response> {
        const {id} = req.params
        const data = new FirestoreServicesRepository()
        const updateService = new UpdateServiceCommand(data)
        const result = await updateService.execute(id, req.body)

        if (!result) {
            return res.status(404).json({msg: "O id digitado não existe"})
        }
        return res.status(200).json()
    }

    public async deleteService(req: Request, res: Response): Promise <Response> {
        const {id} = req.params
        const data = new FirestoreServicesRepository()
        const deleteService = new DeleteServiceCommand(data)
        const result = await deleteService.execute(id)

        if (!result) {
            return res.status(404).json({msg: "O id digitado não existe"})
        }
        return res.status(204).json()  
    }

    public async markService(req: Request, res: Response): Promise <Response> {
        const {id} = req.params
        const data = new FirestoreServicesRepository()
        const markService = new MarkServiceCommand(data)
        const result = await markService.execute(id, req.body)

        if (!result) {
            return res.status(404).json({msg: "O id digitado não existe"})
        }
        return res.status(200).json()
    }

    public async commentService(req: Request, res: Response): Promise <Response> {
        const {id} = req.params
        const data = new FirestoreServicesRepository()
        const commentService = new CommentServiceCommand(data)
        const result = await commentService.execute(id, req.body.mensagem)

        if (!result) {
            return res.status(404).json({msg: "O id digitado não existe ou o serviço já está concluído/cancelado"})
        }
        return res.status(200).json()
    }

    public async getOpenServices(req: Request, res: Response): Promise <Response> {
        const repoService = new FirestoreServicesRepository()
        const query = new GetOpenServicesQuery(repoService)
        const services = await query.execute()
        
        return res.status(200).json(services)
    }

    public async getConcludedServices(req: Request, res: Response): Promise <Response> {
        const repoService = new FirestoreServicesRepository()
        const query = new GetConcludedServicesQuery(repoService)
        const services = await query.execute()
        
        return res.status(200).json(services)
    }

    public async getCanceledServices(req: Request, res: Response): Promise <Response> {
        const repoService = new FirestoreServicesRepository()
        const query = new GetCanceledServicesQuery(repoService)
        const services = await query.execute()
        
        return res.status(200).json(services)
    }


}