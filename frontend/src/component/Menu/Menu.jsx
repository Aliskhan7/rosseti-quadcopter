import React from 'react';
import logo from '../../assets/img/logo.png'
import { Route, NavLink, Routes, Navigate } from 'react-router-dom'

import Education from "../../pages/Education";
import Rating from "../../pages/Rating";
import Home from "../../pages/Home";
import Button from "../UI/Button/Button";
import AllDrons from "../../pages/AllDrons";
import Login from '../../pages/Login'
import Comparison from '../Alldrons/Comparison'
import TreningEd from '../../pages/TreningEd'
import Tests from '../../pages/Tests'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/actions/auth'

function Menu({data, dataEd}) {
    const { isLoggedIn } = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const onLogout = () =>{
        dispatch(logout())
    }

    return (
        <div>
            <nav className='nav'>
                <img src={logo} alt="" className='nav-logo'/>
                <div className='nav-menu'>
                    <NavLink activeClassName='nav-menu__item' to='/'>Дроны</NavLink>
                    <NavLink activeClassName='nav-menu__item' to='/Education'>Обучение</NavLink>
                    <NavLink activeClassName='nav-menu__item' to='/Rating'>Рейтинг</NavLink>
                    {!isLoggedIn
                      ? <NavLink activeClassName='nav-menu__item' to='/Login'>Вход</NavLink>
                      : <span onClick={onLogout}>Выйти</span>
                    }
                </div>
                <div className='accaunt'>

                </div>
            </nav>
            <Routes>
                <Route path='/' element={<Home data={data}/>}></Route>
                <Route path='/Education' element={<Education dataEd={dataEd}/>}></Route>
                <Route path='/Education/TreningEd' element={<TreningEd/>}></Route>
                <Route path='/Rating' element={<Rating/>}></Route>
                <Route path='/Drons/AllDrons' element={<AllDrons data={data}/>}></Route>
                <Route path='/Login' element={<Login/>}></Route>
                <Route path='/Comparison' element={<Comparison/>}></Route>
                <Route path='/Education/Tests' element={<Tests/>}></Route>
            </Routes>
        </div>

    );
}

export default Menu;