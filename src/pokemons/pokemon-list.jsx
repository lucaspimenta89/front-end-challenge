import React, { useEffect } from 'react'
import { usePokemonList } from './hooks/use-pokemon-list'
import { Pokemon } from './pokemon'

export default function PokemonList() {
    const [pokemonsState, loadPokemons, loadNext] = usePokemonList()

    useEffect(() => {
        loadPokemons()
    }, [loadPokemons])

    return (
        <React.Fragment>
            {
                pokemonsState.isLoading ? (
                    <span>Loading Pokemons....</span>
                ) : (
                    <div className="p-10 sm:p-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                        {
                            pokemonsState.pokemons.map((pokemon) => (
                                <Pokemon
                                    key={pokemon.name}
                                    url={pokemon.url} />

                            ))
                        }
                        <div className="w-full h-32 bg-gray-100 flex flex-col justify-center content-center items-center">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-full h-14 w-14 inline-flex items-center" onClick={() => loadNext()}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )
            }
        </React.Fragment>
    )
}
