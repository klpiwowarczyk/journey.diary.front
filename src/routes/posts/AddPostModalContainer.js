import {connect} from 'react-redux';
import {postsActions} from "../../actions/posts.actions";
import AddPostModal from './AddPostModal';

const mapStateToProps = (state) => {
    return{
        posts: state.posts.posts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        getPosts: () => dispatch(postsActions.getPosts()),
        addPost: (post) => dispatch(postsActions.addPost(post))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPostModal);