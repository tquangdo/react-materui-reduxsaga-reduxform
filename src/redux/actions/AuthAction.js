import * as actTypes from '../constants/ActionTypes'

export const dangki = (fullname, email, pw) => ({
    type: actTypes.DANGKI,
    payload: {
        fullname, email, pw
    }
});

export const dangkiOK = data => ({
    type: actTypes.DANGKI_OK,
    payload: {
        data
    }
});

export const dangkiNG = err => ({
    type: actTypes.DANGKI_NG,
    payload: {
        err
    }
});

export const dangnhap = (email, pw) => ({
    type: actTypes.DANGNHAP,
    payload: {
        email, pw
    }
});

export const dangnhapOK = (data, msg) => ({
    type: actTypes.DANGNHAP_OK,
    payload: {
        data
    },
    msg: msg,
});

export const dangnhapNG = err => ({
    type: actTypes.DANGNHAP_NG,
    payload: {
        err
    }
});


