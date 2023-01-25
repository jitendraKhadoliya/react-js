import React from "react";
import { useState } from "react";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";
import styled from "styled-components";
import { useDispatch,useSelector } from "react-redux";

const ReduxPage = () => {
  // const [count, setCount] = useState(0);

  const {count} = useSelector(state => state.custom)


  const dispatch = useDispatch();



  // inside this page component I am going to access the data from different componet that is stored as store inside the redux folder
  return (
    <>
     <Wrapper>
      <h1 style={{width:"full", textAlign:"center" }} >ReduxPage</h1>

      <div className="container" onClick={()=>{dispatch({type : "INC"})}} >
        <button >
        {/* onClick={()=>{dispatch({type : "INC"})}} */}
        <BiPlusMedical className="icon" />
        </button>
        <h1>{count}</h1>
        <button >
        {/* onClick={()=> dispatch({type : "DEC"})} */}
        <FaMinus className="icon minus_icon" onClick={()=>{dispatch({type : "DEC"})}} />
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
