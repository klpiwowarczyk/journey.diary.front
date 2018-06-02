import React from 'react';

class AddPost extends React.Component {

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        return (
            <div>
                <button onClick={() => this.props.addPost('userName', 'img', 'location', 'description', 5)}> dfihfeif</button>
            </div>
        );
    }
}

export default AddPost;