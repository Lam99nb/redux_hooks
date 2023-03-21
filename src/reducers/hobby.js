const initialState = {
    lists: [],
    activeId: null
}

const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            const newList = [...state.lists];
            newList.push(action.payload);
            return {
                ...state,
                lists: newList
            };
        }
        case 'SET_ACTIVE_HOBBY' :{
            const newActiveId = action.payload.id;
            return {
                ...state,
                activeId: newActiveId
            }
           
        }
        default:
            return state;
    }
}

export default hobbyReducer;