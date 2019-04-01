import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title-{id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, non
            quibusdam. Fuga veniam, iure tempora quibusdam sint, quisquam, quis
            nisi veritatis iusto earum unde voluptatem? Dignissimos accusantium
            ipsam officiis eum!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Net Ninja</div>
          <div>3/31/2019</div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;
