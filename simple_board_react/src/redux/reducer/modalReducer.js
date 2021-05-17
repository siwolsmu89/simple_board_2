import {MODAL_HIDE, MODAL_SHOW} from "../action/actions";

export default function modal(state, action) {
    const {modal} = state;

    switch (action.type) {
        case MODAL_SHOW:
            return {...action.modal, isHide:false}
        case MODAL_HIDE:
            return {isHide: true}
        default:
            return modal;
    }
}