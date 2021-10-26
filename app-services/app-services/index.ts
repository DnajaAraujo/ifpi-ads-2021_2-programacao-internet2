import express from 'express'
import cors from 'cors'
import './src/infrastructure/persistence/firestore'
import { ServicesController } from './src/presentation/controllers/ServicesController'
import { ProfessionalsController } from './src/presentation/controllers/ProfessionalsController'

const app = express()

app.use(express.json())
app.use(cors())

const servicesController = new ServicesController()
const professionalsController = new ProfessionalsController()


// Listar todos os serviços
app.get('/servicos', servicesController.getAll)

// Listar um serviço
app.get('/servicos/:id', servicesController.getOne)

// Adicionar serviço
app.post('/servicos/criar', servicesController.createService)

// Alterar dados gerais do serviço
app.put('/servicos/alterar/:id', servicesController.updateService)

// Marcar como Concluído/Cancelado
app.put('/servicos/marcar/:id', servicesController.markService)

// Incluir comentário 
app.post('/servicos/comentar/:id', servicesController.commentService)

// Deletar serviço
app.delete("/servicos/deletar/:id", servicesController.deleteService)

// Listar profissional
app.get('/profissionais', professionalsController.getAll)

// Listar apenas serviços abertos
app.get('/servicos/filtrar/aberto', servicesController.getOpenServices)

// Listar apenas serviços concluídos
app.get('/servicos/filtrar/concluido', servicesController.getConcludedServices)

// Listar apenas serviços cancelados
app.get('/servicos/filtrar/cancelado', servicesController.getCanceledServices)




app.listen(4000, () => {
    console.log("App running *4000...")
})
