import React from 'react';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import TreningEd from './TreningEd'
import { comparis, education } from '../redux/actions'
import { useDispatch } from 'react-redux'

function Education({dataEd}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleEd = (item) =>{
    const dataEduc = dataEd[item - 1];
    dispatch(education(dataEduc));
    navigate('/Education/TreningEd')
  }

  const routCourses = () =>{
    navigate('/Education')
  }
  const routTest = () =>{
    navigate('/Education/Tests')
  }

    return (
      <div className='dronEd'>
        <div className='dronEd-link'>
          <h2 className='title-text' onClick={routCourses}>Курсы</h2>
          <span>/</span>
          <h2 className='title-text' onClick={routTest}>Тесты</h2>
        </div>
          <div className='dronEd-content'>
              {dataEd.map(item =>{
                  return (
                      <div className='dronEd-content__item' onClick={() => handleEd(item.id)}>
                        <div className="item-text">
                          <p className="item-text__title">
                            {item.name}
                          </p>
                          <img src={item.img} alt=""/>
                        </div>
                        <div className="edProgress">
                          <span>lorem</span>
                          <progress></progress>
                        </div>
                      </div>
                  )
              })}

          </div>

      </div>
    );
}

export default Education;