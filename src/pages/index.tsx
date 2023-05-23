import Head from "next/head";
import {HomeContainer} from "@/styles/homeStyles";
import Link from "next/link";
import {DefaultLayout} from "@/layouts/default";
import {useEffect, useState} from "react";

interface BeforeInstallPromptEvent extends Event {
    prompt: () => void;
    userChoice: Promise<{
        outcome: 'accepted' | 'dismissed',
        platform: string
    }>;
}

export default function Home() {

    const [installPromptEvent, setInstallPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);
    const [isAppInstalled, setIsAppInstalled] = useState(false);

    useEffect(() => {
        const beforeInstallPromptHandler = (event: BeforeInstallPromptEvent) => {
            event.preventDefault();
            setInstallPromptEvent(event);
        };

        const appInstalledHandler = () => {
            setIsAppInstalled(true);
        };

        window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler as any);
        window.addEventListener('appinstalled', appInstalledHandler);

        // Para dispositivos iOS
        if ("standalone" in window.navigator && window.navigator.standalone) {
            setIsAppInstalled(true);
        }

        return () => {
            window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler as any);
            window.removeEventListener('appinstalled', appInstalledHandler);
        };
    }, []);

    const handleInstallClick = async () => {
        if (!installPromptEvent) {
            return;
        }

        installPromptEvent.prompt();

        const { outcome } = await installPromptEvent.userChoice;
        if (outcome === 'accepted') {
            console.log("Usuário instalou a aplicação!");
        } else {
            console.log("Usuário NÃO instalou a aplicação!");
        }

        setInstallPromptEvent(null);
    };

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
                    { !isAppInstalled && <button onClick={handleInstallClick}>Instalar</button> }
                </footer>
            </section>
        </HomeContainer>
      </>
  );
}

Home.PageLayout = DefaultLayout;