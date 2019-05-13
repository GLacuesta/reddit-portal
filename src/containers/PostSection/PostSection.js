import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './PostSection.module.css';

import Post from '../../components/Posts/Post/Post';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';


class PostSection extends Component {

    componentDidMount() {
        if (!this.props.post) {
            this.props.history.replace( '/' );
        }
    }

    render(){
        let post = <Spinner />;
        if (this.props.post) {
            post = (
                    <div className={classes.PostContent}> 
                        <Post {...this.props.post} clicked={null}/>
                    </div>
                );
        }

        return (
            <div className={classes.PostSection}>
                <div className={classes.PostArea}>
                    {post}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        post: state.postSection.post
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetHot: () => dispatch(actions.fetchHot()),
        onClickPost: (data) => dispatch(actions.getPost(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostSection);
