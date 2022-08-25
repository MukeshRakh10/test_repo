import { WITHDRAW, WITHDRAW_GST } from "../constants/contstants";
import { takeLatest, put, delay } from "redux-saga/effects";

export function *withdraw_gst(action) {
    console.log("In Action :: WITHDRAW_GST() ");
    delay(5000);
    // put : call the reducer
   yield put({ type: WITHDRAW_GST, value: (action.value + action.value * 0.18) }); 
}
export function *withdraw() {
    console.log("In Action :: withdraw() ");
    // takeLatest : Get the request from component.
    yield takeLatest(WITHDRAW, withdraw_gst);
} 