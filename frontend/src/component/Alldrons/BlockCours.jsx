import React from 'react'
import bgDemo from '../../assets/img/bgDemo.png'

function BlockCours ({ cours }) {



  return (
    <div className='demo'>
      <div className="edTrening-content__demo">
        <img src={cours.img} alt=""/>

        <div className="demo-info">
          <a href="http://16.170.19.169" target='_blank' className='demo-info__btn'>
            Начать
          </a>
        </div>
      </div>
      <p className='demo-title'>{cours.title}</p>
    </div>

  )
}

export default BlockCours