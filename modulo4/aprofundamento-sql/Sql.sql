USE `moreira-21712482-larissa-santos`;

SET SQL_SAFE_UPDATES = 0;

DESCRIBE Filmes;
SELECT * FROM Actor;
SELECT * FROM Filmes;

##Exercício 1

##a) O comomando deleta a coluna salary da tabela Actor.

##b)Modifica o nome da coluna gender para sex.

##c)Modifica o tipo dos valores recebidos na coluna gender varchar(255), mantendo o nome da coluna.

##d)
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

##Exercício 2

##a)
UPDATE Actor
SET birth_date = "1930-10-19"
WHERE id = "003";

##b)
UPDATE Actor
SET name = "JULIANA PAES" 
WHERE name = "Juliana Paes";

UPDATE Actor 
SET name = "Juliana Paes" 
WHERE name = "JULIANA PAES";

##c)
UPDATE Actor
SET name = UPPER(name), salary = 1500000, birth_date = "1978-03-26", gender = "male"
WHERE id = "005";

##d) Resultado: Código de erro: 1175. Você está usando o modo de atualização segura e você tentou atualizar uma tabela sem um WHERE que usa uma coluna KEY. Não é possível usar o acesso de intervalo no índice 'PRIMARY' devido à conversão de tipo ou agrupamento no campo 'id' Para desabilitar o modo de segurança, alterne a opção em Preferências -> Editor SQL e reconecte.
UPDATE Actor
SET name = UPPER(name), salary = 1500000, birth_date = "1978-03-26", gender = "male"
WHERE id = 100;

##Exercício 3

##a)
DELETE FROM Actor
 WHERE name = "Fernanda Montenegro";

##b)
DELETE FROM Actor
WHERE gender = "male" AND salary > 100000000;

##Exercício 4

##a)
SELECT MAX(salary) FROM Actor;

##b)
SELECT MIN(salary) FROM Actor WHERE gender = "female";

##c)
SELECT COUNT(*) FROM Actor WHERE gender = "female";

##d)
SELECT SUM(salary) FROM Actor;

##Exercício 5

##a) É feito a contagem de quantos atores existem ao considerar o gênero, montando uma tabela com a contagem de atores para o os gêneros separados.

##b)
SELECT id
FROM Actor
ORDER BY name DESC;

##c)
SELECT *
FROM Actor
ORDER BY salary DESC;

##d)
SELECT *
FROM Actor
ORDER BY salary DESC LIMIT 3;

##e)
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;

##Exercício 6

##a)
ALTER TABLE Filmes ADD playing_limit_date DATE;

##b)
ALTER TABLE Filmes CHANGE avaliação avaliação FLOAT;

##c)
UPDATE Filmes 
SET playing_limit_date = "2020-05-13" 
WHERE id = "002";

UPDATE Filmes 
SET playing_limit_date = "2021-08-29"
WHERE id = "003";

##d) Como o item de id 003 havia sido deletado, a atualização da sinopse desse item resultou em 0 linhas afetadas pois não há a correspodência com nenhum id.

DELETE FROM Filmes WHERE id = "003";

