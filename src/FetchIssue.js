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

var mainDivStyle = {
  textAlign: 'center',
  padding: '25 25 25 25',
  marginTop: '25',
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

class FetchIssue extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      description:'',
      priority:'',
      assignTo:'',
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div  style={mainDivStyle}>
      <Paper style={paperStyle} >
        <div>
          fetching data
      </div>
      </Paper>
      </div>
    );
  }
}

export default FetchIssue;
