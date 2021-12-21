import React, { useEffect } from 'react'
import { usePokemonDetails } from './hooks/use-pokemon-details'

function PokemonPureComponent({ url }) {
    const [state, loadPokemon] = usePokemonDetails(url)

    useEffect(() => {
        loadPokemon()
    }, [loadPokemon])
    
    return (
        <React.Fragment>            
            {
                state.isLoading
                ? (<div>Loading...</div>)
                : (
                    <div className="sm:w-full lg:max-w-full">
                        <figure className="w-full md:flex bg-gray-100 rounded-xl p-8 md:p-0">
                            <img alt={state.pokemonData.name}
                                src={state.pokemonData.sprites.front_default}
                                className="w-32 h-32 md-rounded-none rounded-full mx-auto" />
                            <div className="w-32 pt-6 md:p-8 space-y-4">
                                <figcaption className='font-medium'>
                                    <div className="text-cyan-600">
                                        {state.pokemonData.name}
                                    </div>
                                </figcaption>
                            </div>
                        </figure>
                    </div>
                )
            }     
        </React.Fragment>
    )
}

export const Pokemon = React.memo(PokemonPureComponent)
