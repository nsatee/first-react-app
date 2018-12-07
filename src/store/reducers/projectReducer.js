
const initState = {
    projects: [
        {id: '1', title:"This's 1 project", content: 'woohoo'},
        {id: '2', title:"This's 2 project", content: 'woohoo woohoo'},
        {id: '3', title:"This's 3 project", content: 'woohoo woohoo woohoo'},
    ]
}

const projectReducer = (state = initState, action) => {
    return state;
}

export default projectReducer;