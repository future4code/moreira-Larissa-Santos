USE `moreira-21712482-larissa-santos`;

#Exercicio 1

CREATE TABLE Actor(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);

#a)Demais comamndos: DATE- uma data, NOT NULL - valor não pode ser nulo, VARCHAR- numero máximo de caracteres.

SHOW DATABASES;

SHOW TABLES;

#b) Mostrou a tabela do banco e todo conteúdo do schemas.

DESCRIBE Actor;

#c) Decreveu os campos da tabela.

#Exercicio 2

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

#a)
INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES("002", 
"Glória Pires", 
1200000, "1963-08-23",
 "female");

#b)  Código de erro: 1062. Duplicado entrada '002' para chave 'PRIMARY' 
 INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"002", 
"Larissa Manoella",
1200000,
"1984-08-23",
"female"
);
 
 #c) Código de erro: 1136. A contagem de colunas não contagem de valor de correspondência
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

#d) Código do erro: 1364. O campo name não possui um padrao.
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

# e) Código do erro: 1292. Valor de data incorreto : '1950' para a coluna 'birth_date' .
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

#f)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Giovanna Antonelli",
  40000,
  "1990-06-07", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Lima Duarte",
  0,
  "1960-08-02", 
  "male"
);

#Exercicio 3

SELECT * FROM Actor;
SELECT id, salary from Actor ;
SELECT id, name from Actor WHERE gender = "male";

#a) 
SELECT id, name from Actor WHERE gender = "female";

#b)
SELECT salary from Actor WHERE name = "Tony Ramos";

#c) Retornou null porque não há esse gênero na tabela.
SELECT * FROM Actor WHERE gender = "invalid";

#d)
SELECT id, name, salary FROM Actor WHERE salary <= 500000;

#e) O parâmetro nome nao existe, o correto é name.

#Exercicio 4

#a) Retorna todos os atores e atrizes, onde nome começa com A ou J e o salário é maior que 300000.

#b) 
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

#c)
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";

#d)
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%a%")
AND (salary BETWEEN 300000 AND 900000);

#Exercicio 5

#a)
CREATE TABLE Filmes(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
sinopse TEXT NOT NULL, #permite um número maior de caracteres qu o varchar
data_de_lançamento DATE NOT NULL,
avaliação  FLOAT NOT NULL
);

#b)
INSERT INTO Filmes (id, name, sinopse, data_de_lançamento, avaliação)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
  "2006-01-06", 
  8
);

#c)
INSERT INTO Filmes (id, name, sinopse, data_de_lançamento, avaliação)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
  "2012-12-27", 
  10
);

#d)
INSERT INTO Filmes (id, name, sinopse, data_de_lançamento, avaliação)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "1984-05-04", 
  8
);

#e)
INSERT INTO Filmes (id, name, sinopse, data_de_lançamento, avaliação)
VALUES(
  "004", 
  "Cidade de Deus",
  "Buscapé um jovem pobre, negro e sensível que cresce em  universo de muita violência.Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos lugares mais violentos do Rio.",
  "2002-08-30", 
  9
);

DESCRIBE Filmes;

SELECT * FROM Filmes;

#Exercicio 6

#a)
SELECT id, name, avaliação from Filmes WHERE id = "004";

#b)
SELECT * from Filmes WHERE name = "Cidade de Deus";

#c)
SELECT id, name, sinopse from Filmes WHERE avaliação >= 7;

#Exercicio 7

#a)
SELECT name from Filmes WHERE name LIKE "%vida%";

