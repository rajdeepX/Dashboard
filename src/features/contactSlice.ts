import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

// Defining structure of the contact objects
interface Contacts {
  id: string;
  fName: string;
  lName: string;
  status: string;
}

// Define the initial state for the Redux slice
interface InitialState {
  contacts: Contacts[];
}

// Create the initial state object
const initialState: InitialState = {
  contacts: [],
};

// Redux slice using createSlice from Redux Toolkit
export const contactSlice = createSlice({
  name: "contact", //Name of the slice
  initialState,
  reducers: {
    // reducer function to add new contacts
    addContact: (state, action: PayloadAction<Contacts>) => {
      // adding contacts to the contacts[]
      state.contacts.push({
        id: nanoid(), //unique id generated with the help of nanoid from redux toolkit

        //creating a contact obj with the above defined structure, with the provided data from the UI
        fName: action.payload.fName,
        lName: action.payload.lName,
        status: action.payload.status,
      });
    },

    // reducer function to edit contacts
    editContact: (state, action: PayloadAction<Contacts>) => {
      const { id, fName, lName, status } = action.payload;

      // find the index of the contact to be edited in the contacts array
      const contactIndex = state.contacts.findIndex(
        (contact) => contact.id === id
      );

      // if the contact is found in the array, update its properties
      if (contactIndex !== -1) {
        state.contacts[contactIndex] = { id, fName, lName, status };
      }
    },
    // reducer function to delete contacts
    deleteContact: (state, action: PayloadAction<string>) => {
      const contactId = action.payload;

      // filter out the contact with the matching ID
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== contactId
      );
    },
  },
});

// export the action creators
export const { addContact, editContact, deleteContact } = contactSlice.actions;

// export the reducer function
export default contactSlice.reducer;
