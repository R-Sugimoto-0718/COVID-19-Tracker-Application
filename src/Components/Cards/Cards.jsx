import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup'
import styles from './Cards.module.css'
import cx from 'classnames'

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate}}) => {
  if (!confirmed) {
    return 'Loading...'
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>感染者</Typography>
            <Typography variant="h5">
              <CountUp 
                start={0}
                end={confirmed.value}
                duration={4}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">感染者数</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>回復</Typography>
            <Typography variant="h5">
              <CountUp 
                start={0}
                end={recovered.value}
                duration={4}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">回復者数</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>死者</Typography>
            <Typography variant="h5">
              <CountUp 
                start={0}
                end={deaths.value}
                duration={4}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">死亡者数</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards;