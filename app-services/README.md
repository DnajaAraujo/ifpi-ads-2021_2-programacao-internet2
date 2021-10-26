# Atividade: AppServices (back-end)

- Sistema pessoal e sem autenticação (monousuário) para registro e acompanhamento de serviços a serem feitos;
- Utiliza Arquitetura REST e Clean DDD;
- Utiliza o Firebase Firestore como banco de dados;
- Rotas:
  - Listar todos os  serviços | **/servicos**
  - Listar um serviço | **/servicos/:id**
  - Adicionar serviço | **/servicos/criar**
  - Alterar dados gerais | **/servicos/alterar/:id**
  - Marcar como concluído/cancelado | **/servicos/marcar/:id**
  - Incluir comentário | **/servicos/comentar/:id**
  - Deletar serviço | **/servicos/deletar/:id**
  - Listar o profissional | **/servicos/profissionais**
  - Listar apenas os serviços abertos | **/servicos/filtrar/aberto**
  - Listar apenas os serviços concluídos | **/servicos/filtrar/concluido**
  - Listar apenas os serviços cancelados | **/servicos/filtrar/cancelado**
- Para rodar, digite "**yarn dev:run**".
