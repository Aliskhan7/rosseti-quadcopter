import React, { useEffect } from 'react'
import icon2 from "../assets/img/clock.png";
import icon3 from "../assets/img/arr.png";
import icon4 from "../assets/img/wind.png";
import { useDispatch, useSelector } from 'react-redux'
import { getQuadro, getQuadroAll } from '../redux/actions'
import { quadroAll } from '../redux/reducers/quadroAll'

function AllDrons() {

  const dispatch = useDispatch()
  const quadros = useSelector( state => state.quadroReducer.items)


  useEffect(() =>{
    dispatch(getQuadroAll())
  }, [])


    return (
        <div className='allDrons'>
            <h2 className='title-text'>Доступные модели БПЛА</h2>
            <div className='allDrons-content'>
                {quadros.map(item =>{
                    return (
                        <div className='allDrons-content__item'>
                            <img src={item.img} alt=""/>
                            <div className="item-text">
                                <p className="item-text__title">
                                    {item.name}
                                </p>
                                <p className="item-text__description">
                                    {item.description}
                                </p>
                                <div className="item-text__info">
                                    <div>
                                        <img src={icon2} alt=""/>
                                        <p>до {item.timeFly} мин</p>
                                    </div>
                                    <div>
                                        <img src={icon3} alt=""/>
                                        <p>до {item.radius} км</p>
                                    </div>
                                    <div>
                                        <img src={icon4} alt=""/>
                                        <p>до {item.sustainability} м/с</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default AllDrons;