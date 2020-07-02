import * as actTypes from '../constants/ActionTypes'

export const hienModal = () => {
    return {
        type: actTypes.HIEN_MODAL,
    }
}
export const anModal = () => {
    return {
        type: actTypes.AN_MODAL,
    }
}
export const doiModalTitle = title => {
    return {
        type: actTypes.DOI_MODAL_TITLE,
        payload: { title, }
    }
}
export const doiModalND = component => {
    return {
        type: actTypes.DOI_MODAL_NOIDUNG,
        payload: { component }
    }
}
