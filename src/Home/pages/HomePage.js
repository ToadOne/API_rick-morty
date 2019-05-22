import React from "react";
import "./HomePage.css";
import morty2 from '../../images/morty2.jpeg';

export const HomePage = () => <div className="HomePage">
    <div className="center">
        <h1>Bienvenue dans l'API de Rick and Morty</h1>
        <h4>Réalisation collaborative entre les étudiants et leurs formateurs au sein des locaux du centre de formation du CEFIM</h4>
        <h4>Retrouvez-y tous les personnages de la série, mais pas uniquement ...</h4>
        <img className="image-accueil" src={morty2}></img>
        <p> Link <a href="https://rickandmortyapi.com/"> Go to API</a></p>
    </div>
</div>;