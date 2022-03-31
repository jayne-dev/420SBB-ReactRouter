import React from "react";
import {Link} from'react-router-dom'

function Home () {
    return (
        <div className="organiser">
            <div className="card about">
                <h1>Welcome</h1>
                <p>Hey! You have arrived at my single page react application. This is the first time I'm using React JS library.</p>
                <button><Link to="/about"> About </Link></button>
            </div>

            <div className=" card projects">
                <h1>Projects</h1>
                <p>Hey! You can checkout the work I have done so far. But, You'll be disappointed because I haven't any. HewuHEHE</p>
                <button><Link to='/projects'>Peep</Link></button>
            </div>

            <div className=" card contact">
                <h1>Contact</h1>
                <p>Hey! You can connect to me once I'm done with this app. HeHeHe</p>
                <button><Link to='/contact'>Contact</Link></button>
            </div>
        </div>

    )
}

export default Home