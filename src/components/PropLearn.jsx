// const PropLearn = (props)=>{

//     return (
//         <div>{props.name}</div>
//     )
// }



import React from 'react'

const PropLearn = ({firstName ,lastName,price },props) => {
  return (
    <div>
        <span>{firstName}</span>
        <span>{lastName}</span>
        <span> , {myFirstKey }</span>
        <span> , { mySecondKey}</span>
        <span> my price that is imported from the App secection = {price} ;</span>
        {/* <PropLearnTwo myprice = { 1000}/> */}

        
    </div>
  )
}
const PropLearnTwo = ({myprice =100 ,pprice}) =>{

  return (
<>
    <h1>NOTE : this component is rendering two times becuase i added same fuction two time in "APP.js" File and "PropLearn" component</h1>
  {/* <h1> {props.price}</h1>; */}
  <h2>kjasdl</h2>
  <h3>value imported from the App.js file  {pprice}</h3>
  <span>value of myprice is ={myprice} ==:  ("here it's fatching Deafult value")</span>
  
</>
  
  )
}

// object Destructing 

const obj = {
  myFirstKey : 111,
  mySecondKey : 222
}

const {myFirstKey , mySecondKey} = obj;


export  { PropLearn ,PropLearnTwo};