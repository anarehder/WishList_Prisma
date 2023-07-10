# WishList-POC

### Esta API foi criada para uso pessoal, onde é possível criar uma lista de filmes que você deseja assistir, colocando se realmente já foi visto e caso tenha sido você pode adicionar estrelas e um comentário para se lembrar detalhes como se você gostou, se deseja assistir novamente, etc.

### Para isso ao utiliza-la você deve utilizar as configurações para criar um banco local nas configurações abaixo no seu arquivo .env na raiz do projeto:
<br>
    DB_USER= seu usuario no banco <br>
    DB_PASSWORD= sua senha do banco <br>
    DB_HOST= endereco do banco <br>
    DB_PORT= porta do banco <br>
    DB_NAME= nome do banco <br>
<br>
    DATABASE_URL=postgresql://DB_USER:DB_PASSWORD@DB_HOST:DB_PORT/DB_NAME?schema=public
<br>

**Por ser uma plataforma de uso pessoal é permitido apenas um review por item**

## SEED: 
Esta api já insere automaticamente através do comando:
**npm run seed**

Duas plataformas de streaming: netflix - ID = 1 e primevideo - ID = 2


Dois tipos de produtos: filmes - ID = 1  e séries - ID = 2

## FILMES:

**GET -> /items** - lista todos os filmes/series junto com seus reviews inseridos no banco no formato abaixo.

Items = { <br>
  - id: number;<br>
  - name: string; <br>
  - streaming_id: number; <br>
  - type_id: number <br>
  - genre: string; <br>
  - status: boolean;<br>
  - reviews: { <br>
      - id: number; <br>
      - item_id: number; <br>
      - stars: number;<br>
      - comments: string; <br>
  }

  
};

<br>

**GET -> /items/number** - retorna o total de filmes/series já adicionados ao banco.

**POST -> /items** - insere no banco o filme/serie que você deseja assistir, para isso o body deve ter formato:

body = { <br>
  - name: string; <br>
  - streaming_id: number; <br>
  - type_id: number <br>
  - genre: string; <br>
 
};

O status é criado automaticamente como falso.

<br>

**PUT -> /items/:id** - edita as informações do filme/serie com o id desejado, deve receber um body contendo todos os dados como ao criar um novo filme.

**DELETE -> /items/:id** - deleta do banco o filme/serie com o id desejado.

## REVIEWS:

**GET -> /itemsReview** - lista todos os reviews inseridos no banco no formato abaixo.

MovieReview = { <br>
  - id: number; <br>
  - movie_id: number; <br>
  - stars: number; <br>
  - comments: string; <br>
 
};

<br>


**GET -> /itemsReview/get/:id** - lista todos o review inserido no banco para o id do filme desejado.

**POST -> /itemsReview/create/:id** - insere no banco o review do filme/serie alterando o status do filme/serie para true. O ID enviado deve ser o id do filme/serie a receber o review. O body enviado deve ter formato abaixo e as estrelas devem ser numeros inteiros entre 1 e 5.


Review = { <br>
  - item_id: number; <br>
  - stars: number; <br>
  - comments: string; <br>
 
};

<br>


**PUT -> /itemsReview/edit/:id** - edita as informações da review com o id desejado, deve receber um body contendo todos os dados como ao criar uma nova review. O ID enviado na rota deve ser o id do review a ser editado.


**DELETE -> /itemsReview/delete/:id** - deleta o review com o id desejado. O ID informado na rota deve ser do review a ser deletado. Automaticamente o status do filme/serie é alterado para false.

### SUCESSOS!

- Para as requisicoes GET de filmes e reviews será retornado status OK - 200 no caso de existirem dados a ser retornados.

- Para as requisições PUT de filmes e reviews será retornado o status ACCEPTED - 202 quando os itens forem alterados com sucesso.

- Para as requisições POST de filmes e reviews será retornado o status CREATED - 201 quando os itens forem adicionados ao banco com sucesso.



### ERROS!

- Para todas as requisições em caso de não existir nada cadastrado no banco ainda é retornada a mensagem: There are no items yet!

- Quando o valor for inválido, id inexistente no banco por exemplo, e não for possivel encontra-lo no banco será retornada a mensagem: No result for this search!

- Para dados inválidos ou outras validações existentes serão retornados os erros contendo os detalhes.

