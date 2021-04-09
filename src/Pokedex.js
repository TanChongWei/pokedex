import React, { Component } from 'react';
import Pokecard from './Pokecard';
import "./Pokedex.css";

class Pokedex extends Component {
    render() {
        return (
            <div className="Pokedex">
                <div>Total experience: {this.props.exp}</div>
                <div>{this.props.isWinner ? "Winner!" : "Loser!"}</div>
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