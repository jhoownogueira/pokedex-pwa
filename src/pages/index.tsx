import Head from "next/head";
import {MagnifyingGlass} from "@phosphor-icons/react";
import {HomeContainer} from "@/styles/homeStyles";

export default function Home() {

  return (
      <>
        <Head>
          <title>Pokédex | PWA</title>
          <meta name="author" content="Jhonata Nogueira" />
          <meta name="creator" content="Jhonata Nogueira" />
          <meta name="title" content="Pokédex | PWA" />
        </Head>
        <HomeContainer>
            <header>
                <span>Selecione o seu</span>
                <span><strong>Pokémon</strong></span>
            </header>
            <section className="search-pokemon">
                <label><MagnifyingGlass size={16} weight="bold" /></label>
                <input type="text" placeholder="Pesquisar" />
            </section>
        </HomeContainer>
      </>
  );
}