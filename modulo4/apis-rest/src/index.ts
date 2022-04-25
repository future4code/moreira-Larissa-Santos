import express, {Request, Response} from 'express'; 
import cors from 'cors';
import { user, users, UserType } from './data';

  

const app = express();

app.use(express.json());
app.use(cors());

// app.get('/test/hello', (req, res) => {
//     res.send(`Olá!`)
//     })


    // Exercício 1
    //a) Deve-se usar o GET 
    //b) Indico utilizar USERS.

app.get('/users', (req: Request, res: Response)=>{
    let codeError: number = 400
     try {
         if(users.length <=0){  //caso não exista users de forma mocada usaria a validação if(!users)
            codeError = 404
            throw new Error("User not found");
         }
         res.status(200).send(users)
     } catch(error) {
         res.status(codeError).send({message: error})
     }
 })


//Exercicio 2

// a) Passei os parametros como typo UserType.

app.get('/users/userType', (req: Request, res: Response)=>{
    let codeError: number = 400
     try {
         const userType: string = (req.params.userType.toUpperCase()) 
         if(!userType){
             codeError = 404
             throw new Error("User not found");
         }
         const user = users.filter((user)=>{
             return user.type === userType
         })
         res.status(200).send(user)
     } catch (error) {
         res.status(codeError).send({message: error})
    }
 })


// Exercicio 3
// a) query params usando name
//b)
app.get('/users/name', (req: Request, res: Response)=>{
    let errorCode: number = 400
    try {
        const name: string = req.query.name as string
        const user = users.filter((user) => user.name === name )

        if(!name){
            errorCode = 404
            throw new Error("User not found");
        }
        res.status(200).send({result:user})
    } catch (error:any) {
        res.status(errorCode).send({message: error.message})
    }
})

// Exercicio 4
//a)
app.post('/users/new', (req: Request, res: Response) => {
    const {name, email, type, age} = req.body;   
    const newUser: user = {
        id: Date.now(),
        name,
        email,
        type,
        age
    };

    users.push(newUser);
    
    res.status(200).send({message: 'User added', list: users});

});
app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});