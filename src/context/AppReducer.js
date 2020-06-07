export default (state, action) => {
  switch (action.type) {
    case 'REMOVE_MEMBER':
      return {
        ...state,
        members: state.members.filter((member) => member.id !== action.payload),
      };
    case 'ADD_MEMBER':
      return {
        ...state,
        members: [...state.members, action.payload],
      };
    case 'EDIT_MEMBER':
      const updatedMember = action.payload;

      const updatedMembers = state.members.map((member) => {
        if (member.id === updatedMember.id) {
          return updatedMember;
        }
        return member;
      });

      return {
        ...state,
        members: updatedMembers,
      };
    default:
      return state;
  }
};
