import React from 'react';

const Post = (props) => {
    return (
        <div className="card post-editor">
            <div className="card-body">
                {props.postBody}
            </div>
        </div>
    )
};

export default Post;