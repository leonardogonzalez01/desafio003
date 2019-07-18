import React from 'react';
import './Hero.css';

class Hero extends React.Component {
    render() {
        const { name, age, weapon, race, useRing, useKill } = this.props.objeto;
        const { onClickRing } = this.props;
        const { onClickKill } = this.props;
        const { indice } = this.props;

        return (
            <tr
                className='character-row' style={(useKill)?style.tachado:{}}>
                <td >{name}</td>
                <td>{race}</td>
                <td>{age}</td>
                <td>{weapon}</td>
                <td>
                    <div className={'controls'}>
                        <div onClick={() => onClickKill(indice)}>☠ Kill</div>
                        <div style={{ display: useRing ? 'none' : '' }} onClick={() => onClickRing(name)}>💍 Use Ring</div>
                    </div>
                </td>
            </tr>

        );
    }
}

const style = {
    tachado: {
        textDecoration: 'line-through',
        color: 'red'
    }
};
export default Hero;