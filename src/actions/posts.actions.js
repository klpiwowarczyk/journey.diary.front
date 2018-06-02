import {postsActionTypes} from "../constants/ActionTypes";
import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyB2FvMjCFCcwRBCsNITb3HWqQBQC8UlTfY",
    authDomain: "journey-diary-sbd.firebaseapp.com",
    databaseURL: "https://journey-diary-sbd.firebaseio.com",
    projectId: "journey-diary-sbd",
    storageBucket: "",
    messagingSenderId: "543993783624"
};
firebase.initializeApp(config);

const database = firebase.database();

function getPosts() {
    return (dispatch) => {
        const typeRef = database.ref(`/posts/`);
        typeRef.on('value', function(snapshot) {
            dispatch({
                type: postsActionTypes.GET_POSTS,
                posts: snapshot.val()
            });
        });
    }
}

function addPost(post) {
    return (dispatch) => {
        const postData = {
            username: post.userName,
            img: post.img,
            location: post.location,
            description: post.description,
            rate: post.rate
        };

        const newPostKey = firebase.database().ref().child('posts').push().key;
        let updates = {};
        updates['/posts/' + newPostKey] = postData;

        dispatch({
            type: postsActionTypes.ADD_POST,
            postData: postData
        });

        return firebase.database().ref().update(updates);
    };

}

export const postsActions = {
  getPosts,
  addPost
};