import { ArrowBack, CheckCircle, Email, MoveToInbox,Delete,WatchLater,Error,LabelImportant,MoreVert, ExitToApp,UnfoldMore,Print } from '@material-ui/icons'
import {IconButton} from '@material-ui/core'
import './Styles.css'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectMail, selectOpen } from '../../features/MailReducer'

function Mail() {
      const history = useHistory()
      const selectedMail = useSelector(selectOpen)
      return (
            <div className="mail">
                  <div className="tools">
                      <div className="left">
                          <IconButton onClick={()=>history.push('/')}>
                                <ArrowBack/>
                          </IconButton>
                          <IconButton>
                                <MoveToInbox/>
                          </IconButton>

                          <IconButton>
                                <Error/>
                          </IconButton>

                          <IconButton>
                                <Delete/>
                          </IconButton>

                          <IconButton>
                                <Email/>
                          </IconButton>

                          <IconButton>
                                <WatchLater/>
                          </IconButton>

                          <IconButton>
                                <CheckCircle/>
                          </IconButton>
                          <IconButton>
                                <LabelImportant/>
                          </IconButton>

                          <IconButton>
                                <MoreVert/>
                          </IconButton>
                      </div>

                      <div className="right">
                            <IconButton>
                                  <UnfoldMore/>
                            </IconButton>
                            <IconButton>
                                  <Print/>
                            </IconButton>
                            <IconButton>
                                  <ExitToApp/>
                            </IconButton>
                      </div>
                  </div>

                  <div className="body ">
                      <div className="header1">
                              <h2>{selectedMail?.subject}</h2>
                              <LabelImportant className="icon"/>
                              <p>{selectedMail?.title}</p>
                              <p className="time">{selectedMail?.time}</p>
                      </div>
                      <div className="message1">
                           <p>{selectedMail?.description}</p> 
                      </div>
                  </div>

            </div>
      )
}

export default Mail
