import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contactsActions';

const addContact = (state, action) => {
    return [...state, action.payload.contact];
};
const removeContact = (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
};

const contactList = createReducer([], {
    [contactsActions.addContact]: addContact,
    [contactsActions.deleteContact]: removeContact,
    [contactsActions.addToLocalStorage]: (_, action) => action.payload,
})

const filter = createReducer("", {
    [contactsActions.onHandleFilter]: (_, action) => action.payload,
})



export default combineReducers({
    contactList,
    filter,
})



// const contactList = (state = [], { type, payload }) => {
    //     switch (type) {
        //         case contactsActions.addContact.type:
        //             return [...state, payload.contact];

        //         case contactsActions.deleteContact.type:
        //             return state.filter(contact => contact.id !== payload)

        //         default:
        //             return state;
        //     }
        // };


        // const filter = (state = "", { type, payload }) => {
        //     switch (type) {
        //         case contactsActions.onHandleFilter.type:
        //             return payload;

        //         default:
        //             return state;
        //     }
        // };