import {CardPokemons, PokemonsContainer} from "@/styles/pokemons/styles";
import {PokemonsLayout} from "@/layouts/pokemonsLayout";
import React, {useContext, useEffect, useState} from "react";
import {PokemonContext} from "@/context/pokemonsContext";
import {api} from "@/services/api";
import {ContainerSpinner, StyledSpinner} from "@/styles/spinner";
import Link from "next/link";
import {ContainerNotFound, NotFound} from "@/styles/notFound";
import {CaretLeft, CaretRight} from "@phosphor-icons/react";

interface PokemonsProps {
    id: number;
    name: string;
    image: string;
    type: string;
}

interface PokemonAPIProps {
    name: string;
    url: string;
}

const typeColors: { [key: string]: string } = {
    fire: '#F080304D',
    grass: '#74CB484D',
    electric: '#F8D0304D',
    water: '#6890F04D',
    ground: '#E0C0684D',
    rock: '#B8A0384D',
    fairy: '#DEA5DE4D',
    poison: '#A040A04D',
    bug: '#A8B8204D',
    dragon: '#7038F84D',
    psychic: '#E853804D',
    flying: '#A890F04D',
    fighting: '#C030284D',
    normal: '#A8A8784D',
    steel: '#B8B8D04D',
    ice: '#98D8D84D',
    dark: '#7058484D',
    ghost: '#7058984D'
};

export default function Pokemons() {
    const { pokemonsList: initialPokemonsList } = useContext(PokemonContext)
    const [pokemons, setPokemons] = useState<PokemonsProps[]>([])
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("");

    const handleSearch = (searchTerm: string) => {
        setSearchTerm(searchTerm.toLowerCase());
    };

    const handleFilter = (filterType: string) => {
        setFilterType(filterType.toLowerCase());
    };

    const loadMorePokemons = () => {
        setOffset((prevOffset) => prevOffset + 21);
    };

    const loadPreviousPokemons = () => {
        setOffset((prevOffset) => Math.max(prevOffset - 21, 0));
    };

    const fetchPokemons = async () => {
        try {
            const response = await api.get(`/pokemon/${searchTerm}`);
            const pokemonData = response.data;
            const { id, name, sprites, types } = pokemonData;
            const imageUrl =
                sprites.front_default ||
                sprites.other['official-artwork'].front_default;
            const type = types[0].type.name;

            const pokemon = {
                id,
                name,
                image: imageUrl,
                type,
            };

            setPokemons([pokemon]);
        } catch (error) {
            setPokemons([]);
        }
    };

    const fetchPokemonsData = async () => {
        setLoading(true);

        let url = "";

        if (filterType) {
            url = `/pokemon?limit=1000000&offset=${offset}`;
        } else {
            url = `/pokemon?limit=21&offset=${offset}`;
        }

        const response = await api.get(url);
        const newPokemonsList = response.data.results;

        const updatedPokemonsList = await Promise.all(
            newPokemonsList.map(async (pokemon: PokemonAPIProps) => {
                const response = await api.get(pokemon.url);
                const pokemonData = response.data;
                const { id, name, sprites, types } = pokemonData;
                const imageUrl =
                    sprites.front_default ||
                    sprites.other['official-artwork'].front_default;
                const type = types[0].type.name;

                return {
                    id,
                    name,
                    image: imageUrl,
                    type,
                };
            })
        );

        const filteredPokemonsList = filterType
            ? updatedPokemonsList.filter((pokemon) => pokemon.type.toLowerCase() === filterType)
            : updatedPokemonsList;

        setPokemons(filteredPokemonsList);
        setLoading(false);
    };

    useEffect(() => {
        if (!searchTerm) {
            fetchPokemonsData().then();
        }
    }, [offset]);

    useEffect(() => {
        if (searchTerm) {
            fetchPokemons().then();
        } else {
            fetchPokemonsData().then();
        }
    }, [searchTerm, filterType]);


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
        <PokemonsLayout onSearch={handleSearch} onFilter={handleFilter}>
            {pokemons.length === 0 ?
                <>
                    <ContainerNotFound>
                        <NotFound />
                        <h1>Pokémon não encontrado</h1>
                    </ContainerNotFound>
                </>

                :

                <PokemonsContainer>
                <div className="grid">
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
                </div>
                <div className="pagination">
                    <button onClick={loadPreviousPokemons} disabled={offset === 0}>
                        <CaretLeft size={24} />
                    </button>
                    <button onClick={loadMorePokemons}><CaretRight size={24} /></button>
                </div>
            </PokemonsContainer>}
        </PokemonsLayout>
    )
}

Pokemons.PageLayout = PokemonsLayout
