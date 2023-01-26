import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";
import styled from "styled-components";


const ReduxPage = () => {

 

  return (
    <>
     <Wrapper>
      <h1 style={{width:"full", textAlign:"center" }} >ReduxPage</h1>

      <div className="container" >
        <button >
        
        <BiPlusMedical className="icon" />
        </button>
        <h1>Row data 0</h1>
        <button >
        
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
