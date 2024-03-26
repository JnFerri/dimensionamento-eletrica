# Funcionalidades da aplicação:
    Aplicação para dimensionamentos dos quadros do setor de elétrica. 

# Utilização:
    Dimensionamento:  
        Formulario para ser preenchido conforme dados do galpão, estas informações ao clicar em gerar quadro serão enviadas para um script em python que pegara todas as informações do formulario e ira calcular conforme as peças cadastradas e retornará as predefinições de peças para montagem do quadro elétrico. Posteriormente com o retorno da Api em python será criado um pdf com todos os dados para montar o quadro elétrico.

    Cadastro: 
        Cadastro de motores, cabos e materiais para criação dos quadros eletricos, Todos os materiais cadastrados ficam salvos na plataforma Jestor, e através de uma API aberta em servidor local ficam disponiveis para obtenção e calculos tanto do script em python como para uso nesta aplicação como podemos ver em Lista de produtos.

# Iniciando a aplicação:
    Aplicação deverá ser iniciada localmente juntamente do servidor local.

# Tecnologias: 
    Aplicação construida em reactJS. Servidor em NodeJS.

