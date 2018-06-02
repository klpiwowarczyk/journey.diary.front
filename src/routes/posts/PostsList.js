import React from 'react';
import AddPostContainer from './AddPostContainer';

class PostsList extends React.Component {
    render() {
        return (
            <div>
                Tutaj będzie lista postów
                <AddPostContainer />
            </div>
        )
    }
}

export default PostsList;