import React from "react";
import {Link} from'react-router-dom'

function Projects () {
    return (
        <div className="organiser">
            <div className="project-intro">
                <h1>Checkout These Sick Projects!</h1>
                <p>Definitely, You'll like them. You can see the thumbnails but actually the links are not yet functional.</p>

                <div className="thumbnails p1">
                    <h3>Project 1</h3>
                </div>
                <div className="thumbnails p2">
                    <h3>Project 2</h3>
                </div>
                <div className="thumbnails p3">
                    <h3>Project 3</h3>
                </div>
            </div>

            <div className="card about">
                <h1>Learn More About Me</h1>
                <p>Some stuff that you might find intersting</p>
                <button><Link to="/about"> Learn about me </Link></button>
            </div>

            <div className="card contact">
                <h1>Let's have a Chat or a Coffee or Why Not Chat over Coffee??</h1>
                <p>Who doesn't like to chat?? P.S. I'm an introvert</p>
                <button><Link to="/contact"> Let's Meet </Link></button>
            </div>
        </div>
    )
}

export default Projects