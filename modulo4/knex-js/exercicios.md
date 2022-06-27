Exercicios

1)a) O array de resposta vem como table , e coloca o [0] porque a table criada no banco de dados fica na posição zero do array da resposta

b) const searchActor = async (name: string): Promise => { const resultado = await connection .raw(SELECT * FROM Actor WHERE name = "${name}") return resultado[0] }

c) const countActors = async (gender: string): Promise => { const result = await connection .raw(SELECT COUNT(*) FROM Actor WHERE gender = "${gender}");

const count = result[0].count;
return count;
};

a)
const attSalaryActor = async (id: string, salary: number): Promise => { await connection("Actor") .update({ salary: salary, }) .where("id", id); };

b)const deleteActor = async (id: string): Promise => { await connection("Actor") .delete() .where("id", id); };

const averageSalary = async (gender: string): Promise => { const result = await connection("Actor") .avg("salary as average") .where({ gender });

return result[0].average;
};

app.get("/actor", async (req: Request, res: Response) => { try { const count = await countActors(req.query.gender as string); res.status(200).send({ quantity: count, }); } catch (err:any) { res.status(400).send({ message: err.message, }); } });

4)a) app.get("/actor", async (req: Request, res: Response) => { try { const count = await countActors(req.query.gender as string ); res.status(200).send({ gender: count, }); } catch (err:any) { res.status(400).send({ message: err.message }); } });

b)app.delete("/actor/:id", async (req: Request, res: Response) => { try { await deleteActor(req.params.id); } catch (error:any) { res.status(400).send({ message: error.message, }); } });