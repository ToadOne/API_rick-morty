import React, {Component} from "react";
import {Link} from 'react-router-dom';

const baseUrl = 'https://rickandmortyapi.com/api/location/';

export class LocationsListPage extends Component {
    state = {
        list: [],
        info: {}
    };

    getData(url) {
        fetch(url)
            .then((response) => response.json())
            .then((result) => this.setState({
                list: result.results,
                info: result.info
            }));
    }

    getAllData() {
        this.getData(baseUrl)
    }

    componentWillMount() {
        this.getAllData()
    }

    next() {
        this.getData(this.state.info.next)
    }

    previous() {
        this.getData(this.state.info.prev)
    }

    render() {
        return <div>
            <h1>Locations</h1>
            <button onClick = {() => this.previous()}>PREVIOUS</button>
            <button onClick = {() => this.next()}>NEXT</button>
            {
                this.state.list.map((location) => 
                    <Link 
                        to={'/locations/' + location.id} 
                        key={location.id}>
                            
                            <p>{location.name}</p>
                    </Link>)
            }
        </div>
    }
}