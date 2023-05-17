import styled from "styled-components";

interface PokemonsTypePros {
    typePokemon: string;
}

const getTypeColor = (type: string) => {
    switch (type) {
        case "normal":
            return "#A8A878";
        case "fire":
            return "#F08030";
        case "water":
            return "#6890F0";
        case "electric":
            return "#F8D030";
        case "grass":
            return "#78C850";
        case "ice":
            return "#98D8D8";
        case "fighting":
            return "#C03028";
        case "poison":
            return "#A040A0";
        case "ground":
            return "#E0C068";
        case "flying":
            return "#A890F0";
        case "psychic":
            return "#F85888";
        case "bug":
            return "#A8B820";
        case "rock":
            return "#B8A038";
        case "ghost":
            return "#705898";
        case "dragon":
            return "#7038F8";
        case "dark":
            return "#705848";
        case "steel":
            return "#B8B8D0";
        case "fairy":
            return "#EE99AC";
        default:
            return "gray";
    }
};

export const ContainerModalFiltro = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;


  header {
    width: 100%;
    max-width: 480px;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    
    h1 {
      font-size: 24px;
      color: #666666;
    }
    
    button {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      background: transparent;
      svg {
        color: #D42B4D;
      }
    }
  }

  section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;

  }

`

export const ButtonCardFilter = styled.button<PokemonsTypePros>`
  background-color: ${(props) => getTypeColor(props.typePokemon)};
  padding: 6px;
  font-size: 10px;
  border: 0;
  border-radius: 4px;

`