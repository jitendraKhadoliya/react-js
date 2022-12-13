import './App.css';
// import {Trinary} from './Trinary-operator.js';


const UserData = (props)=>{
  // return <div>
  //   <h1>{props.salary}</h1>
  //   <h1>{props.poisiton}</h1>
  //   <h1>{props.company}</h1>
  //   <h1>{typeof props.salary} </h1>
  //   <h1>{typeof props.poisiton} </h1>
  //   <h1>{typeof props.company} </h1>
  // </div>
      // <Trinary/>cl
}


function App() {
  const lists = ["jitu","punit","ankit","ram","prince","khusi"];
  return (
    <div className="App">

      <UserData salary = {10000} poisiton = {"junior enginner"} company ="google"/>
      <UserData salary = {10000} poisiton = {"Front End enginner"} company ="meta"/>
      <UserData salary = {10000} poisiton = {"Back End enginner"} company ="Netfliex"/>
      {/* <Trinary /> */}
      {lists.map((list , indexNumber)=>{
        return (
          <h1> {list}</h1>
        )
        
        

      })}

    </div>
  );  
}

// const mycomp = (props)=>{
//   <h1>{props} {props} kdsfhs </h1>
// }

export default App;
