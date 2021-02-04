import { IconButton } from '@material-ui/core'
import { LabelImportantOutlined,StarBorderOutlined } from '@material-ui/icons'
import {Checkbox} from '@material-ui/core'

import React from 'react'
import { useHistory } from 'react-router-dom'

import "./styles.css"
import {useDispatch} from 'react-redux'
import { selectMail1 } from '../../features/MailReducer'


function List({title,id,subject,description,time}) {
      const dispatch = useDispatch()
      const history = useHistory()
      const openMail = ()=>{
            dispatch(selectMail1({
                  title,
                  id,
                  subject,
                  description,
                  time
            }));
            history.push('/mail')
            
      }
      return (
            <div className="list" onClick={openMail}>
                  <div className="option">
                        <Checkbox/>
                        <IconButton>
                              <StarBorderOutlined/>
                        </IconButton>
                        <IconButton>
                              <LabelImportantOutlined/>
                        </IconButton>
                  </div>

                  <h3 className="title">
          {title}
                  </h3>
                  <div className="message">
                        <h4>{subject}
                        <span className='description'>{description}</span>
                        </h4>
                  </div>
                  <div className="description">{time}</div>
            </div>
      )
}

export default List
