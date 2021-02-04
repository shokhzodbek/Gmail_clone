import React from 'react'
import {Button, IconButton} from '@material-ui/core'
import Add from '@material-ui/icons/Add'
import Inbox from '@material-ui/icons/Inbox'
import SidebarOption from '../SidebarOption'

import Star from '@material-ui/icons/Star'
import Access from '@material-ui/icons/AccessTime'
import Label from '@material-ui/icons/LabelImportant'
import Near from '@material-ui/icons/NearMe'
import Note from '@material-ui/icons/Note'
import Expand from '@material-ui/icons/ExpandMore'

import Person from '@material-ui/icons/Person'
import Duo from '@material-ui/icons/Duo'
import Phone from '@material-ui/icons/Phone'

import './styles.css'
import { useDispatch } from 'react-redux'
import {openSendMessage} from '../../features/MailReducer'
function Sidebar() {
      const dispatch = useDispatch()
      return (
            <div className="sidebar">
                  <Button 
                  startIcon={<Add fontSize="large"/>}
                  className="compose"
                  onClick={()=>dispatch(openSendMessage())}
                  >Compose</Button>
                  <SidebarOption Icon={Inbox} title={"Inbox"} selected={true} number={34}/>
                  <SidebarOption Icon={Star} title={"Starred"} number={34}/>
                  <SidebarOption Icon={Access} title={"Snoozed"} number={34}/>
                  <SidebarOption Icon={Note} title={"Important"} number={34}/>
                  <SidebarOption Icon={Label} title={"Sent"} number={34}/>
                  <SidebarOption Icon={Near} title={"Draft"} number={34}/>
                  <SidebarOption Icon={Expand} title={"More"} number={34}/>
                  <div className="footer">
                        <div className="footerIcon">
                        <IconButton>
                              <Person/>
                        </IconButton>

                        <IconButton>
                              <Duo/>
                        </IconButton>

                        <IconButton>
                              <Phone/>
                        </IconButton>
                        </div>
                        
                  </div> 
            </div>
      )
}

export default Sidebar
