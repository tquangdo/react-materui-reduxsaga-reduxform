import React from 'react'
import { TextField, FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import PropTypes from 'prop-types'

export const reduxFTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
}) => (
        <TextField
            label={label}
            placeholder={label}
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...custom}
        />
    )
reduxFTextField.propTypes = {
    label: PropTypes.string,
    input: PropTypes.object,
    meta: PropTypes.object,
}

export const reduxFRadio = ({ input, ...rest }) => (
    <FormControl>
        <RadioGroup {...input} {...rest}>
            <FormControlLabel value="Việc nhà" control={<Radio />} label="Việc nhà" />
            <FormControlLabel value="Công việc" control={<Radio />} label="Công việc" />
        </RadioGroup>
    </FormControl>
)
reduxFRadio.propTypes = {
    input: PropTypes.object,
}
