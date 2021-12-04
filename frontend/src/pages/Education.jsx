import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { education, getCourses } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));




function Education() {

  const dispatch = useDispatch()
  const navigate = useNavigate()






  useEffect(() =>{
    dispatch(getCourses())
  },[])

  const dataCours = useSelector(state => state.courseReduce.items)

  const handleEd = (item) =>{
    // const dataEduc = dataEd[item - 1];
    dispatch(education(item));
    navigate('/Education/TreningEd')
  }

  const routCourses = () =>{
    navigate('/Education')
  }
  const routTest = () =>{
    navigate('/Education/Tests')
  }

  const { isLoggedIn } = useSelector(state => state.auth)

  if(!isLoggedIn){
    return <Navigate to='/Login'/>
  }



    return (
      <div className='dronEd'>
        <div className='dronEd-link'>
          <h2 className='title-text' onClick={routCourses}>Курсы</h2>
          <span>/</span>
          <h2 className='title-text' onClick={routTest}>Тесты</h2>
        </div>
          <div className='dronEd-content'>
              {dataCours.map(item =>{
                  return (
                      <div className='dronEd-content__item' onClick={() => handleEd(item)}>
                        <div className="item-text">
                          <p className="item-text__title">
                            {item.name}
                          </p>
                          <img src={item.img} alt=""/>

                        </div>
                        <div className="edProgress">
                          <span>0/12 уроков</span>
                            <BorderLinearProgress variant="determinate" value={50} />
                        </div>
                      </div>
                  )
              })}

          </div>

      </div>
    );
}

export default Education;