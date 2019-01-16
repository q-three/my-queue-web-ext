import React, {Component} from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import authReq from'./utils/authReq'

class Login extends Component{
    constructor(props){
        super(props)

        this.state={
            username: '',
            password: '',
            badLogin: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const body ={
            username: this.state.username,
            password: this.state.password
        }
        return axios.post(process.env.REACT_APP_BASE_URL + '/auth/token', body)
            .then(response => {
                
            window.chrome.storage.local.set({'token': response.data}, () => console.log("Token Saved"))
            return authReq('/auth/token')
            })
            .then(response=> {
                this.props.setAuthentication(response.data)
                this.props.history.push('/')
            })
            .catch(err => {
               this.setState({
                   badLogin: true
               })
            })
        }

    render(){
        return(
            <div className="login">
                <form id="login" onSubmit={(e) => this.handleSubmit(e)}>
                    <label htmlFor="username">username:</label>
                    <input id="username" type="text" required onChange={(e) => this.handleChange(e)}/>
                    <label htmlFor="password">password:</label>
                    <input id="password" type="password" minLength="8" required onChange={(e) => this.handleChange(e)}/>
                    <button id="submit" type="submit" disabled={
                        (this.state.username.length > 1 && this.state.password.length >= 8) 
                        ? false 
                        : true}>submit</button>
                    {this.state.badLogin ? <div className="warning">Bad Login Attempt</div> : null}
                </form>
            </div>
            
        )
    }
}

export default Login