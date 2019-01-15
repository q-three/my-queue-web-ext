import React, {Component} from 'react'
import {Link} from 'react-router-dom'
const Storage = require('chrome-storage/index')

class Home extends Component{

    render(){
        return(
            <div>{Storage.get('token',0)}</div>
        )
    }
}

export default Home