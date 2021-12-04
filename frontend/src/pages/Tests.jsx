import React from 'react'
import { useNavigate } from 'react-router-dom'

function Tests (props) {

  const dataTest = [
    {
      id: 1,
      title: 'Введение в беспилотную авиатехнику',
      level: 2,
      time: 20,
      description: 'Применение БПЛА в различных отраслях промышленности; Конструкция и принципы действия БПЛА и бортовых систем; Наземное оборудование и системы управления;\n' +
        'Законодательные нормы и нормативно-правовые акты, регулирующие применение БПЛА;\n'
    },
    {
      id: 2,
      title: 'Основные типы БПЛА, их конструктивные  особенности, алгоритмы работы с БПЛА',
      level: 4,
      time: 30,
      description: 'Применение БПЛА в различных отраслях промышленности; Конструкция и принципы действия БПЛА и бортовых систем; Наземное оборудование и системы управления;\n' +
        'Законодательные нормы и нормативно-правовые акты, регулирующие применение БПЛА;\n'
    }
  ]
  const navigate = useNavigate()

  const routCourses = () =>{
    navigate('/Education')
  }
  const routTest = () =>{
    navigate('/Education/Tests')
  }
  return (
    <div>
      <div className='dronEd-link'>
        <h2 className='title-text' onClick={routCourses}>Курсы</h2>
        <span>/</span>
        <h2 className='title-text' onClick={routTest}>Тесты</h2>
      </div>
      {dataTest.map(item =>{
        return(
          <div className="tests">
            <div className="tests_title">
              {item.title}
            </div>
            <div className="tests_level">
              <span>Сложность: {item.level}</span>
              <span>Длительность: {item.time} минут</span>
            </div>
            <div className="tests_description">
              {item.description}
            </div>
            <a href="http://16.170.19.169" target='_blank' className='demo-info__btn'>
              Начать тест
            </a>
          </div>
        )
      })}

    </div>
  )
}

export default Tests