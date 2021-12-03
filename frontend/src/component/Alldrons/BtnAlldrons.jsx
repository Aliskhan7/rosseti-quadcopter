import React from 'react';
import {Route, NavLink, Routes} from 'react-router-dom';
import Button from "../UI/Button/Button";
import AllDrons from "../../pages/AllDrons";

function BtnAlldrons({data}) {
    return (
        <div className='dron-btn'>
            <NavLink activeClassName='' to='/Drons/AllDrons'>
                <Button>
                    Все модели
                </Button>
            </NavLink>
        </div>
    );
}

export default BtnAlldrons;