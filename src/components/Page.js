import React, { Component } from 'react'
import { withRouter } from './withRouter'

import "./Page.css"

class Page extends Component {
    render() {
        return (
            <div className="bio">
                <div>
                    <h2>Bio</h2>
                    <p>My name is Jiaxiang Liu (刘嘉祥 in Chinese), I am a first year PhD student in the computer science department at Columbia
                        University under the supervison by Prof. <a href="http://www.cs.columbia.edu/~ewu/">Eugene Wu</a>.
                        My research interests are Database Management
                        Systems and Differential Privacy.
                    </p>
                    <p>
                        Before joining Columbia, I completed my undergrad in University of
                        Waterloo with a triple major in computer science, statistics, and combinatorics and optimization.
                        I worked closely with Prof. <a href="https://cs.uwaterloo.ca/~xihe/">Xi He</a> during my undergrad.
                    </p>
                </div>
            </div>
        )
    }
}

export default withRouter(Page)