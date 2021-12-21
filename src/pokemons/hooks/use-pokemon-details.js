import { useCallback, useState } from 'react'

export function usePokemonDetails(pokemonUrl) {
    const [state, setState] = useState({
        isLoading: true,
        pokemonData: null,
        error: null
    })

    const loadDetails = useCallback(async () => {
        setState((currentState) => ({
            ...currentState,
            isLoading: true
        }))

        try {
            const pokemonApiResponse = await fetch(pokemonUrl)

            if (pokemonApiResponse.ok) {
                const pokemonData = await pokemonApiResponse.json()

                return setState((currentState) => ({
                    ...currentState,
                    isLoading: false,
                    pokemonData
                }))
            }

            throw Error('Invalid API response.')
        } catch (ex) {
            setState((currentState) => ({
                ...currentState,
                isLoading: false,
                pokemonData: null,
                error: ex.message
            }))
        }
    }, [setState, pokemonUrl])

    return [state, loadDetails]
}
