import { configureStore} from '@reduxjs/toolkit'
import contactsReducer from './contacts/contactsReduser';




/* const rootReducer=combineReducers({
    contacts:contactsReducer
}) */  
const store=configureStore({
    reducer:{
        contacts:contactsReducer,
    }
})
//const store=createStore(rootReducer,composeWithDevTools());
export default store;