import {postsActionTypes} from "../constants/ActionTypes";
import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyBHYP5VZPmBnGbLIhU-ntrFzQPHsPUJWNo",
    authDomain: "journey-diary-project.firebaseapp.com",
    databaseURL: "https://journey-diary-project.firebaseio.com",
    projectId: "journey-diary-project",
    storageBucket: "journey-diary-project.appspot.com",
    messagingSenderId: "93124094359"
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

export const postsActions = {
  getPosts
};