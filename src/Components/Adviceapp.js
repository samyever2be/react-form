import React, {useState} from 'react';
const Adviceapp = ()=>{
    const[advice, setAdvice] = useState();
    const[count, setCount] = useState(0);
    async function getadvice(){
        const res = await fetch(`https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`);
        const data = await res.json();  
        setAdvice(data.slip.advice); 
        setCount((c)=>c +1);
    }
    return(
        <div>
            <h1>Daily Advice</h1>
            <h2 style={{color:"red"}}>{advice}</h2>
            <button onClick={getadvice}>Click Here</button>
            <p>You have read {count} piece of advice</p>
        </div>
    );
}
export default Adviceapp;