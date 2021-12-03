import React, { useState } from 'react'

import iconCode from '../../assets/img/code.png'
import icon1 from "../../assets/img/copter.png";
import icon2 from "../../assets/img/clock.png";
import icon3 from "../../assets/img/arr.png";
import icon4 from "../../assets/img/wind.png";
import { useSelector } from 'react-redux'
import { comparisItem } from '../../redux/comparis'

function Comparison (props) {

  const itemsSlider = useSelector(state => state.comparis.items);


  return (
    <div className='compare'>
      <h2 className='title-text'>Сравнение</h2>
      <div className="compare-content">
        <div className='compare-content__item'>
          <img src={itemsSlider.img} alt=""/>
          <div className="item-text">
            <p className="item-text__title">
              {itemsSlider.name}
            </p>
            <p className="item-text__description">
              {itemsSlider.description}
            </p>
            <div className="item-text__info">
              <div>
                <img src={icon2} alt=""/>
                <p>до {itemsSlider.timeFly} мин</p>
              </div>
              <div>
                <img src={icon3} alt=""/>
                <p>до {itemsSlider.radius} км</p>
              </div>
              <div>
                <img src={icon4} alt=""/>
                <p>до {itemsSlider.sustainability} м/с</p>
              </div>
            </div>
          </div>
        </div>
        <img src={iconCode} alt=""/>
        <div>
          <p>Выберите дрон для сравнения</p>
          <select name="" id="">
            <option>
              1</option>
            <option value="">2</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Comparison