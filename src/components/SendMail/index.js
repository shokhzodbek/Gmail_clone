import { Close } from '@material-ui/icons'
import React from 'react'
import {Button, IconButton} from '@material-ui/core'

import { useForm } from "react-hook-form";

import {db} from '../../firestore'
import firebase from 'firebase'

import './styles.css'
import { useDispatch } from 'react-redux';
import {closeSendMessage} from '../../features/MailReducer'

function SendMail() {
      const { register, handleSubmit, watch, errors } = useForm();
      const dispatch = useDispatch()

      const onSubmit = (formData)=>{
           db.collection('emails').add({
                 to:formData.to,
                 subject:formData.subject,
                 message:formData.message,
                 timestamp:firebase.firestore.FieldValue.serverTimestamp()
           })
           dispatch(closeSendMessage())

      }
      return (
            <div className="send">
                  <div className="send-header">
                        <h3>Message</h3>
                        <IconButton onClick={()=>dispatch(closeSendMessage())}>
                        <Close className="close"/>
                        </IconButton>
                        
                  </div>  
                   <form onSubmit={handleSubmit(onSubmit)}>
                         <input 
                         ref={register({required:true})}
                         name='to' 
                         type="email" 
                         placeholder="To"/>
            {errors.to && <p className="error">To is Requred</p>}
                         <input 
                         name='subject' 
                         type="text"
                          placeholder="Subject"
                          ref={register({required:true})}
                          />
                        {errors.subject && <p className="error">Subject is Requred</p>}
                         <input name='message' className="mess"
                          type="text" 
                          placeholder="Message"
                          ref={register({required:true})}
                          />
                            {errors.message && <p className="error">Message is Requred</p>}

                         <div className="options_send">
                               <Button
                                className="button"
                                variant="contained"
                                color='primary'
                                type='submit'
                                >Send</Button>
                         </div>
                   </form>
            </div>    
      )
}

export default SendMail
