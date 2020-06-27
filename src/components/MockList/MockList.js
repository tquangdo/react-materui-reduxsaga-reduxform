import { Box, Grid, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import TaskItem from '../TaskItem/TaskItem'
import mocklistStyles from './MockListStyles'

class MockList extends Component {
  render() {
    const { taskLoc, status } = this.props
    return (
      <Grid item md={4} xs={12}
        key={status.value} //trong Grid: CHƯA LÀM (0), ĐANG LÀM (1)...
      >
        <Box mt={3} mb={3}>
          {/* Hiện header: "SẴN SÀNG", "ĐANG LÀM"... */}
          <u><b><i>{status.label}</i></b></u>
        </Box>
        <div>
          {
            taskLoc.map(mock => {
              return (
                <TaskItem
                  key={mock.id} // trong TaskItem: autoincrement id
                  mock={mock}
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
}

export default withStyles(mocklistStyles)(MockList)