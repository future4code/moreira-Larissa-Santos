import express, {Request, Response} from 'express'; 
import { comidas } from "./data";

const app = express();
app.use(express.json());

type ObjProd = {
    id:number,
    name:string,
    price:number
}


//1)
app.get("/test", (req, res) => {
    res.status(200).send("A api está funcional!")
})


//3)
app.post("/criaproduto", (req, res) => {

    let nome = req.body.name
    let price = req.body.price

    let produto:ObjProd = {
        id:Date.now(),
        name:nome,
        price:price
    }

    let arrAtt = [...comidas, produto]

    res.status(201).send(arrAtt)

})

//4)
app.get("/retorproducts", (req, res) => {
    res.status(200).send(comidas)
})

//5)
app.put("/priceprodu/:id", (req, res) => {
    const id = Number(req.params.id)
    const body = req.body.price

    comidas.filter((item) => {
        return item.id === id
    })
    .map((item) => {
        item.price=body
        return item
    })
    //let arr = [...comidas, copiaArr]
    res.status(201).send(comidas)
})


//6)
app.delete("/deleta/:id", (req, res) => {
    const id = req.params.id

    const encontraProduto = comidas.find((item) => {
        return item.id === Number(id) 
    })
    if(encontraProduto){
        const produtoNu = comidas.filter((item) => {
            return item.id !== Number(id)
        })
        
        res.send(produtoNu)
    } else {
        throw new Error("Erro")
    }
})
