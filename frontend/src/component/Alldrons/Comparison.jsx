import React, { useEffect } from 'react'

import iconCode from '../../assets/img/code.png'
import icon2 from "../../assets/img/clock.png";
import icon3 from "../../assets/img/arr.png";
import icon4 from "../../assets/img/wind.png";
import { useDispatch, useSelector } from 'react-redux'
import { getComparis, getCourses, getQuadcopterById, getQuadroAll, getSelect } from '../../redux/actions'
import { quadroAll } from '../../redux/reducers/quadroAll'
import { selectReducer } from '../../redux/reducers/select'

function Comparison (props) {

  const dispatch = useDispatch()

  const itemsSlider = useSelector( state => state.comparis.items)

  useEffect(() =>{
    dispatch(getComparis())
  },[])

  // useEffect(() =>{
  //   dispatch(getQuadroAll())
  // }, [])

  const comparis = useSelector(state => state.comparisReduces.items)

  const comparisData = useSelector(state => state.selectReducer.items)


  // const drons = useSelector(state => state.quadroReducer.items)

  const handleSelect = (e) =>{
    dispatch(getQuadcopterById(e.target.value))
  }


  return (
    <div className='compare'>
      <h2 className='title-text'>Сравнение</h2>
      <div className="compare-content">
        <div className='compare-items'>
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

          { comparisData ?
            <div className='compare-content__item just-flex-end'>
              <img src={comparisData.img} alt=""/>
              <div className="item-text">
                <p className="item-text__title">
                  {comparisData.name}
                </p>
                <p className="item-text__description">
                  {comparisData.description}
                </p>
                <div className="item-text__info">
                  <div>
                    <img src={icon2} alt=""/>
                    <p>до {comparisData.timeFly} мин</p>
                  </div>
                  <div>
                    <img src={icon3} alt=""/>
                    <p>до {comparisData.radius} км</p>
                  </div>
                  <div>
                    <img src={icon4} alt=""/>
                    <p>до {comparisData.sustainability} м/с</p>
                  </div>
                </div>
              </div>
            </div> :
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
          }
        </div>



          <div className='compare_select'>
            <p>Выберите дрон для сравнения</p>
            <select name='quadcopter' id="" onChange={handleSelect}>
              {comparis.map(item =>{
                return <option value={item.id}>{item.name}</option>
              })}
            </select>
          </div>

      </div>
    </div>
  )
}

export default Comparison