import React, { Component } from "react";
//import { Redirect, Link, NavLink, Route, withRouter} from "react-router-dom";
import './login.css'
import '../components/Dashboard'

class Login extends Component{
    constructor(props) {
        super(props);
        this.routeChange = this.routeChange.bind(this);
        this.state ={
           form:{ 
            email: "",
            password: ""
        },
        formErrorMessage:{
        emailError:"",
        passwordError:""
        },
        formValid:{
            email:false,
            password:false,
            buttonActive:false
        }
        };
    }
    routeChange() {
        let path = "/Dashboard";
        this.props.history.push(path);
      }
    handleSubmit = event => {
        event.preventDefault();
    }
    handleChange = event => {
          let {name,value} = event.target;
          let formDum = this.state.form;
          formDum[name]=value;
          this.setState({ form : formDum})
          this.validateField(name,value);
      }
      validateField = (fieldName, value)=>{
        let errMsg=''
        let formErrDum = this.state.formErrorMessage
        let formValidDum = this.state.formValid
        if(fieldName==="email")
        {
            if(value===""){
                errMsg="Field required";
            }
            else
            errMsg="";
        formErrDum.emailError = errMsg;
        formValidDum.email = errMsg ? false : true;
      }
      if(fieldName==="password"){
          if(value===""){
              errMsg="Field required";
          }
          else if(value.length<8){
              errMsg="Minimum length should be 8";
          }
          else
          errMsg="";
          formErrDum.passwordError = errMsg;
        formValidDum.password = errMsg ? false : true;
      }
      formValidDum.buttonActive = formValidDum.email && formValidDum.password;
    this.setState({ formErrorMessage : formErrDum, formValid : formValidDum});
    }

    render(){
        let{passwordError} = this.state.formErrorMessage
          return(
              <div className='div-login'>
                  
                      <h1>ACCOUNT LOGIN</h1>
                  <div>
                      <form onSubmit = {this.handleSubmit}>
                          Email<input type='email' name='email' placeholder='email...' required onChange={this.handleChange}/>
                        
                          Password<input type='password' name='pwd' placeholder='password...' required onChange={this.handleChange}/>
                          <span className='text-danger'>{passwordError}</span>
                          <button disabled={!this.state.formValid.buttonActive} className="button" onClick={this.routeChange}>Login</button>
                      </form>
                  </div>
              </div>
          )
      }
  }
    export default Login;
    
                
                
               
                