import {CardPokemons, PokemonsContainer} from "@/styles/pokemons/styles";
import {PokemonsLayout} from "@/layouts/pokemonsLayout";
import React, {useContext, useEffect, useState} from "react";
import {PokemonContext} from "@/context/pokemonsContext";
import {api} from "@/services/api";
import {ContainerSpinner, StyledSpinner} from "@/styles/spinner";
import Link from "next/link";

interface PokemonsProps {
    id: number;
    name: string;
    image: string;
    type: string;
}

const typeColors: { [key: string]: string } = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};

export default function Pokemons() {
    const { pokemonsList } = useContext(PokemonContext)
    const [pokemons, setPokemons] = useState<PokemonsProps[]>([])
    const [loading, setLoading] = useState(true);

    console.log(pokemonsList);

    useEffect(() => {
        const fetchPokemonsData = async () => {
            setLoading(true);
            const updatedPokemonsList = await Promise.all(
                pokemonsList.map(async (pokemon) => {
                    const response = await api.get(pokemon.url);
                    const pokemonData = response.data;
                    const { id, name, sprites, types } = pokemonData;
                    const imageUrl = sprites.front_default || sprites.other['official-artwork'].front_default;
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
            setLoading(false);
        };

        fetchPokemonsData().then();
    }, [pokemonsList]);

    if (loading) {
        return (
            <>
            <ContainerSpinner>
                <StyledSpinner viewBox="0 0 50 50">
                    <circle
                        className="path"
                        cx="25"
                        cy="25"
                        r="20"
                        fill="none"
                        strokeWidth="4"
                    />
                </StyledSpinner>
            </ContainerSpinner>
            </>
        )
    }


    return (
        <PokemonsContainer>
            {pokemons.map((pokemon) => {
                return (
                    <Link key={pokemon.id} href={`/pokemon/${pokemon.id}`} passHref>
                    <CardPokemons key={pokemon.id}>
                        <header><span>#{pokemon.id}</span></header>
                        <img src={pokemon.image} alt='' />
                        <footer style={{backgroundColor: typeColors[pokemon.type]}}>
                            <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                        </footer>
                    </CardPokemons>
                    </Link>
                )
            })}
        </PokemonsContainer>
    )
}

Pokemons.PageLayout = PokemonsLayout;