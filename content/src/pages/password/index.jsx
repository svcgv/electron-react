import React, { useState } from 'react'
import { getPassword } from '../../utils/password'
import { makeStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import Fab from '@material-ui/core/Fab'
import NavigationIcon from '@material-ui/icons/Navigation'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import clsx from 'clsx'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
function Alert (props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}))

export default function Password () {
  const [open, setOpen] = React.useState(false)
  const classes = useStyles()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false
  })
  const [values2, setValues2] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false
  })
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleClickShowPassword2 = () => {
    setValues2({ ...values2, showPassword: !values2.showPassword })
  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleChange2 = (prop) => (event) => {
    setValues2({ ...values, [prop]: event.target.value })
  }

  const [showFinalPassword, changeShowFinalPassword] = useState(false)
  const [finalPassword, changeFinalPassword] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <FormControl className={clsx(classes.margin, classes.textField)} variant='outlined'>
        <InputLabel htmlFor='outlined-adornment-password'>通用密钥</InputLabel>
        <OutlinedInput
          id='outlined-adornment-password'
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
      <FormControl className={clsx(classes.margin, classes.textField)} variant='outlined'>
        <InputLabel htmlFor='outlined-adornment-password'>目标特征码</InputLabel>
        <OutlinedInput
          id='outlined-adornment-password'
          type={values2.showPassword ? 'text' : 'password'}
          value={values2.password}
          onChange={handleChange2('password')}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword2}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {values2.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
      <Fab
        variant='extended'
        size='medium'
        color='primary'
        aria-label='add'
        className={classes.margin}
        onClick={() => {
          const finalPassword = getPassword(values.password, values2.password)
          changeFinalPassword(finalPassword)
          changeShowFinalPassword(true)
        }}
      >
        <NavigationIcon className={classes.extendedIcon} />
        获取最终密码
      </Fab>

      {showFinalPassword && (
        <>
          <TextField
            InputProps={{
              readOnly: true
            }}

            id='filled-required'
            label='最终密码'
            value={finalPassword}
            variant='filled'
          />
          <Fab
            variant='extended'
            size='medium'
            color='primary'
            aria-label='add'
            className={classes.margin}
            onClick={() => {
              const dom = document.getElementById('filled-required')
              dom.select()
              document.execCommand('copy')
              setOpen(true)
            }}
          >
            <NavigationIcon className={classes.extendedIcon} />
            复制
          </Fab>
        </>)}
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='success'>
          复制成功!
        </Alert>
      </Snackbar>
    </div>
  )
}
