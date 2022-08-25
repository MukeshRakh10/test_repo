import {React} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { WITHDRAW } from './constants/contstants';
function App() {
  const resp = useSelector(state => state);
  const dispatch = useDispatch();

  const withdraw = () => {
    dispatch({type : WITHDRAW,value : 1000});
  }
  return (
    <div className="App">
      <span>{JSON.stringify(resp)}</span>
      <br/>
      <button onClick={withdraw} >Withdraw </button>
    </div>
  );
}

export default App;
