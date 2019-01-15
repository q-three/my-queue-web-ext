import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Login extends Component{
    constructor(props){
        super(props)

        this.state={
            username: '',
            password: ''
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
        return axios.post (process.env.REACT_APP_BASE_URL + '/auth/token', body)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                // this.props.logIn(err)
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
                </form>
               {/* {this.props.auth.error ? <div className="warning">{this.props.auth.error}</div> : null} */}
                {/* {this.props.auth.success ? <div className="success">{this.props.auth.success}</div> : null}  */}
            </div>
            
        )
    }
}

export default Login