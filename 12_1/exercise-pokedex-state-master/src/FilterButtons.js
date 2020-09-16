import React from 'react';
import Pokemon from './Pokemon';

class Buttons extends React.Component {
    constructor(props) {
        super();
        this.state = {
            arrayIndex: 0,
        };
    }

    handleClick = () => {
        /* Passando uma callback à função setState, que recebe de parâmetros
        o estado anterior e as props do componente, você garante que as atualizações
        do estado acontecerão uma depois da outra! */
        this.setState((prevState, _props) => ({
          numeroDeCliques: prevState.arrayIndex + 1,
        }));
      }

    render() {
        return (
            <button type="button" className={this.props.buttonClass} onClick={this.props.callback}>
              {this.props.text}
            </button>
        );
    }
}

export default Buttons;