import {connect} from 'react-redux';
import {postsActions} from "../../actions/posts.actions";
import PostsList from './PostsList';

const mapStateToProps = (state) => {
    return{
        posts: state.posts.posts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        getPosts: () => dispatch(postsActions.getPosts()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);