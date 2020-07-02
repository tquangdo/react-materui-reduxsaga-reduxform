import * as actTypes from '../constants/ActionTypes'

const stateBanDau = {
    hienModal: false,
    title: '',
    component: null,
}

const reducerModal = (state = stateBanDau, action) => {
    switch (action.type) {
        case actTypes.HIEN_MODAL:
            return {
                ...state,
                hienModal: true,
            }
        case actTypes.AN_MODAL:
            return {
                hienModal: false,
                title: '',
                component: null,
            }
        case actTypes.DOI_MODAL_TITLE:
            const { title } = action.payload
            return {
                ...state,
                title,
            }
        case actTypes.DOI_MODAL_NOIDUNG:
            const { component } = action.payload
            return {
                ...state,
                component,
            }
        default:
            return state
    }
}

export default reducerModal