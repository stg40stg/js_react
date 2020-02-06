import React from "react";
import ChatList from "./chatList.jsx";
import CurrentChat from "./currentChat.jsx";
import Header from "./header.jsx";
import greeting from "./greeting.js";
import Chat from "./models/Chat.js";
import Message from "./models/Message.js";
import PropTypes from "prop-types";


export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    };

    static defaultProps = {
        chatId: 1,
    };

    state = {
        chats: [
            new Chat(1, 'Чат 1', [new Message(1, 'bot Alex', greeting[Math.floor(Math.random() * Math.floor(greeting.length))])]),
            new Chat(2, 'Чат 2', [new Message(2, 'bot Max', greeting[Math.floor(Math.random() * Math.floor(greeting.length))])]),
            new Chat(3, 'Чат 3', [new Message(3, 'bot Michael', greeting[Math.floor(Math.random() * Math.floor(greeting.length))])])
        ]
    };

    addChat = (title) => {
        let chats = [...this.state.chats];
        let newChat =  new Chat(chats.length + 1, title);
        chats.push(newChat);

        this.setState({
            chats: chats
        })
    };

    render() {
        return (
            <div className="Layout">
                <div className="Layout-wrap">
                    <ChatList
                        chats={ this.state.chats }
                        addChat={ this.addChat }
                    />
                    <CurrentChat chat = {this.state.chats[this.props.chatId - 1]} addMessage={(message) => {console.log(message);}}/>
                </div>
            </div>
        );
    }
}






