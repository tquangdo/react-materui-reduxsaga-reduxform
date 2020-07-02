const validate = values => {
    const err = {}
    const { title } = values
    if (!title) {
        err.title = 'Required'
    } else if (title.length < 2) {
        err.title = 'Must be 2 characters or more'
    }
    return err
}

export default validate