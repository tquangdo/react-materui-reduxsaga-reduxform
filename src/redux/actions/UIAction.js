import * as actTypes from '../constants/ActionTypes'

export const showGlobalLoad = () => {
    return {
        type: actTypes.SHOW_GLOBAL_LOAD,
    }
}
export const hideGlobalLoad = () => {
    return {
        type: actTypes.HIDE_GLOBAL_LOAD,
    }
}