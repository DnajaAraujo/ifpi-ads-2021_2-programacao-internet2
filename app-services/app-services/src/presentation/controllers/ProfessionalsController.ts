import { Request, Response } from 'express'
import { GetAllProfessionalsQuery } from '../../application/query/GetAllProfessionalsQuery'
import { FirestoreProfessionalsRepository } from '../../infrastructure/persistence/firestore/repositories/FirestoreProfessionalsRepository'

export class ProfessionalsController {
    
    public async getAll(req: Request, res: Response): Promise <Response> {
        const repoProfessional = new FirestoreProfessionalsRepository()
        const query = new GetAllProfessionalsQuery(repoProfessional)
        const professionals = await query.execute()
        
        return res.status(200).json(professionals)
    }

}