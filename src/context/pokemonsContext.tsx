import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {api} from "@/services/api";


interface PokemonsProps {
    name: string;
    url: string;
}

interface IPokemonsContextProps {
    pokemonsList: PokemonsProps[];
}

interface PokemonsProvider {
    children: ReactNode;
}

export const PokemonContext = createContext({} as IPokemonsContextProps);

export const PokemonsContextProvider = ({children} : PokemonsProvider) => {

    const [pokemonsList, setPokemonsList] = useState<PokemonsProps[]>([])


    useEffect(() => {
        api.get('/pokemon?limit=1000000&offset=0').then(response => {
            setPokemonsList(response.data.results)
        })
    }, [])

    return (
        <PokemonContext.Provider
            value={{
                pokemonsList
            }}
        >
            {children}
        </PokemonContext.Provider>
    );
};