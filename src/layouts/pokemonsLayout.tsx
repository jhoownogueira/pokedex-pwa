import React, {useState} from "react";
import {HeaderPokemons} from "@/styles/pageLayouts/pokemonsLayout";
import {MagnifyingGlass, X} from "@phosphor-icons/react";

export function PokemonsLayout({children, onSearch,}: { children: React.ReactNode; onSearch: (searchTerm: string) => void; }) {

    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        if (searchTerm.trim() !== "") {
            onSearch(searchTerm);
        }
    };

    const handleClear = () => {
        setSearchTerm("");
        onSearch("");
    };

    return (
        <>
            <HeaderPokemons>
                <div className="top">
                    <div className="field">
                        <input
                            type="text"
                            placeholder="Pesquisar"
                            value={searchTerm}
                            onChange={handleInputChange}
                        />
                    </div>

                    <button className="buscar" onClick={handleSearch}>
                        <MagnifyingGlass size={24} />
                    </button>
                    <button className="limpar" onClick={handleClear}>
                        <X size={24} />
                    </button>
                </div>

                <div className="buttons">
                    <button className="filtro">
                        <span>FILTRO</span>
                    </button>
                </div>
            </HeaderPokemons>
            {children}
        </>

    )
}