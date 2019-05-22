import React, {Component} from 'react';


export class LocationsDetailsPage extends Component {

    state = {
        location: null,
    }

    componentWillMount() {
        const locationId = this.props.match.params.id;
        fetch('https://rickandmortyapi.com/api/location/' +  locationId)
            .then((response) => response.json())
            .then((result) => this.setState({
                location: result,
            }))
    }

    render () {
        return this.state.location != null
                    ?   <div>
                            <h1>
                                {this.state.location.name}
                            </h1>
                        </div>
                    : "Loading..."
    }
}