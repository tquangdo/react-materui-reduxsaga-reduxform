const validate = values => {
    const err = {}
    const { title } = values
    if (!title) {
        err.title = 'Required'
    } else if (title.length < 2) {
        err.title = 'Must be 2 characters or more'
    }
    if (!values.email) {
        err.email = 'Email không được bỏ trống';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        err.email = 'Email không hợp lệ';
    }
    if (!values.password) {
        err.password = 'Mật khẩu không được bỏ trống';
    } else if (values.password.trim().length < 5) {
        err.password = 'Mật khẩu phải từ 5 ký tự trở lên';
    }
    return err
}

export default validate