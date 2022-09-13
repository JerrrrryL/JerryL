import React, { Component } from 'react'
import { withRouter } from './withRouter'
import "./Publication.css"

class Publication extends Component {
    genPublicationHelper = (pubItem) => {
        if (!pubItem[2]) {
            return <li>{pubItem[0]}<br /><p className="authors">{pubItem[1]}, coming soon...</p></li>
        }
        return <li>{pubItem[0]}<br /><p className="authors">{pubItem[1]}<a href={pubItem[2]}>[pdf]</a></p></li>
    }

    genPublication = () => {
        const myLists = [
            ['Cache Me If You Can: Accuracy-Aware Inference Engine for Differentially Private Data Exploration',
                'Miti Mazmudar, Thomas Humphries, Jiaxiang Liu, Matthew Rafuse, Xi He, VLDB 2021', false],
            ['Catch a Blowfish Alive: A Demonstration of Policy-Aware Differential Privacy for Interactive Data Exploration',
                'Jiaxiang Liu, Karl Knopf, Yiqing Tan, Bolin Ding, Xi He, VLDB 2023', "http://vldb.org/pvldb/vol14/p2859-liu.pdf"]
        ];
        const listItems = myLists.map((myList) =>
            this.genPublicationHelper(myList)
        );
        return listItems
    }

    render() {
        return (
            <div className="pub">
                <div>
                    <h2>Publications</h2>
                    <ul> {this.genPublication()} </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(Publication);