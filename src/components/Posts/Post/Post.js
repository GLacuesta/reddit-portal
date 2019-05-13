import React from 'react';

import classes from './Post.module.css';
import { kFormatter } from '../../../shared/utility';

const post = (props) => {

    return (
        <div className={classes.Post}>
            <div className={classes.Upvotes}>
                <i className='fas fa-long-arrow-alt-up'></i>
                {kFormatter(props.ups)}
                <i className='fas fa-long-arrow-alt-down'></i>
            </div>
            <div className={classes.PostArea}>
                <h2 onClick={props.clicked}>{props.title}</h2>
                <p>{props.selftext}</p>
                <div className={classes.LowerSection}>
                    <div>
                        <i className='fas fa-comment-alt'></i>
                        {props.num_comments} Comments
                    </div>
                    <div>
                        <i className='far fa-star'></i>
                        Give Award
                    </div>
                    <div>
                        <i className='fas fa-share'></i>
                        Share
                    </div>
                    <div>
                        <i className='fas fa-plus-square'></i>
                        Save
                    </div>
                    <div>
                        <i className='fas fa-ellipsis-h'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default post;