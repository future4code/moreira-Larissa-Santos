import app from './app'
import { PokemonBusiness } from './business/pokemonbusiness'
import { PokemonController } from './controller/pokemoncontroller'
import { PokemonDataBase } from './data/pokemondatabase'

const pokemonController = new PokemonController(
    new PokemonBusiness(new PokemonDataBase()),   
)

app.get('/pokemons', pokemonController.getAllPokemons)
app.get('/pokemon/name/:name', pokemonController.getPokemonByname)
app.get('/pokemon/id/:id', pokemonController.getPokemonById)