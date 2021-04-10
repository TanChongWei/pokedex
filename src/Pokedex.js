import React, { Component } from 'react';
import Pokecard from './Pokecard';
import "./Pokedex.css";

class Pokedex extends Component {
    render() {
        let title;
        if (this.props.isWinner) {
            title = <h1 className="Pokedex-winner">Winning Hand</h1>
        } else {
            title = <h1 className="Pokedex-loser">Losing Hand</h1>
        }

        return (
            <div className="Pokedex">
                <div className="Pokedex-text">Total experience: {this.props.exp}</div>
                {title}
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                        <Pokecard
                            name={p.name}
                            id={p.id}
                            type={p.type}
                            base_experience={p.base_experience}
                        />))}
                </div>
            </div>
        )
    }
}

export default Pokedex;