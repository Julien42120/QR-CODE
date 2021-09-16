const initialState = {
    data: {},
};

function rootReducer(state = initialState, action) {

    let newState;

    switch (action.type) {
        case "HISTORY":
            newState = {
                ...state,
                data: { ...state.data, [Object.keys(state.data).length + 1]: action.payload }
            }

            console.log(newState);
            return newState;

        default:
            return state
    }

};

export default rootReducer;