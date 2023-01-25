import React, { useState } from 'react';
import  axios  from 'axios';
import { useEffect } from 'react';
import AllCoinData from './AllCoinData';
import Loader from './Loader';

const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr";


const AxiosComponent = () => {

    // here i am feching the data into useEffect using axios method

    const [loading , setLaoder] = useState(true)
    const [coins ,setCoins] = useState([])

    useEffect(()=>{

        const FetchFuncForCoins = async ()=>{

            const {data} = await axios.get(URL);
            console.log(data);

            setCoins(data);
            setLaoder(false);
        };

        FetchFuncForCoins();
    },[])


  return (
    <div className='all-coins'>
     {/* {
      loading ? < Loader/> : coins.map((i)=>(
        < AllCoinData imgSrc={i.image} name = {i.name} symbol = {i.symbol} price = {i.current_price} key = {i.id} />
    )) } 
     */}


     {
      loading ? <Loader /> : 
        coins.map((i)=>(
           < AllCoinData imgSrc={i.image} name = {i.name} symbol = {i.symbol} price = {i.current_price} key = {i.id} />
         ))
     }
     
    



    </div>
  )
}

export default AxiosComponent ;