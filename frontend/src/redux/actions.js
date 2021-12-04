import userService from '../services/user.service'

export const getQuadro = () => (dispatch) =>{
  userService.getQuadcopter()
    .then(({data}) => dispatch({ type: 'SET_QUADRO', payload: data }))
}
export const getQuadroAll = () => (dispatch) =>{
  userService.getQuadcopterAll()
    .then(({data}) => dispatch({ type: 'SET_QUADRO_ALL', payload: data }))
}
export const getCourses = () => (dispatch) =>{
  userService.getCourse()
    .then(({data}) => dispatch({ type: 'SET_COURSE', payload: data }))
}
export const getComparis = () => (dispatch) =>{
  userService.getComparis()
    .then(({data}) => dispatch({ type: 'SET_COMPARIS', payload: data }))
}
export const getQuadcopterById = (id) => (dispatch) =>{
  userService.getQuadcopterById(id)
    .then(({data}) => dispatch({ type: 'SET_SELECT', payload: data }))
}

export const comparis = (item) => ({
  type: 'comparis/success',
  payload: item,
})

export const education = (item) => ({
  type: 'education/success',
  payload: item,
})

