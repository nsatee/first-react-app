export const createProject = (project) => {
    return (dispatch, getState) => {
        //make sync call from database
        dispatch({ type: 'CREATE_PROJECT', project });
    }
}