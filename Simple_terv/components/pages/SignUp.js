import React from 'react';
import '../../App.css';
//import '../signin.css';
//import { makeStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
//import Dialog from '@material-ui/core/Dialog';
//import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
//import DialogTitle from '@material-ui/core/DialogTitle';
//import FormControl from '@material-ui/core/FormControl';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import InputLabel from '@material-ui/core/InputLabel';
//import MenuItem from '@material-ui/core/MenuItem';
//import Select from '@material-ui/core/Select';
//import Switch from '@material-ui/core/Switch';

export default class Login extends React.Component {
     constructor(props) {
        super();
    }

    render() {
        return (
            <React.Fragment>
                <DialogContent>
                <DialogContentText>
            <div className="base-container" ref={this.props.containerRef}>
       <h1><div className="header">Login</div></h1>
   <h4><div className="content">
            <div className="form">
                <div className="form-group mb-5">
                     <label htmlFor="email">Your Email *</label>
                   <input type="text" name="email" placeholder="Email"/>
                </div>
                <div className="form-group mb-5">
                     <label htmlFor="password">Password *</label>
                   <input type="text" name="password" placeholder="Password"/>
                </div>
            </div>
        </div>
        </h4>     
        <div className="footer"></div>
        <button type="button" className="btn">
            Forget password ?
        </button>
        <div className="footer"></div>
        <button type="button" className="btn">
            Sign in
        </button>
        </div>
        </DialogContentText>
        </DialogContent>
        </React.Fragment>
        );
       
    }
}