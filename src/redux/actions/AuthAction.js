import * as actTypes from '../constants/ActionTypes'

export const dangki = (email, pw) => ({
    type: actTypes.DANGKI,
    payload: {
        email,
        pw
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
        email,
        pw,
    }
});

export const dangnhapOK = data => ({
    type: actTypes.DANGNHAP_OK,
    payload: {
        data
    }
});

export const dangnhapNG = err => ({
    type: actTypes.DANGNHAP_NG,
    payload: {
        err
    }
});


