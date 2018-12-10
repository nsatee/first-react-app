import { firestore } from "firebase";

export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make sync call from database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Ho',
            authorLastName: 'Ho Ho',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        });

        
    }
}