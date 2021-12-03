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
import { comparis, startLogin } from '../../redux/actions'
import { useDispatch } from 'react-redux'


// install Swiper modules
SwiperCore.use([Navigation]);

const SliderItem = ({data}) => {

    // const settings = {
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 3,
    //     centerMode: true,
    //     variableWidth: true,
    //     centerPadding: '20px',
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    // }


  const dispatch = useDispatch();


  let navigate = useNavigate();

  const handleData = (item) =>{
    const dataSli = data[item - 1];
    dispatch(comparis(dataSli));
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
                                    <Button addComparis={() => handleData(item.id)} >
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