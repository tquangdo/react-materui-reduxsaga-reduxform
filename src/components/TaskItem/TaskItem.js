import { Card, CardActions, CardContent, Fab, Grid, Icon, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import taskItemStyles from './TaskItemStyles'

class TaskItem extends Component {
  render() {
    const { classes, mock, hamOnEdit, hamOnDelete } = this.props
    return (
      <Card key={mock.id} className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              {/* Hiện title: "Rửa chén"... */}
              <h2>{mock.title} </h2>
            </Grid>
            {/* Hiện type */}
            <Grid item md={4}>{mock.type}</Grid>
          </Grid>
          {/* Hiện description */}
          <p>{mock.description} </p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab color="primary" aria-label="Edit" size="small"
            onClick={hamOnEdit}
          >
            <Icon fontSize="small">edit_icon</Icon>
          </Fab>
          <Fab color="primary" aria-label="Delete" size="small"
            onClick={hamOnDelete}
          >
            <Icon fontSize="small">delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>
    )
  }
}
TaskItem.propTypes = {
  classes: PropTypes.object,
  mock: PropTypes.object,
  hamOnEdit: PropTypes.func,
  hamOnDelete: PropTypes.func,
}

export default withStyles(taskItemStyles)(TaskItem)