import React, { Component } from 'react';

import classes from './Layout.module.css';
import RedditNavBar from '../../containers/RedditNavBar/RedditNavBar';

class Layout extends Component {

    render () {
        return (
            <React.Fragment>
                <RedditNavBar />
                <main>
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}

export default Layout;