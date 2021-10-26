import { db } from "..";
import { IProfessionalsRepository } from "../../../../application/repositories/IProfessionalsRepository";
import { Profissional } from "../../../../domain/entidades/Profissional";

export class FirestoreProfessionalsRepository implements IProfessionalsRepository{
    public async all(): Promise <Profissional[]> {
        const profissionaisRef = db.collection('profissionais')
        const profissionaisDoc = await profissionaisRef.get()
        const profissionais = profissionaisDoc.docs.map(doc=>({id: doc.id, ...doc.data()}))

        return profissionais as Profissional[]
    }
}