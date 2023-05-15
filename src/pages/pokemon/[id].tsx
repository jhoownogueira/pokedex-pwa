import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { DefaultLayout } from "@/layouts/default";
import { PokemonContainer } from "@/styles/pokemon/styles";
import { CaretCircleLeft } from "@phosphor-icons/react";
import Link from 'next/link';

interface PokemonProps {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
    types: {
        type: {
            name: string;
        };
    }[];
    species: {
        name: string;
        url: string;
    };
}

interface SpeciesProps {
    evolution_chain: {
        url: string;
    };
}

interface EvolutionChainProps {
    evolves_to: EvolutionChainProps[];
    species: {
        name: string;
        url: string;
    };
    evolution_details: {
        min_level: number;
    }[];
    chain?: EvolutionChainProps;
}

interface PokemonFormProps {
    sprites: {
        front_default: string;
    };
}

export default function PokemonPage() {
    const router = useRouter();
    const { id } = router.query;

    const [pokemon, setPokemon] = useState<PokemonProps | null>(null);
    const [pokemonType, setPokemonType] = useState<string>("");
    const [evolutionChain, setEvolutionChain] = useState<EvolutionChainProps | null>(null);
    const [evolutions, setEvolutions] = useState<any[]>([]); // Adicione este estado

    useEffect(() => {
        if (id) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
                setPokemon(response.data);
                setPokemonType(response.data.types[0].type.name);
                fetchSpecies(response.data.species.url);
            });
        }
    }, [id]);

    const fetchSpecies = (speciesUrl: string) => {
        axios.get(speciesUrl).then((response) => {
            const speciesData: SpeciesProps = response.data;
            fetchEvolutionChain(speciesData.evolution_chain.url);
        });
    };

    const fetchEvolutionChain = (evolutionChainUrl: string) => {
        axios.get(evolutionChainUrl).then((response) => {
            const evolutionChainData: EvolutionChainProps = response.data;
            setEvolutionChain(evolutionChainData);
        });
    };

    useEffect(() => {
        if (evolutionChain) {
            renderEvolutions(evolutionChain);
        }
    }, [evolutionChain]);

    const fetchPokemonForm = async (url: string) => {
        const response = await axios.get(url);
        return response.data as PokemonFormProps;
    };

    const renderEvolutions = async (evolutionChainData: EvolutionChainProps | null) => {
        if (!evolutionChainData) {
            return;
        }

        const evolutions = [];
        let currentEvolution = evolutionChainData.chain;

        while (currentEvolution) {
            const evolutionName = currentEvolution.species.name;
            const evolutionId = currentEvolution.species.url.split("/")[6];
            const evolutionFormUrl = `https://pokeapi.co/api/v2/pokemon-form/${evolutionId}`;
            const evolutionForm = await fetchPokemonForm(evolutionFormUrl);
            const evolutionImageUrl = evolutionForm.sprites.front_default;

            evolutions.push(
                <li key={evolutionName}>
                    <Link href={`/pokemon/${evolutionId}`} passHref>
                        <img src={evolutionImageUrl} alt={evolutionName} />
                    </Link>
                </li>
            );

            currentEvolution = currentEvolution.evolves_to[0];
        }

        setEvolutions(evolutions); // Armazene as evoluções no estado
    };

    if (!pokemon) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <PokemonContainer type={pokemonType}>
                <header>
                    <h1>{pokemon.name.toUpperCase()}</h1>
                    <CaretCircleLeft size={64} onClick={() => router.push("/pokemons")} />
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </header>

                <footer>
                    <ul>
                        {evolutions} {/* renderize as evoluções a partir do estado */}
                    </ul>
                </footer>
            </PokemonContainer>
        </>
    );
}

PokemonPage.PageLayout = DefaultLayout;