import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import chance from 'chance';
import firebase from 'firebase/app'

import FetchIssue from './FetchIssue';
var mainDivStyle = {
  textAlign: 'center',
  padding: '25 25 25 25',
}
var paperStyle = {
  color: 'gray',
  width: 600,
  padding: '25 25 25 25',
};

var formStyle = {
  padding: '25px 25px 25px 25px',
}
var inputBoxStyle = {
  width:550,
  padding:'5px 5px 25px 5px',
};


/* firebase.database().ref('issues').once('value')
.then((issues) => console.log(issues))
 */

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      description:'',
      priority:'',
      assignTo:'',
      issues: {},
    }
    /* firebase.database().ref('issues')
    .on('value', (snapshot)=> {
        this.setState({diskussioPosts: snapshot.val()})
     }) */
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  _handleDescription = (event) => {
    this.setState({
      description: event.target.value
    });
    
  }

  _handleAssignTo = (event) => {
    this.setState({
      assignTo: event.target.value
    });
    
  }

  _handlePriorityChange = (event) => {
    this.setState({
      priority: event.target.value
    });
  }

  _addClick = (event) => {
    
    console.log(' description value -  ' + this.state.description);
    console.log(' assign to - ' + this.state.assignTo);
    console.log(' priority level - ' + this.state.priority);
  }

  render() {
    const { classes } = this.props;

    return (
      <div  style={mainDivStyle}>
      <Paper style={paperStyle} >
        <div  >
          <form  style={formStyle} >
            <h2 >Add New Issue</h2>
      <TextField
          id="description"
          label="Description"
          value={this.state.description}
          onChange={this._handleDescription}
          margin="normal"
          style={inputBoxStyle}
        />
       
       <Select
          value={this.state.priority}
          onChange={this._handlePriorityChange}
          style={inputBoxStyle}
        >
         
          <option value='Low' selected>Low</option>
          <option value='Medium'>Medium</option>
          <option value='High'>High</option>
        </Select>
        <TextField
          id="assignTo"
          label="assignTo"
          value={this.state.assignTo}
          onChange={this._handleAssignTo}
          margin="normal"
          style={inputBoxStyle}
        />    
        <br></br>
        <Button variant="extendedFab" style={{ width: 500 }} onClick={this._addClick}  >
            <AddIcon />
            Add
      </Button>
       
      </form>
      </div>
      </Paper>
      <FetchIssue />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default App;
