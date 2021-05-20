import {Component} from "react";
import './Modal.css';
import {Link} from "react-router-dom";

export default class Modal extends Component {

    setButtons() {
        const {modal, modalHide} = this.props;

        if (modal.type === 'error' || modal.type === 'success') {
            return (
                <div className="modal-buttons">
                    <Link to={modal.link}>
                        <button
                            onClick={() => modalHide()}
                        >
                            OK
                        </button>
                    </Link>
                </div>
            );
        } else {
            return (
                <div className="modal-buttons">
                    <Link to={modal.link}>
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
                    </Link>
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
                <div className={`modal ${ isHide ? 'hide' : 'show' } ${modalType}`}>
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