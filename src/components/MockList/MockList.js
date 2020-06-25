import { Box, Grid, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import TaskItem from '../TaskItem/TaskItem'
import mocklistStyles from './MockListStyles'

class MockList extends Component {
  render() {
    const { taskLoc, status, chiso } = this.props
    return (
      <Grid item md={4} xs={12} key={chiso}>
        <Box mt={3} mb={3}>
          {/* Hiện header: "SẴN SÀNG", "ĐANG LÀM"... */}
          <u><b><i>{status.label}</i></b></u>
        </Box>
        <div>
          {
            taskLoc.map(mock => {
              return (
                <TaskItem
                  key={chiso}
                  mock={mock}
                  chiso={chiso}
                ></TaskItem>
              )
            })
          }
        </div>
      </Grid>
    )
  }
}
MockList.propTypes = {
  taskLoc: PropTypes.array,
  status: PropTypes.object,
  chiso: PropTypes.number,
}

export default withStyles(mocklistStyles)(MockList)