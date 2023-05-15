import styled from "styled-components";

interface PokemonContainerProps {
    type: string;
}

const getTypeBackground = (type: string) => {
    switch (type) {
        case "poison":
            return "url('/images/pokemon/bg/poison.png')";
        case "steel":
            return "url('/images/pokemon/bg/steel.png')";
        case "fairy":
            return "url('/images/pokemon/bg/fairy.png')";
        case "water":
            return "url('/images/pokemon/bg/water.png')";
        case "fire":
            return "url('/images/pokemon/bg/fire.png')";
        case "ice":
            return "url('/images/pokemon/bg/ice.png')";
        case "electric":
            return "url('/images/pokemon/bg/electric.png')";
        case "normal":
            return "url('/images/pokemon/bg/normal.png')";
        case "dragon":
            return "url('/images/pokemon/bg/dragon.png')";
        case "bug":
            return "url('/images/pokemon/bg/bug.png')";
        case "grass":
            return "url('/images/pokemon/bg/grass.png')";
        case "flying":
            return "url('/images/pokemon/bg/flying.png')";
        case "ground":
            return "url('/images/pokemon/bg/ground.png')";
        case "rock":
            return "url('/images/pokemon/bg/rock.png')";
        case "dark":
            return "url('/images/pokemon/bg/dark.png')";
        case "ghost":
            return "url('/images/pokemon/bg/ghost.png')";
        case "psychic":
            return "url('/images/pokemon/bg/psychic.png')";
        case "fight":
            return "url('/images/pokemon/bg/fight.png')";
        default:
            return "";
    }
};

const getTypeButton = (type: string) => {
    switch (type) {
        case "poison":
            return "url('/images/buttons/poison.png')";
        case "steel":
            return "url('/images/buttons/steel.png')";
        case "fairy":
            return "url('/images/buttons/fairy.png')";
        case "water":
            return "url('/images/buttons/water.png')";
        case "fire":
            return "url('/images/buttons/fire.png')";
        case "ice":
            return "url('/images/buttons/ice.png')";
        case "electric":
            return "url('/images/buttons/electric.png')";
        case "normal":
            return "url('/images/buttons/normal.png')";
        case "dragon":
            return "url('/images/buttons/dragon.png')";
        case "bug":
            return "url('/images/buttons/bug.png')";
        case "grass":
            return "url('/images/buttons/grass.png')";
        case "flying":
            return "url('/images/buttons/flying.png')";
        case "ground":
            return "url('/images/buttons/ground.png')";
        case "rock":
            return "url('/images/buttons/rock.png')";
        case "dark":
            return "url('/images/buttons/dark.png')";
        case "ghost":
            return "url('/images/buttons/ghost.png')";
        case "psychic":
            return "url('/images/buttons/psychic.png')";
        case "fight":
            return "url('/images/buttons/fight.png')";
        default:
            return "";
    }
};

const getTypeColor = (type: string) => {
    switch (type) {
        case "poison":
            return "#A040A0";
        case "steel":
            return "#B8B8D0";
        case "fairy":
            return "#DEA5DE";
        case "water":
            return "#6890F0";
        case "fire":
            return "#F08030";
        case "ice":
            return "#98D8D8";
        case "electric":
            return "#F8D030";
        case "normal":
            return "#A8A878";
        case "dragon":
            return "#7038F8";
        case "bug":
            return "#A8B820";
        case "grass":
            return "#69AF46";
        case "flying":
            return "#A890F0";
        case "ground":
            return "#E0C068";
        case "rock":
            return "#B8A038";
        case "dark":
            return "#705848";
        case "ghost":
            return "#705898";
        case "psychic":
            return "#E85380";
        case "fight":
            return "#C03028";
        default:
            return "";
    }
};

export const PokemonContainer = styled.section<PokemonContainerProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  header {
    position: relative;
    width: 100%;
    height: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: ${props => getTypeBackground(props.type)} no-repeat right top;
    background-size: 70%;
    
    img {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 200px;
      height: 200px;
    }
    
    h1 {
      position: absolute;
      bottom: 48px;
      left: 8px;
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      font-size: 24px;
      color: ${props => getTypeColor(props.type)};
    }
    
    svg {
      width: 64px;
      height: 64px;
      position: absolute;
      left: 8px;
      top: 8px;
      color: ${props => getTypeColor(props.type)};
    }
  }
  
  footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    background: ${props => getTypeColor(props.type)};
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      li {
        a {
          
        }
      }
    }
  }

`;