import React from 'react';
import Slider from "../component/Slider/Slider";
import DronInfo from "../component/Dron/DronInfo";

function Home({data}) {
    return (
        <div>
            <Slider data={data}/>
            <DronInfo data={data}/>
        </div>
    );
}

export default Home;