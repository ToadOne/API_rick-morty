import React from "react";
import {NavLink} from "react-router-dom";
import "./Header.css";

export const Header = () => <header className="Header">
    <h1>Rick and Morty app</h1>
    <nav>
        <NavLink exact to="/">Accueil</NavLink>
        <NavLink to="/characters">Personnages</NavLink>
        <NavLink to="/locations">Lieux</NavLink>
        <NavLink to="/episodes">Épisode</NavLink>
    </nav>
</header>;