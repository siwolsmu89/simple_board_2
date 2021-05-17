import {Component} from "react";
import './Modal.css';

export default class Modal extends Component {
    render() {
        const { isHide, dialog, confirmFunction, modalHide } = this.props;

        return (
            <div className={`modal ${ isHide ? 'hide' : 'show' }`}>
                <div className="modal-icon-box">
                </div>
                <div className="modal-body">
                    <div>
                        {dialog}
                    </div>
                </div>
                <div className="modal-buttons">
                    <button
                        onClick={() => confirmFunction()}
                    >
                        Confirm
                    </button>
                    <button
                        onClick={() => modalHide()}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        );
    }
}