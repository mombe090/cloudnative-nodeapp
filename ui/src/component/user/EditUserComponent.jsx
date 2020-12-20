import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class EditUserComponent extends Component {
    
    constructor(props){
        super(props);
        this.state ={
            id: '',
            name: '',
            age: '',
        }
        this.saveUser = this.saveUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
    }
    
    componentDidMount() {
        this.loadUser();
    }
    
    loadUser() {
        ApiService.fetchUserById(window.localStorage.getItem("userId"))
            .then((res) => {
                let user = res.data.result;
                this.setState({
                    id: user.id,
                    name: user.name,
                    age: user.age,
                    message: ''
                })
            });
    }
    
    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
    
    saveUser = (e) => {
        e.preventDefault();
        let user = {id: this.state.id, name: this.state.name, age: this.state.age};
        ApiService.editUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/users');
            });
    }
    
    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Edit User</Typography>
                <form>
                    
                    <TextField type="text" placeholder="name" fullWidth margin="normal" name="name" readonly="true" value={this.state.name}/>
                    
                    <TextField placeholder="Age" fullWidth margin="normal" name="age" value={this.state.age} onChange={this.onChange}/>
                    
                    <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>
                
                </form>
            </div>
        );
    }
}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default EditUserComponent;
