import { Checkbox,IconButton } from '@material-ui/core'
import { ArrowDropDown, Redo,MoreVert,LocalOffer, KeyboardHide,Settings,ChevronRight,ChevronLeft, Inbox, People} from '@material-ui/icons'
import React,{useEffect,useState} from 'react'

import Section from '../../components/Section/Section'
import './styles.css'
import List from '../../components/List/List'
import {db} from '../../firestore'
function Email() {

      const [emails,setEmails] = useState([]);
      useEffect(()=>{
          db.collection('emails').onSnapshot((snapshot)=>
              setEmails(snapshot.docs.map((doc)=>({
                      id:doc.id,
                      data:doc.data()
                })))
          )
      },[])

      return (
            <div className="email">
                  <div className="settings">
                        <div className="left">
                              <Checkbox/>
                              <IconButton>
                                    <ArrowDropDown/>
                              </IconButton>
                              <IconButton>
                                    <Redo/>
                              </IconButton>
                              <IconButton>
                                    <MoreVert/>
                              </IconButton>

                        </div>
                        <div className="right">
                              <IconButton>
                                    <ChevronLeft/>
                              </IconButton>
                              <IconButton>
                                    <ChevronRight/>
                              </IconButton>
                              <IconButton>
                                    <KeyboardHide/>
                              </IconButton>
                              <IconButton>
                                    <Settings/>
                              </IconButton>
                        </div>
                       
                  </div>
                  <div className="section1">
                            <Section Icon={Inbox}  title="primary" color="red" selected={true}/>
                            <Section Icon={People} title="Social" color="#1A73E8"/>
                            <Section Icon ={LocalOffer} title="Promotion" color="green"/>
                        </div>
                        <div className="list1">
                             {emails.map(({id,data})=>{
                                   return (
                                    <List
                                         id={id}
                                         key={id}
                                         title={data.to}
                                         description={data.message}
                                         subject={data.subject}
                                         time={new Date(data.timestamp?.seconds*1000).toUTCString()}
                                         />)
                             })}
                        
                              
 

                        </div>
            </div>
      )
}

export default Email
