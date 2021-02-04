import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/MailReducer';
import userReducer from '../features/userReducer';

export default configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer
  },
});
