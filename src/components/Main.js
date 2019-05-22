
import React from "react";
import {HomePage} from "../Home/pages/HomePage";
import {Route} from "react-router-dom";

import {CharactersListPage} from "../Characters/pages/CharactersListPage";
import {LocationsListPage} from "../Locations/pages/LocationsListPage";
import {EpisodesListPage} from "../Episodes/pages/EpisodesListPage";
import {CharacterDetailsPage} from "../Characters/pages/CharacterDetailsPage";
import {LocationDetailsPage} from "../Locations/pages/LocationsDetailsPage"
import {EpisodesDetailsPage} from "../Episodes/pages/EpisodesDetailsPage";

export const Main = () => <main>
    <Route exact path="/" component={HomePage}/>
    <Route exact path="/characters" component={CharactersListPage}/>
    <Route path="/characters/:id" component={CharacterDetailsPage}/>
    <Route exact path="/locations" component={LocationsListPage}/>
    <Route path="/locations/:id" component={LocationDetailsPage}/>
    <Route exact path="/episodes" component={EpisodesListPage}/>
    <Route path="/episodes/:id" component={EpisodesDetailsPage}/>
</main>;
