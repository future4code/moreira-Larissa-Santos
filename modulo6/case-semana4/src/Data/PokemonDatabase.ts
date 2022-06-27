import { Pokemon } from "../entities/pokemon";
import BaseDatabase from "./basedatabase";


export class PokemonDataBase extends BaseDatabase {

    getAllPokemon = async() => {
        try {
            const result: Pokemon[] = await BaseDatabase.connection.raw(`
                SELECT * FROM pokemon;
            `)
            return result[0]
        } catch (error: any) {
            throw new Error (error.sqlMessage)
        }
    }

    getByName = async(name: string) => {
        try {
            const result: Pokemon[] = await BaseDatabase.connection.raw(`
                SELECT * FROM pokemon WHERE name = "${name}";
            `)
            return result[0]
        } catch (error: any) {
            throw new Error (error.sqlMessage)
        }
    }

    getById = async(id: string) => {
        try {
            const result: Pokemon[] = await BaseDatabase.connection.raw(`
                SELECT * FROM pokemon WHERE id = "${id}";
            `)
            return result[0]
        } catch (error: any) {
            throw new Error (error.sqlMessage)
        }
    }

} 