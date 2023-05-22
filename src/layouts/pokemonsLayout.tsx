import React, {useEffect, useState} from "react";
import {HeaderPokemons} from "@/styles/pageLayouts/pokemonsLayout";
import {MagnifyingGlass, X} from "@phosphor-icons/react";
import Modal from "react-modal";
import {ButtonCardFilter, ContainerModalFiltro} from "@/styles/modalFIltros/styles";
import {api} from "@/services/api";

Modal.setAppElement("#__next");

export function PokemonsLayout({children, onSearch, onFilter}: { children: React.ReactNode; onSearch: (searchTerm: string) => void; onFilter: (filterType: string) => void;}) {

    const [searchTerm, setSearchTerm] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [types, setTypes] = useState<string[]>([]);

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

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleFilterButtonClick = (filterType: string) => {
        onFilter(filterType);
        closeModal();
    };

    useEffect(() => {
        if (modalIsOpen) {
            document.body.classList.add('body-lock');
        } else {
            document.body.classList.remove('body-lock');
        }
    }, [modalIsOpen])


    useEffect(() => {
        const fetchTypes = async () => {
            try {
                const response = await api.get("type");
                const typeData = response.data;
                const typeNames = typeData.results.map((type: any) => type.name);

                const filteredTypes = typeNames.filter((type: string) => type !== "unknown");

                setTypes(filteredTypes);
            } catch (error) {
                console.log("Error fetching types:", error);
            }
        };

        fetchTypes().then();
    }, []);

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
                    <button className="filtro" onClick={openModal}>
                        <span>FILTRO</span>
                    </button>
                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    ariaHideApp={false}
                    overlayClassName="react-modal-overlay"
                    className="react-modal-content"
                >
                    <ContainerModalFiltro>
                        <header>
                            <h1>Tipos</h1>
                            <button className="fechar" onClick={closeModal}>
                                <X size={24} />
                            </button>
                        </header>
                        <section>
                            {types.map((type) => (
                                <ButtonCardFilter typePokemon={type} type="button" key={type} onClick={() => handleFilterButtonClick(type)}>
                                    {type.toUpperCase()}
                                </ButtonCardFilter>
                            ))}
                            <ButtonCardFilter typePokemon="steel" type="button" onClick={() => handleFilterButtonClick("")}>
                                TODOS
                            </ButtonCardFilter>
                        </section>
                    </ContainerModalFiltro>
                </Modal>
            </HeaderPokemons>
            {children}

        </>

    )
}