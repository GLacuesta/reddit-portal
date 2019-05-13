import React, { Component } from 'react';

import classes from './RedditNavBar.module.css';

class RedditNavBar extends Component {
    render() {
        return (
            <header>
                <div className={classes.NavBar}>
                    <div>
                        REDDIT
                    </div>
                    <div>
                        SORT
                    </div>
                    <div>
                        
                    </div>
                </div>
            </header>
        );
    }
}

export default RedditNavBar;