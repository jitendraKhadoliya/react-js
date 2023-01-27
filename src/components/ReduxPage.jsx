import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";
import styled from "styled-components";
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "../redux/counterSlice";


const ReduxPage = () => {
  // const count =useSelector((state)=>{state.counter.value})
  // const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  // this is the Redux page component 
  // my tasks are to get the data from Redux Store and apply it inside while cliking the button

  // step 1 => configure store, for that I am creating store inside the Redux page 
  // step 2 => we created and exported the store inside this store we configured it and create reduced inside it
  // step 3 => Now we will give provider and store data to our index.js file so we can get the store data inside all our components
  // step 4 => now we done configuration part we will create Redux State Slice
  // step 5 => we have to import the createSlice api from redux Toolkit and
      // creating slice required the value
      // 1. name to identify the which slice it is
      // 2. initial state value
      // 3. minimum one reducer function to define it


  // step 6 => now we will create reducer function to map
  // step 7 => we will export the reducer function by destructing from the "object we created inside the reducer" 
  // step 8 => we will export it all function
  // step 9 => Add slice reducer to the store 
  // step 10 => Last step, use the redux state and action in our react component 





  return (
    <>
     <Wrapper>
      <h1 style={{width:"full", textAlign:"center" }} >ReduxPage</h1>

      <div className="container" >
        <button onClick={()=>dispatch(increment())} >
        
        <BiPlusMedical className="icon" />
        </button>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(decrement())} >
        
        <FaMinus className="icon minus_icon" />
        </button>
      </div>
     </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.8rem;
  }
  .icon {
    font-size: 2rem;
  }

  h1 {
    font-size: 5.4rem;
    color: #2e86c1;
  }
`;

export default ReduxPage;
