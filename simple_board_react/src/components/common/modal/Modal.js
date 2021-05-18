import {Component} from "react";
import './Modal.css';

export default class Modal extends Component {

    setButtons() {
        const {modal, modalHide} = this.props;

        if (modal.type === 'error') {
            return (
                <div className="modal-buttons">
                    <button
                        onClick={() => modalHide()}
                    >
                        OK
                    </button>
                </div>
            );
        } else {
            return (
                <div className="modal-buttons">
                    <button
                        onClick={() => {
                            if (modal.confirmFunction) {
                                modal.confirmFunction();
                            }
                            modalHide();
                        }}
                    >
                        Confirm
                    </button>
                    <button
                        onClick={() => modalHide()}
                    >
                        Cancel
                    </button>
                </div>
            );
        }

    }

    render() {
        const {modal} = this.props;
        const {isHide, dialog} = modal;

        const modalType = modal.type ?? 'basic';
        const buttons = this.setButtons();

        return (
            <div className={`modal-outer ${ isHide ? 'hide' : 'show' }`}>
                <div className={`modal ${ isHide ? 'hide' : 'show' } ${modalType==='error' ? 'error' : ''}`}>
                    <div className="modal-body">
                        <p>
                            {dialog}
                        </p>
                    </div>
                    {buttons}
                </div>
            </div>
        );
    }
}