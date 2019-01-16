import React from 'react'

export default function SelectFriend(props){
    return(
        <option className="userResult" value={props.value}>
        {props.username}
        </option>
    )
}