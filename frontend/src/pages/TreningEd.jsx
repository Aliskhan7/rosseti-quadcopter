import React from 'react'
import playBtn from '../assets/img/playBtn.png'
import bgDemo from '../assets/img/bgDemo.png'
import Button from '../component/UI/Button/Button'
import { useSelector } from 'react-redux'
import { education } from '../redux/education'
import { useNavigate } from 'react-router-dom'

function TreningEd (props) {

  const navigate = useNavigate()


  const navBack = () =>{
    navigate("/Education")
  }

  const itemsEd = useSelector(state => state.education.items);
console.log(itemsEd)

  return (
    <div className='edTrening'>
      <h2 className='title-text' onClick={navBack}>{itemsEd.name}</h2>
      <div className='title-ed'>
        <h3>Программа</h3>
      </div>
      <div className="edTrening-content">
        <div className="edTrening-content__list">
          <div className="list-item">
            <img src={playBtn} alt=""/>
            <div className='list-item__text'>
              <h2>Урок 1</h2>
              <p>
                Техника безопасности при работе
                с БПЛА, основные типы БПЛА
              </p>
            </div>

          </div>
          <div className="list-item">
            <img src={playBtn} alt=""/>
            <div className='list-item__text'>
              <h2>Урок 2</h2>
              <p>
                Техника безопасности при работе
                с БПЛА, основные типы БПЛА
              </p>
            </div>

          </div>

        </div>
        <div className="edTrening-content__demo">
          <img src={bgDemo} alt=""/>
          <div className="demo-info">
            <a href="#" className='demo-info__btn'>
              Начать
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TreningEd