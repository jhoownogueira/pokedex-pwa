import React from "react";
import {HeaderPokemons} from "@/styles/pageLayouts/pokemonsLayout";

export function PokemonsLayout({ children, onSearch }: { children: React.ReactNode; onSearch: (searchTerm: string) => void }) {
    return (
        <>
            <HeaderPokemons>
                <div className="field">
                    <input type="text" placeholder="Pesquisar" onChange={(e) => onSearch(e.target.value)} />
                    <img src='/images/headerPokemons/search_icon.svg' alt='' />
                </div>

                <div className='buttons'>
                    <button>
                        <span>FILTRO</span>
                    </button>
                </div>
            </HeaderPokemons>
            {children}
        </>

    )
}