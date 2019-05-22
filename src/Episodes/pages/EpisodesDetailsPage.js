import React, {Component} from 'react';

export class EpisodesDetailsPage extends Component {

    state = {
        episode: null,
    }

    componentWillMount() {
        const episodeId = this.props.match.params.id;
        fetch('https://rickandmortyapi.com/api/episode/' + episodeId)
            .then((response) => response.json())
            .then((result) => this.setState({
                episode: result,
            }))
        }

    render() {
        return  this.state.episode != null
                ?   <div>
                        <h1>
                        {this.state.episode.name}
                        </h1>                    
                    </div>
                : "Loading...";
    }
    }
 