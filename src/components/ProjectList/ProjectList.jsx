import React from 'react';
import './ProjectList.css';
import PropTypes from 'prop-types';

   
const ProjectList = (props) => {
    if (props.projects.length === 0) {
        return <p>К сожалению тут пусто...</p>
      }
    return(
       <div className = "ProjectList">
         { props.projects.map(project => 
          <div
          className = "ProjectList-Project-Container"
          key = {`${project.id}-Container`}>
         <img src={project.img} className="ProjectList-Project" alt={project.category} key={project.id}
         />
          </div>)
    }
       </div>
  )      
}

ProjectList.propTypes = {
    projects: PropTypes.array.isRequired,
  }
export default ProjectList;