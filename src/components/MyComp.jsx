// import {react} from 'react';

const MyComp = ()=>{

    return (
        <>
        <h1>I am inside the MyComp 1 componet</h1>
        {/* <MyCompSecond /> */}
        
        </>
    )

}

const MyCompSecond = ()=>{
    const randomValue = 232;

    return (
        <h1>Now i am inside the 2 MyCompSecond {randomValue} </h1>

        
    )

}

export {MyCompSecond};
export default MyComp;