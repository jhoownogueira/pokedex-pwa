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
            return "url('/images/buttons/poison.svg')";
        case "steel":
            return "url('/images/buttons/steel.svg')";
        case "fairy":
            return "url('/images/buttons/fairy.svg')";
        case "water":
            return "url('/images/buttons/water.svg')";
        case "fire":
            return "url('/images/buttons/fire.svg')";
        case "ice":
            return "url('/images/buttons/ice.svg')";
        case "electric":
            return "url('/images/buttons/electric.svg')";
        case "normal":
            return "url('/images/buttons/normal.svg')";
        case "dragon":
            return "url('/images/buttons/dragon.svg')";
        case "bug":
            return "url('/images/buttons/bug.svg')";
        case "grass":
            return "url('/images/buttons/grass.svg')";
        case "flying":
            return "url('/images/buttons/flying.svg')";
        case "ground":
            return "url('/images/buttons/ground.svg')";
        case "rock":
            return "url('/images/buttons/rock.svg')";
        case "dark":
            return "url('/images/buttons/dark.svg')";
        case "ghost":
            return "url('/images/buttons/ghost.svg')";
        case "psychic":
            return "url('/images/buttons/psychic.svg')";
        case "fight":
            return "url('/images/buttons/fight.svg')";
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
  max-width: 480px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  
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
  
  main {
    width: 100%;
    max-width: 480px;
    padding: 0 16px;
    .title {
      width: 100%;
      display: flex;
      align-items: end;
      justify-content: space-between;
      .types {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        article {
          width: 91px;
          height: 40px;
          background-size: contain;
        }
      }
    }
    
    .data {
      width: 100%;
      height: 64px;
      margin-top: 16px;
      
      ul {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: start;
        justify-content: space-between;
        
        li {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: start;
          gap: 8px;
          span {
            font-size: 10px;
            color: #666666;
          }
          
          p {
            font-size: 12px;
            font-weight: bold;
            color: #1D1D1D;
          }
          
          .peso, .altura, .movimentos {
            width: 100%;
            display: flex;
            align-items: end;
            justify-content: center;
            gap: 4px;
          }
          
          .movimentos {
            width: 100%;
            max-height: 38px;
            overflow-y: scroll;
            display: flex;
            flex-direction: column;
            align-items: start;
            padding: 0 8px;
            p {
              font-size: 8px;
            }
          }
          
          &:nth-child(2) {
            border-left: 1px solid #666666;
            border-right: 1px solid #666666;
          }
        }
      }
    }
  }
  
  footer {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 100%;
    max-width: 480px;
    height: 96px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: ${props => getTypeColor(props.type)};
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 24px;
      li {
        width: 96px;
        height: 96px;
        a {
          width: 96px;
          height: 96px;
          img {
            width: 96px;
            height: 96px;
          }
        }
      }
    }
  }
  
  .poison {
    background: url('/images/buttons/poison.svg') no-repeat center center;
  }
  .steel {
    background: url('/images/buttons/steel.svg') no-repeat center center;
  }
  .fairy {
    background: url('/images/buttons/fairy.svg') no-repeat center center;
  }
  .water {
    background: url('/images/buttons/water.svg') no-repeat center center;
  }
  .fire {
    background: url('/images/buttons/fire.svg') no-repeat center center;
  }
  .ice {
    background: url('/images/buttons/ice.svg') no-repeat center center;
  }
  .electric {
    background: url('/images/buttons/electric.svg') no-repeat center center;
  }
  .normal {
    background: url('/images/buttons/normal.svg') no-repeat center center;
  }
  .dragon {
    background: url('/images/buttons/dragon.svg') no-repeat center center;
  }
  .bug {
    background: url('/images/buttons/bug.svg') no-repeat center center;
  }
  .grass {
    background: url('/images/buttons/grass.svg') no-repeat center center;
  }
  .flying {
    background: url('/images/buttons/flying.svg') no-repeat center center;
  }
  .rock {
    background: url('/images/buttons/rock.svg') no-repeat center center;
  }
  .dark {
    background: url('/images/buttons/dark.svg') no-repeat center center;
  }
  .ghost {
    background: url('/images/buttons/ghost.svg') no-repeat center center;
  }
  .psychic {
    background: url('/images/buttons/psychic.svg') no-repeat center center;
  }
  .fight {
    background: url('/images/buttons/fight.svg') no-repeat center center;
  }
`;