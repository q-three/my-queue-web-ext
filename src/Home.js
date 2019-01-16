import React, {Component} from 'react'
import SelectFriend from './SelectFriend'
import {Link} from 'react-router-dom'
import axios from 'axios'


class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            selectedUser: this.props.authentication.user.id,
            selectedType: 'Music',
            desc: '',
            url: '',
            success: false,
            friends: null
        }
    }

    componentDidMount(){
        this.getFriends(this.props.authentication.user.id)
        this.getCurrentUrl()
        .then(result => {
            if(result !== ''){
                this.setState({
                    url: result
                })}
        })
      }

     getCurrentUrl = () =>{
        return new Promise((resolve, reject) => {
            window.chrome.tabs.query({active: true, currentWindow: true}, tabs => {  
                if(tabs && tabs[0] && tabs[0].url) resolve(tabs[0].url)
                else resolve('')
            })
        })
      }

    getFriends = async(id) =>{
        try{
            const response = await axios.get(process.env.REACT_APP_BASE_URL + `/users/u/${id}/friends`)
            this.setState({
                friends: response.data 
            })
            //Test with a user that has no friends
        }
        catch(err){
            console.log(err)
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    postNewItem = async(item) =>{
        try{
            const response = await axios.post(process.env.REACT_APP_BASE_URL + `/queue/`, item)
            this.setState({
                success: 'Item added!'
            })
        }
        catch(err){
            console.log(err)
        }
    }

    submit = (e) => {
        e.preventDefault()
        const item = {
            id: this.state.selectedUser,
            user_id: this.state.selectedUser,
            referral_id: this.props.authentication.user.id,
            desc: this.state.desc,
            url: this.state.url,
            type: this.state.selectedType
        }
        this.postNewItem(item)
    }

    
    render(){
        return(
            <div className="addQueueItem">
                <Link className="backButton" to='/home'><i className="fa fa-arrow-left"></i></Link>
                <form onSubmit={this.submit}>
                    <label htmlFor='selectedUser'>Add For: </label>
                    <select className="selectSearch" name="selectedUser" onChange={this.handleChange}>
                        <option value={this.props.authentication.user.id} >{this.props.authentication.user.username}</option>
                        {this.state.friends ? this.state.friends.map(x => {
                           return <SelectFriend value={x.id} username={x.username} key={x.id}/>
                        }) : null} 
                    </select>

                <label htmlFor='selectedType'>Category</label>    
                <select name='selectedType' className="selectSearch" onChange={this.handleChange}>
                    <option value='music'>Music</option>
                    <option value='video'>Video</option>
                    <option value='games'>Games</option>
                    <option value='places'>Places</option>
                    <option value='links'>Check This Out</option>
                </select>   
                <br/><br/>

                <label htmlFor='desc'>Description</label>    
                <input className='inputBox' type='text' name='desc' value={this.state.desc} onChange={this.handleChange}></input>
                <label htmlFor='url'>URL</label>   
                <input className='inputBox' type='text' name='url' value={this.state.url} onChange={this.handleChange}></input>
                <br/><br/>
                <input type='submit' className='btn'></input>
                </form>
                {this.state.success ? <div className="success">{this.state.success}</div> : null}
            </div>
        )
    }
}


  export default Home


