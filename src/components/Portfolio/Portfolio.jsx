import './Portfolio.css';
import React from 'react';
import projects from '../../js/projects';
import filters from '../../js/filters';
import ProjectList from '../ProjectList/ProjectList';
import Toolbar from '../Toolbar/Toolbar';


var ids = require('short-id');
const INITIAL_STATE = {filters:filters, projects:projects, selected:'All'};
 class Portfolio extends React.Component{
   constructor(){
    super();
    this.onSelectFilterHandler = this.onSelectFilterHandler.bind(this);
    this.projectsId = INITIAL_STATE.projects.map((project) => ({...project,id: ids.generate()}));
    this.state = {...INITIAL_STATE, projects: this.projectsId}; 
   } 
   onSelectFilterHandler(e){
       const filter = e.target.id;
       this.projectsId = this.projectsId.filter(project => project.category === filter);
       if (filter!== 'All') this.setState({projects: this.projectsId, selected: filter});
       else this.setState({...INITIAL_STATE, projects : this.projectsId})   
       }

render(){
    return  (
        <div className = "container">
    <Toolbar
      filters = {this.state.filters}
      selected = {this.state.selected}
      onSelectFilter = {this.onSelectFilterHandler}
             />
    <ProjectList 
      projects={this.state.projects}/>
       </div>)
    }
}
export default Portfolio;