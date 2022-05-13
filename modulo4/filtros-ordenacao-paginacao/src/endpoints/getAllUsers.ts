import { Request, Response } from "express"
import { connection } from "../data/connection"


export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers()
         console.log(users)
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }

       res.status(200).send(users)

    } catch (error) {
       console.log(error)
    }
 }

 export async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, password
       FROM aula49_users;
    `)

    return result[0]}