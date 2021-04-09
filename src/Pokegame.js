import React, { Component } from 'react';
import Pokedex from './Pokedex'
import './Pokegame.css'

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    };

    render() {
        const hand1 = [], hand2 = [...this.props.pokemon];

        while (hand1.length < hand2.length) {
            let randomIdx = Math.floor(Math.random() * hand2.length);
            let randomPokemon = hand2.splice(randomIdx, 1);
            hand1.push(randomPokemon[0]);
        }

        let hand1exp = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
        let hand2exp = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)

        return (
            <div>
                <h1 className="Pokegame-player">Player 1</h1>
                <Pokedex
                    pokemon={hand1}
                    exp={hand1exp}
                    isWinner={hand1exp > hand2exp}
                />
                <h1 className="Pokegame-player">Player 2</h1>
                <Pokedex
                    pokemon={hand2}
                    exp={hand2exp}
                    isWinner={hand2exp > hand1exp}
                />
            </div>
        )
    }
}

export default Pokegame;