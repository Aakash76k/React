const {createStore} = require("redux")

const initialState = {
    accountHolder : "Subhash",
    balance : 2000
}

function bankReducer(state = initialState, action){
    switch(action.type){
        case "DEPOSIT":
            return{
                ...state,
                balance:state.balance + action.payload
            };

        case "WITHDRAW":
            if(state.balance < action.payload){
                console.log("Low balance");
                return state;
            }
            return{
                ...state,
                balance:state.balance - action.payload
            };
            default:
                return state;

    }
}