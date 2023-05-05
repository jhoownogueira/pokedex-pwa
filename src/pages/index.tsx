import Head from "next/head";
import {Airplay} from "@phosphor-icons/react";

export default function Home() {

  return (
      <>
        <Head>
          <title>Pokédex | PWA</title>
          <meta name="author" content="Jhonata Nogueira" />
          <meta name="creator" content="Jhonata Nogueira" />
          <meta name="title" content="Pokédex | PWA" />
        </Head>
        <h1>Hello World!</h1>
        <Airplay size={32} weight="fill" />
      </>
  );
}