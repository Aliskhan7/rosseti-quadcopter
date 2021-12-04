import React, { useState } from 'react'
import playBtn from '../assets/img/playBtn.png'
import bgDemo from '../assets/img/bgDemo.png'
import bgDemo1 from '../assets/img/bg2.png'
import Button from '../component/UI/Button/Button'
import { useSelector } from 'react-redux'
import { education } from '../redux/education'
import { useNavigate } from 'react-router-dom'
import BlockCours from '../component/Alldrons/BlockCours'
import { NavLink } from 'react-bootstrap'


function TreningEd (props) {

  const navigate = useNavigate()


  const navBack = () =>{
    navigate("/Education")
  }

  const dataCours = [{
    id: 1,
    img: bgDemo,
    title: 'Применение БПЛА в различных отраслях промышленности; Конструкция и принципы действия БПЛА и бортовых систем; Наземное оборудование и системы управления;\n' +
      'Законодательные нормы и нормативно-правовые акты, регулирующие применение БПЛА;\n'
  },
    {
      id: 2,
      img: bgDemo1,
      title: 'Применение БПЛА в различных отраслях промышленности; Конструкция и принципы действия БПЛА и бортовых систем; Наземное оборудование и системы управления;\n' +
        'Законодательные нормы и нормативно-правовые акты, регулирующие применение БПЛА;\n'
    }
  ]
  const itemsEd = useSelector(state => state.education.items);

  const[cours, setCours] = useState(0)

  const hadleCours = (coursId) =>{
    setCours(coursId)
  }

  return (
    <div className='edTrening'>
      <h2 className='title-text' onClick={navBack}>{itemsEd.name}</h2>
      <div className='title-ed'>
        <h3>Программа</h3>
      </div>
      <div className="edTrening-content">
        <div className="edTrening-content__list">

          <NavLink activeClassName='active' className="list-item" onClick={() => hadleCours(0)}>
            <img src={playBtn} alt=""/>
            <div className='list-item__text'>
              <h2>Урок 1</h2>
              <p>
                Техника безопасности при работе
                с БПЛА, основные типы БПЛА
              </p>
            </div>
          </NavLink>

          <div className="list-item" onClick={() => hadleCours(1)}>
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

        <BlockCours cours={dataCours[cours]}/>

      </div>
    </div>
  )
}

export default TreningEd