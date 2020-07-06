import React from 'react'
import { TextField, FormControl, RadioGroup, FormControlLabel, Radio, FormHelperText, InputLabel, Select } from '@material-ui/core'
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

const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
        return
    } else {
        return <FormHelperText>{touched && error}</FormHelperText>
    }
}

export const reduxFSelectField = ({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
}) => (
        <FormControl error={touched && error}>
            <InputLabel htmlFor="color-native-simple">{label}</InputLabel>
            <Select
                native
                {...input}
                {...custom}
                inputProps={{
                    name: input.name,
                    id: 'color-native-simple'
                }}
                value={input.value}
            >
                {children}
            </Select>
            {renderFromHelper({ touched, error })}
        </FormControl>
    )
reduxFSelectField.propTypes = {
    label: PropTypes.string,
    input: PropTypes.object,
    meta: PropTypes.object,
    children: PropTypes.array,
}
