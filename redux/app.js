const {createStore} = require("redux")

const initialState = {
    accountHolder: "Subhash",
    balance: 2000
}

function bankReducer(state = initialState, action) {
    switch (action.type) {
        case "DEPOSIT":
            return {
                ...state,
                balance: state.balance + action.payload
            };

        case "WITHDRAW":
            if (state.balance < action.payload) {
                console.log("Low balance");
                return state;
            }
            return {
                ...state,
                balance: state.balance - action.payload
            };

        default:
            return state;
    }
}

const store = createStore(bankReducer)

store.subscribe(() => {
    console.log("Store Update :", store.getState())
})

console.log("Initial State:", store.getState())

console.log("Action - 500 DEPOSIT")
store.dispatch({
    type: 'DEPOSIT',
    payload: 500
})

console.log("Action - 5000 WITHDRAW")
store.dispatch({
    type: 'WITHDRAW',
    payload: 5000
})