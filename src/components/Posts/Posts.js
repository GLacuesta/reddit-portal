import React from 'react';

import classes from './Posts.module.css';
import Post from './Post/Post';


const posts = (props) => {
    const posts = props.data.map(p => {
        return (
            <div key={p.id} className={classes.Posts}> 
                <Post 
                    {...p} 
                    clicked={ () => { props.clicked(p)} } 
                />
            </div>
        )
     });

    return (
        <div>
            {posts}
        </div>
    )
}

export default posts;