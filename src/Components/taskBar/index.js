import React, { Component } from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import addTask from '../../actions';

 class TaskBar extends Component {
  render() {
    return (
      <div>
        <input type="text" ref="task" placeholder="add your tasks" />
        <button onClick={()=> this.props.addTask(this.refs.task.value) } > Add Button </button>
      </div>
    );
  }
}
  

function mapDispatchToProps(dispatch){
  return bindActionCreators({addTask},dispatch)
};  


export default(()=>{ },mapDispatchToProps)(TaskBar)