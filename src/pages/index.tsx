import Head from "next/head";
import {HomeContainer} from "@/styles/homeStyles";
import Link from "next/link";

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
            <section>
                <header>
                    <div className="spearker-display">
                        <div className="spearker-square square-blue"></div>
                        <div className="spearker-square square-blue-sky"></div>
                        <div className="spearker-square square-blue"></div>
                        <div className="spearker-square square-blue-sky"></div>
                        <div className="spearker-square square-white"></div>
                        <div className="spearker-square square-blue-sky"></div>
                        <div className="spearker-square square-blue"></div>
                        <div className="spearker-square square-blue-sky"></div>
                        <div className="spearker-square square-blue"></div>
                    </div>
                    <div className="spearker-led">
                        <div className="spearker-square square-red"></div>
                        <div className="spearker-square square-yellow"></div>
                        <div className="spearker-square square-green"></div>
                    </div>
                </header>

                <section className="hr-top">
                    <img src='/images/pokedex/hr-top.svg' alt="" />
                </section>
                <h1>Pokédex</h1>

                <section className="led">
                    <img src="/images/pokedex/led.svg" alt="" />
                </section>

                <footer>
                    <Link href="/pokemons"><span>Entrar</span></Link>
                </footer>
            </section>
        </HomeContainer>
      </>
  );
}