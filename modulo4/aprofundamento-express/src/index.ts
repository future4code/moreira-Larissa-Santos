import express from "express";
import { todoList } from "./todoList";


const app = express();

app.use(express.json());

const port = 3333

const server = app.listen (port, () => {
  if (server) {
    
    console.log(`O servidor está rodando em: http://localhost:${port}`);
  } else {
    console.error(`Falha upon starting server.`);
  }
});;


// 1)
app.get("/ping", (req, res) => {          
    res.send("Pong!")
})

//2) / 3)
app.get("/lista", (req, res) => {          
    res.send(todoList)    
})

//4)
app.get("/concluidos", (req, res) => {          
    const concluido = todoList.filter((afazer) => {
        return afazer.completed === true        
    })
     res.send(concluido)    
})

// 5)
app.post("/criando", (req, res) => {          
    const createToDo = {
        userId: Date.now().toString(),
        id: Date.now().toString(),
        title: req.body.title,
        completed: req.body.completed
    }
    console.log(req.body)
    if (!req.body) {
        throw new Error("Não tem body");
    }if(typeof req.body.title !== "string")
        throw new Error("Título");
    const newToDo = [...todoList, createToDo]

    res.status(200).send({newToDo})

    })


    //7)
    app.delete("/lista/:Id", (req, res) => {          
        const Id = Number(req.params.Id);

        const novaLista = todoList.filter((tarefa) => {
            return tarefa.id !== Id
        })
        res.status(220).send(novaLista)
    })
