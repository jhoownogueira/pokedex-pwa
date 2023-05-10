import React from "react";
import {HeaderPokemons} from "@/styles/pageLayouts/pokemonsLayout";

export function PokemonsLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <HeaderPokemons>
                <div className="field">
                    <input type="text" placeholder="Pesquisar" />
                    <img src='/images/headerPokemons/search_icon.svg' alt='' />
                </div>
            </HeaderPokemons>
            {children}
        </>

    )
}