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
        console.log('typeRef', typeRef);
        typeRef.on('value', function(snapshot) {
            console.log('snapshot', snapshot.val());
            dispatch({
                type: postsActionTypes.GET_POSTS,
                posts: snapshot.val()
            });
        });
    }
}

function addPost(userName, img, location, description, rate) {
    console.log('addpost sie wykonuje');

    return (dispatch) => {
        const postData = {
            username: userName,
            img: img,
            location: location,
            description: description,
            rate: rate
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