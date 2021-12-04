import React from 'react';
import Slider from "../component/Slider/Slider";
import DronInfo from "../component/Dron/DronInfo";
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function Home({data}) {
  const { isLoggedIn } = useSelector(state => state.auth)


  if(!isLoggedIn){
    return <Navigate to='/Login'/>
  }

    return (
        <div>
            <Slider data={data}/>
            <DronInfo data={data}/>
        </div>
    );
}

export default Home;