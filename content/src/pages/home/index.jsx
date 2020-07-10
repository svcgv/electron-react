import React from 'react'

import { useSelector } from 'react-redux'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 900
  }
})

export default function HomePage (props) {
  const classes = useStyles()
  const state = useSelector(state => state)
  console.log(state)
  return (
    <Paper elevation={3}>
      <div className={classes.root}>
        <Typography variant='h4' gutterBottom>
          为了更好的上班摸鱼，我利用上班时间做了这个工具
        </Typography>
        <Typography variant='h5' gutterBottom>
          也许目前并不完美，也许将来也不会完美。。。
        </Typography>
        <Typography variant='h6' gutterBottom>
          管他呢，用就完事儿！
        </Typography>
      </div>
    </Paper>

  )
}
