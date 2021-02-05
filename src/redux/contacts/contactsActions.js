import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction("contacts/add", ({ name, number }) => ({
    payload: {
        contact: {
            id: uuidv4(),
            name,
            number,
        }
    }
}));

const deleteContact = createAction("contacts/remove");

const onHandleFilter = createAction("contacts/handleFilter");

const addToLocalStorage = createAction("contacts/addToLocalStorage");

export default {
    addContact,
    deleteContact,
    onHandleFilter,
    addToLocalStorage,
}

// const addContact = ({ name, number }) => ({
//     type: actionTypes.ADD,
//     payload: {
//         contact: {
//             id: uuidv4(),
//             name,
//             number,
//         }
//     }
// })


// const deleteContact = (id) => ({
//     type: actionTypes.REMOVE,
//     payload: {
//         id,
//     }
// })

// const onHandleFilter = (filter) => ({
//     type: actionTypes.VALUE,
//     payload: {
//         filter,
//     }
// })

