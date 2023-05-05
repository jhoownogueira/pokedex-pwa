import Head from "next/head";
import {Airplay} from "@phosphor-icons/react";

export default function Home() {

  return (
      <>
        <Head>
          <title>Projetos Elétricos | ART Elétrica</title>
          <meta name="author" content="Jhonata Nogueira" />
          <meta name="creator" content="Jhonata Nogueira" />
          <meta name="title" content="Projetos Elétricos | ART Elétrica" />
          <meta
              name="google-site-verification"
              content="PxNpBexejv-cXKQHKOtsV1mVMmVjnCRCdIvQcyRlyU0"
          />
          <meta
              name="description"
              content="Projetos de engenharia elétrica, residencial, industrial, comercial, posto de transformação, laudos, ART padrão de energia. Projeto elétrico de loteamento."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.danilofiorentino.com/" />
          <meta property="og:title" content="Projetos Elétricos | ART Elétrica" />
          <meta
              property="og:description"
              content="Projetos de engenharia elétrica, residencial, industrial, comercial, posto de transformação, laudos, ART padrão de energia. Projeto elétrico de loteamento."
          />
          <meta property="og:image" content="/images/meta.jpg" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
              property="twitter:url"
              content="https://www.danilofiorentino.com/"
          />
          <meta
              property="twitter:title"
              content="Projetos Elétricos | ART Elétrica"
          />
          <meta
              property="twitter:description"
              content="Projetos de engenharia elétrica, residencial, industrial, comercial, posto de transformação, laudos, ART padrão de energia. Projeto elétrico de loteamento."
          />
          <meta property="twitter:image" content="/images/meta.jpg" />
        </Head>
        <h1>Hello World!</h1>
        <Airplay size={32} weight="fill" />
      </>
  );
}