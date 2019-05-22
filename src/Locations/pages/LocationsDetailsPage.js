import React, {Component} from "react";


export class LocationDetailsPage extends Component {
    state = {
        location: null,
    };

    componentWillMount() {
        fetch(`https://rickandmortyapi.com/api/location/${this.props.match.params.id}`)
            .then(r => r.json())
            .then((data) => {
                this.setState({
                    location: data,
                });
            });
    }

    render() {
        return this.state.location != null
            ? <div>
                <h1>{this.state.location.name}</h1>
                <ul>
                    {
                        this.state.location.residents.map((residentUrl) =>
                            <LocationResident url={residentUrl} key={residentUrl}/>
                        )
                    }
                </ul>
            </div>
            : <p>"Loading..."</p>;
    }
}

class LocationResident extends Component {
    state = {
        resident:  null,
    };

    componentWillMount() {
        fetch(this.props.url)
            .then(r => r.json())
            .then(resident => {
                this.setState({
                    resident: resident
                })
            })
    }
    render() {
        return this.state.resident != null
            ? <article>
            <h1>{this.state.resident.name}</h1>
        </article>
            : <p>Loading...</p>
    }
}
