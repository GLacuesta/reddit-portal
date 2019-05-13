import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './RedditPortal.module.css';
import Posts from '../../components/Posts/Posts';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';


class RedditPortal extends Component {
    
    componentDidMount(){
        this.props.onGetHot();
    }


    openPostHandler = (data) => {
        this.props.onClickPost(data);
        this.props.history.push('/post');
    }

    render(){
        let posts = <Spinner />;
        if (this.props.posts) {
            posts = <Posts data={this.props.posts} clicked={this.openPostHandler}/>;
            console.log(this.props.posts);
        }

        return (
            <div className={classes.Portal}>
                <div className={classes.PostArea}>
                    {posts}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.portal.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetHot: () => dispatch(actions.fetchHot()),
        onClickPost: (data) => dispatch(actions.getPost(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RedditPortal);
