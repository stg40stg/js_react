import React from "react";
import ChatList from "./chatList.jsx";
import CurrentChat from "./currentChat.jsx";
import Header from "./header.jsx";
import PropTypes from "prop-types";
import answers from "./answers.js";
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

    componentDidUpdate(prevProps, prevState, undefined) {
        let chat = this.props.chats[this.props.chatId - 1];
        if (chat.messages.length > 0) {
            let prevChat = prevProps.chats[this.props.chatId -1];
            if (chat.messages.length > prevChat.messages.length) {
                let lastMessage = chat.messages[chat.messages.length - 1];
                if (lastMessage.author === 'Me') {
                    setTimeout(() =>
                            this.props.addMessage(
                                answers[Math.floor(Math.random() * Math.floor(answers.length))],
                                'Bot',
                                this.props.chatId - 1)
                        , 1000);
                }
            }
        }
    }

    render() {
        return (
            <div className="Layout">
                <Header/>
                <div className="Layout-wrap">
                    <ChatList/>
                    <CurrentChat chat = {this.props.chats[this.props.chatId - 1]}/>
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







