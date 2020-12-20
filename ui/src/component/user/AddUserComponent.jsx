import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class AddUserComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            id: '',
            name: '',
            age: '',
            message: ''
        };
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {name: this.state.name, age: this.state.age};
        ApiService.addUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/users');
            });
    };

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <Typography variant="h4" style={style}>Add User</Typography>
                <form style={formContainer}>

                    <TextField type="text" placeholder="name" fullWidth margin="normal" name="name" value={this.state.name} onChange={this.onChange}/>

                    <TextField type="number" placeholder="Age" fullWidth margin="normal" name="age" value={this.state.age} onChange={this.onChange}/>

                    <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>
            </form>
    </div>
        );
    }
}
const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};

const style ={
    display: 'flex',
    justifyContent: 'center'

}

export default AddUserComponent;
