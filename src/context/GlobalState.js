import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  members: [
    {
      id: 1,
      memberName: 'Vincent Fonseca',
      memberBio: 'Learning React',
      memberAge: 33,
    },
  ],
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function removeMember(id) {
    dispatch({
      type: 'REMOVE_MEMBER',
      payload: id,
    });
  }

  function addMember(members) {
    dispatch({
      type: 'ADD_MEMBER',
      payload: members,
    });
  }

  function editMember(members) {
    dispatch({
      type: 'EDIT_MEMBER',
      payload: members,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        members: state.members,
        removeMember,
        addMember,
        editMember,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
