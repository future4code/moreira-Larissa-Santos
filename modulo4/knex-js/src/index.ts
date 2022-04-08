import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());


const searchActor = async (name: string): Promise<void> => {
   const resultado = await connection
       .raw(`
     SELECT * FROM Actor WHERE name = "${name}"
   `)
   return resultado[0]
};


const countActors = async (gender: string): Promise<void> => {
   const result = await connection
       .raw(`
     SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
   `);

   const count = result[0][0].count;
   return count;
};

const attSalaryActor = async (id: string, salary: number): Promise<void> => {
   await connection("Actor")
       .update({
           salary: salary,
       })
       .where("id", id);
};

const deleteActor = async (id: string): Promise<void> => {
   await connection("Actor")
       .delete()
       .where("id", id);
};

const averageSalary = async (gender: string): Promise<void> => {
   const result = await connection("Actor")
       .avg("salary as average")
       .where({ gender });

   return result[0][0].average;
};



 
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

