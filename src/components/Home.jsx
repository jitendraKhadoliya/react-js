import React , {useState} from 'react';
import {BiPlusMedical} from 'react-icons/bi';
import {FaMinus} from 'react-icons/fa';


import '../style/home.css';
import UseState from './UseState/UseState';

// today i was working on notion template and reading theory abour it
const Home = () => {

  // const myArr = [1,2,3,4]
  // const [myArr, setmyArr] = useState("initial value")
  // let name1 = " ";
  // let initialArray = " ";

  // const [count , setCount] = useState(0);
  

  return (
    <UseState />
    // <div className='home'>
    // <h1>Home page inside this i am going to learn about hooks </h1>

    // {/* <form > */}
    //   {/* <input type="text" placeholder='Enter Your Name' onChange={(e)=>{ name1 = e.target.value }}  /> 
    //   <input type="email" placeholder='Enter your Email' />
    //   <button type='button'
    //    onClick={()=>console.log(setmyArr) }
    //    >Button</button> */}




    //   <button onClick={()=> setCount(count+1)} >
    //     <BiPlusMedical/>
    //     </button> 
    //    <span> {count} </span>
    //    <button onClick={()=> count === 0 ? count = 0 : setCount(count - 1)}>
    //    <FaMinus/>
    //    </button>

    // {/* </form> */}

    // {/* <h2>your data : {  } </h2> */}
    // </div>
  )
}

export default Home