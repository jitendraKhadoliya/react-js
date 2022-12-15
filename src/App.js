import { Fragment } from "react";
import MyComp, { MyCompSecond } from "./components/MyComp";
import {PropLearn, PropLearnTwo} from "./components/PropLearn"

// const UserData = (props)=>{
  // return <div>
  //   <h1>{props.salary}</h1>
  //   <h1>{props.poisiton}</h1>
  //   <h1>{props.company}</h1>
  //   <h1>{typeof props.salary} </h1>
  //   <h1>{typeof props.poisiton} </h1>
  //   <h1>{typeof props.company} </h1>
  // </div>
      // <Trinary/>cl
// }



const MyName = ()=>{
  return <h1>Jitendra Khadoliya</h1>
}

function App() {
  // const lists = ["jitu","punit","ankit","ram","prince","khusi"];


  return (

    <Fragment>
    
    <div className="App">
       
      {/* <UserData salary = {10000} poisiton = {"junior enginner"} company ="google"/>
      <UserData salary = {10000} poisiton = {"Front End enginner"} company ="meta"/>
      <UserData salary = {10000} poisiton = {"Back End enginner"} company ="Netfliex"/>
      {/* <Trinary /> */}
      {/* {lists.map((list , indexNumber)=>{
        return (
          <h1> {list}, {indexNumber }</h1>
        )
        })}  */}


        </div>
        {/* from here i will start new begning */}

        <h1>welcome to the React </h1>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam corrupti officiis illum minus doloribus distinctio animi a ipsa quas dolorem?</p>

        <h4>write your name using another componet :-</h4>
        <MyName />
        <MyComp/>
        <p>trying to access MyCompSecond directly from Mycomp.jsx File</p>
        < MyCompSecond/>
        <PropLearn  firstName = "jinix" lastName = " khadoliya" price = {2000}/>
        < PropLearnTwo pprice = {13200}/>
        


    </Fragment>
  );  
}


export default App;
