import React from 'react';
import icon2 from "../assets/img/clock.png";
import icon3 from "../assets/img/arr.png";
import icon4 from "../assets/img/wind.png";

function AllDrons({data}) {
    return (
        <div className='allDrons'>
            <h2 className='title-text'>Доступные модели БПЛА</h2>
            <div className='allDrons-content'>
                {data.map(item =>{
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