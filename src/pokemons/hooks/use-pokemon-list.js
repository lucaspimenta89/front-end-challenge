import { useState, useCallback } from 'react'

const POKEMON_DEFAULT_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10'

export function usePokemonList() {
    const [state, setState] = useState({
        isLoading: false,
        pokemons: [], // { name: string, url: string }[]
        error: null, // string
        nextUrl: null // string
    })

    const loadPokemons = useCallback(async (url = POKEMON_DEFAULT_URL, displayLoading = true) => {
        if (displayLoading) {
            setState((currentState) => ({
                ...currentState,
                isLoading: true
            }))
        }

        try {

            // TODO: Implement the HTTP request here in order to retrieve the next slice of Pokemons list from
            // the API.

        } catch (ex) {
            setState((currentState) => ({
                ...currentState,
                isLoading: false,
                nextUrl: null,
                pokemons: [],
                error: ex.message
            }))
        }
    }, [])

    const loadNext = useCallback(() => {
        if (state.nextUrl) {
            loadPokemons(state.nextUrl, false)
        }
    }, [state, loadPokemons])

    return [state, loadPokemons, loadNext]
}
