import React, {Component} from 'react';
import './No-results.css'
import logo from '../../media/spotify.png'

class NoResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
    }

    render() {
        // let nothingToShowText = 'I don\'t have to show anything to anyone, There is nothing to prove.'
        // let nothingToShowText = 'There is nothing to show'
        return (
            <div className="no-results">
                <img src={logo} alt="logo"/>
            </div>
        );
    }
}


export  default NoResults;