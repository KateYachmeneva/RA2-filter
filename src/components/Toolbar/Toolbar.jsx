import React from 'react';
import './Toolbar.css';
import PropTypes from 'prop-types';

   
const Toolbar = (props) => {
   if (props.filters.length === 0) {
          return <p>Данные потерялись...</p>
        }
   return(
       <div className = "Toolbar">
         {props.filters.map(filter => 
          <div
          className = {props.selected === filter ? "Toolbar-Filter-active" : "Toolbar-Filter"}
          key = {filter}
          id = {filter}
          onClick = {props.onSelectFilter}>
              {filter}
          </div>)
        }
        </div>
      )      
     }
Toolbar.propTypes = {
    filters: PropTypes.array.isRequired,
    selected: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func.isRequired
  }
export default Toolbar;