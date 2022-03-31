import React from "react";
import {Link} from'react-router-dom'

function About () {
    return (
        <div className="organiser">
            <div className="card about">
                <h1>About</h1>
                <p>Welcome to my About page. If you have reached to this link that means the app is working perfectly. Though it might need some polishing, it does function properly</p>
                <button><Link to="/about"> About </Link></button>
            </div>

            <div className="card projects">
                <h1>Working on this assignment was bit of a hassle but at the end everything seems smoothly so far!</h1>
                <p>I think the results are satisfied. You can checkout the other projects that I have worked through out this program.</p>
                <button><Link to="/projects"> Take a look </Link></button>
            </div>

            <div className="card contact">
                <h1>Connect with me to get the things started!</h1>
                <p>Let's bring your ideas to reality</p>
                <button><Link to="/contact"> Connect </Link></button>
            </div>

        </div>
    )
}

export default About