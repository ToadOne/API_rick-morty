import React, {Component} from "react";
import "./CharactersDetailsPage.css";

export class CharacterDetailsPage extends Component {
    state = {
        character: null,
    };

    componentWillMount() {
        const characterId = this.props.match.params.id;
        fetch('https://rickandmortyapi.com/api/character/' + characterId)
            .then((response) => response.json())
            .then((result) => this.setState({
                character: result
            }));
    }

    render() {
        return this.state.character != null
            ? <div className="details-character">
                <h1>{this.state.character.name}</h1>
                <img src={this.state.character.image} alt=""/>
            </div>
            : <p>Loading...</p>;
    }
}