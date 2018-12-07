import React from 'react';

function ProjectDetails(props) {
    const id = props.match.params.id;
  return (
    <div className="container section ptoject-details">
        <div className="card zdepth-0">
            <div className="card-content">
                <div className="card-title">Project title - {id}</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, voluptate sequi sed amet consequatur maiores velit harum autem hic. Qui nihil iure libero quasi saepe ipsa cumque quaerat perferendis excepturi.</p>
            </div>
            <div className="card-action gray-lighten-4 gray-text">
                <div>Posted by Golfie</div>
                <div>2nd September, 2am</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails
