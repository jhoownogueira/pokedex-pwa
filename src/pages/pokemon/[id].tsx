import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import {api} from "@/services/api";
import {DefaultLayout} from "@/layouts/default";
import {CardPokemons} from "@/styles/pokemons/styles";
import Link from "next/link";

interface PokemonProps {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
}

export default function PokemonPage() {
    const router = useRouter();
    const {id} = router.query;

    const [pokemon, setPokemon] = useState<PokemonProps | null>(null);

    useEffect(() => {
        if (id) {
            api.get(`pokemon/${id}`).then((response) => {
                setPokemon(response.data);
            });
        }
    }, [id]);

    if (!pokemon) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div>
                <h1>{pokemon.name}</h1>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            </div>
            <Link href={`/pokemons`} passHref>Voltar
            </Link></>
    );
};

PokemonPage.PageLayout = DefaultLayout;