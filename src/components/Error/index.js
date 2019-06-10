// This is the fork of Dan Abramov's pen:
// HOC is available as `withErrorHandler` global

import React from 'react'

import withErrorHandler from './withErrorHandle'
import './index.css'
import KDInput from "../KDInput/index";

class BuggyCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(({counter}) => ({
            counter: counter + 1
        }));
    }

    render() {
        if (this.state.counter === 5) {
            // Simulate a JS error
            throw new Error("I crashed!");
        }
        return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
    }
}


const ErrorProneBuggyCounter = withErrorHandler(BuggyCounter);

export default function TMP() {
    return (
        <div style={{padding:20}}>
            <KDInput />
        </div>
    );
}

