import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "swiper/swiper.scss";
import "swiper/swiper-bundle.css";
import {Swiper, SwiperSlide} from "swiper/react/swiper-react";

// import Swiper core and required modules
import SwiperCore, {Navigation} from "swiper";
import Button from "../UI/Button/Button";
import icon1 from "../../assets/img/copter.png";
import icon2 from "../../assets/img/clock.png";
import icon3 from "../../assets/img/arr.png";
import icon4 from "../../assets/img/wind.png";
import BtnAlldrons from "../Alldrons/BtnAlldrons";
import { comparis, dataServiceAction, getQuadro, startLogin } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { dataService } from '../../redux/dataService'
import { quadroReducer } from '../../redux/reducers/slider'


// install Swiper modules
SwiperCore.use([Navigation]);

const SliderItem = () => {

  const data = useSelector( state => state.quadroReducer.items)
  const dispatch = useDispatch();


  useEffect(() =>{
    dispatch(getQuadro())
  }, [])



  let navigate = useNavigate();

  const handleData = (item) =>{
    dispatch(comparis(item));
    navigate('/Comparison')
  }


    return (
        <>
            <Swiper navigation={true} className="swiper">
                {data.map((item) => {
                    return (
                        <div>
                            <SwiperSlide className="swiper-content">
                                <div className='swiper-title'>
                                    {item.name}
                                </div>
                                <div className='swiper-img'>
                                    <img
                                        src={item.img}
                                        alt="slide-img"

                                    />
                                </div>
                                <div className='swiper-btn'>
                                    <Button addComparis={() => handleData(item)} >
                                        Сравнить
                                    </Button>
                                </div>
                              <div className='dron-left'>
                                <div className='drons'>
                                  <div className='dron-info'>
                                    <div className="dron-info__item">
                                      <div className="info-text">
                                        <img src={icon1} alt=""/>
                                        <div>
                                          <p>{item.type}</p>
                                          <span>тип стройства</span>
                                        </div>
                                      </div>
                                      <div className="info-text">
                                        <img src={icon2} alt=""/>
                                        <div>
                                          <p>до {item.timeFly} мин</p>
                                          <span>время полета</span>
                                        </div>
                                      </div>
                                      <div className="info-text">
                                        <img src={icon3} alt=""/>
                                        <div>
                                          <p>до {item.radius} км</p>
                                          <span>радиус действий</span>
                                        </div>
                                      </div>
                                      <div className="info-text">
                                        <img src={icon4} alt=""/>
                                        <div>
                                          <p>до {item.sustainability} м/с</p>
                                          <span>устойчивость к ветру</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                        </div>
                    )
                })}
              <BtnAlldrons data={data}/>
            </Swiper>

        </>
    )
}

export default SliderItem