import React from "react";
import {addMessageActionCreator, updateNewMessagesActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessagesText: (text) => {
            dispatch(updateNewMessagesActionCreator(text))
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer