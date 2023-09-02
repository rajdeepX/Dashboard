import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

// export enum ContactStatus {
//   Active = "active",
//   Inactive = "inactive",
//   Pending = "pending",
// }

// export interface Contact {
//   id: string;
//   fName: string;
//   lName: string;
//   status: ContactStatus;
// }

// interface ContactState {
//   contacts: Contact[];
// }

// const initialState: ContactState = {
//   contacts: [],
// };

// export const contactSlice = createSlice({
//   name: "contact",
//   initialState,
//   reducers: {
//     addContact: (
//       state,
//       action: PayloadAction<{
//         fName: string;
//         lName: string;
//         status: ContactStatus;
//       }>
//     ) => {
//       state.contacts.push({
//         id: nanoid(),
//         fName: action.payload.fName,
//         lName: action.payload.lName,
//         status: action.payload.status,
//       });
//     },
//     removeContact: (state, action) => {
//       state.contacts = state.contacts.filter(
//         (contact) => contact.id !== action.payload
//       );
//     },
//   },
// });

// export const { addContact, removeContact } = contactSlice.actions;

// export default contactSlice.reducer;

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Contacts {
  id: string;
  fName: string;
  lName: string;
  status: string;
}

interface InitialState {
  contacts: Contacts[];
}

const initialState: InitialState = {
  contacts: [],
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contacts>) => {
      state.contacts.push({
        id: nanoid(),
        fName: action.payload.fName,
        lName: action.payload.lName,
        status: action.payload.status,
      });
    },
    editContact: (state, action: PayloadAction<Contacts>) => {
      const { id, fName, lName, status } = action.payload;
      const contactIndex = state.contacts.findIndex(
        (contact) => contact.id === id
      );
      if (contactIndex !== -1) {
        state.contacts[contactIndex] = { id, fName, lName, status };
      }
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      const contactId = action.payload;
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== contactId
      );
    },
  },
});

export const { addContact, editContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;

//   const contact: Contact = {
//     id: nanoid(),
//     fName: action.payload.fName,
//     lName: action.payload.lName,
//     status: action.payload.status,
//   };
