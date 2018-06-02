import React from 'react';
import Post from './Post';
import AddPostModalContainer from "./AddPostModalContainer";

class PostsList extends React.Component {
    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const {posts} = this.props;
        return (
            <div>
                <AddPostModalContainer />
                {posts && Object.values(posts).map((post, key) => (
                    <Post key={key} post={post} />
                ))}

            </div>
        )
    }
}

export default PostsList;