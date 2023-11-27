# Desafio-CRUD

Pré-requisitos
Antes de iniciar, certifique-se de ter instalado:

Node.js e npm (para o frontend Angular)
PHP e Composer (para o backend Laravel)
PostgreSQL (ou outro banco de dados compatível)
Configuração do Ambiente
Frontend (Angular)

Navegue até o diretório frontend:
cd frontend

Instale as dependências do projeto:
npm install
Backend (Laravel)

Navegue até o diretório backend:
cd backend

Instale as dependências do projeto:
composer install

Copie o arquivo de ambiente de exemplo:
cp .env.example .env
Configure o arquivo .env com as credenciais do banco de dados PostgreSQL.

Execute as migrações para criar as tabelas no banco de dados:
php artisan migrate
Iniciando o Servidor
Frontend (Angular)

Dentro do diretório frontend, execute o servidor de desenvolvimento:
npm start
Acesse o frontend em http://localhost:4200.

Backend (Laravel)
Dentro do diretório backend, inicie o servidor local:
php artisan serve
O backend estará disponível em http://localhost:8000.

Utilização
Acesse a aplicação no navegador para interagir com a interface do usuário.
Utilize as rotas da API para acessar e manipular os dados (por exemplo, http://localhost:8000/api/products para produtos).
