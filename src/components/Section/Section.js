import React from 'react'
import './styles.css'
function index({Icon,title,color,selected}) {
      return (
            <div className={ `section ${selected && 'selected'}`}
            style={{
                  borderBottom: `3px solid ${color}`,
                  color: `${selected && color}`
            }}
            >
                  <Icon/>
                  <h4>{title}</h4>
                  
            </div>
      )
}

export default index
