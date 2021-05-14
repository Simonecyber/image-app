import React from 'react';
import Badge from '../components/Badge';

const About = () => {
    return (
        <div className="container">

            <div className="container_description">

            <h1 className="title_about">Benvenuto in Image App</h1>

            <p>


                Image App è una multi-page-application che utilizza la API RESTful di Unsplash.
                Inoltre potrai salvare le immagini che ti piacciono di più sfruttando la memoria presente nel tuo browser.
                <br></br>
                Svillupato con il framework ReactJs!
                </p>
            </div>

                <Badge />
        </div>
    )
}

export default About
