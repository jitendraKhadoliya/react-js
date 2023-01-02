import React, { useReducer } from "react";
import {FaMinus} from 'react-icons/fa';
import {BiPlusMedical} from 'react-icons/bi';
import styled from "styled-components";
import reducer from "./reducer";


// reduce Hook is the advance version of use state

const initialValue = 0;

const ReducerHook = () => {
  const [count , dispatch ] = useReducer(reducer , initialValue )


  return (
    <>
      <Wrapper>
        <div className="container">
          <button onClick={()=>{dispatch({type : "INC"})}}>
            <BiPlusMedical className="icon" />
          </button>
          <h1>{count}</h1>
          <button onClick={()=> dispatch({type : "DEC"})}>
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

export default ReducerHook ;
