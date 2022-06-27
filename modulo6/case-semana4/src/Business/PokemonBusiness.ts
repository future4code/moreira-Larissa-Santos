import { PokemonDataBase } from "../data/pokemondatabase";


export class PokemonBusiness {
    constructor(
        private pokemonDataBase: PokemonDataBase
    ){}

    getAllPokemons = async() => {
        try {
            const result = await this.pokemonDataBase.getAllPokemon()
            return result
        } catch (error) {
            throw new Error ('OH NO!! TEAM ROCKET STOLE ALL THE POKEMONGOS!')
        }
    }

    getPokemonByName = async (name: string) => {
        try {
            if (!name){
            throw new Error ('You need to fill the name my dude')
        }
        const pokemon = await this.pokemonDataBase.getByName(name)
        return pokemon

        } catch (error) {
            throw new Error('Meh, no pokepoke for you')
        }

    }

    getPokemonById = async (id: string) => {
        try {
            if(!id){
            throw new Error ("The ID kiddo, inform the ID!")
        }
        const pokemon = await this.pokemonDataBase.getById(id)
        return pokemon
        } catch (error) {
            throw new Error('IMPUSSIBRU TO FIND THIS PRUKEMON!')
        }

    }
} 