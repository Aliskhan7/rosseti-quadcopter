import React, { useState, useHistory } from 'react'
// import loginStyle from '../static/css/loginStyle.css'
import logo from '../assets/img/logo.png'
import banner from '../assets/img/banner.png'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Alert } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import { NavLink, Link, useNavigate, Navigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux';
// import { startLogin } from '../redux/actions';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux'
import { startLogin } from '../redux/actions'
import { login } from '../redux/actions/auth'


const useStyles = makeStyles((theme) => ({
  modalInput: {
    width: '100%',
    marginBottom: '50px'
  },
  paper: {
    marginTop: theme.spacing(7),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    margin: theme.spacing(0, 0, 2),
  },
}));
function Login(props){
  const classes = useStyles();

  const dispatch = useDispatch();

  const error = useSelector(({message}) => message.message);
  const loading = useSelector((state) => state.auth.loadingLogin);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    return setShowPassword(!showPassword);
  };

  const { isLoggedIn } = useSelector(state => state.auth)


  if(isLoggedIn){
    return <Navigate to='/'/>
  }

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return(
    <div className='containerLogin'>
      <div className='headerLogin'>
      <div className='contentLogin'>
        <div className='banner'>
          <img className='banner-img' src={banner} alt='banner' />
        </div>
        <div className='login-form'>

          <Box>
            <Container component="main" className={classes.modalAuth} maxWidth="xs">
              <img src={logo} alt="" className='nav-logo'/>
              <p className='form-title'>Войдите в свой аккаунт</p>
              <Box className={classes.paper}>
                <form className={classes.form} noValidate>
                  <TextField
                    className={classes.modalInput}
                    variant="outlined"
                    margin="normal"
                    id="email"
                    label="Логин"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <FormControl
                    variant="outlined"
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Пароль
                    </InputLabel>
                    <OutlinedInput
                      className={classes.modalInput}
                      label="Password"
                      autoFocus
                      id="outlined-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleShowPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  {error && <Alert severity="error">Неверный логин или пароль</Alert>}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className='logBtn'
                    onClick={handleLogin}
                    disabled={loading}
                  >
                    Войти
                  </Button>
                </form>
              </Box>
            </Container>
          </Box>
        </div>
      </div>
    </div>
    </div>
  )
}


export default Login;