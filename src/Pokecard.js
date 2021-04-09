import React, { Component } from 'react';
import "./Pokecard.css"

class Pokecard extends Component {
    idConverter(id) {
        id = id.toString();
        return id.padStart(3, '0');
    }

    render() {
        const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
        const id = this.idConverter(this.props.id);
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <img src={`${POKE_API}${id}.png`} alt={this.props.name} />
                <p className="Pokecard-data">Type: {this.props.type}</p>
                <p className="Pokecard-data">Base Experience: {this.props.base_experience}</p>
            </div>
        )
    }
}

export default Pokecard;