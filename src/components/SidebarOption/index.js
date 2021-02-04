import React from 'react'
import './styles.css'
function index({title,Icon,number,selected }) {
      return (
            <div className={`option ${selected&& "active"}`}>
            <Icon/>
            <h3>{title}</h3>
            <p>{number}</p>
            </div>
      )
}

export default index
