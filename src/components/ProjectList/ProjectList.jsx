import React from 'react';
import './ProjectList.css';
class Toolbar extends React.Component {
   

    render(){
        const projects = this.props.projects.map(project => (
            <div
            className = "ProjectList-Project-Container"
            key = {`${project.id}-Container`}>
                <img src={project.img} className="ProjectList-Project" alt={project.category} key={project.id}/>
            </div>
        ));
        return (<div className = "ProjectList">{projects}</div>) 
    }

}
export default Toolbar;