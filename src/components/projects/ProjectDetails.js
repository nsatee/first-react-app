import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';

function ProjectDetails(props) {
    const { project } = props;
    if (project) {
        return (
            <div className="container section ptoject-details">
                <div className="card zdepth-0">
                    <div className="card-content">
                        <div className="card-title">{ project.title }</div>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action gray-lighten-4 gray-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>2nd September, 2am</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading Project...</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails)
