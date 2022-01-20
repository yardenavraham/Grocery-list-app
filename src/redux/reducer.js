//This reducer function takes an action and the previous state of the app and returns the new state.

function reducer(state = { items: [] }, action) {

    switch (action.type) {
        case "ADD":
            if (state.items == undefined) {
                return;
            }
            else {
                return { ...state, items: [...state.items, action.payload] };
            }
        case "DELETE":

            let id = action.payload;
            let arr = [...state.items];
            let index = arr.findIndex(x => x.id == id)
            if (index >= 0) {
                arr.splice(index, 1)
            }
            return { ...state, items: [...arr] };

        default:
            return state;
    }
}

export default reducer;

