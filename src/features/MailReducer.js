import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMail:null,
    sendMessageOpen: false,
  },
  reducers: {
    selectMail1:(state,action)=>{
      state.selectedMail=action.payload;
    },
    openSendMessage: state => {
      state.sendMessageOpen= true;
    },
    closeSendMessage: state => {
      state.sendMessageOpen = false;
    }
  },
});

export const {selectMail1,openSendMessage, closeSendMessage} = mailSlice.actions;
export const selectOpen = state=> state.mail.selectedMail
export const selectMail = state => state.mail.sendMessageOpen;

export default mailSlice.reducer;
