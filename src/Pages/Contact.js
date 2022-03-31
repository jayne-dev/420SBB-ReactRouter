import React from "react";
import {Link} from'react-router-dom'

function Contact () {
    return (
        <div className="organiser">
            <div className="contact-intro">
                <h1>This is Shourya Jain</h1>
                <p>Your friendly Visual Designer. Awesome, finally you made it to the last page!</p>
                
            </div>
            <div className="card about">
                <h1>Wish to learn more about me?</h1>
                <p>Checkout my about page</p>
                <button><Link to="/about"> Learn More </Link></button>
            </div>
            <div className="card projects">
                <h1>Some of my Works</h1>
                <p>know more about my skills</p>
                <button><Link to="/projects">My projects</Link></button>
            </div>
        </div>
    )
}

export default Contact