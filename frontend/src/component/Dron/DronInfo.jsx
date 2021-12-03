import React from 'react';

import {NavLink, Route, Routes} from "react-router-dom";
import Button from "../UI/Button/Button";
import AllDrons from "../../pages/AllDrons";
import Home from "../../pages/Home";
import BtnAlldrons from "../Alldrons/BtnAlldrons";
import icon1 from "../../assets/img/wind.png";

function DronInfo({data}) {
    return (
        <div>
            {/*<div className='drons'>*/}
            {/*    {data.map(item =>{*/}
            {/*        return(*/}
            {/*            <div className='dron-info'>*/}
            {/*                <div className="dron-info__item">*/}
            {/*                    <div className="info-text">*/}
            {/*                        <img src={icon1} alt=""/>*/}
            {/*                        <p>{item.type}</p>*/}
            {/*                        <span>тип стройства</span>*/}
            {/*                    </div>*/}
            {/*                    <div className="info-text">*/}
            {/*                        <img src={icon1} alt=""/>*/}
            {/*                        <p>до {item.timeFly} мин</p>*/}
            {/*                        <span>время полета</span>*/}
            {/*                    </div>*/}
            {/*                    <div className="info-text">*/}
            {/*                        <img src={icon1} alt=""/>*/}
            {/*                        <p>до {item.radius} км</p>*/}
            {/*                        <span>радиус действий</span>*/}
            {/*                    </div>*/}
            {/*                    <div className="info-text">*/}
            {/*                        <img src={icon1} alt=""/>*/}
            {/*                        <p>до {item.sustainability} м/с</p>*/}
            {/*                        <span>устойчивость к ветру</span>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*    })}*/}



        </div>


    );
}

export default DronInfo;