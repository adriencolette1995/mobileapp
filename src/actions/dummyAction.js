import { SET_TEXT } from '../types/types'

export const dummyAction = (data) => {
    return {
        type: SET_TEXT,
        payload: {
            data
        }
    }
}
