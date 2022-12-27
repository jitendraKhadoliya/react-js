import React , {useState} from 'react';

import '../style/home.css';


const Home = () => {

  const myArr = [1,2,3,4]
  const [first, setfirst] = useState(myArr)
  const initialArray = "";

  return (
    <div className='home'>
    <h1>Home page inside this i am going to learn about hooks </h1>

    <form >
      <input type="text" placeholder='Enter Your Name' onChange={(e)=>{
            // setfirst( initialArray.push(e.target.value))
            
          // console.log("my value",myArr)
          return (initialArray = e.target.value)
      }}  />
      <input type="email" placeholder='Enter your Email' />
      <button type='submit' onClick={()=>{
        console.log(initialArray);
      }} >Button</button>

    </form>

    <h2>your data : { initialArray } </h2>
    </div>
  )
}

export default Home