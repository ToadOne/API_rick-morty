import React, {Component} from "react";
import "./CharactersListPage.css";
import {Link} from "react-router-dom";

const baseUrl = 'https://rickandmortyapi.com/api/character/'


export class CharactersListPage extends Component {

    state = {
        list: [],
        info: {},
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
        this.getAllData();
    }

    next () {
        this.getData(this.state.info.next)
    }

    previous () {
        this.getData(this.state.info.prev)
    }

    filterGenderOnly(gender) {
        this.getData(baseUrl + '?gender=' + gender)
    }


    render() {
        return <div className="CharactersListPage">
            <h1>Characters</h1>
            
            <GenderFilter
                    onFilter={(gender) => this.filterGenderOnly(gender)}
                    onReset={() => this.getAllData()}
            />
            
            <button onClick={() => this.previous()} disabled={!this.state.info.prev}>PREVIOUS</button>
            <button onClick={() => this.next()} disabled={!this.state.info.next}>NEXT</button>
            <p>
            {
                this.state.list.map((character) =>
                    <Link
                        to={'/characters/' + character.id}
                        key={character.id}
                        className="CharactersListPage-item"
                    >
                        <img src={character.image} alt=""/>
                        <p>{character.name}</p>
                    </Link>)
            }
            </p>
        </div>;
    }
    
}

const genders = ['female', 'male', 'genderless', 'unknown'];

class GenderFilter extends Component {
    renderListButton() {
        let buttons = [];

        for(let gender of genders) {
            buttons.push(<button onClick={() => this.props.onFilter(gender)}>
                {gender}
            </button>)
        }

        return buttons
    }

    render() {
        return <div>
            {this.renderListButton()}
            <button onClick={() => this.props.onReset()}>all</button>
        </div>
    }
}