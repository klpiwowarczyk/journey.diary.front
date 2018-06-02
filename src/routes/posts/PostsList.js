import React from 'react';
import AddPostContainer from './AddPostContainer';
import Post from './Post';

class PostsList extends React.Component {
    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const {posts} = this.props;
        return (
            <div>
                {posts && Object.values(posts).map((post, key) => (
                    <Post key={key} post={post} />
                ))}

            </div>
        )
    }
}

export default PostsList;