
# Dimensionamento elétrica

Aplicação tem como objetivo pegar informações sobre o galpão de criação de aves ou suinos e a partir destas informações retornar de forma automática um PDF especificando todos os produtos elétricos necessarios para produção do quadro elétrico.

### Funcionamento: 

Ao fazer login na aplicação será direcionado a pagina de dimensionamento com um formulário para ser preenchido com as informações do galpão e equipamentos utilizados. Ao enviar o formulario as informações serão enviadas ao backend produzido pela elétrica em um arquivo Json para que sejá feito os calculos em python e retorne a informação dos produtos elétricos que deverão ser utilizados para criação do painel elétrico e sistema elétrico do galpão.

Obs: No momento o backend da elétrica não foi produzido pois o responsável não faz mais parte da equipe da avioeste. 

No momento o formulário ao ser enviado baixa um arquivo pdf com as informações captadas pelo formulario e baixa o arquivo json com os dados.

Os produtos de elétrica que serão utilizados pelo backend para fazer os calculos podem ser cadastrados na aba de cadastro e podem ser visualizados na aba de lista de materiais. Os dados dos produtos cadastrados ficam salvos em tabelas no jestor e os formularios de cadastro são links publicos dos aplicativos de formulario do jestor anexados a pagina.

Vejá abaixo um esquema de funcionamento da aplicação : 

![Minha Imagem](image/projeto_esquema.png)









## Stack utilizada

**Front-end:** React , Styled-Components , react-router-dom

**Back-end:** Node, Express

**Banco de dados** Jestor ( Tabelas jestor salvam informações dos produtos. )


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`PORT` representa a porta que o servidor rodara a aplicação em teste.

`REACT_APP_BACKEND_URL` url do servidor backend. Utilizado atualmente http://srv-services:3010.



## Instalação

 Primeiramente é necessario que esteja instalado em seu computador o nodejs, https://nodejs.org/.

 - Instale as dependencias do projeto. Acesse a pasta do arquivo através do console e utilize o comando ' npm install ' para instalar.

 - Atualize as dependencias com o comando ' npm update '.

 - Crie um arquivo chamado .env na raiz do projeto e nele configure as variaveis de ambiente descritas acima.

- Para funcionar é necessario estar rodando o servidor backend para fazer login e enviar as informações do formulário.

## Rodando localmente para desenvolvimento

- Inicie o servidor backend de teste localmente na porta 3010.

- Altere a variavel de ambiente `REACT_APP_API_URL` para 'http://localhost:3010'.

Instale as dependencias caso ainda não tenham sido instaladas :

```
npm install
```

Inicie a aplicação localmente :

```
npm start
```


## Criando build e fazendo deploy

Verifique se as variaveis de ambiente do arquivo .env estão com a variavel `REACT_APP_BACKEND_URL` conforme o caminho para o servidor backend de produção.

Verifique se o servidor de produção esta rodando, caso não estiver acesse a pasta do backend e inicie o servidor pelo arquivo .bat ou com o comando 

```
npm start
```

ou 

```
node server.js
```

Para criar o arquivo build que é o projeto otimizado para rodar : 

```
npm run build
```

Para iniciar o projeto e colocar ele em produção, após criar o build utilize o comando,  sendo o ' -l 3011 ' a porta que rodará :

```
serve -s build -l 3011
```

Pode ser utilizado o arquivo .bat na raiz do projeto para iniciar a aplicação.

## Login

#### Faz a conferencia de login

Apenas um usuario existe, login serve apenas para reforçar a segurança. Confere se usuario e senha são corretos e retorna true ou false.

```http
  POST /autorizacao/dimensionamentoEletrica
```
Body :

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `usuario`      | `string` |  Nome usuario |
| `senha`      | `string` |  Senha do usuario |

## Pegar dados dos produtos cadastrados

#### Dados dos produtos cadastrados no jestor.

Pega todos os dados de uma tabela jestor através do backend.

```http
  POST /api/jestor/lista
```
Body:

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `object_tipe`      | `string` | **Obrigatorio** Tabela do jestor, por exemplo : na tabela https://avioeste.jestor.com/object/5muv_jyyr_iwebjtzifct o object_tipe é '5muv_jyyr_iwebjtzifct'. |
| `sort`      | `string` |  Coluna jestor que servira de ordenador do resultado. |
| `page`      | `string` |  Pagina de captura dos dados. |
| `size`      | `string` |  Quantidade de registros que será retornado na pagina. |



