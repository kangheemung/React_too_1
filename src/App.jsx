import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState ,useContext,useRef,useReducer,useMemo} from 'react';
import { ShinCodeContext } from './main.jsx';

const reducer =(state, action)=>{
	switch(action.type){
				case "increment":
				  return state + 1;
				case "decrement":
				  return state - 1;
				default:
				 return state;
	}
}
function App() {
  const [count,setCount]=useState(0);
  const shincodeInfo = useContext(ShinCodeContext);
  const ref = useRef();
  const [statue, dispatch] = useReducer(reducer, 0); 

  const handleClick =()=>{
    setCount(count + 1);
};
useEffect(() =>{
  console.log("hellow world")
  setCount(count + 1);
},[]);

const handleRef=() =>{
  console.log(ref.current.value);
  console.log(ref.current.offsetHeight);

};
//useMemo
const [count01,setCount01]=useState(0);
const [count02,setCount02]=useState(0);

const square = useMemo(() => {
  let i = 0;
  while(i < 2) {
		i++;
  }
  console.log("クリックしました");
  return count02 *  count02;
  },[count02]);


  return (
    <>
        <div className= "App">
          <h1>UseState,UseEffect</h1> 
          <button className= "Button" onClick ={handleClick}>+</button>
          <p> {count}</p>
          <p>========================</p>
          <h1>useCotext</h1>
          <p>{shincodeInfo.name}</p>
          <p>{shincodeInfo.age}</p>
          <p>========================</p>
          <h1>useRef</h1>
          <input type="text" ref={ref}></input>
          <button onClick={handleRef}>UseRef</button>
          <p>{shincodeInfo.name}</p>
          <p>{shincodeInfo.age}</p>
          <p>========================</p>
          <h1>useReducer</h1>
          <p>カウント:{statue}</p>
	        <button onClick={()=> dispatch({type: "increment"})}>+</button>
	        <button onClick={()=> dispatch({type: "decrement"})}>-</button>
				  <h1>useMemo</h1>
				  <div>カウント１：{count01}</div>
				 <div>カウント2:{count02}</div>
				 <div>結果：{square}</div>
					<button onClick={() => setCount01(count01+1) }>+</button>
          <button onClick={() => setCount02(count02+1) }>+</button>
        
      
        </div> 
    </>
  );
}

export default App