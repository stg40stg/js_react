import React from "react";
import ChatList from "./chatList.jsx";
import CurrentChat from "./currentChat.jsx";
import Header from "./header.jsx";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {addMessage} from "./actions/messageAction.js";


class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    };

    static defaultProps = {
        chatId: 1,
    };

    findChatById(id) {
        for (let chat of this.props.chats){
            if (chat.id === id)
                return chat;
        }
        return undefined;
    }

    render() {
        return (
            <div className="Layout">
                <Header/>
                <div className="Layout-wrap">
                    <ChatList className="blink"/>
                    <CurrentChat chat = {this.findChatById(this.props.chatId)}/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);







