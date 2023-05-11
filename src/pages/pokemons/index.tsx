import {CardPokemons, PokemonsContainer} from "@/styles/pokemons/styles";
import {PokemonsLayout} from "@/layouts/pokemonsLayout";
import {useContext, useEffect, useState} from "react";
import {PokemonContext} from "@/context/pokemonsContext";
import {api} from "@/services/api";

interface PokemonsProps {
    id: number;
    name: string;
    image: string;
    type: string;
}

export default function Pokemons() {
    const { pokemonsList } = useContext(PokemonContext)
    const [pokemons, setPokemons] = useState<PokemonsProps[]>([])

    console.log(pokemonsList);

    useEffect(() => {
        const fetchPokemonsData = async () => {
            const updatedPokemonsList = await Promise.all(
                pokemonsList.map(async (pokemon) => {
                    const response = await api.get(pokemon.url);
                    const pokemonData = response.data;
                    const { id, name, sprites, types } = pokemonData;
                    const imageUrl = sprites.front_default;
                    const type = types[0].type.name;

                    return {
                        id,
                        name,
                        image: imageUrl,
                        type,
                    };
                })
            );

            setPokemons(updatedPokemonsList);
        };

        fetchPokemonsData().then();
    }, [pokemonsList]);

    useEffect(() => {
        console.log(pokemons);
    }, [pokemons]);


    return (
        <PokemonsContainer>
            {pokemons.map((pokemon) => {
                return (
                    <CardPokemons key={pokemon.id}>
                        <header><span>#{pokemon.id}</span></header>
                        <img src={pokemon.image} alt='' />
                        <footer>
                            <h2>{pokemon.name}</h2>
                        </footer>
                    </CardPokemons>
                )
            })}
        </PokemonsContainer>
    )
}

Pokemons.PageLayout = PokemonsLayout;