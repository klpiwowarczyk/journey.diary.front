import {connect} from 'react-redux';
import {postsActions} from "../../actions/posts.actions";
import AddPost from './AddPost';

const mapStateToProps = (state) => {
    return{
        posts: state.posts.posts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        getPosts: () => dispatch(postsActions.getPosts()),
        addPost: (userName, img, location, description, rate) => dispatch(postsActions.addPost(userName, img, location, description, rate))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);