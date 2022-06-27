USE `moreira-21712482-larissa-santos`;

CREATE TABLE Rating ( 
    id VARCHAR(255) PRIMARY KEY, 
    comment TEXT NOT NULL, 
    ratING FLOAT NOT NULL, 
    movies_id VARCHAR(255), 
    FOREIGN KEY (movies_id) REFERENCES Movies(id) 
);

##Exercício 

##a) A chave estrangeira é um identificador que relaciona elementos comuns dispostos em tabelas diversas e os compara.

##b)
INSERT INTO Rating (id, comment, rating, movies_id) VALUES ( "001", "Adorei!", 10, "001" );
INSERT INTO Rating (id, comment, rating, movies_id) VALUES ( "002", "Muito engraçado", 9, "002" );
INSERT INTO Rating (id, comment, rating, movies_id) VALUES ( "003", "Um clássico!", 8, "003" );
INSERT INTO Rating (id, comment, rating, movies_id) VALUES ( "004", "O melhor de todos!", 10, "004" );

##c)Erro 1452: erro na chave estrangeira pois o id do filme não consta no banco. Assim, a relação não é possível.
INSERT INTO Rating (id, comment, rating, movies_id) VALUES ( "005", "Sem comentário porque não vai funcionar", 1, "005");

##d)
ALTER TABLE Movie DROP COLUMN rating;

##e) Erro 1451: Não é possível excluir ou atualizar uma linha pai. O filme está sendo referenciado em outra tabela.
DELETE FROM Movies WHERE id = "001";

## 2)

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
##a)Através do comando acima se pode relacionar atores a filmes.

##b)
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"001",
	"001"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
	"006"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
	"007"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"002",
	"003"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"003",
	"004"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"003",
	"003"
);

##c)Erro 1452: erro na chave estrangeira pois os ids do filme e ator não constam no banco. Assim, a relação não é possível.

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"001",
	"0011"
);

##d)Erro 1451: Não é possível excluir ou atualizar uma linha pai. O filme está sendo referenciado em outra tabela.
DELETE FROM MovieCast WHERE id = "001";

 ##3)
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

##a) ON é uma condição para que possamos obter os valores desejados enquanto retorno.

##b)
SELECT title, m.id as movie_id, r.rating as rating FROM Movies m
INNER JOIN Rating r ON m.id = r.movies_id;

 ##4)

##a)
SELECT m.id as ID, title as Title, r.rating as Rate, r.comment as Comments
FROM Movies m
LEFT JOIN Rating r ON m.id = r.movies_id;

##b)
SELECT m.id as ID_Movie, title as Title, mc.actor_id as ID_Actor
FROM Movies m
RIGHT JOIN MovieCast mc ON mc.movie_id - m.id;

##c)
SELECT m.title, AVG(r.rating) as Rate FROM Movies m
LEFT JOIN Rating r ON m.id = r.movies_id
GROUP BY (m.id);

##5)
SELECT * FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

##a)A query acima retorna todas as informações das tabelas selecionadas. Sem o JOIN, a tabela de atores não seria retornada.

##b)
SELECT m.id AS ID_Movie, title AS Title, a.id as ID_Actor, name AS Name FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

