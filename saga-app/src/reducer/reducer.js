import { WITHDRAW_GST } from "../constants/contstants";

const initialValue = {
    bal: 5000
}

export function reducer(state = initialValue, action) {
    console.log("In reducer ::  ",state, " ",action.type , action.value );
    switch (action.type) {
        case WITHDRAW_GST:
            return {
                ...state,
                bal: state.bal - action.value
            }
        default: return state
    }
}
